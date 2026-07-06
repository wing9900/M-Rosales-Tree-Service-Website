import { defineConfig, loadEnv, type Plugin } from "vite";
import react from "@vitejs/plugin-react-swc";
import path from "path";
import { writeFileSync, readFileSync } from "fs";
import { ALL_PUBLIC_ROUTES } from "./src/lib/siteRoutes";

/** Writes sitemap.xml and robots.txt into dist/ when VITE_SITE_URL is set at build time. */
function sitemapPlugin(siteUrl: string): Plugin {
  return {
    name: "generate-sitemap",
    closeBundle() {
      const base = siteUrl.replace(/\/$/, "");
      const loc = (route: string) => (route === "/" ? `${base}/` : `${base}${route}`);

      const xml = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${ALL_PUBLIC_ROUTES.map((route) => `  <url><loc>${loc(route)}</loc><changefreq>monthly</changefreq></url>`).join("\n")}
</urlset>
`;

      const distDir = path.resolve(__dirname, "dist");
      writeFileSync(path.join(distDir, "sitemap.xml"), xml);

      const robotsPath = path.resolve(__dirname, "public/robots.txt");
      const robots = readFileSync(robotsPath, "utf-8").trim();
      const sitemapLine = `Sitemap: ${base}/sitemap.xml`;
      const robotsWithSitemap = robots.includes("Sitemap:")
        ? robots
        : `${robots}\n\n${sitemapLine}\n`;

      writeFileSync(path.join(distDir, "robots.txt"), robotsWithSitemap);
    },
  };
}

// https://vitejs.dev/config/
export default defineConfig(({ mode }) => {
  const env = loadEnv(mode, process.cwd(), "");
  const siteUrl = env.VITE_SITE_URL?.trim() ?? "";

  return {
    server: {
      host: true,
      port: 9080,
      strictPort: false,
      allowedHosts: true,
    },
    preview: {
      host: true,
      port: 9080,
    },
    plugins: [react(), ...(siteUrl ? [sitemapPlugin(siteUrl)] : [])],
    resolve: {
      alias: {
        "@": path.resolve(__dirname, "./src"),
      },
    },
    build: {
      rollupOptions: {
        output: {
          assetFileNames: (assetInfo) => {
            if (assetInfo.name?.endsWith(".css")) {
              return "assets/[name]-[hash][extname]";
            }
            if (/\.(png|jpe?g|svg|gif|webp|avif)$/.test(assetInfo.name || "")) {
              return "assets/images/[name]-[hash][extname]";
            }
            return "assets/[name]-[hash][extname]";
          },
          chunkFileNames: "assets/js/[name]-[hash].js",
          entryFileNames: "assets/js/[name]-[hash].js",
        },
      },
      assetsInlineLimit: 4096,
    },
    optimizeDeps: {
      include: ["react", "react-dom", "react-router-dom"],
    },
  };
});
