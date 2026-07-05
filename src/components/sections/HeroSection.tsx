import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { CallButton } from "@/components/ui/call-button";
import { Calendar, Star } from "lucide-react";
import { useBusinessName } from "@/contexts/BusinessNameContext";
import { ASSETS, BUSINESS } from "@/lib/business";
import { HERO_REVIEW_PHOTOS } from "@/lib/reviews";
const heroImage = ASSETS.heroImage;
const HeroSection = () => {
  const { businessName } = useBusinessName();
  return <section className="relative min-h-screen flex flex-col justify-start items-center overflow-hidden">
      {/* Background Image */}
      {/* ORIGINAL: object-center for all breakpoints | bg-green-900 on mobile/sm/md */}
      <div className="absolute inset-0 z-0 bg-neutral-800 overflow-hidden">
        <img 
          src={heroImage} 
          alt={`${businessName} crew with chip truck and wood chipper`}
          className="w-full h-full object-cover object-[center_38%] scale-[1.35] sm:object-[center_50%] sm:scale-100 lg:object-[center_48%]"
        />
        <div className="absolute inset-0 bg-black/[0.11]" />
      </div>

      {/* Content */}
      {/* ORIGINAL MOBILE POSITIONING: pt-36 | mb-6, mb-4, mb-6, mb-4 | CURRENT: pt-20 */}
      <div className="relative z-10 container-custom text-center text-white flex flex-col justify-start items-center min-h-screen pt-24 sm:justify-center sm:pt-0">
        <div className="max-w-4xl mx-auto w-full px-4">
          {/* Main Headline */}
          {/* ORIGINAL: text-hero (which is text-4xl md:text-5xl lg:text-6xl) */}
          <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold tracking-tight mb-4 sm:mb-6 -mt-0 sm:-mt-4 animate-slide-up" style={{textShadow: '2px 2px 4px rgba(0,0,0,0.8)'}}>
            Professional Tree Services in{" "}
            <span className="text-orange-400 whitespace-nowrap">{BUSINESS.serviceAreaLabel}</span>
          </h1>

          {/* Subheadline */}
          {/* ORIGINAL: text-lg sm:text-xl md:text-2xl | textShadow: '2px 2px 4px rgba(0,0,0,0.8)' */}
          <p className="text-xl sm:text-2xl md:text-3xl mb-2 sm:mb-8 text-white max-w-3xl mx-auto animate-slide-up">
            <span className="text-white font-bold tracking-wide" style={{textShadow: '3px 3px 6px rgba(0,0,0,0.9)'}}>{BUSINESS.heroTrustLine}</span> 
            {/* Mobile: Separate lines */}
            <span className="block sm:hidden mt-2 font-bold tracking-wide" style={{textShadow: '3px 3px 6px rgba(0,0,0,0.9)'}}>
              <span className="block">Same-day estimates</span>
              <span className="block">Free consultations</span>
              <span className="block">{BUSINESS.yearsExperience} years serving Houston</span>
            </span>
            {/* Desktop: two lines so 14+ fits cleanly */}
            <span className="hidden sm:block mt-2 font-bold tracking-wide" style={{textShadow: '3px 3px 6px rgba(0,0,0,0.9)'}}>
              <span className="block">{BUSINESS.heroSubline}</span>
              <span className="block mt-1">{BUSINESS.yearsExperience} years serving Houston</span>
            </span>
          </p>

          {/* Google Reviews Widget */}
          <div className="flex flex-col items-center justify-center mb-4 sm:mb-8 animate-fade-in">
            <div className="flex items-center gap-2.5 bg-white rounded-full px-3.5 py-2 shadow-lg scale-100 sm:scale-[1.05]">
              {/* Overlapping Profile Pictures */}
              <div className="flex items-center -space-x-2">
                {HERO_REVIEW_PHOTOS.map((reviewer, index) => (
                  <div
                    key={reviewer.name}
                    className="relative w-7 h-7 rounded-full border-2 border-white overflow-hidden shadow-md bg-gray-100"
                    style={{ zIndex: HERO_REVIEW_PHOTOS.length - index }}
                  >
                    <img
                      src={reviewer.url}
                      alt={reviewer.name}
                      className="w-full h-full object-cover"
                      referrerPolicy="no-referrer"
                      loading="eager"
                    />
                  </div>
                ))}
              </div>
              
              {/* Stars and Text */}
              <div className="flex flex-col items-center ml-0.5 min-w-0">
                <div className="flex items-center justify-center gap-0.5 mb-0.5">
                  {[...Array(5)].map((_, i) => (
                    <Star
                      key={i}
                      className="w-3.5 h-3.5 fill-yellow-400 text-yellow-400"
                    />
                  ))}
                </div>
                <p className="text-[0.7rem] font-semibold text-gray-800 leading-tight whitespace-nowrap text-center">
                  {BUSINESS.reviewWidget}
                </p>
              </div>
            </div>
          </div>

          {/* CTA Buttons - Positioned closer to text */}
          {/* ORIGINAL MOBILE MARGIN: mb-4 | CURRENT: mb-2 */}
          <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center mb-6 sm:mb-8 animate-scale-in">
            <CallButton variant="cta" size="xl" className="text-lg h-14 shadow-[0_4px_8px_rgba(0,0,0,0.3)] [&_svg]:!h-5 [&_svg]:!w-5" showIcon={true}>
              Call Now
            </CallButton>
            <Button variant="cta" size="xl" className="text-lg h-14 [&_svg]:!h-5 [&_svg]:!w-6" asChild style={{boxShadow: '0 4px 8px rgba(0,0,0,0.3)'}}>
              <Link to="/contact">
                <Calendar />
                Get Free Estimate
              </Link>
            </Button>
          </div>

        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 text-white animate-bounce">
        
      </div>
    </section>;
};
export default HeroSection;