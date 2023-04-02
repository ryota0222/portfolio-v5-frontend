/// <reference types="astro/client" />

interface ImportMetaEnv {
  readonly SITE: string;
  readonly PUBLIC_API_ENDPOINT: string;
}

interface ImportMeta {
  readonly env: ImportMetaEnv;
}
