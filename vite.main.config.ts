import { defineConfig } from "vite";

export default defineConfig((args) => {
  return {
    define: {
      __ENV__: `'${args.mode}'`,
    },
  };
});
