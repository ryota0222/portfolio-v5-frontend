/// <reference types="astro/client" />
/// <reference types="astro/client-image" />

interface ImportMetaEnv {
  readonly SITE: string;
  readonly PUBLIC_API_ENDPOINT: string;
}

interface ImportMeta {
  readonly env: ImportMetaEnv;
}
