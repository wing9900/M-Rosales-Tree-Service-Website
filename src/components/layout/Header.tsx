import { useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { useBusinessName } from "@/contexts/BusinessNameContext";
import { Button } from "@/components/ui/button";
import { CallButton } from "@/components/ui/call-button";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { Menu, Phone, Calendar, MapPin } from "lucide-react";
const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();
  const navigate = useNavigate();
  const { businessName } = useBusinessName();

  // Scale font size by name length — short names (≤28 chars) stay large on one line
  const nameLength = businessName.length;
  const fontSizeClass =
    nameLength > 50
      ? "text-[1.0rem] sm:text-[0.95rem] lg:text-[1.0rem]"
      : nameLength > 35
        ? "text-[1.0rem] sm:text-[0.95rem] lg:text-[1.0rem]"
        : nameLength > 28
          ? "text-sm sm:text-base lg:text-lg"
          : "text-lg sm:text-lg lg:text-xl";
  const getHeaderOffset = () => {
    const stickyHeader = document.querySelector<HTMLElement>(".sticky-header");
    const topBar = document.getElementById("top-contact-bar");
    const headerHeight = stickyHeader?.offsetHeight ?? 0;
    const topBarHeight = topBar?.offsetHeight ?? 0;
    return headerHeight + topBarHeight + 8;
  };
  const getScrollAdjustment = (element: HTMLElement) => {
    const adjust = element.getAttribute("data-scroll-adjust");
    const value = adjust ? parseInt(adjust, 10) : 0;
    return isNaN(value) ? 0 : value;
  };
  const scrollToSection = (id: string) => {
    const section = document.getElementById(id);
    if (!section) return;
    const target = section.querySelector<HTMLElement>("[data-scroll-target]") ?? section;
    const rect = target.getBoundingClientRect();
    const absoluteTop = window.pageYOffset + rect.top;
    const effectiveOffset = Math.max(getHeaderOffset() - getScrollAdjustment(target), 0);
    const targetOffset = Math.max(absoluteTop - effectiveOffset, 0);
    window.scrollTo({
      top: targetOffset,
      behavior: "smooth"
    });
  };
  // Normalize hash (React Router / browsers may include or omit "#")
  const currentHash = (location.hash || "").replace(/^#/, "");
  const isActive = (path: string) => {
    if (path.startsWith("/#")) {
      const pathHash = path.slice(2);
      return location.pathname === "/" && currentHash === pathHash;
    }
    // Home ("/") is active only when on home with no hash; otherwise only one nav item is active
    if (path === "/") return location.pathname === "/" && !currentHash;
    return location.pathname === path;
  };

  const navigationItems = [{
    name: "Home",
    href: "/"
  }, {
    name: "About",
    href: "/about"
  }, {
    name: "Services",
    href: "/#services"
  }, {
    name: "Gallery",
    href: "/gallery"
  }, {
    name: "Areas We Serve",
    href: "/#service-areas"
  }, {
    name: "Blog",
    href: "/blog"
  }, {
    name: "Contact",
    href: "/contact"
  }];
  return (
    <div className="sticky top-0 z-50">
      {/* Top Contact Bar - same column structure as main header for alignment */}
      <div id="top-contact-bar" className="hidden lg:block bg-primary text-primary-foreground text-base lg:text-[1.03rem] lg:font-bold">
        <div className="w-full px-2 lg:px-4 xl:px-6">
          <div className="flex items-center py-2">
            {/* Left: phone only (above logo) — adjust with md:ml-* (move right) or md:mr-* (space from edge) */}
            <div className="hidden md:flex flex-1 items-center md:-ml-1">
              <div className="flex items-center gap-2">
                <Phone className="h-4 w-4" />
                <span>{"123-456-7890"}</span>
              </div>
            </div>

            {/* Middle: trust text centered above nav links (Home, About, Services, etc.) */}
            <div className="hidden md:flex flex-1 justify-center">
              <span className="text-sm md:text-base">
                Licensed & Insured • Emergency Services Available 24/7
              </span>
            </div>

            {/* Right: Pasadena, TX */}
            <div className="hidden md:flex flex-1 justify-end items-center">
              <div className="flex items-center gap-2 ml-8 mr-[3%]">
                <MapPin className="h-4 w-4" />
                <span>{"Pasadena, TX"}</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Main Header */}
      <header className="bg-background shadow-soft sticky-header">
        <div className="w-full px-4 sm:px-4 lg:px-4 xl:px-6">
          <div className="flex items-center justify-between gap-2 py-[0.55rem] relative overflow-visible lg:overflow-hidden">
            {/* Logo */}
            <div 
              className="flex flex-shrink-0 items-center space-x-3 cursor-pointer ml-2 sm:ml-4 lg:ml-8" 
              onClick={() => {
                // If already on home page with no hash, scroll to top
                if (location.pathname === '/' && !currentHash) {
                  window.scrollTo({
                    top: 0,
                    behavior: "smooth"
                  });
                } else {
                  // Navigate to home page and clear hash so Home shows active
                  navigate({ pathname: '/', hash: '' }, { replace: false });
                }
              }}
            >
              <img
                src="/logo.ico"
                alt={businessName}
                className="h-[3.25rem] lg:h-[3.9rem] w-auto object-contain"
              />
            </div>

            {/* Dynamic business name — mobile: flex-1 center between logo & menu | desktop: absolute left */}
            <div
              className="header-business-name flex flex-1 min-w-0 justify-center items-center pl-2 pr-2 sm:pr-4 lg:flex-none lg:absolute lg:left-[7rem] lg:top-1/2 lg:-translate-y-1/2 lg:w-[300px] lg:translate-x-0 lg:justify-start lg:pl-0 lg:pr-0 cursor-pointer"
              onClick={() => {
                if (location.pathname === "/" && !currentHash) {
                  window.scrollTo({ top: 0, behavior: "smooth" });
                } else {
                  navigate({ pathname: "/", hash: "" }, { replace: false });
                }
              }}
              role="link"
              tabIndex={0}
              onKeyDown={(e) => {
                if (e.key === "Enter" || e.key === " ") {
                  e.preventDefault();
                  if (location.pathname === "/" && !currentHash) {
                    window.scrollTo({ top: 0, behavior: "smooth" });
                  } else {
                    navigate({ pathname: "/", hash: "" }, { replace: false });
                  }
                }
              }}
            >
              <span
                className={`font-extrabold uppercase tracking-tight break-words min-w-0 max-w-full text-center lg:text-left bg-clip-text text-transparent ${fontSizeClass} sm:leading-[1.35] ${nameLength <= 28 ? "lg:whitespace-nowrap" : ""}`}
                style={{
                  backgroundImage:
                    "linear-gradient(180deg, hsl(140 65% 65%) 0%, hsl(140 50% 35%) 35%, hsl(28 55% 17%) 100%)",
                  WebkitBackgroundClip: "text",
                  backgroundClip: "text",
                  textShadow: "0 1px 3px rgba(0,0,0,0.2)",
                }}
                title={businessName}
              >
                {businessName}
              </span>
            </div>

            {/* Desktop Navigation */}
            <nav className="hidden lg:flex items-center space-x-10 ml-16">
            {navigationItems.map(item => {
              if (item.href === "/#services") {
                return <button key={item.name} onClick={e => {
                  e.preventDefault();
                  navigate({ pathname: '/', hash: 'services' });
                }} className={`text-[1.082rem] font-semibold transition-colors hover:text-primary ${isActive(item.href) ? "text-primary border-b-2 border-primary" : "text-gray-700"}`}>
                      {item.name}
                    </button>;
              }
              // Home link: clear hash so underline shows Home when on homepage
              if (item.href === '/') {
                return (
                  <Link
                    key={item.name}
                    to={{ pathname: '/', hash: '' }}
                    onClick={e => {
                      if (location.pathname === '/' && !currentHash) {
                        e.preventDefault();
                        window.scrollTo({ top: 0, behavior: 'smooth' });
                      }
                    }}
                    className={`text-[1.082rem] font-semibold transition-colors hover:text-primary ${isActive(item.href) ? "text-primary border-b-2 border-primary" : "text-gray-700"}`}
                  >
                    {item.name}
                  </Link>
                );
              }
              return <Link key={item.name} to={item.href} onClick={e => {
                // If already on this page, scroll to top
                if (location.pathname === item.href) {
                  e.preventDefault();
                  window.scrollTo({
                    top: 0,
                    behavior: "smooth"
                  });
                }
              }} className={`text-[1.082rem] font-semibold transition-colors hover:text-primary ${isActive(item.href) ? "text-primary border-b-2 border-primary" : "text-gray-700"}`}>
                    {item.name}
                  </Link>;
            })}
            </nav>

            {/* CTA Buttons - Desktop */}
            <div className="hidden lg:flex items-center space-x-6 lg:ml-0">
              <CallButton variant="cta" size="sm" showIcon={true} className="shadow-lg text-[0.893rem]">
                Call Now
              </CallButton>
              <Button variant="cta" size="sm" asChild className="shadow-lg text-[0.893rem]">
                <Link to="/contact" onClick={e => {
                // If already on contact page, scroll to top
                if (location.pathname === '/contact') {
                  e.preventDefault();
                  window.scrollTo({
                    top: 0,
                    behavior: "smooth"
                  });
                }
              }}>
                  <Calendar className="h-4 w-4" />
                  Get Quote
                </Link>
              </Button>
            </div>

            {/* Mobile Menu Button */}
            <Sheet open={isOpen} onOpenChange={setIsOpen}>
              <SheetTrigger asChild className="flex-shrink-0 lg:hidden mr-2 sm:mr-4">
                <Button variant="outline" size="icon">
                  <Menu className="h-4 w-4" />
                </Button>
              </SheetTrigger>
              <SheetContent side="right">
                <div className="flex flex-col space-y-4 mt-8">
                  {navigationItems.map(item => {
                  if (item.href === "/#services") {
                    return <Link key={item.name} to="/#services" onClick={() => setIsOpen(false)} className={`text-[1.082rem] font-medium transition-colors hover:text-primary text-left focus:outline-none focus-visible:ring-2 focus-visible:ring-primary/60 focus-visible:ring-offset-2 focus-visible:ring-offset-white ${isActive(item.href) ? "text-primary" : "text-gray-800"}`}>
                          {item.name}
                        </Link>;
                  }
                  if (item.href === '/') {
                    return (
                      <Link
                        key={item.name}
                        to={{ pathname: '/', hash: '' }}
                        onClick={e => {
                          setIsOpen(false);
                          if (location.pathname === '/' && !currentHash) {
                            e.preventDefault();
                            window.scrollTo({ top: 0, behavior: 'smooth' });
                          }
                        }}
                        className={`text-[1.082rem] font-medium transition-colors hover:text-primary text-left focus:outline-none focus-visible:ring-2 focus-visible:ring-primary/60 focus-visible:ring-offset-2 focus-visible:ring-offset-white ${isActive(item.href) ? "text-primary" : "text-gray-800"}`}
                      >
                        {item.name}
                      </Link>
                    );
                  }
                  return <Link key={item.name} to={item.href} onClick={e => {
                    setIsOpen(false);
                    // If already on this page, scroll to top
                    if (location.pathname === item.href) {
                      e.preventDefault();
                      window.scrollTo({
                        top: 0,
                        behavior: "smooth"
                      });
                    }
                  }} className={`text-[1.082rem] font-medium transition-colors hover:text-primary text-left focus:outline-none focus-visible:ring-2 focus-visible:ring-primary/60 focus-visible:ring-offset-2 focus-visible:ring-offset-white ${isActive(item.href) ? "text-primary" : "text-gray-800"}`}>
                        {item.name}
                      </Link>;
                })}
                  
                  <div className="pt-4 border-t space-y-3">
                    <CallButton variant="cta" className="w-full shadow-lg text-[1.01rem]" showIcon={false}>
                      Call Now
                    </CallButton>
                    <Button variant="cta" className="w-full shadow-lg text-[1.01rem]" asChild>
                      <Link to="/contact" onClick={e => {
                      setIsOpen(false);
                      // If already on contact page, scroll to top
                      if (location.pathname === '/contact') {
                        e.preventDefault();
                        window.scrollTo({
                          top: 0,
                          behavior: "smooth"
                        });
                      }
                    }}>
                        <Calendar className="h-4 w-4" />
                        Get Quote
                      </Link>
                    </Button>
                  </div>
                </div>
              </SheetContent>
            </Sheet>
          </div>
        </div>
      </header>
    </div>
  );
};
export default Header;