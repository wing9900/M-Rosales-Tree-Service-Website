import { useState } from "react";
import Layout from "@/components/layout/Layout";
import { CompanyName } from "@/components/CompanyName";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { Phone, MapPin, Clock } from "lucide-react";
import { useToast } from "@/hooks/use-toast";
import { ASSETS, BUSINESS } from "@/lib/business";
const contactHeroImage = ASSETS.contactHeroImage;
const Contact = () => {
  const {
    toast
  } = useToast();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    address: "",
    message: ""
  });
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Simulate form submission
    setTimeout(() => {
      toast({
        title: "Message Sent!",
        description: "We'll contact you within 24 hours to discuss your tree service needs."
      });
      setIsSubmitting(false);
      setFormData({
        firstName: "",
        lastName: "",
        email: "",
        phone: "",
        address: "",
        message: ""
      });
    }, 1000);
  };
  const handleChange = (field: string, value: string) => {
    setFormData(prev => ({
      ...prev,
      [field]: value
    }));
  };
  return <Layout>
      {/* Hero Section with Background Image and Overlaid Form */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 z-0 bg-neutral-900 overflow-hidden">
          <img
            src={contactHeroImage}
            alt={`${BUSINESS.name} chip truck and wood chipper on a job site`}
            className="absolute inset-0 w-full h-full object-cover object-[42%_center] sm:object-[48%_center] lg:object-[50%_center]"
          />
        </div>
        <div className="absolute inset-0 bg-black/50"></div>
        
        {/* Content Container */}
        <div className="relative z-10 container-custom py-20">
          <div className="max-w-6xl mx-auto">
            
            {/* Hero Title */}
            <div className="text-center mb-12">
              <p className="text-xl sm:text-2xl font-bold text-slate-100 tracking-wide mb-4">Contact Us</p>
              <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-white mb-6 leading-tight">
                <CompanyName /><br /> <br className="hidden sm:block" />
                <span className="text-emergency">Your Tree Care Experts</span>
              </h1>
              <p className="text-xl text-white/90 max-w-3xl mx-auto leading-relaxed">
                Whether you need safe tree removal, professional pruning, or stump grinding, we are here to help. Call us at {BUSINESS.phone} or send us a message below for a free estimate. Our crew responds quickly and serves the greater Houston area.
              </p>
            </div>

            <div className="max-w-2xl mx-auto">
                <Card className="shadow-2xl bg-white/95 backdrop-blur-sm border-0">
                    <CardHeader className="pb-4">
                      <CardTitle className="text-2xl font-bold text-gray-900">Send Us a Message</CardTitle>
                    </CardHeader>
                    <CardContent className="p-8 pt-4">
                      <form onSubmit={handleSubmit} className="space-y-6">
                        <div className="grid md:grid-cols-2 gap-6">
                          <div>
                            <Label htmlFor="name" className="text-gray-700 font-medium mb-2 block">
                              First (Required)
                            </Label>
                            <Input id="name" type="text" value={formData.firstName} onChange={e => handleChange("firstName", e.target.value)} required className="h-12 bg-gray-100 border-gray-200 text-gray-900 placeholder:text-gray-500 focus:ring-2 focus:ring-primary/20 focus:border-primary" placeholder="First Name" />
                          </div>
                          
                          <div>
                            <Label htmlFor="lastName" className="text-gray-700 font-medium mb-2 block">
                              Last (Required)
                            </Label>
                            <Input id="lastName" type="text" value={formData.lastName} onChange={e => handleChange("lastName", e.target.value)} required className="h-12 bg-gray-100 border-gray-200 text-gray-900 placeholder:text-gray-500 focus:ring-2 focus:ring-primary/20 focus:border-primary" placeholder="Last Name" />
                          </div>
                        </div>

                        <div className="grid md:grid-cols-2 gap-6">
                          <div>
                            <Label htmlFor="email" className="text-gray-700 font-medium mb-2 block">
                              Email (Required)
                            </Label>
                            <Input id="email" type="email" value={formData.email} onChange={e => handleChange("email", e.target.value)} required className="h-12 bg-gray-100 border-gray-200 text-gray-900 placeholder:text-gray-500 focus:ring-2 focus:ring-primary/20 focus:border-primary" placeholder="you@email.com" />
                          </div>

                          <div>
                            <Label htmlFor="phone" className="text-gray-700 font-medium mb-2 block">
                              Phone (Required)
                            </Label>
                            <Input id="phone" type="tel" value={formData.phone} onChange={e => handleChange("phone", e.target.value)} required className="h-12 bg-gray-100 border-gray-200 text-gray-900 placeholder:text-gray-500 focus:ring-2 focus:ring-primary/20 focus:border-primary" placeholder="(281) 804-5020" />
                          </div>
                        </div>

                        <div>
                          <Label htmlFor="address" className="text-gray-700 font-medium mb-2 block">
                            Address (Required)
                          </Label>
                          <Input id="address" type="text" value={formData.address} onChange={e => handleChange("address", e.target.value)} required className="h-12 bg-gray-100 border-gray-200 text-gray-900 placeholder:text-gray-500 focus:ring-2 focus:ring-primary/20 focus:border-primary" placeholder="1929 Coulcrest Dr, Houston, TX 77055" />
                        </div>

                        <div>
                          <Label htmlFor="message" className="text-gray-700 font-medium mb-2 block">
                            How Can We Help You?
                          </Label>
                          <Textarea id="message" value={formData.message} onChange={e => handleChange("message", e.target.value)} className="min-h-[120px] bg-gray-100 border-gray-200 text-gray-900 placeholder:text-gray-500 focus:ring-2 focus:ring-primary/20 focus:border-primary resize-none" placeholder="Please describe your tree service needs, any specific concerns, or questions you have..." />
                        </div>

                        <Button type="submit" variant="accent" size="xl" className="w-full" disabled={isSubmitting}>
                          {isSubmitting ? "Processing..." : "Submit"}
                        </Button>
                      </form>
                    </CardContent>
                  </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Information & Map Section */}
      <section className="section-padding bg-gray-50">
        <div className="container-custom">
          <div className="grid lg:grid-cols-5 gap-12">
            
            {/* Contact Information - Left Side (2 columns) */}
            <div className="lg:col-span-2">
              <div className="mb-8">
                <h2 className="text-4xl font-bold text-gray-900 mb-4">Contact Us</h2>
              </div>
              
              <div className="space-y-8">
                {/* Address */}
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-primary rounded-full flex items-center justify-center flex-shrink-0">
                    <MapPin className="h-6 w-6 text-white" />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-gray-900 mb-2">Address</h3>
                    <p className="text-gray-600 leading-relaxed">
                      {BUSINESS.fullAddress}
                    </p>
                  </div>
                </div>

                {/* Phone */}
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-primary rounded-full flex items-center justify-center flex-shrink-0">
                    <Phone className="h-6 w-6 text-white" />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-gray-900 mb-2">Call</h3>
                    <a href={`tel:${BUSINESS.phoneTel}`} className="text-gray-600 hover:text-primary transition-colors font-medium block">
                      {BUSINESS.phone}
                    </a>
                    <a href={`tel:${BUSINESS.phoneSecondaryTel}`} className="text-gray-600 hover:text-primary transition-colors font-medium block mt-1">
                      {BUSINESS.phoneSecondary}
                    </a>
                  </div>
                </div>

                {/* Hours */}
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-primary rounded-full flex items-center justify-center flex-shrink-0">
                    <Clock className="h-6 w-6 text-white" />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-gray-900 mb-2">Hours of Operation</h3>
                    <p className="text-gray-600 whitespace-pre-line">{BUSINESS.hoursDetail}</p>
                  </div>
                </div>
              </div>

              {/* Social Media */}
              <div className="mt-12 pt-8 border-t border-gray-200">
                <h3 className="text-xl font-semibold text-gray-900 mb-6">Follow Us</h3>
                <div className="flex gap-4">
                  <a href={BUSINESS.facebookUrl} target="_blank" rel="noopener noreferrer" className="w-12 h-12 bg-primary hover:bg-primary/90 text-white rounded-full flex items-center justify-center shadow-lg shadow-primary/30 transition-colors" aria-label="Facebook">
                    <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
                    </svg>
                  </a>
                </div>
              </div>
            </div>

            {/* Google Maps - Right Side (3 columns) */}
            <div className="lg:col-span-3">
              <div className="h-full min-h-[600px] rounded-lg overflow-hidden shadow-lg">
                <iframe src={BUSINESS.mapsEmbedUrl} width="100%" height="100%" style={{
                border: 0,
                minHeight: '600px'
              }} allowFullScreen={true} loading="lazy" referrerPolicy="no-referrer-when-downgrade" title="Our Service Area Map" />
              </div>
            </div>
          </div>
        </div>
      </section>
    </Layout>;
};
export default Contact;