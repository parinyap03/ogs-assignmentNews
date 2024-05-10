import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import path from "path";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      "@components": path.resolve(__dirname, "src/components"),
      "@assets": path.resolve(__dirname, "src/assets"),
      "@data": path.resolve(__dirname, "src/data"),
      "@function": path.resolve(__dirname, "src/function"),
      "@uicourse": path.resolve(__dirname, "src/uicourse"),
      "@tailwindcourse": path.resolve(__dirname, "src/tailwindcourse"),
      "@cssframewcourse": path.resolve(__dirname, "src/cssframewcourse"),
      "@store": path.resolve(__dirname, "src/store"),
      "@apicourse": path.resolve(__dirname, "src/apicourse"),
      "@assignmentpokemon": path.resolve(__dirname, "src/assignmentpokemon"),
      "@services": path.resolve(__dirname, "src/services"),
      "@workshoppokemon": path.resolve(__dirname, "src/workshoppokemon"),
      "@assignmentquiz": path.resolve(__dirname, "src/assignmentquiz"),
    },
    extensions: [".ts", ".tsx", ".js"],
  },
  server: {
    open: true,
    port: 3000,
    // proxy: {
    //   '/api': {
    //     target: 'http://localhost:5000',
    //     changeOrigin: true,
    //     rewrite: (path) => path.replace(/^\/api/, '')
    //   }
    // }
  },
});
