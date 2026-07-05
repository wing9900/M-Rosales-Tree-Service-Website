import Layout from "@/components/layout/Layout";
import { CompanyName } from "@/components/CompanyName";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Link } from "react-router-dom";
import { TreeDeciduous, CheckCircle, Phone, Calendar } from "lucide-react";

const TreeTrimming = () => {
  const services = [
    {
      title: "Crown Cleaning",
      description: "Foundation of professional tree care. We meticulously remove dead, dying, diseased, and broken branches to prevent decay spread and eliminate falling hazards.",
      icon: CheckCircle
    },
    {
      title: "Crown Thinning", 
      description: "Selective thinning to increase air circulation and light penetration, improving tree health and reducing the dangerous 'sail effect' in high winds.",
      icon: CheckCircle
    },
    {
      title: "Hazardous Branch Removal",
      description: "Safe removal of weak or overextended branches over homes and driveways, following ANSI Z133 safety standards for essential peace of mind.",
      icon: CheckCircle
    },
    {
      title: "Crown Reduction",
      description: "Proper crown reduction with precise cuts back to strong lateral branches, controlling tree size while maintaining natural form and structural soundness.",
      icon: CheckCircle
    }
  ];

  return (
    <Layout>
      {/* Hero Section */}
      <section className="section-padding bg-gradient-to-br from-primary/10 to-accent/10">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto text-center">
            <div className="flex justify-center mb-6">
              <div className="p-4 bg-primary/10 rounded-full">
                <TreeDeciduous className="h-12 w-12 text-primary" />
              </div>
            </div>
            <h1 className="text-4xl md:text-5xl font-bold mb-6 text-foreground">
              ISA-Standard Tree Trimming & Pruning in Houston, TX
            </h1>
            <p className="text-xl text-muted-foreground mb-8 max-w-3xl mx-auto leading-relaxed">
              Expert tree trimming services that adhere to ANSI A300 standards, ensuring every cut enhances the health, safety, and beauty of your trees.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" variant="default" asChild>
                <a href="tel:+11234567890">
                  <Phone className="mr-2 h-5 w-5" />
                  Get Free Quote
                </a>
              </Button>
              <Button size="lg" variant="default" asChild>
                <Link to="/contact">
                  <Calendar className="mr-2 h-5 w-5" />
                  Schedule Trimming
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
                In the sprawling Houston metro area, our trees are a vital shield against the Texas sun and a cornerstone of our property values. From the majestic live oaks in Memorial Villages and River Oaks to the tall pines of The Woodlands and Kingwood, these natural assets require professional care to thrive. Unmaintained trees can quickly become a liability, especially given Houston's propensity for severe thunderstorms and hurricanes.
              </p>
              <p className="text-lg text-muted-foreground leading-relaxed">
                At <CompanyName />, our ISA Certified Arborists provide expert tree trimming and pruning services that adhere to the highest industry standards. All our work is performed in strict accordance with ANSI A300 standards, the nationally accepted best practices for tree care, ensuring every cut enhances the health, safety, and beauty of your trees.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="section-padding bg-muted/30">
        <div className="container-custom">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">Our ANSI A300 Standard Pruning Services for Houston Trees</h2>
            <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
              Proper pruning is a science that respects a tree's biology. Our arborists understand the unique needs of species common to Southeast Texas and are trained to make precise, beneficial cuts.
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

      {/* Why Choose Section */}
      <section className="section-padding">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-center mb-8">Why Choose a Certified Arborist for Your Houston Property?</h2>
            <div className="prose prose-lg max-w-none text-center">
              <p className="text-lg text-muted-foreground leading-relaxed">
                Hiring an ISA Certified Arborist ensures a knowledgeable professional is caring for your landscape. We are dedicated to the health of Houston's urban canopy and understand the local challenges, from our heavy gumbo clay soil to the specific pests that affect our trees. Our commitment to safety and the ANSI A300 standards guarantees your trees receive the best possible care.
              </p>
            </div>
          </div>
        </div>
      </section>

    </Layout>
  );
};

export default TreeTrimming;