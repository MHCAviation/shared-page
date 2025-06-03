import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import dts from "vite-plugin-dts";

export default defineConfig({
  plugins: [
    react(),
    dts({
      entryRoot: "src",
      outDir: "dist/types",
      insertTypesEntry: true,
    }),
  ],
  server: {
    host: "0.0.0.0",
    port: 5173,
    strictPort: true,
    hmr: {
      host: "0.0.0.0",
      port: 5173,
      clientPort: 5173,
    },
    watch: {
      usePolling: true,
    },
  },
  css: {
    modules: {
      localsConvention: "camelCase",
      generateScopedName: "[local]_[hash:base64:5]",
    },
  },
  build: {
    lib: {
      entry: "src/index.ts",
      name: "SharedPages",
      fileName: (format) => `index.${format}.js`,
    },
    rollupOptions: {
      external: ["react", "react-dom"],
      output: {
        globals: {
          react: "React",
          "react-dom": "ReactDOM",
        },
        assetFileNames: (assetInfo) => {
          // When cssCodeSplit is false, Vite emits exactly one CSS file named "style.css"
          if (assetInfo.name && assetInfo.name.endsWith(".css")) {
            // keep it as “style.css”
            return "style.css";
          }
          return "[name][extname]";
        },
      },
    },
    // ← bundle all CSS into a single style.css instead of splitting
    cssCodeSplit: false,
    sourcemap: true,
    outDir: "dist",
    cssMinify: true,
    assetsInlineLimit: 0,
  },
});
