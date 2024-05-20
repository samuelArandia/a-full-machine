import { defineConfig } from "astro/config";
import tailwind from "@astrojs/tailwind";
import sitemap from "@astrojs/sitemap";
import cloudflare from '@astrojs/cloudflare';


// https://astro.build/config
export default defineConfig({
  // https://docs.astro.build/en/guides/images/#authorizing-remote-images
  // site: "https://samuelarandia.github.io",
  // base: "/machines/",
  output: 'server',
  adapter: cloudflare(),
  image: {
    domains: ["images.unsplash.com"],
    unoptimized: true
  },
  i18n: {
    defaultLocale: "es",
    locales: ["en", "fr", "es"],
    fallback: {
      fr: "en"
    },
    routing: {
      prefixDefaultLocale: false
    }
  },
  prefetch: true,
  integrations: [tailwind(), sitemap({
    i18n: {
      defaultLocale: "es",
      // All urls that don't contain `fr` after `https://screwfast.uk/` will be treated as default locale, i.e. `en`
      locales: {
        en: "en",
        // The `defaultLocale` value must present in `locales` keys
        fr: "fr",
        es: "es"
      }
    }
  })],
  // experimental: {
  //   clientPrerender: true,
  //   directRenderScript: true
  // },
  // adapter: vercel()
});