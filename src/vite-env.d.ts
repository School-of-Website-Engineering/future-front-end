/// <reference types="vite/client" />
export interface ImportMetaEnv {
    readonly VITE_APP_TITLE: string;
    readonly VITE_APP_API_BASE_URL: string;
    readonly VUE_APP_BASE_URL: string;
    readonly VITE_BUILD_SOURCEMAP: string;
    readonly VITE_BUILD_DROP_CONSOLE: string;
    readonly VITE_PUBLIC_PATH: string;
    readonly VITE_BACKEND_API: string;
}

export interface ImportMeta {
    readonly env: ImportMetaEnv;
}
