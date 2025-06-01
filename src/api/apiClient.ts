import http from '@/api/http';
import {useNotificationStore} from '@/store/useNotificationStore';
import type {PaginatedResponse} from "@/types/api/PaginatedResponse.ts";
import type {BaseModel} from "@/types";

const notification = useNotificationStore();

export class ApiClient<TModel extends BaseModel<TApi>, TApi> {
    protected path: string;
    protected model?: (data: any) => TModel;

    constructor(
        path: string,
        model?: (data: any) => TModel,
    ) {
        this.path = path;
        this.model = model;
    }

    private serialize(input: TModel | TApi): Partial<TApi> | TApi {
        if (typeof (input as TModel).toApi === 'function') {
            return (input as TModel).toApi();
        }
        return input as TApi;
    }

    async fetch(params: Record<string, any> = {}, page: number = 1): Promise<PaginatedResponse<TModel>> {
        try {
            const response = await http.get(`/${this.path}`, {params: {...params, page}});
            return {
                ...response.data,
                data: this.model ? response.data.data.map(this.model) : response.data.data,
            };

        } catch (error) {
            this.handleError('fetch', error);
            throw error;
        }
    }

    async find(id: number | string): Promise<TModel> {
        try {
            const response = await http.get(`/${this.path}/${id}`);
            return this.model ? this.model(response.data.data) : response.data.data;
        } catch (error) {
            this.handleError('find', error);
            throw error;
        }
    }

    async create(data: TModel | TApi): Promise<TModel> {

        try {
            const response = await http.post(`/${this.path}`, this.serialize(data));
            return this.model ? this.model(response.data.data) : response.data.data;
        } catch (error) {
            this.handleError('create', error);
            throw error;
        }
    }

    async update(id: number | string, data: TModel | TApi): Promise<TModel> {
        try{
            const response = await http.put(`/${this.path}/${id}`, this.serialize(data));
            return this.model ? this.model(response.data.data ?? response.data) : (response.data.data ?? response.data);
        } catch (error) {
            this.handleError('update', error);
            throw error;
        }
    }

    async save(id: number | null, data: TModel | TApi): Promise<TModel> {
        return id ? this.update(id, data) : this.create(data);
    }

    async delete(id: number | string): Promise<void> {
        try {
            await http.delete(`/${this.path}/${id}`);
        } catch (error) {
            this.handleError('delete', error);
            throw error;
        }
    }

    protected handleError(action: string, error: unknown) {
        console.error(`Error ${action} ${this.path}:`, error);
        notification.notify('error', 'Oops!', `Error ${action} ${this.path}`);
    }
}
