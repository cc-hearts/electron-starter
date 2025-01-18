import { defineConfig } from "vite";
import Pages from "vite-plugin-pages";
import vuePlugin from "@vitejs/plugin-vue";
import { devPlugin } from "./scripts/dev";

export default defineConfig({
  plugins: [
    Pages({
      dirs: "renderer/pages",
      extensions: ["vue"],
    }),
    vuePlugin(),
    devPlugin(),
  ],
});
