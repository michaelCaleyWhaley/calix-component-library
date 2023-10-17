import path from "path";
import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import dts from "vite-plugin-dts";

// https://vitejs.dev/config/
export default defineConfig({
  build: {
    lib: {
      fileName: "index",
      // name: "index",
      entry: path.resolve(__dirname, "src/index.ts"),
      formats: ["es"],
    },
  },
  plugins: [react(), dts()],
});
