/// <reference types="vite/client" />

interface ImportMetaEnv {
  readonly HOST_URL: string;
}

interface ImportMeta {
  readonly env: ImportMetaEnv;
}
