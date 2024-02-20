import prefetch from "@astrojs/prefetch";
import react from "@astrojs/react";
import tailwind from "@astrojs/tailwind";
import AstroPWA from '@vite-pwa/astro'
// https://astro.build/config
import { defineConfig } from "astro/config";

// https://astro.build/config
export default defineConfig({
  site: "https://portfolio.site.ryotanny.com",
  integrations: [react(), prefetch(), tailwind(), AstroPWA({
    manifestFilename: './public/favicons/site.webmanifest',
    registerType: 'autoUpdate'
  })],
});