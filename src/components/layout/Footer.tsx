import { Link, useLocation } from "react-router-dom";
import { Phone, Mail, MapPin, Clock, Star, Shield, Award } from "lucide-react";
import { CompanyName } from "@/components/CompanyName";

const Footer = ({
  hideCTA = false
}: {
  hideCTA?: boolean;
}) => {
  const location = useLocation();

  const scrollToHashWithOffset = (hash: string) => {
    const el = document.getElementById(hash);
    if (!el) return;
    const stickyHeader = document.querySelector<HTMLElement>(".sticky-header");
    const topBar = document.getElementById("top-contact-bar");
    const headerOffset = (stickyHeader?.offsetHeight ?? 0) + (topBar?.offsetHeight ?? 0) + 8;
    const rect = el.getBoundingClientRect();
    const targetY = window.pageYOffset + rect.top - headerOffset;
    window.scrollTo({ top: Math.max(targetY, 0), behavior: "smooth" });
  };

  const handleLinkClick = (e: React.MouseEvent, href: string) => {
    const path = href.replace(/#.*$/, "");
    const hash = href.includes("#") ? href.split("#")[1] : null;
    const isSamePath = location.pathname === path || location.pathname === href;
    const isSameHash = hash ? window.location.hash === `#${hash}` : true;
    // Only prevent default when already on the same page+hash (re-click to scroll)
    if (isSamePath && isSameHash) {
      e.preventDefault();
      if (hash) {
        scrollToHashWithOffset(hash);
      } else {
        window.scrollTo({ top: 0, behavior: "smooth" });
      }
    }
  };

  const serviceLinks = [{
    name: "Tree Trimming & Pruning",
    href: "/services/tree-trimming"
  }, {
    name: "Tree Removal",
    href: "/services/tree-removal"
  }, {
    name: "Stump Grinding",
    href: "/services/stump-grinding"
  }, {
    name: "Emergency Storm Response",
    href: "/services/emergency"
  }, {
    name: "Land & Lot Clearing",
    href: "/services/land-clearing"
  }, {
    name: "Health and Disease Management",
    href: "/services/health-management"
  }];

  const serviceAreas = [{
    name: "Houston",
    href: "/areas/houston"
  }, {
    name: "Katy",
    href: "/areas/katy"
  }, {
    name: "Sugar Land",
    href: "/areas/sugar-land"
  }, {
    name: "Richmond",
    href: "/areas/richmond"
  }, {
    name: "Rosenberg",
    href: "/areas/rosenberg"
  }, {
    name: "Fulshear",
    href: "/areas/fulshear"
  }, {
    name: "Cypress",
    href: "/areas/cypress"
  }, {
    name: "Pasadena",
    href: "/areas/pasadena"
  }, {
    name: "Baytown",
    href: "/areas/baytown"
  }, {
    name: "Pearland",
    href: "/areas/pearland"
  }];

  const quickLinks = [{
    name: "About Us",
    href: "/about"
  }, {
    name: "Gallery",
    href: "/gallery"
  }, {
    name: "Reviews",
    href: "/#reviews"
  }, {
    name: "Blog",
    href: "/blog"
  }, {
    name: "Contact",
    href: "/contact"
  }, {
    name: "Get Quote",
    href: "/contact"
  }];

  return (
    <footer className="bg-primary text-primary-foreground">
      {/* Main Footer Content */}
      <div className="container-custom section-padding">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="lg:col-span-1">
            <div className="text-2xl font-bold mb-4"><CompanyName /></div>
            <p className="text-primary-foreground/80 mb-6">
              Professional tree services with over 27 years of experience. Licensed, insured, and dedicated to keeping your property safe and beautiful.
            </p>

            {/* Trust Badges */}
            <div className="flex flex-wrap gap-3 mb-6">
              <div className="flex items-center gap-2 text-sm">
                <Shield className="h-4 w-4" />
                <span>Licensed & Insured</span>
              </div>
              <div className="flex items-center gap-2 text-sm">
                <Award className="h-4 w-4" />
                <span>ISA Certified</span>
              </div>
              <div className="flex items-center gap-2 text-sm">
                <Star className="h-4 w-4" />
                <span>5-Star Rated</span>
              </div>
            </div>

            {/* Contact Info */}
            <div className="space-y-3">
              <div className="flex items-center gap-2">
                <Phone className="h-4 w-4" />
                <span>(123) 456-7890</span>
              </div>
              <div className="flex items-center gap-2">
                <Mail className="h-4 w-4" />
                <a href="mailto:{{EMAIL}}" className="hover:underline">
                  {"{{EMAIL}}"}
                </a>
              </div>
              <div className="flex items-center gap-2">
                <MapPin className="h-6 w-6" />
                <span>{"{{ADDRESS_LINE}}, {{CITY}}, {{STATE}} {{ZIP}}"}</span>
              </div>
              <div className="flex items-center gap-2">
                <Clock className="h-4 w-4" />
                <span>{"{{HOURS}}"}</span>
              </div>

              {/* Social Media Links */}
              <div className="mt-4 pt-4 border-t border-primary-foreground/20">
                <div className="text-sm font-semibold mb-3">Follow Us</div>
                <div className="flex gap-3">
                  {/* Facebook */}
                  <a href="{{FACEBOOK_URL}}" className="text-primary-foreground/80 hover:text-primary-foreground transition-colors" aria-label="Facebook">
                    <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
                    </svg>
                  </a>
                  {/* Instagram */}
                  <a href="{{INSTAGRAM_URL}}" className="text-primary-foreground/80 hover:text-primary-foreground transition-colors" aria-label="Instagram">
                    <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
                    </svg>
                  </a>
                  {/* Twitter */}
                  <a href="{{TWITTER_URL}}" className="text-primary-foreground/80 hover:text-primary-foreground transition-colors" aria-label="Twitter">
                    <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
                    </svg>
                  </a>
                </div>
              </div>
            </div>
          </div>

          {/* Services */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Our Services</h3>
            <ul className="space-y-2">
              {serviceLinks.map(link => (
                <li key={link.name}>
                  <Link to={link.href} className="text-primary-foreground/80 hover:text-primary-foreground transition-colors" onClick={(e) => handleLinkClick(e, link.href)}>
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Service Areas */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Areas We Serve</h3>
            <ul className="space-y-2">
              {serviceAreas.map(area => (
                <li key={area.name}>
                  <Link to={area.href} className="text-primary-foreground/80 hover:text-primary-foreground transition-colors" onClick={(e) => handleLinkClick(e, area.href)}>
                    {area.name}
                  </Link>
                </li>
              ))}
            </ul>
            <Link
              to="/#service-areas"
              className="text-sm text-primary-foreground/60 hover:text-primary-foreground transition-colors inline-block mt-2"
              onClick={(e) => {
                if (window.location.pathname === "/" && window.location.hash === "#service-areas") {
                  e.preventDefault();
                  document.getElementById("service-areas")?.scrollIntoView({ behavior: "smooth", block: "start" });
                }
              }}
            >
              View All Areas →
            </Link>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              {quickLinks.map(link => (
                <li key={link.name}>
                  <Link to={link.href} className="text-primary-foreground/80 hover:text-primary-foreground transition-colors" onClick={(e) => handleLinkClick(e, link.href)}>
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>

            <div className="mt-6">
              <h4 className="text-sm font-semibold mb-2">Emergency Services</h4>
              <p className="text-sm text-primary-foreground/80">
                24/7 emergency storm response available
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-primary-foreground/20">
        <div className="container-custom py-6">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="text-sm text-primary-foreground/60 mb-4 md:mb-0">
              © 2026 <CompanyName />. All rights reserved.
            </div>
            <div className="flex space-x-6 text-sm">
              <Link to="/privacy" className="text-primary-foreground/60 hover:text-primary-foreground" onClick={(e) => handleLinkClick(e, "/privacy")}>
                Privacy Policy
              </Link>
              <Link to="/terms" className="text-primary-foreground/60 hover:text-primary-foreground" onClick={(e) => handleLinkClick(e, "/terms")}>
                Terms of Service
              </Link>
              <Link to="/sitemap" className="text-primary-foreground/60 hover:text-primary-foreground" onClick={(e) => handleLinkClick(e, "/sitemap")}>
                Sitemap
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
