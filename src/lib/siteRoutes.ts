import { SERVICE_AREAS_CONTENT } from "./serviceAreasContent";

/**
 * Canonical list of public routes for the /sitemap page and build-time sitemap.xml.
 * Keep in sync when adding or removing pages in App.tsx.
 */
export const STATIC_ROUTES = [
  "/",
  "/about",
  "/contact",
  "/blog",
  "/gallery",
  "/privacy",
  "/sitemap",
  "/services/tree-trimming",
  "/services/tree-removal",
  "/services/stump-grinding",
  "/services/emergency",
  "/services/land-clearing",
  "/services/health-management",
] as const;

export const SERVICE_AREA_ROUTES = Object.keys(SERVICE_AREAS_CONTENT).map(
  (slug) => `/areas/${slug}`,
);

export const ALL_PUBLIC_ROUTES = [...STATIC_ROUTES, ...SERVICE_AREA_ROUTES];
