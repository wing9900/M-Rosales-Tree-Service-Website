import Layout from "@/components/layout/Layout";
import { Link } from "react-router-dom";
import { SERVICE_AREAS_CONTENT } from "@/lib/serviceAreasContent";

const mainPages = [
  { label: "Home", href: "/" },
  { label: "About Us", href: "/about" },
  { label: "Contact", href: "/contact" },
  { label: "Gallery", href: "/gallery" },
  { label: "Blog", href: "/blog" },
  { label: "Privacy Policy", href: "/privacy" },
];

const servicePages = [
  { label: "Tree Trimming & Pruning", href: "/services/tree-trimming" },
  { label: "Tree Removal", href: "/services/tree-removal" },
  { label: "Stump Grinding", href: "/services/stump-grinding" },
  { label: "Emergency Storm Response", href: "/services/emergency" },
  { label: "Land & Lot Clearing", href: "/services/land-clearing" },
  { label: "Health and Disease Management", href: "/services/health-management" },
];

const Sitemap = () => {
  const serviceAreas = Object.entries(SERVICE_AREAS_CONTENT).map(([slug, content]) => ({
    label: content.city,
    href: `/areas/${slug}`,
  }));

  return (
    <Layout>
      <section className="section-padding">
        <div className="container-custom max-w-3xl">
          <h1 className="text-section-title mb-4">Sitemap</h1>
          <p className="text-muted-foreground mb-10">
            A complete list of pages on this website.
          </p>

          <div className="space-y-10">
            <div>
              <h2 className="text-xl font-semibold mb-4">Main Pages</h2>
              <ul className="space-y-2">
                {mainPages.map((page) => (
                  <li key={page.href}>
                    <Link to={page.href} className="text-primary hover:underline">
                      {page.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <h2 className="text-xl font-semibold mb-4">Services</h2>
              <ul className="space-y-2">
                {servicePages.map((page) => (
                  <li key={page.href}>
                    <Link to={page.href} className="text-primary hover:underline">
                      {page.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <h2 className="text-xl font-semibold mb-4">Service Areas</h2>
              <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                {serviceAreas.map((area) => (
                  <li key={area.href}>
                    <Link to={area.href} className="text-primary hover:underline">
                      {area.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Sitemap;
