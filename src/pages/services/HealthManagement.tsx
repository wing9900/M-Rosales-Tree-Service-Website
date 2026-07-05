import Layout from "@/components/layout/Layout";
import { CompanyName } from "@/components/CompanyName";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Link } from "react-router-dom";
import { Stethoscope, Search, Bug, Sprout, Shovel, Phone, Calendar } from "lucide-react";
import { BUSINESS } from "@/lib/business";
const HealthManagement = () => {
  const services = [{
    title: "Tree Health and Risk Assessments",
    description: "Thorough evaluations identifying signs of disease, pest infestations, and structural defects using proven assessment methods for comprehensive analysis.",
    icon: Search
  }, {
    title: "Pest and Disease Diagnosis and Treatment",
    description: "Accurate diagnosis from common fungal issues to invasive pests. We prescribe targeted treatment plans using Integrated Pest Management (IPM) principles for environmentally-sensitive solutions.",
    icon: Bug
  }, {
    title: "Fertilization and Soil Management",
    description: "Deep-root fertilization with custom nutrient blends injected directly into the root zone to boost your tree's vigor and natural defenses against Houston's challenging conditions.",
    icon: Sprout
  }, {
    title: "Root Zone Management",
    description: "Using specialized tools like AirSpade to safely relieve soil compaction and inspect for girdling roots, improving water and oxygen availability for optimal tree health.",
    icon: Shovel
  }];
  return <Layout>
      {/* Hero Section */}
      <section className="section-padding bg-gradient-to-br from-success/10 to-primary/10">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto text-center">
            <div className="flex justify-center mb-6">
              <div className="p-4 bg-success/10 rounded-full">
                <Stethoscope className="h-12 w-12 text-success" />
              </div>
            </div>
            <h1 className="text-4xl md:text-5xl font-bold mb-6 text-foreground">
              Tree Health Care & Disease Treatment in Houston
            </h1>
            <p className="text-xl text-muted-foreground mb-8 max-w-3xl mx-auto leading-relaxed">
              Our experienced crew takes a careful, hands-on approach to tree health care, diagnosing problems and recommending practical solutions to protect your valuable trees.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" variant="default" asChild>
                <a href={`tel:${BUSINESS.phoneTel}`}>
                  <Phone className="mr-2 h-5 w-5" />
                  Call For Assessment
                </a>
              </Button>
              <Button size="lg" variant="default" asChild>
                <Link to="/contact">
                  <Calendar className="mr-2 h-5 w-5" />
                  Schedule An Assessment
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
                Your mature trees are a priceless investment, but they are also complex organisms facing numerous threats in our region. Houston's intense summer heat, high humidity, and periods of drought or flood create a challenging environment where pests and diseases can flourish. A subtle change in a tree's appearance can often be the first sign of a serious health issue.
              </p>
              <p className="text-lg text-muted-foreground leading-relaxed">
                At <CompanyName />, our experienced team applies a practical, hands-on approach to tree health care. We offer comprehensive solutions to diagnose, treat, and prevent problems, protecting your valuable trees for years to come.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="section-padding bg-muted/30">
        <div className="container-custom">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">A Proactive Approach to Tree Wellness in Southeast Texas</h2>
            <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
              We offer a full suite of services designed to manage the specific health challenges our local trees face.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {services.map((service, index) => <Card key={service.title} className="hover-lift animate-fade-in border-l-4 border-l-success" style={{
            animationDelay: `${index * 0.1}s`
          }}>
                <CardContent className="p-6">
                  <div className="flex items-start gap-4">
                    <div className="p-2 bg-success/10 rounded-lg flex-shrink-0">
                      <service.icon className="h-6 w-6 text-success" />
                    </div>
                    <div>
                      <h3 className="text-xl font-semibold mb-3">{service.title}</h3>
                      <p className="text-muted-foreground">{service.description}</p>
                    </div>
                  </div>
                </CardContent>
              </Card>)}
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="section-padding">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div>
                <h2 className="text-3xl font-bold mb-6">Why Proactive Tree Health Care Matters</h2>
                <div className="space-y-4">
                  <div className="flex items-start gap-3">
                    <div className="p-1 bg-success/10 rounded-full flex-shrink-0 mt-1">
                      <div className="w-2 h-2 bg-success rounded-full"></div>
                    </div>
                    <div>
                      <h3 className="font-semibold text-lg">Early Detection Saves Trees</h3>
                      <p className="text-muted-foreground">Catching problems early means the difference between treatment and removal.</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <div className="p-1 bg-success/10 rounded-full flex-shrink-0 mt-1">
                      <div className="w-2 h-2 bg-success rounded-full"></div>
                    </div>
                    <div>
                      <h3 className="font-semibold text-lg">Prevent Disease Spread</h3>
                      <p className="text-muted-foreground">Stop diseases from spreading to other valuable trees on your property.</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <div className="p-1 bg-success/10 rounded-full flex-shrink-0 mt-1">
                      <div className="w-2 h-2 bg-success rounded-full"></div>
                    </div>
                    <div>
                      <h3 className="font-semibold text-lg">Cost-Effective Solutions</h3>
                      <p className="text-muted-foreground">Treatment is always more affordable than removal and replacement.</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <div className="p-1 bg-success/10 rounded-full flex-shrink-0 mt-1">
                      <div className="w-2 h-2 bg-success rounded-full"></div>
                    </div>
                    <div>
                      <h3 className="font-semibold text-lg">Protect Property Values</h3>
                      <p className="text-muted-foreground">Healthy, mature trees significantly increase your property value.</p>
                    </div>
                  </div>
                </div>
              </div>
              
              <div className="bg-success/5 p-8 rounded-2xl">
                <h3 className="text-2xl font-bold mb-4 text-center">Common Houston Tree Threats</h3>
                <div className="space-y-3">
                  <div className="flex items-center gap-3 p-3 bg-background rounded-lg">
                    <Bug className="h-5 w-5 text-destructive" />
                    <span>Oak Wilt Disease</span>
                  </div>
                  <div className="flex items-center gap-3 p-3 bg-background rounded-lg">
                    <Bug className="h-5 w-5 text-destructive" />
                    <span>Bacterial Leaf Scorch</span>
                  </div>
                  <div className="flex items-center gap-3 p-3 bg-background rounded-lg">
                    <Bug className="h-5 w-5 text-destructive" />
                    <span>Fire Ant Damage</span>
                  </div>
                  <div className="flex items-center gap-3 p-3 bg-background rounded-lg">
                    <Bug className="h-5 w-5 text-destructive" />
                    <span>Fungal Infections</span>
                  </div>
                  <div className="flex items-center gap-3 p-3 bg-background rounded-lg">
                    <Bug className="h-5 w-5 text-destructive" />
                    <span>Root Rot from Poor Drainage</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Partnership CTA */}
      <section className="section-padding bg-muted/30">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl font-bold mb-8">Partner with Houston Tree Care Experts to Protect Your Trees</h2>
            <div className="prose prose-lg max-w-none">
              <p className="text-lg text-muted-foreground leading-relaxed">
                Proactive health management is the most effective way to protect your landscape investment. Early detection and professional treatment can save a struggling tree, prevent the spread of disease, and avoid the high cost of removal.
              </p>
            </div>
          </div>
        </div>
      </section>

    </Layout>;
};
export default HealthManagement;