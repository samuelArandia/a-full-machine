import { defineConfig } from "astro/config";
import tailwind from "@astrojs/tailwind";
import sitemap from "@astrojs/sitemap";
import cloudflare from '@astrojs/cloudflare';

export default defineConfig({
  vite: {
    ssr: {
      external: ['broken-npm-package'],
    }
  },
  image: {
    domains: ["images.unsplash.com"],
    service: {
      entrypoint: 'astro/assets/services/sharp',
      config: {
        limitInputPixels: false,
     },
    },
  },
  i18n: {
    defaultLocale: "es",
    locales: ["en", "fr", "es"], 
    fallback: {
      fr: "en"
    },
    routing: {
      prefixDefaultLocale: true,
    }
  },
  prefetch: true,
  integrations: [tailwind(), sitemap()],
  experimental: {
    clientPrerender: true,
    // directRenderScript: true
  },
  output: 'server',
  adapter: cloudflare({
     imageService: 'cloudflare'
  }),
});