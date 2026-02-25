import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import federation from "@originjs/vite-plugin-federation";
import path from "path";

export default defineConfig({
  plugins: [
    react(),
    federation({
      name: "remoteApp",          // Must be unique across all remotes
      filename: "remoteEntry.js", // Shell will load this file
      exposes: {
        // Key: the import path the shell uses  (e.g. import("remoteApp/App"))
        // Value: the local file to expose
        "./App": "./src/App.tsx",
      },
      shared: {
        react:            { requiredVersion: "^19.0.0" },
        "react-dom":      { requiredVersion: "^19.0.0" },
        "react-router-dom": { requiredVersion: "^7.0.0" },
      },
    }),
  ],

  resolve: {
    alias: {
      "~": path.resolve(__dirname, "./src"),
    },
  },

  build: {
    target: "esnext",
    minify: false,
  },
  
  server: {
    port: 5001,       // Each remote must use a different port
    cors: true,       // Required so the shell can fetch remoteEntry.js in dev
    host: true
  },
//  preview: {
//    port: 5002,
//    cors: true,
//  },
});