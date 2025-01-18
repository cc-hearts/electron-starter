import { type Platform } from "esbuild";

// 编译主线程配置
export const compileMainConfig = {
  entryPoints: ["./main/index.ts"],
  bundle: true,
  platform: "node" as Platform,
  outfile: "./dist/main.js",
  external: ["electron"],
};
