import { useLocation, Link } from "react-router-dom";
import { useEffect } from "react";
import Layout from "@/components/layout/Layout";
import { Button } from "@/components/ui/button";
import { Home, Search, Phone } from "lucide-react";

const NotFound = () => {
  const location = useLocation();

  useEffect(() => {
    console.error(
      "404 Error: User attempted to access non-existent route:",
      location.pathname
    );
  }, [location.pathname]);

  return (
    <Layout>
      <div className="min-h-screen flex items-center justify-center section-padding">
        <div className="container-custom max-w-2xl text-center">
          <div className="text-8xl font-bold text-primary mb-6">404</div>
          <h1 className="text-section-title mb-4">Page Not Found</h1>
          <p className="text-lg text-muted-foreground mb-8 max-w-lg mx-auto">
            Sorry, we couldn't find the page you're looking for. The page may have been moved, 
            deleted, or you may have entered the URL incorrectly.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
            <Button variant="cta" size="lg" asChild>
              <Link to="/">
                <Home className="h-5 w-5" />
                Go Home
              </Link>
            </Button>
            <Button variant="cta" size="lg" asChild>
              <Link to="/services">
                <Search className="h-5 w-5" />
                Browse Services
              </Link>
            </Button>
          </div>

          <div className="bg-muted/50 rounded-2xl p-8">
            <h2 className="text-xl font-semibold mb-4">Need Help?</h2>
            <p className="text-muted-foreground mb-6">
              If you need immediate tree service assistance or have questions, 
              our team is standing by to help.
            </p>
            <Button variant="accent" asChild>
              <a href="tel:+11234567890">
                <Phone className="h-4 w-4" />
                Call Now
              </a>
            </Button>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default NotFound;
