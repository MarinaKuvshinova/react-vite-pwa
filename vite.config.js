import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import { VitePWA } from "vite-plugin-pwa";

const manifestForPlugin = {
    workbox: {
        globPatterns: ["**/*"],
    },
    includeAssets: ["**/*"],
    registerType: "prompt",
    includeAssests: ["favicon.ico", "apple-touc-icon.png", "masked-icon.svg"],
    manifest: {
        name: "Create React App Sample",
        short_name: "React App",
        theme_color: "#000000",
        background_color: "#ffffff",
        display: "standalone",
        scope: "/",
        start_url: "/",
        icons: [
            {
                src: "/ maskable.png",
                sizes: "196x196",
                type: "image/png",
                purpose: "any maskable",
            },
            {
                src: "/favicon.ico",
                sizes: "64x64 32x32 24x24 16x16",
                type: "image/x-icon",
            },
            {
                src: "/logo192.png",
                type: "image/png",
                sizes: "192x192",
            },
            {
                src: "/logo512.png",
                type: "image/png",
                sizes: "512x512",
            },
        ],
    },
};

// https://vitejs.dev/config/
export default defineConfig({
    plugins: [react(), VitePWA(manifestForPlugin)],
});

// VitePWA({ registerType: "autoUpdate" }
