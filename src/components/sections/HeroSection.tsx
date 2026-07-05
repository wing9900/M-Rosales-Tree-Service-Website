import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { CallButton } from "@/components/ui/call-button";
import { Calendar, Star } from "lucide-react";
import { useBusinessName } from "@/contexts/BusinessNameContext";
const heroImage = "/assets/Website_Background.webp";

// Review widget profile photos - using realistic placeholder images
const reviewPhotos = [
  "https://i.pravatar.cc/150?img=47", // Woman with curly brown hair
  "https://i.pravatar.cc/150?img=33", // Man with glasses
  "https://i.pravatar.cc/150?img=68", // Woman with dark curly hair
  "https://i.pravatar.cc/150?img=12", // Man with beard
  "https://i.pravatar.cc/150?img=27", // Woman with blonde hair
];
const HeroSection = () => {
  const { businessName } = useBusinessName();
  return <section className="relative min-h-screen flex flex-col justify-start items-center overflow-hidden">
      {/* Background Image */}
      {/* ORIGINAL: object-center for all breakpoints | bg-green-900 on mobile/sm/md */}
      <div className="absolute inset-0 z-0 bg-green-900/50 sm:bg-green-900/50 md:bg-green-900/50 lg:bg-transparent xl:bg-transparent">
        {/* ORIGINAL: object-center for all breakpoints */}
        {/* Mobile: 95% to show more bottom, Desktop: 85% (original setting) */}
        <img 
          src={heroImage} 
          alt={`Professional tree service equipment - ${businessName} truck with boom lift and wood chipper`} 
          className="w-full h-full object-cover [object-position:center_95%] md:[object-position:center_85%] lg:[object-position:center_85%]"
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
            <span className="text-orange-400 whitespace-nowrap">{"Pasadena, TX"}</span>
          </h1>

          {/* Subheadline */}
          {/* ORIGINAL: text-lg sm:text-xl md:text-2xl | textShadow: '2px 2px 4px rgba(0,0,0,0.8)' */}
          <p className="text-xl sm:text-2xl md:text-3xl mb-2 sm:mb-8 text-white max-w-3xl mx-auto animate-slide-up">
            <span className="text-white font-bold tracking-wide" style={{textShadow: '3px 3px 6px rgba(0,0,0,0.9)'}}>Expert care from ISA Certified Arborists</span> 
            {/* Mobile: Separate lines */}
            <span className="block sm:hidden mt-2 font-bold tracking-wide" style={{textShadow: '3px 3px 6px rgba(0,0,0,0.9)'}}>
              <span className="block">Same-day estimates</span>
              <span className="block">Free consultations</span>
              <span className="block">27+ years experience</span>
            </span>
            {/* Desktop: Bullet format */}
            <span className="hidden sm:block mt-2 font-bold tracking-wide" style={{textShadow: '3px 3px 6px rgba(0,0,0,0.9)'}}>
              Same-day estimates • Free consultations
              <span className="block">27+ years experience</span>
            </span>
          </p>

          {/* Google Reviews Widget */}
          <div className="flex flex-col items-center justify-center mb-4 sm:mb-8 animate-fade-in">
            <div className="flex items-center gap-2 bg-white rounded-full px-3 py-2 shadow-lg scale-100 sm:scale-[1.05]">
              {/* Google Icon */}
              <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z" fill="#4285F4"/>
                <path d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" fill="#34A853"/>
                <path d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z" fill="#FBBC05"/>
                <path d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z" fill="#EA4335"/>
              </svg>
              
              {/* Overlapping Profile Pictures */}
              <div className="flex items-center -space-x-2">
                {reviewPhotos.map((photo, index) => (
                  <div
                    key={index}
                    className="relative w-7 h-7 rounded-full border-2 border-white overflow-hidden shadow-md"
                    style={{ zIndex: reviewPhotos.length - index }}
                  >
                    <img
                      src={photo}
                      alt={`Reviewer ${index + 1}`}
                      className="w-full h-full object-cover"
                    />
                  </div>
                ))}
              </div>
              
              {/* Stars and Text */}
              <div className="flex flex-col items-center ml-1.5">
                <div className="flex items-center gap-0.5 mb-0.5">
                  {[...Array(5)].map((_, i) => (
                    <Star
                      key={i}
                      className="w-3.5 h-3.5 fill-yellow-400 text-yellow-400"
                    />
                  ))}
                </div>
                <p className="text-[0.7rem] font-semibold text-gray-800 leading-tight">
                  Trusted by 128+ Clients
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