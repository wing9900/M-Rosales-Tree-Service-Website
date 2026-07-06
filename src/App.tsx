import { Toaster } from "@/components/ui/toaster";

import { BrowserRouter, Routes, Route, useLocation } from "react-router-dom";

import { BusinessNameProvider } from "@/contexts/BusinessNameContext";

import { useEffect } from "react";

import Index from "./pages/Index";

import About from "./pages/About";

import Contact from "./pages/Contact";

import ServiceAreas from "./pages/ServiceAreas";

import Blog from "./pages/Blog";

import Gallery from "./pages/Gallery";

import NotFound from "./pages/NotFound";

import TreeTrimming from "./pages/services/TreeTrimming";

import TreeRemoval from "./pages/services/TreeRemoval";

import StumpGrinding from "./pages/services/StumpGrinding";

import Emergency from "./pages/services/Emergency";

import LandClearing from "./pages/services/LandClearing";

import HealthManagement from "./pages/services/HealthManagement";

import AreaPage from "./pages/areas/AreaPage";



const ScrollToTop = () => {

  const location = useLocation();

  

  const getHeaderOffset = () => {

    const stickyHeader = document.querySelector<HTMLElement>(".sticky-header");

    const topBar = document.getElementById("top-contact-bar");

    const headerHeight = stickyHeader?.offsetHeight ?? 0;

    const topBarHeight = topBar?.offsetHeight ?? 0;

    return headerHeight + topBarHeight + 8; // small buffer

  };

  const getScrollTarget = (element: HTMLElement) => {

    return element.querySelector<HTMLElement>("[data-scroll-target]") ?? element;

  };

  const getScrollAdjustment = (element: HTMLElement) => {

    const adjust = element.getAttribute("data-scroll-adjust");

    const value = adjust ? parseInt(adjust, 10) : 0;

    return isNaN(value) ? 0 : value;

  };



  // Function to scroll to hash element with retry logic

  const scrollToHash = (hash: string) => {

    let retryCount = 0;

    const maxRetries = 40;

    

    const attemptScroll = () => {

      const element = document.getElementById(hash);

      if (element) {

        const targetElement = getScrollTarget(element);

        const headerOffset = Math.max(getHeaderOffset() - getScrollAdjustment(targetElement), 0);

        const elementPosition = targetElement.getBoundingClientRect().top;

        const offsetPosition = elementPosition + window.pageYOffset - headerOffset;

        window.scrollTo({ top: offsetPosition, behavior: "smooth" });

        return; // Success - stop retrying

      }

      

      // Retry if element not found yet

      if (retryCount < maxRetries) {

        retryCount++;

        setTimeout(attemptScroll, 100);

      }

    };

    

    attemptScroll();

  };

  

  // Handle hash scrolling on route/path changes

  useEffect(() => {

    // Check both window.location.hash (actual browser URL) and location.hash (React Router)

    const hash = window.location.hash || location.hash;

    

    if (hash && location.pathname === "/") {

      const hashValue = hash.substring(1); // Remove the #

      

      // Try scrolling after a short delay to ensure DOM is ready

      const timeoutId = setTimeout(() => {

        scrollToHash(hashValue);

      }, 300);

      

      return () => clearTimeout(timeoutId);

    }

    

    // Scroll to top for page navigation without hash (including when navigating to home)

    if (!hash) {

      window.scrollTo(0, 0);

    }

  }, [location.pathname, location.hash]);

  

  // Handle initial page load with hash in URL

  useEffect(() => {

    if (window.location.hash && location.pathname === "/") {

      const hash = window.location.hash.substring(1);

      

      // Wait for page to fully load before attempting scroll

      const handleLoad = () => {

        setTimeout(() => scrollToHash(hash), 300);

      };

      

      if (document.readyState === 'complete') {

        handleLoad();

      } else {

        window.addEventListener('load', handleLoad, { once: true });

      }

    }

  }, []); // Only run on mount

  

  // Handle native hashchange events (for browser back/forward or direct hash changes)

  useEffect(() => {

    const handleHashChange = () => {

      if (window.location.hash && location.pathname === "/") {

        const hash = window.location.hash.substring(1);

        setTimeout(() => scrollToHash(hash), 100);

      }

    };

    

    window.addEventListener('hashchange', handleHashChange);

    return () => window.removeEventListener('hashchange', handleHashChange);

  }, [location.pathname]);

  

  return null;

};



const App = () => (

  <>

    <Toaster />

    <BrowserRouter>

      <BusinessNameProvider>

      <ScrollToTop />

      <Routes>

        <Route path="/" element={<Index />} />

        <Route path="/about" element={<About />} />

        <Route path="/contact" element={<Contact />} />

        <Route path="/service-areas" element={<ServiceAreas />} />

        <Route path="/blog" element={<Blog />} />

        <Route path="/gallery" element={<Gallery />} />

        <Route path="/services/tree-trimming" element={<TreeTrimming />} />

        <Route path="/services/tree-removal" element={<TreeRemoval />} />

        <Route path="/services/stump-grinding" element={<StumpGrinding />} />

        <Route path="/services/emergency" element={<Emergency />} />

        <Route path="/services/land-clearing" element={<LandClearing />} />

        <Route path="/services/health-management" element={<HealthManagement />} />

        <Route path="/areas/:slug" element={<AreaPage />} />

        {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}

        <Route path="*" element={<NotFound />} />

      </Routes>

      </BusinessNameProvider>

    </BrowserRouter>

  </>

);



export default App;

