// vite.config.ts
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
          // This just controls how non‐CSS assets are named.
          if (assetInfo.name && assetInfo.name.endsWith(".css")) {
            // Vite will still emit each .module.css separately under its hashed name.
            return assetInfo.name;
          }
          return "[name][extname]";
        },
      },
    },
    // **Enable** CSS splitting so that each .module.css is emitted to dist/.
    cssCodeSplit: true,
    sourcemap: true,
    outDir: "dist",
    cssMinify: true,
    assetsInlineLimit: 0,
  },
});
