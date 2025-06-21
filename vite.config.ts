import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";
import path from "node:path"; // use `node:` prefix for ESM compatibility
import { componentTagger } from "lovable-tagger";
import { configDefaults } from "vitest/config";

export default defineConfig(({ mode }) => ({
  server: {
    host: "::",
    port: 8080,
  },
  base: '/SCM-Web-App/',
  plugins: [
    react(),
    mode === "development" && componentTagger(), // only run in dev
  ].filter(Boolean),
  resolve: {
    alias: {
      "@": path.resolve(".", "src"),
    },
  },
  test: {
    globals: true,
    environment: "jsdom",
    setupFiles: "./vitest.setup.ts",
  },
}));
