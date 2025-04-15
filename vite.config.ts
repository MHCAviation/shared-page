import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import dts from "vite-plugin-dts";
import replace from "@rollup/plugin-replace";

export default defineConfig({
  plugins: [
    react({
      // Ensure JSX is processed with the automatic runtime
      jsxRuntime: 'automatic',
    }),
    dts({
      entryRoot: 'src',
      outDir: 'dist/types',
      insertTypesEntry: true,
    }),
    // Replace development environment variables with production ones.
    replace({
      'process.env.NODE_ENV': JSON.stringify('production'),
      preventAssignment: true,
    }),
  ],
  build: {
    lib: {
      entry: "src/index.ts",
      name: "NotFound",
      fileName: (format) => `index.${format}.js`,
    },
    rollupOptions: {
      external: ["react", "react-dom"],
      output: {
        // Disable source maps to prevent accidental leakage of dev code
        sourcemap: false,
      },
    },
    outDir: "dist",
    // Use minification to help remove dead code
    minify: "esbuild",
  },
});
