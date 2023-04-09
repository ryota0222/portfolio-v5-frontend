

import image from "@astrojs/image";
import prefetch from "@astrojs/prefetch";
import react from "@astrojs/react";
import tailwind from "@astrojs/tailwind";
import AstroPWA from '@vite-pwa/astro'
// https://astro.build/config
import { defineConfig } from "astro/config";

// https://astro.build/config
export default defineConfig({
  site: "https://portfolio.ryotanny.com",
  integrations: [react(), image(), prefetch(), tailwind(), AstroPWA({
    manifestFilename: '/manifest/manifest.webmanifest'
  })]
});