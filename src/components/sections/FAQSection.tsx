import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { HelpCircle, Phone, Calendar } from "lucide-react";

const FAQSection = () => {
  const faqs = [
    {
      question: "How much does tree removal cost?",
      answer: "Tree removal costs vary based on size, location, complexity, and accessibility. Small trees (under 30 feet) typically range from $300-$700, medium trees (30-60 feet) from $700-$1,200, and large trees (over 60 feet) from $1,200-$3,000+. We provide free, detailed estimates for all projects."
    },
    {
      question: "Do you provide emergency tree services?",
      answer: "Yes! We offer 24/7 emergency tree services for storm damage, fallen trees, and hazardous situations. Our emergency response team can secure your property and remove dangerous trees or branches any time of day or night."
    },
    {
      question: "Are you licensed and insured?",
      answer: "Absolutely. We are fully licensed by the state of Texas and carry comprehensive liability insurance and workers' compensation coverage. We provide proof of insurance before starting any work and all our arborists are ISA certified."
    },
    {
      question: "What's the difference between tree trimming and pruning?",
      answer: "While often used interchangeably, trimming typically refers to cutting overgrown branches for aesthetic purposes, while pruning is the selective removal of specific branches for tree health, safety, and structure. Our certified arborists use proper pruning techniques to promote healthy growth."
    },
    {
      question: "How often should trees be trimmed?",
      answer: "Most trees benefit from professional trimming every 3-5 years, but this varies by species, age, location, and condition. Young trees may need more frequent attention, while mature trees require less. We assess each tree individually during our free consultations."
    },
    {
      question: "Do you clean up debris after tree work?",
      answer: "Yes, complete cleanup is included in all our services. We remove all branches, logs, and debris from your property and leave your yard cleaner than we found it. Stump grinding debris can be removed or left for natural decomposition based on your preference."
    },
    {
      question: "Can you help with insurance claims for storm damage?",
      answer: "Yes, we work with homeowners' insurance companies regularly and can provide detailed documentation, photos, and estimates to support your claim. We understand the claims process and can help ensure you receive fair compensation for storm damage."
    },
    {
      question: "What areas do you service?",
      answer: "We serve the greater Houston area including <a href='/areas/katy'><strong>Katy</strong></a>, <a href='/areas/sugar-land'><strong>Sugar Land</strong></a>, <a href='/areas/richmond'><strong>Richmond</strong></a>, <a href='/areas/rosenberg'><strong>Rosenberg</strong></a>, <a href='/areas/fulshear'><strong>Fulshear</strong></a>, <a href='/areas/cypress'><strong>Cypress</strong></a>, and surrounding communities in Harris and Fort Bend counties. Contact us to confirm service availability in your specific location."
    }
  ];

  return (
    <section className="section-padding bg-muted/30">
      <div className="container-custom">
        {/* Section Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 bg-accent/10 text-accent px-4 py-2 rounded-full text-sm font-semibold mb-4">
            <HelpCircle className="h-4 w-4" />
            Frequently Asked Questions
          </div>
          <h2 className="text-section-title mb-6">
            Your Tree Service Questions Answered
          </h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            Have questions about our tree services? Here are answers to the most common 
            questions we receive from homeowners in the Houston area.
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          {/* FAQ Accordion */}
          <Accordion type="single" collapsible className="space-y-4 mb-12">
            {faqs.map((faq, index) => (
              <AccordionItem 
                key={index} 
                value={`item-${index}`}
                className="bg-card border rounded-lg px-6 shadow-soft animate-fade-in"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <AccordionTrigger className="text-left hover:no-underline py-6">
                  <span className="font-semibold">{faq.question}</span>
                </AccordionTrigger>
                <AccordionContent className="pb-6">
                  <p className="text-muted-foreground leading-relaxed">
                    {faq.answer}
                  </p>
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>

          {/* CTA Section */}
          <div className="bg-primary rounded-2xl p-8 text-center text-primary-foreground">
            <h3 className="text-xl font-bold mb-4">
              Still Have Questions?
            </h3>
            <p className="text-primary-foreground/90 mb-6 max-w-2xl mx-auto">
              Our experienced team is here to help. Get personalized answers and a free 
              consultation for your specific tree care needs.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button variant="secondary" size="lg" asChild>
                <a href="tel:+11234567890">
                  <Phone className="h-5 w-5" />
                  Call Now for Answers
                </a>
              </Button>
              <Button variant="secondary" size="lg" asChild>
                <Link to="/contact">
                  <Calendar className="h-5 w-5" />
                  Schedule Free Consultation
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FAQSection;