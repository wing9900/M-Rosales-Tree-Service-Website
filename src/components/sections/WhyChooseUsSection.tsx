import { Card, CardContent } from "@/components/ui/card";
import { MapPin, Heart, Clock, Leaf, Calendar, Home, Pencil, MessageSquare, Wrench, Star, TreePine, Shield, ChevronLeft, ChevronRight } from "lucide-react";
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "@/components/ui/carousel";
import { useEffect, useRef, useState } from "react";
import { FEATURED_REVIEWS } from "@/lib/reviews";
import { ReviewCarouselText } from "@/components/ReviewCarouselText";
const WhyChooseUsSection = () => {
  const [api, setApi] = useState(null);
  const [isHovering, setIsHovering] = useState(false);
  const intervalRef = useRef(null);

  useEffect(() => {
    if (!api) return;

    const startAutoplay = () => {
      if (intervalRef.current) clearInterval(intervalRef.current);
      intervalRef.current = setInterval(() => {
        if (!isHovering) {
          api.scrollNext();
        }
      }, 4000);
    };

    startAutoplay();

    return () => {
      if (intervalRef.current) {
        clearInterval(intervalRef.current);
      }
    };
  }, [api, isHovering]);

  const reviews = FEATURED_REVIEWS;
  const reasons = [{
    icon: MapPin,
    title: "Local Houston Expertise",
    description: "We know Houston and the surrounding areas. From soil types to seasonal growth patterns, our experience with local trees and landscapes ensures services that suit your neighborhood's unique needs.",
    badge: "Local",
    bgColor: "bg-blue-50 dark:bg-blue-950/50",
    borderColor: "border-blue-200 dark:border-blue-800"
  }, {
    icon: Shield,
    title: "Safety First",
    description: "Your property and well-being are our top priorities. We follow strict safety protocols and use the latest equipment to ensure every job is completed carefully, efficiently, and without incident.",
    badge: "Safe",
    bgColor: "bg-orange-50 dark:bg-orange-950/50",
    borderColor: "border-orange-200 dark:border-orange-800"
  }, {
    icon: Clock,
    title: "Reliability You Can Count On",
    description: "We value your time and property. Expect punctual, organized, and efficient service that minimizes disruption and keeps your yard looking its best.",
    badge: "Dependable",
    bgColor: "bg-green-50 dark:bg-green-950/50",
    borderColor: "border-green-200 dark:border-green-800"
  }, {
    icon: Leaf,
    title: "Commitment to Sustainability",
    description: "Our methods protect both your trees and the environment. We prioritize eco-conscious techniques, including responsible pruning, recycling debris, and minimizing chemical use.",
    badge: "Eco-Friendly",
    bgColor: "bg-emerald-50 dark:bg-emerald-950/50",
    borderColor: "border-emerald-200 dark:border-emerald-800"
  }, {
    icon: Pencil,
    title: "Personalized Service",
    description: "Every tree and yard is different. We tailor our approach to your property, offering solutions that make sense for your landscape and lifestyle.",
    badge: "Custom",
    bgColor: "bg-stone-100 dark:bg-stone-900/50",
    borderColor: "border-stone-300 dark:border-stone-700"
  }, {
    icon: Home,
    title: "Respect for Your Property",
    description: "Your home and yard are important to you, and they're important to us. We maintain clean work areas, minimize impact, and leave your property better than we found it.",
    badge: "Careful",
    bgColor: "bg-amber-50 dark:bg-amber-950/50",
    borderColor: "border-amber-200 dark:border-amber-800"
  }, {
    icon: MessageSquare,
    title: "Transparent Communication",
    description: "Clear estimates, straightforward explanations, and consistent updates. We make sure you know what's happening and why, every step of the way.",
    badge: "Clear",
    bgColor: "bg-slate-50 dark:bg-slate-950/50",
    borderColor: "border-slate-200 dark:border-slate-800"
  }, {
    icon: Wrench,
    title: "Innovative Equipment & Techniques",
    description: "We invest in modern tools and proven methods to provide faster, safer, and more precise tree care for your property.",
    badge: "Advanced",
    bgColor: "bg-blue-50 dark:bg-blue-950/50",
    borderColor: "border-indigo-200 dark:border-indigo-800"
  }, {
    icon: Calendar,
    title: "Long-Term Care Focus",
    description: "We don't just trim or remove trees. We also focus on their health and longevity with proactive care and practical advice for your property.",
    badge: "Proactive",
    bgColor: "bg-teal-50 dark:bg-teal-950/50",
    borderColor: "border-teal-200 dark:border-teal-800"
  }];
  return <section className="section-padding bg-background">
      <div className="container-custom">
        {/* Section Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 bg-primary/10 text-primary px-4 py-2 rounded-full text-sm font-semibold mb-4">
            <TreePine className="h-4 w-4" />
            Your Houston Tree Care Specialists
          </div>
          <h2 className="text-section-title mb-6">
            What Sets Our Tree Services Apart
          </h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            Experience the difference that comes from working with Houston's most trusted tree care professionals. 
            Here's what makes our approach unique to your local landscape needs.
          </p>
        </div>

        {/* Reasons Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {reasons.map((reason, index) => <Card key={reason.title} className={`hover-lift animate-fade-in shadow-soft ${reason.bgColor} ${reason.borderColor} relative overflow-hidden`} style={{
          animationDelay: `${index * 0.1}s`
        }}>
              {/* Top Gradient Accent */}
              <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-[#2a5a3a] via-[#3a6a4a] to-[#2a5a3a]"></div>
              
              {/* Left Side Gradient Accent */}
              <div className="absolute top-0 left-0 bottom-0 w-1 bg-gradient-to-b from-[#2a5a3a] via-[#3a6a4a] to-[#2a5a3a]"></div>
              
              <CardContent className="p-8 text-center">
                <div className="relative mb-6">
                  <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                    <reason.icon className="h-8 w-8 text-primary" />
                  </div>
                </div>
                
                <h3 className="text-card-title mb-4">
                  {reason.title}
                </h3>
                
                <p className="text-muted-foreground text-sm leading-relaxed">
                  {reason.description}
                </p>
              </CardContent>
            </Card>)}
        </div>

        {/* Reviews Section */}
        <div id="reviews" className="mt-16 scroll-mt-32">
          <div className="text-center mb-12">
            <h3 className="text-3xl font-bold mb-4">
              What Our Clients Say
            </h3>
            <p className="text-muted-foreground max-w-2xl mx-auto mb-2">
              We're proud to be the top-rated choice for exceptional tree service.
            </p>
            <p className="text-muted-foreground max-w-2xl mx-auto mb-8">
              See what your neighbors are saying.
            </p>
            
            {/* Google Rating */}
            <div className="flex items-center justify-center gap-4 mb-8">
              <div className="text-center">
                <div className="text-2xl font-bold">EXCELLENT</div>
                <div className="flex items-center gap-1 justify-center mb-2">
                  {[...Array(5)].map((_, i) => <Star key={i} className="h-5 w-5 fill-yellow-400 text-yellow-400" />)}
                </div>
                <div className="text-sm text-muted-foreground">5-Star Rated on Google</div>
              </div>
              <div className="w-12 h-12 bg-white rounded-lg shadow-md flex items-center justify-center">
                <svg viewBox="0 0 24 24" className="w-6 h-6">
                  <path fill="#4285F4" d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z" />
                  <path fill="#34A853" d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" />
                  <path fill="#FBBC05" d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z" />
                  <path fill="#EA4335" d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z" />
                </svg>
              </div>
            </div>
          </div>

          {/* Reviews Carousel */}
          <Carousel 
            opts={{
              align: "start",
              loop: true
            }} 
            setApi={setApi}
            className="relative w-full max-w-5xl mx-auto"
            onMouseEnter={() => setIsHovering(true)}
            onMouseLeave={() => setIsHovering(false)}
          >
            <CarouselContent className="-ml-2 md:-ml-4 items-stretch py-1">
              {reviews.map(review => <CarouselItem key={review.id} className="pl-2 md:pl-4 md:basis-1/2 lg:basis-1/3 flex py-2">
                  <Card className="w-full h-[23rem] flex flex-col bg-white dark:bg-gray-800 shadow-lg border-0 overflow-visible">
                    <CardContent className="p-6 flex flex-col h-full">
                      <div className="flex items-start gap-4 mb-3 flex-shrink-0">
                        <div className="w-12 h-12 rounded-full overflow-hidden flex-shrink-0 bg-primary text-white flex items-center justify-center font-semibold text-lg">
                          {review.photoUrl ? (
                            <img
                              src={review.photoUrl}
                              alt={review.name}
                              className="w-full h-full object-cover"
                              referrerPolicy="no-referrer"
                            />
                          ) : (
                            review.avatar
                          )}
                        </div>
                        <div className="flex-1">
                          <div className="flex items-center justify-between mb-1">
                            <h4 className="font-semibold text-foreground">{review.name}</h4>
                            <div className="w-6 h-6 bg-white rounded-lg shadow-sm flex items-center justify-center">
                              <svg viewBox="0 0 24 24" className="w-4 h-4">
                                <path fill="#4285F4" d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z" />
                                <path fill="#34A853" d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" />
                                <path fill="#FBBC05" d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z" />
                                <path fill="#EA4335" d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z" />
                              </svg>
                            </div>
                          </div>
                          <div className="text-sm text-primary font-medium mb-1">{review.city}, TX</div>
                          <div className="text-sm text-muted-foreground mb-2">{review.date}</div>
                          <div className="flex items-center gap-1">
                            {[...Array(review.rating)].map((_, i) => <Star key={i} className="h-4 w-4 fill-yellow-400 text-yellow-400" />)}
                            <svg className="w-4 h-4 ml-1" viewBox="0 0 24 24" fill="none">
                              <path d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" stroke="#4285F4" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                            </svg>
                          </div>
                        </div>
                      </div>

                      <div className="flex-1 min-h-0 flex flex-col">
                        <ReviewCarouselText text={review.text} />
                      </div>
                    </CardContent>
                  </Card>
                </CarouselItem>)}
            </CarouselContent>
            <CarouselPrevious className="-left-6 hidden md:flex bg-white/90 hover:bg-white shadow-md border-gray-200" />
            <CarouselNext className="-right-6 hidden md:flex bg-white/90 hover:bg-white shadow-md border-gray-200" />
          </Carousel>
        </div>
      </div>
    </section>;
};
export default WhyChooseUsSection;