import { ViteDevServer } from "vite";
import { compileMainConfig } from "./config";

export const devPlugin = ({ nodeEnv = "dev" } = {}) => {
  return {
    name: "electron-dev-plugin",
    async configureServer(server: ViteDevServer) {
      const esbuild = await import("esbuild");
      esbuild.buildSync({
        ...compileMainConfig,
        define: {
          __ENV__: `"${nodeEnv}"`,
        },
      });

      server.httpServer?.once("listening", async () => {
        const { spawn } = await import("child_process");
        const addressInfo = server.httpServer?.address();

        if (typeof addressInfo !== "string") {
          const address = addressInfo?.address.includes("::")
            ? "localhost"
            : addressInfo?.address;

          const httpAddress = `http://${address}:${addressInfo?.port || 80}`;

          const electronProcess = spawn(
            (await import("electron")).default.toString(),
            ["./dist/main.js", httpAddress],
            {
              cwd: process.cwd(),
              stdio: "inherit",
            },
          );

          electronProcess.on("close", () => {
            server.close();
            process.exit();
          });
        }
      });
    },
  };
};
