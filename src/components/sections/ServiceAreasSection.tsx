import { Link } from "react-router-dom";
import { MapPin } from "lucide-react";

const ServiceAreasSection = () => {
  const serviceAreas = [
    { name: "Houston", href: "/areas/houston" },
    { name: "Katy", href: "/areas/katy" },
    { name: "Sugar Land", href: "/areas/sugar-land" },
    { name: "Richmond", href: "/areas/richmond" },
    { name: "Rosenberg", href: "/areas/rosenberg" },
    { name: "Fulshear", href: "/areas/fulshear" },
    { name: "Cypress", href: "/areas/cypress" },
    { name: "Pasadena", href: "/areas/pasadena" },
    { name: "Baytown", href: "/areas/baytown" },
    { name: "Pearland", href: "/areas/pearland" },
    { name: "League City", href: "/areas/league-city" },
    { name: "Galveston", href: "/areas/galveston" },
    { name: "Texas City", href: "/areas/texas-city" },
    { name: "The Woodlands", href: "/areas/the-woodlands" },
    { name: "Conroe", href: "/areas/conroe" },
    { name: "Missouri City", href: "/areas/missouri-city" },
    { name: "Friendswood", href: "/areas/friendswood" },
    { name: "Humble", href: "/areas/humble" }
  ];

  return (
    <section id="service-areas" className="section-padding bg-muted/30 scroll-mt-24">
      <div className="container-custom">
        {/* Section Header */}
        <div className="text-center mb-12">
          <h2 className="text-section-title mb-4" data-scroll-target data-scroll-adjust="-20">
            Service Areas
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Professional tree services throughout Greater Houston
          </p>
        </div>

        {/* Service Areas Grid */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4 mb-12">
          {serviceAreas.map((area, index) => (
            <Link
              key={area.name}
              to={area.href}
              className="group p-6 bg-card rounded-xl hover:bg-accent hover:text-accent-foreground transition-all duration-200 text-center animate-fade-in"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="p-3 bg-accent/10 group-hover:bg-accent-foreground/10 rounded-lg w-fit mx-auto mb-3 transition-colors">
                <MapPin className="h-6 w-6 text-accent group-hover:text-accent-foreground" />
              </div>
              <h3 className="font-semibold text-sm">{area.name}</h3>
            </Link>
          ))}
        </div>

      </div>
    </section>
  );
};

export default ServiceAreasSection;