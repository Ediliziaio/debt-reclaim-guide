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
        // Keep manual chunks minimal — splitting React/Radix/etc. into
        // separate chunks causes runtime circular-import errors
        // (React undefined → createContext crash). Let Vite handle the
        // common splits automatically.
        //
        // recharts/d3 (~500 kB) are intentionally NOT carved into a manual
        // vendor chunk: doing so made Vite emit a <link rel="modulepreload">
        // for it in index.html, eagerly downloading it on the homepage.
        // Left to Vite, recharts folds into the lazy TDStatsChart chunk and
        // is fetched only when the chart is actually rendered.
      },
    },
  },
}));
