import { Link, useLocation } from "react-router-dom";
import { Phone, MapPin, Clock, Star, Shield, Award } from "lucide-react";
import { CompanyName } from "@/components/CompanyName";
import { BUSINESS } from "@/lib/business";

const Footer = () => {
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
              {BUSINESS.tagline}
            </p>

            {/* Trust Badges */}
            <div className="flex flex-col gap-3 mb-6">
              <div className="flex items-center gap-2 text-sm">
                <Star className="h-4 w-4" />
                <span>5-Star Rated</span>
              </div>
              <div className="flex items-center gap-2 text-sm">
                <Shield className="h-4 w-4" />
                <span>Professional Crew</span>
              </div>
              <div className="flex items-center gap-2 text-sm">
                <Award className="h-4 w-4" />
                <span>{BUSINESS.yearsExperience} Years Experience</span>
              </div>
            </div>

            {/* Contact Info */}
            <div className="space-y-3">
              <div className="flex items-center gap-2">
                <Phone className="h-4 w-4" />
                <a href={`tel:${BUSINESS.phoneTel}`} className="hover:underline">{BUSINESS.phone}</a>
              </div>
              <div className="flex items-center gap-2">
                <Phone className="h-4 w-4" />
                <a href={`tel:${BUSINESS.phoneSecondaryTel}`} className="hover:underline">{BUSINESS.phoneSecondary}</a>
              </div>
              <div className="flex items-center gap-2">
                <MapPin className="h-6 w-6" />
                <span>{BUSINESS.fullAddress}</span>
              </div>
              <div className="flex items-center gap-2">
                <Clock className="h-4 w-4" />
                <span>{BUSINESS.hours}</span>
              </div>

              {/* Social Media Links */}
              <div className="mt-4 pt-4 border-t border-primary-foreground/20">
                <div className="text-sm font-semibold mb-3">Follow Us</div>
                <div className="flex gap-3">
                  <a href={BUSINESS.facebookUrl} target="_blank" rel="noopener noreferrer" className="text-primary-foreground/80 hover:text-primary-foreground transition-colors" aria-label="Facebook">
                    <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
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
