import {ApiClient} from '@/api/apiClient';

import type {Experience} from "@/types";
import {ExperienceModel} from "@/models";
import http from "@/api/http.ts";

class ExperienceApiClient extends ApiClient<ExperienceModel, any> {
    constructor() {
        super('experiencies', (data: Experience) => new ExperienceModel(data));
    }

    async latest(): Promise<ExperienceModel[]> {
        try {
            const response = await http.get(`/`, {  })

            return response.data.map(this.model);

        } catch (error) {
            this.handleError('lastest', error);
            throw error
        }
    }
}

export const experienceApiClient:ExperienceApiClient = new ExperienceApiClient();