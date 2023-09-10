import { defineConfig } from "vite";
import { qwikVite } from "@builder.io/qwik/optimizer";
import { qwikCity } from "@builder.io/qwik-city/vite";
import UnoCss from 'unocss/vite';
import tsconfigPaths from "vite-tsconfig-paths";
import { vitePluginSocketIO } from './vite/plugin-socket-io';

export default defineConfig(() => {
  return {
    plugins: [UnoCss(), qwikCity(), qwikVite(), tsconfigPaths(), vitePluginSocketIO()],
    preview: {
      headers: {
        "Cache-Control": "public, max-age=600",
      },
    },
  };
});
