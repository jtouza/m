/// <reference types="vitest" />
/// <reference types="vite/client" />

import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import path from "path";


// https://vitejs.dev/config/
export default defineConfig({
    plugins: [
        vue(),
    ],
    envDir: './src/',
    resolve: {
        alias: {
            '@': path.resolve(__dirname, 'src')
        },
    },
    test: {
        globals: true,
        environment: 'jsdom',
        exclude: [
            'node_modules'
        ]
    }
})