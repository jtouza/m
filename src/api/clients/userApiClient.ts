import {ApiClient} from '@/api/apiClient';
import http from '@/api/http';

import type {User} from "@/types";
import {UserModel} from "@/models";

class UserApiClient extends ApiClient<UserModel, any> {
    constructor() {
        super('users', (data: User) => new UserModel(data));
    }

    async changePassword(userId: number, newPassword: string): Promise<void> {
        try {
            await http.post(`/${this.path}/${userId}/change-password`, { password: newPassword })
        } catch (error) {
            console.error(`Error changing password for user ID ${userId}:`, error)
            throw error
        }
    }
}

export const userApiClient:UserApiClient = new UserApiClient();