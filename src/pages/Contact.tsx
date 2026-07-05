import { useState } from "react";
import Layout from "@/components/layout/Layout";
import { CompanyName } from "@/components/CompanyName";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { OptimizedImage } from "@/components/ui/optimized-image";
import { Phone, Mail, MapPin, Clock } from "lucide-react";
import { useToast } from "@/hooks/use-toast";
const contactHeroImage = "/assets/contact-hero-landscape.jpg";
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
  return <Layout hideCTA={true}>
      {/* Hero Section with Background Image and Overlaid Form */}
      <section className="relative min-h-screen flex items-center justify-center" style={{
      backgroundImage: `url(${contactHeroImage})`,
      backgroundSize: 'cover',
      backgroundPosition: 'center center',
      backgroundRepeat: 'no-repeat'
    }}>
        {/* Dark Overlay */}
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
                Whether you need safe tree removal, professional pruning, or stump grinding, we're here to help. Call us today or fill out the form below to schedule your free consultation—our friendly crew is ready to keep your trees healthy and your property looking its best.
              </p>
            </div>

            {/* Contact Form and Booking Calendar - Side by Side */}
            <div className="max-w-7xl mx-auto">
              <div className="grid lg:grid-cols-2 gap-8">
                {/* Contact Form - Left Side */}
                <div>
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
                            <Input id="email" type="email" value={formData.email} onChange={e => handleChange("email", e.target.value)} required className="h-12 bg-gray-100 border-gray-200 text-gray-900 placeholder:text-gray-500 focus:ring-2 focus:ring-primary/20 focus:border-primary" placeholder="your.email@example.com" />
                          </div>

                          <div>
                            <Label htmlFor="phone" className="text-gray-700 font-medium mb-2 block">
                              Phone (Required)
                            </Label>
                            <Input id="phone" type="tel" value={formData.phone} onChange={e => handleChange("phone", e.target.value)} required className="h-12 bg-gray-100 border-gray-200 text-gray-900 placeholder:text-gray-500 focus:ring-2 focus:ring-primary/20 focus:border-primary" placeholder="(555) 123-4567" />
                          </div>
                        </div>

                        <div>
                          <Label htmlFor="address" className="text-gray-700 font-medium mb-2 block">
                            Address (Required)
                          </Label>
                          <Input id="address" type="text" value={formData.address} onChange={e => handleChange("address", e.target.value)} required className="h-12 bg-gray-100 border-gray-200 text-gray-900 placeholder:text-gray-500 focus:ring-2 focus:ring-primary/20 focus:border-primary" placeholder="123 Main St, City, State ZIP" />
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

                {/* Booking Calendar - Right Side */}
                <div>
                  <iframe
                    src="https://api.leadconnectorhq.com/widget/booking/Opssx8ON48iWulrY0I2b"
                    style={{ width: '100%', height: '800px', border: 'none', overflow: 'auto' }}
                    scrolling="yes"
                    id="Opssx8ON48iWulrY0I2b_1772871842799"
                  />
                  <br />
                  <script src="https://link.msgsndr.com/js/form_embed.js" type="text/javascript"></script>
                </div>
              </div>
            </div>
            
            {/* Booking Calendar Script */}
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
                      123 Main Street, Pasadena, TX 77506
                    </p>
                  </div>
                </div>

                {/* Email */}
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-primary rounded-full flex items-center justify-center flex-shrink-0">
                    <Mail className="h-6 w-6 text-white" />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-gray-900 mb-2">Email</h3>
                    <a href="mailto:info@leadingcaretree.com" className="text-gray-600 hover:text-primary transition-colors">
                      info@leadingcaretree.com
                    </a>
                  </div>
                </div>

                {/* Phone */}
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-primary rounded-full flex items-center justify-center flex-shrink-0">
                    <Phone className="h-6 w-6 text-white" />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-gray-900 mb-2">Call</h3>
                    <a href="tel:+11234567890" className="text-gray-600 hover:text-primary transition-colors font-medium">
                      (123) 456-7890
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
                    <p className="text-gray-600">Monday - Friday: 7:00 AM - 6:00 PM<br />Saturday: 8:00 AM - 4:00 PM<br />Sunday: Emergency Only</p>
                  </div>
                </div>
              </div>

              {/* Social Media */}
              <div className="mt-12 pt-8 border-t border-gray-200">
                <h3 className="text-xl font-semibold text-gray-900 mb-6">Follow Us</h3>
                <div className="flex gap-4">
                  <a href="{{FACEBOOK_URL}}" className="w-12 h-12 bg-primary hover:bg-primary/90 text-white rounded-full flex items-center justify-center shadow-lg shadow-primary/30 transition-colors" aria-label="Facebook">
                    <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
                    </svg>
                  </a>
                  <a href="{{INSTAGRAM_URL}}" className="w-12 h-12 bg-primary hover:bg-primary/90 text-white rounded-full flex items-center justify-center shadow-lg shadow-primary/30 transition-colors" aria-label="Instagram">
                    <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
                    </svg>
                  </a>
                  <a href="{{TWITTER_URL}}" className="w-12 h-12 bg-primary hover:bg-primary/90 text-white rounded-full flex items-center justify-center shadow-lg shadow-primary/30 transition-colors" aria-label="Twitter">
                    <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
                    </svg>
                  </a>
                </div>
              </div>
            </div>

            {/* Google Maps - Right Side (3 columns) */}
            <div className="lg:col-span-3">
              <div className="h-full min-h-[600px] rounded-lg overflow-hidden shadow-lg">
                <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3464.9037813862945!2d-95.36935188449443!3d29.760427081999005!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8640b8b4488d8501%3A0xca2fe32138a61be2!2sHouston%2C%20TX!5e0!3m2!1sen!2sus!4v1634567890123!5m2!1sen!2sus" width="100%" height="100%" style={{
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