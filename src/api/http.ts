import axios from 'axios';
import router from "@/router";
//import {useAuthStore} from '@/store/useAuthStore.ts';
import {config} from '@/config';

const http = axios.create({
    baseURL: import.meta.env.VITE_API_BASE_URL,
    timeout: config.http.timeout || 1000,
    headers: {
        'Content-Type': 'application/json',
        ... config.http.headers,
    }
});

http.interceptors.request.use(config => {
    /*
    const authStore = useAuthStore()
    if (authStore.token) {
        config.headers.Authorization = `Bearer ${authStore.token}`
    }*/
    return config
},   (error) => {
    return Promise.reject(error)
});

http.interceptors.response.use(
    (response) => response,
    (error) => {

        if (error.response && error.response.status === 401) {
            router.push(import.meta.env.VITE_API_LOIGIN || '/login' );
        }

        return Promise.reject(error);
    }
);


export default http;