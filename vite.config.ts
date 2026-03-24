import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";
import path from "path";
import { componentTagger } from "lovable-tagger";

// https://vitejs.dev/config/
export default defineConfig(({ mode }) => {
  const isDev = mode === "development";

  return {
    server: {
      host: true, // better than "::" for compatibility
      port: 8080,
      hmr: {
        overlay: false,
      },
    },

    plugins: [
      react(),
      isDev && componentTagger(),
    ].filter(Boolean),

    resolve: {
      alias: {
        "@": path.resolve(__dirname, "src"), // cleaned path
      },
    },
  };
});