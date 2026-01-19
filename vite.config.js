import { defineConfig } from "vite";

export default defineConfig({
  root: "web",
  base: "./",                 // ключевое: относительные URL в собранном CSS/JS
  build: {
    outDir: "../dist/assets",
    emptyOutDir: false,
    rollupOptions: {
      input: {
        main: "web/main.js",
      },
      output: {
        entryFileNames: "main.js",
        assetFileNames: (assetInfo) => {
          if (assetInfo.name && assetInfo.name.endsWith(".css")) return "main.css";
          return "[name][extname]";
        },
      },
    },
  },
});
