import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import commonjs from "vite-plugin-commonjs";

export default defineConfig(() => {
  return {
    plugins: [
      react(),
      commonjs({
        filter(id) {
          if (["libs/ckeditor5/build/ckeditor.js"].includes(id)) {
            return true;
          }
        },
      }),
    ],
    base: "/",
    optimizeDeps: {
      include: ["ckeditor5-custom-build"],
    },
    build: {
      commonjsOptions: { exclude: ["ckeditor5-custom-build"] },
    },
  };
});
