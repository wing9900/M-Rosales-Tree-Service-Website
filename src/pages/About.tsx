import Layout from "@/components/layout/Layout";
import { CompanyName } from "@/components/CompanyName";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Award, Users, Clock, Phone, Calendar, Star } from "lucide-react";
import { Link } from "react-router-dom";
import { ASSETS, BUSINESS } from "@/lib/business";

const About = () => {
  return <Layout>
      {/* Hero Section */}
      <section className="section-padding bg-primary text-primary-foreground">
        <div className="container-custom text-center">
          <h1 className="text-hero mb-6">
            About <CompanyName />
          </h1>
          <p className="text-xl max-w-3xl mx-auto">
            {BUSINESS.tagline}
          </p>
        </div>
      </section>

      {/* Company Story */}
      <section className="section-padding">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto flex flex-col items-center gap-10 text-center">
            <h2 className="text-section-title w-full">Our Story</h2>

            <div className="w-full max-w-2xl mx-auto overflow-hidden rounded-2xl shadow-lg">
              <img
                src={ASSETS.aboutUsCrewImage}
                alt="M Rosales Tree Service crew with chainsaws beside a large tree trunk at a job site"
                className="block w-full h-auto"
                loading="lazy"
              />
            </div>

            <div className="w-full max-w-3xl">
              <p className="text-muted-foreground mb-6 leading-relaxed">
                <CompanyName /> is a Houston-based tree service company led by {BUSINESS.ownerName} and his experienced crew.
                For over {BUSINESS.yearsExperience.replace("+", "")} years, we've helped homeowners and businesses with tree removal,
                trimming, stump grinding, lot clearing, and emergency storm cleanup throughout the greater Houston area.
              </p>
              <p className="text-muted-foreground mb-8 leading-relaxed">
                Our reputation is built on prompt communication, competitive pricing, and leaving every job site clean.
                Customers consistently praise our team for being quick, professional, and thorough. Many have trusted us
                for years and recommend us to their neighbors.
              </p>
            </div>

            <div className="flex flex-wrap gap-4 justify-center">
              <Button variant="cta" asChild>
                <a href={`tel:${BUSINESS.phoneTel}`}>
                  <Phone className="h-4 w-4" />
                  Call Today
                </a>
              </Button>
              <Button variant="cta" asChild>
                <Link to="/contact">
                  <Calendar className="h-5 w-5" />
                  Get Free Estimate
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Why Customers Trust Us */}
      <section className="section-padding bg-muted/30">
        <div className="container-custom">
          <div className="text-center mb-12">
            <h2 className="text-section-title mb-4">Why Customers Trust Us</h2>
            <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
              We earn trust through consistent results: safe work, clear communication, and a crew that treats every property with care.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <Card className="text-center">
              <CardContent className="p-8">
                <Star className="h-12 w-12 text-primary mx-auto mb-4" />
                <h3 className="font-semibold mb-2">5-Star Reviews</h3>
                <p className="text-sm text-muted-foreground">Consistently rated 5 stars by customers who praise our prompt, professional service</p>
              </CardContent>
            </Card>
            
            <Card className="text-center">
              <CardContent className="p-8">
                <Award className="h-12 w-12 text-primary mx-auto mb-4" />
                <h3 className="font-semibold mb-2">{BUSINESS.yearsExperience} Years Experience</h3>
                <p className="text-sm text-muted-foreground">
                  Over a decade serving Houston with tree removal, trimming, stump grinding, and lot clearing
                </p>
              </CardContent>
            </Card>
            
            <Card className="text-center">
              <CardContent className="p-8">
                <Users className="h-12 w-12 text-primary mx-auto mb-4" />
                <h3 className="font-semibold mb-2">Trained Crew</h3>
                <p className="text-sm text-muted-foreground">
                  {BUSINESS.ownerName} and his team have undergone comprehensive training so every crew member is prepared to complete even the most complex jobs safely
                </p>
              </CardContent>
            </Card>
            
            <Card className="text-center">
              <CardContent className="p-8">
                <Clock className="h-12 w-12 text-primary mx-auto mb-4" />
                <h3 className="font-semibold mb-2">Emergency Ready</h3>
                <p className="text-sm text-muted-foreground">
                  Available for storm damage and hazardous tree situations when you need help fast
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

    </Layout>;
};
export default About;
