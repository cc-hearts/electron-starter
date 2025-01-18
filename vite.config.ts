import { defineConfig } from "vite";
import Pages from "vite-plugin-pages";
import vuePlugin from "@vitejs/plugin-vue";
import { devPlugin } from "./scripts/dev";

export default defineConfig((args) => {
  const IS_DEV = args.mode === "development";
  const IS_PROD = args.mode === "production";

  return {
    base: "./",
    define: {
      __IS_DEV__: IS_DEV,
      __IS_PROD__: IS_PROD,
    },
    plugins: [
      Pages({
        dirs: "renderer/pages",
        extensions: ["vue"],
      }),
      vuePlugin(),
      devPlugin({ nodeEnv: String(args.mode) }),
    ],
  };
});
