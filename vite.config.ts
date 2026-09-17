import { defineConfig } from "vite";
import vinext from "vinext";
import { nitro } from "nitro/vite";

export default defineConfig({
  plugins: [
    vinext(),
    nitro({
      preset: "cloudflare_module",
      output: {
        dir: "dist",
        serverDir: "dist/server",
        publicDir: "dist/client",
      },
    }),
  ],
});
