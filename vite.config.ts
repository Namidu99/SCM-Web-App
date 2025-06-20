import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";
import path from "path";
import { componentTagger } from "lovable-tagger";

// Added this import for Vitest config
import { configDefaults } from "vitest/config";

// https://vitejs.dev/config/
export default defineConfig(({ mode }) => ({
  server: {
    host: "::",
    port: 8080,
  },
  plugins: [
    react(),
    mode === "development" && componentTagger(),
  ].filter(Boolean),
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
  },
  // Vitest configuration added here
  test: {
    globals: true,          // Allows use of `test`, `expect` without importing
    environment: "jsdom",   // Enables testing DOM (React components)
    setupFiles: "./vitest.setup.ts",  // to import jest-dom matchers
  },
}));
