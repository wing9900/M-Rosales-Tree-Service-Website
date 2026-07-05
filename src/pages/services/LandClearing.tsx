import Layout from "@/components/layout/Layout";
import { CompanyName } from "@/components/CompanyName";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Link } from "react-router-dom";
import { Construction, MapPin, TreePine, Truck, Mountain, Phone, Calendar } from "lucide-react";

const LandClearing = () => {
  const services = [
    {
      title: "Complete Site Preparation",
      description: "We can clear a lot of all trees, brush, stumps, and vegetation. Our efficient process transforms overgrown land into a blank canvas for your construction project.",
      icon: MapPin
    },
    {
      title: "Selective Clearing & Preservation", 
      description: "In line with ANSI A300 standards, our arborists help identify high-value trees to preserve, carefully clearing around them while protecting critical root zones.",
      icon: TreePine
    },
    {
      title: "Debris Removal and Grinding",
      description: "Complete processing and removal of all cleared material. We utilize industrial-grade chippers and grinders to recycle green waste into mulch or arrange responsible hauling.",
      icon: Truck
    },
    {
      title: "Light Grading Available",
      description: "After clearing, we can provide light grading services to help level the area and ensure proper drainage, setting the stage for the next phase of development.",
      icon: Mountain
    }
  ];

  return (
    <Layout>
      {/* Hero Section */}
      <section className="section-padding bg-gradient-to-br from-primary/10 to-secondary/10">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto text-center">
            <div className="flex justify-center mb-6">
              <div className="p-4 bg-primary/10 rounded-full">
                <Construction className="h-12 w-12 text-primary" />
              </div>
            </div>
            <h1 className="text-4xl md:text-5xl font-bold mb-6 text-foreground">
              Professional Land & Lot Clearing in Houston ANSI A300 Compliant
            </h1>
            <p className="text-xl text-muted-foreground mb-8 max-w-3xl mx-auto leading-relaxed">
              Comprehensive land and lot clearing services for residential and commercial clients. We merge heavy-duty efficiency with the precision of ISA Certified Arborists.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" variant="default" asChild>
                <a href="tel:+11234567890">
                  <Phone className="mr-2 h-5 w-5" />
                  Get Project Quote
                </a>
              </Button>
              <Button size="lg" variant="default" asChild>
                <Link to="/contact">
                  <Calendar className="mr-2 h-5 w-5" />
                  Schedule Site Visit
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Introduction Section */}
      <section className="section-padding">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto">
            <div className="prose prose-lg max-w-none">
              <p className="text-lg text-muted-foreground leading-relaxed mb-6">
                Whether you're preparing a site for a new custom home in a developing area or reclaiming an overgrown part of your property, professional land clearing is the crucial first step. Clearing land in the Houston area requires powerful equipment, a strategic plan, and a deep understanding of how to manage our region's unique vegetation and soil.
              </p>
              <p className="text-lg text-muted-foreground leading-relaxed">
                <CompanyName /> offers comprehensive land and lot clearing services for residential and commercial clients. We merge heavy-duty efficiency with the precision of ISA Certified Arborists to deliver a clean, build-ready site.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="section-padding bg-muted/30">
        <div className="container-custom">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">Our Strategic Clearing Services</h2>
            <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
              We provide a tailored approach to meet the specific goals of your project, from small residential clearings to large-scale site preparation.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {services.map((service, index) => (
              <Card key={service.title} className="hover-lift animate-fade-in bg-primary/5 border-l-4 border-l-primary" style={{animationDelay: `${index * 0.1}s`}}>
                <CardContent className="p-6">
                  <div className="flex items-start gap-4">
                    <div className="p-2 bg-primary/10 rounded-lg flex-shrink-0">
                      <service.icon className="h-6 w-6 text-primary" />
                    </div>
                    <div>
                      <h3 className="text-xl font-semibold mb-3">{service.title}</h3>
                      <p className="text-muted-foreground">{service.description}</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Equipment Section */}
      <section className="section-padding">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl font-bold mb-8">The Right Equipment and Expertise for Your Houston Project</h2>
            <div className="prose prose-lg max-w-none">
              <p className="text-lg text-muted-foreground leading-relaxed mb-8">
                From dense undergrowth in Montgomery County to urban infill lots inside the Loop, our team has the experience and machinery to execute your land clearing project on time and on budget. We are fully insured and committed to operating safely and responsibly.
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <Card className="text-center">
                <CardContent className="p-6">
                  <div className="flex justify-center mb-4">
                    <div className="p-3 bg-success/10 rounded-full">
                      <Construction className="h-8 w-8 text-success" />
                    </div>
                  </div>
                  <h3 className="text-lg font-semibold mb-2">Heavy Equipment</h3>
                  <p className="text-muted-foreground text-sm">Industrial-grade machinery for efficient clearing</p>
                </CardContent>
              </Card>
              
              <Card className="text-center">
                <CardContent className="p-6">
                  <div className="flex justify-center mb-4">
                    <div className="p-3 bg-success/10 rounded-full">
                      <TreePine className="h-8 w-8 text-success" />
                    </div>
                  </div>
                  <h3 className="text-lg font-semibold mb-2">Tree Preservation</h3>
                  <p className="text-muted-foreground text-sm">Expert arborists protect valuable trees</p>
                </CardContent>
              </Card>
              
              <Card className="text-center">
                <CardContent className="p-6">
                  <div className="flex justify-center mb-4">
                    <div className="p-3 bg-success/10 rounded-full">
                      <Truck className="h-8 w-8 text-success" />
                    </div>
                  </div>
                  <h3 className="text-lg font-semibold mb-2">Complete Cleanup</h3>
                  <p className="text-muted-foreground text-sm">Full debris removal and site restoration</p>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

    </Layout>
  );
};

export default LandClearing;