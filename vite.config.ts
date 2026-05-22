import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";
import path from "path";
import { componentTagger } from "lovable-tagger";

// https://vitejs.dev/config/
export default defineConfig(({ mode }) => ({
  server: {
    host: "::",
    port: Number(process.env.PORT) || 8080,
  },
  plugins: [react(), mode === "development" && componentTagger()].filter(Boolean),
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
  },
  build: {
    target: "es2019",
    cssCodeSplit: true,
    sourcemap: false,
    chunkSizeWarningLimit: 1000,
    reportCompressedSize: false,
    rollupOptions: {
      output: {
        manualChunks: (id) => {
          if (!id.includes("node_modules")) return undefined;
          // Heavy chart library — only used in a couple of pages
          if (id.includes("recharts") || id.includes("d3-")) return "vendor-charts";
          // Form / validation stack
          if (
            id.includes("react-hook-form") ||
            id.includes("@hookform") ||
            id.includes("zod")
          )
            return "vendor-forms";
          // Radix UI primitives (many small packages)
          if (id.includes("@radix-ui")) return "vendor-radix";
          // Icons can be sizable
          if (id.includes("lucide-react")) return "vendor-icons";
          // Routing
          if (id.includes("react-router")) return "vendor-router";
          // Data fetching / state
          if (id.includes("@tanstack")) return "vendor-query";
          // React core
          if (
            id.includes("/react/") ||
            id.includes("/react-dom/") ||
            id.includes("scheduler")
          )
            return "vendor-react";
          return "vendor";
        },
      },
    },
  },
}));
