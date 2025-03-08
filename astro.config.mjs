// @ts-check
import { defineConfig } from "astro/config";
import tailwindcss from "@tailwindcss/vite";
// https://astro.build/config
export default defineConfig({
  base: "./",
  build: {
    assetsPrefix: "./",
  },
  vite: {
    plugins: [tailwindcss()],
  },
  outDir: "dist/web",
  srcDir: "src/astro",
});
