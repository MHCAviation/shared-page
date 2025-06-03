import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import dts from "vite-plugin-dts";

export default defineConfig({
  plugins: [
    react(),
    dts({
      entryRoot: 'src',
      outDir: 'dist/types',
      insertTypesEntry: true,
    }),
  ],
  server: {
    host: '0.0.0.0', // Expose to all network interfaces
    port: 5173,
    strictPort: true,
    hmr: {
      host: '0.0.0.0',
      port: 5173
    },
  },
  css: {
    modules: {
      localsConvention: 'camelCase',
      generateScopedName: '[local]_[hash:base64:5]'
    }
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
          react: 'React',
          'react-dom': 'ReactDOM'
        },
        assetFileNames: (assetInfo) => {
          if (assetInfo.name && assetInfo.name.endsWith('.css')) {
            return 'style.css';
          }
          return '[name][extname]';
        }
      }
    },
    cssCodeSplit: false,
    sourcemap: true,
    outDir: "dist",
    cssMinify: true,
    assetsInlineLimit: 0,
  },
});
