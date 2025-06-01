/// <reference types="vite/client" />

/* eslint-disable */
declare module '*.vue' {
    import type { DefineComponent } from 'vue'
    const component: DefineComponent<{}, {}, any>
    export default component
}

/// <reference types="vue" />
/// <reference types="vite/client" />

// types for Vite env variables:
// (reference: https://vitejs.dev/guide/env-and-mode.html#intellisense-for-typescript)
interface ImportMetaEnv {
    readonly VITE_APP_CONFIG: string
    // more env variables...
}

interface ImportMeta {
    readonly env: ImportMetaEnv
}