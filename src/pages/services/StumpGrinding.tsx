import Layout from "@/components/layout/Layout";
import { CompanyName } from "@/components/CompanyName";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Link } from "react-router-dom";
import { Cog, ArrowDown, Truck, Shovel, Sprout, Eye, Shield, Bug, MapPin, Phone, Calendar } from "lucide-react";
import { BUSINESS } from "@/lib/business";

const StumpGrinding = () => {
  const process = [
    {
      title: "Below-Ground Grinding",
      description: "Our powerful stump grinders obliterate the stump, grinding it down 6-12 inches below ground surface, destroying the entire stump and major surface roots to prevent regrowth.",
      icon: ArrowDown
    },
    {
      title: "Thorough Debris Removal", 
      description: "We can leave wood chips for you to use as natural mulch in your garden beds, or completely haul all debris away for a pristine, clean finish.",
      icon: Truck
    },
    {
      title: "Complete Soil Restoration",
      description: "We backfill the area with high-quality topsoil and compact it to create a level, stable surface that blends seamlessly with the rest of your lawn.",
      icon: Shovel
    },
    {
      title: "Seeding Available",
      description: "Complete restoration with seeding services to establish new turf over the area, leaving no trace that a tree was ever there.",
      icon: Sprout
    }
  ];

  const benefits = [
    {
      title: "Improve Aesthetics",
      description: "Instantly boost your home's curb appeal",
      icon: Eye
    },
    {
      title: "Enhance Safety",
      description: "Eliminate dangerous tripping hazards for your family and guests",
      icon: Shield
    },
    {
      title: "Prevent Pests",
      description: "Remove a potential home for termites and other unwanted insects common in our region",
      icon: Bug
    },
    {
      title: "Free Up Space",
      description: "Make room for new trees, gardens, or patio extensions",
      icon: MapPin
    }
  ];

  return (
    <Layout>
      {/* Hero Section */}
      <section className="section-padding bg-gradient-to-br from-accent/10 to-primary/10">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto text-center">
            <div className="flex justify-center mb-6">
              <div className="p-4 bg-accent/10 rounded-full">
                <Cog className="h-12 w-12 text-accent" />
              </div>
            </div>
            <h1 className="text-4xl md:text-5xl font-bold mb-6 text-foreground">
              Houston Stump Grinding Services — Reclaim Your Yard!
            </h1>
            <p className="text-xl text-muted-foreground mb-8 max-w-3xl mx-auto leading-relaxed">
              Professional stump grinding services that are fast, effective, and completely eliminate the problem. Make that stump disappear and reclaim your outdoor space.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" variant="default" asChild>
                <a href={`tel:${BUSINESS.phoneTel}`}>
                  <Phone className="mr-2 h-5 w-5" />
                  Call for Fast Quote
                </a>
              </Button>
              <Button size="lg" variant="default" asChild>
                <Link to="/contact">
                  <Calendar className="mr-2 h-5 w-5" />
                  Schedule Service
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
                After a tree removal, the remaining stump is an unsightly obstacle. In your Houston yard, it can be a stubborn tripping hazard, a nuisance to mow around, and an open invitation for pests like termites, fire ants, and roaches. Don't let an old stump compromise the safety and beauty of your landscape.
              </p>
              <p className="text-lg text-muted-foreground leading-relaxed">
                <CompanyName /> provides professional stump grinding services that are fast, effective, and completely eliminate the problem. We use powerful, state-of-the-art equipment to make that stump disappear, allowing you to fully reclaim your outdoor space.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="section-padding bg-muted/30">
        <div className="container-custom">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">Our Complete Stump Removal Process</h2>
            <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
              We offer a comprehensive solution to leave your property clean, safe, and ready for whatever you have planned next.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {process.map((step, index) => (
              <Card key={step.title} className="hover-lift animate-fade-in bg-accent/5 border-l-4 border-l-accent" style={{animationDelay: `${index * 0.1}s`}}>
                <CardContent className="p-6">
                  <div className="flex items-start gap-4">
                    <div className="p-2 bg-accent/10 rounded-lg flex-shrink-0">
                      <step.icon className="h-6 w-6 text-accent" />
                    </div>
                    <div>
                      <h3 className="text-xl font-semibold mb-3">{step.title}</h3>
                      <p className="text-muted-foreground">{step.description}</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="section-padding">
        <div className="container-custom">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">Benefits of Professional Stump Grinding in Houston</h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {benefits.map((benefit, index) => (
              <Card key={benefit.title} className="text-center hover-lift animate-fade-in" style={{animationDelay: `${index * 0.1}s`}}>
                <CardContent className="p-6">
                  <div className="flex justify-center mb-4">
                    <div className="p-3 bg-primary/10 rounded-full">
                      <benefit.icon className="h-8 w-8 text-primary" />
                    </div>
                  </div>
                  <h3 className="text-lg font-semibold mb-2">{benefit.title}</h3>
                  <p className="text-muted-foreground text-sm">{benefit.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

    </Layout>
  );
};

export default StumpGrinding;