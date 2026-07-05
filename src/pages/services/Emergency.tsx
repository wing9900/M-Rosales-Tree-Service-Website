import Layout from "@/components/layout/Layout";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Zap, Clock, FileText, Settings, Shield, Phone, AlertTriangle } from "lucide-react";
import { BUSINESS } from "@/lib/business";

const Emergency = () => {
  const services = [
    {
      title: "24/7 Availability",
      description: "Storms don't keep business hours. Our emergency line is open 24/7/365. When you call, you speak to a live person ready to dispatch a crew anywhere in the Houston area.",
      icon: Clock
    },
    {
      title: "Storm Damage Documentation",
      description: "After storm damage, we provide clear documentation of the work performed and can help you understand what was removed to support any insurance questions you may have.",
      icon: FileText
    },
    {
      title: "Rapid Hazard Removal & Property Protection",
      description: "Our first priority is mitigating immediate danger. We specialize in using cranes and advanced rigging to carefully lift trees off structures, preventing further damage.",
      icon: Settings
    },
    {
      title: "Uncompromising Safety",
      description: "Even in emergencies, safety is our top priority. Our crews perform mandatory job-site safety analysis to assess all hazards before any work begins.",
      icon: Shield
    }
  ];

  return (
    <Layout>
      {/* Hero Section */}
      <section className="section-padding-sm bg-gradient-to-br from-destructive/20 to-emergency/20">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto text-center">
            <div className="flex justify-center mb-6">
              <div className="p-4 bg-emergency/20 rounded-full">
                <Zap className="h-12 w-12 text-emergency" />
              </div>
            </div>
            <h1 className="text-4xl md:text-5xl font-bold mb-6 text-foreground">
              24/7 Emergency Tree Service in Houston Rapid Storm Damage Response
            </h1>
            <p className="text-xl text-muted-foreground mb-0 max-w-3xl mx-auto leading-relaxed">
              When storms strike and trees threaten your property, you need fast, reliable, professional emergency response. We're here 24/7 to help secure your property and safely remove hazards.
            </p>
          </div>
        </div>
      </section>

      {/* Introduction Section */}
      <section className="section-padding">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto">
            <div className="prose prose-lg max-w-none">
              <p className="text-lg text-muted-foreground leading-relaxed mb-6">
                Living on the Gulf Coast means living with the constant threat of severe weather. Hurricanes, tropical storms, and violent thunderstorms can wreak havoc on our trees, turning them into immediate dangers. When a tree has fallen on your house, car, or is blocking your street, you need a fast, reliable, and professional team you can trust.
              </p>
              <p className="text-lg text-muted-foreground leading-relaxed">
                We provide 24/7 emergency tree services for storm damage across the entire Houston metroplex. Our rapid response crews are on standby to help you secure your property and safely remove hazards, operating with strict safety protocols on every job.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Emergency Alert */}
      <section className="bg-emergency text-emergency-foreground py-8">
        <div className="container-custom">
          <div className="text-center">
            <div className="flex items-center justify-center gap-3 mb-4">
              <AlertTriangle className="h-8 w-8" />
              <h2 className="text-2xl font-bold">STORM EMERGENCY?</h2>
              <AlertTriangle className="h-8 w-8" />
            </div>
            <p className="text-xl mb-4">Don't wait - trees under storm stress are extremely dangerous</p>
            <Button size="xl" variant="secondary" asChild className="w-auto max-w-fit">
              <a href={`tel:${BUSINESS.phoneTel}`} className="font-bold">
                <Phone className="mr-2 h-6 w-6" />
                Call For Emergency Response
              </a>
            </Button>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="section-padding bg-muted/30">
        <div className="container-custom">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">Your First Call in a Tree Emergency</h2>
            <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
              The aftermath of a storm is a hazardous environment. Storm-damaged trees are under extreme tension and are highly unpredictable. Our experienced crew is trained to safely manage these complex situations.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {services.map((service, index) => (
              <Card key={service.title} className="hover-lift animate-fade-in border-l-4 border-l-emergency" style={{animationDelay: `${index * 0.1}s`}}>
                <CardContent className="p-6">
                  <div className="flex items-start gap-4">
                    <div className="p-2 bg-emergency/10 rounded-lg flex-shrink-0">
                      <service.icon className="h-6 w-6 text-emergency" />
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

      {/* Trust Section */}
      <section className="section-padding">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl font-bold mb-8">Houston's Trusted Partner in Storm Recovery</h2>
            <div className="prose prose-lg max-w-none">
              <p className="text-lg text-muted-foreground leading-relaxed">
                As a local Houston-based company, we are dedicated to helping our neighbors recover safely and quickly. Our rapid response, technical expertise, and commitment to safety make us the trusted choice for storm damage cleanup.
              </p>
            </div>
          </div>
        </div>
      </section>

    </Layout>
  );
};

export default Emergency;