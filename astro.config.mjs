import { defineConfig } from "astro/config";
import tailwind from "@astrojs/tailwind";
import icon from "astro-icon";

export default defineConfig({
  site: "https://washboardmurray.com",
  output: "static",
  integrations: [tailwind(), icon()],
  vite: {
    resolve: {
      alias: {
        "@": "/src",
      },
    },
  },
});
