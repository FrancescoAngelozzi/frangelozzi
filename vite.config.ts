import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";
import path from "path";
import { componentTagger } from "lovable-tagger";

// GitHub Pages project URL:
// https://FrancescoAngelozzi.github.io/frangelozzi/

export default defineConfig(({ mode }) => ({
  base: "/frangelozzi/",

  plugins: [
    react(),
    mode === "development" && componentTagger(),
  ].filter(Boolean),

  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
  },

  server: {
    host: "::",
    port: 8080,
    hmr: {
      overlay: false,
    },
  },

  build: {
    outDir: "dist",
    assetsDir: "assets",
  },
}));
