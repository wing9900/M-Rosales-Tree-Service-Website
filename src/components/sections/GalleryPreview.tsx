import { useCallback, useEffect, useState } from "react";
import { CompanyName } from "@/components/CompanyName";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { OptimizedImage } from "@/components/ui/optimized-image";
import { Link } from "react-router-dom";
import { Eye, Image as ImageIcon, MapPin, Phone, Calendar, X, ChevronLeft, ChevronRight } from "lucide-react";
import { BUSINESS, ASSETS } from "@/lib/business";

const GalleryPreview = () => {
  const [activeItemIndex, setActiveItemIndex] = useState<number | null>(null);

  const galleryItems = [
    {
      title: "Professional Trimming",
      category: "Hedge Shaping",
      image: "/assets/11a3b252-343e-454b-8e6e-cd2af1d8bd6a.png",
      description: "Large hedge trimming completed for a resident in Katy, TX",
      detailedDescription: "In the well-manicured neighborhoods of Katy, a crisp, clean hedge line is essential for curb appeal. This client's boxwood hedge had become overgrown and uneven due to the intense Texas summer sun and rapid growth. Our team performed a professional shaping and trimming, restoring sharp, geometric lines and uniform height. We carefully removed all clippings, leaving the property looking pristine.\n\nThe result: A perfectly sculpted hedge that dramatically enhances the home's aesthetic, promotes healthier, denser growth, and restores a sense of order and elegance to the landscape.",
      project: "Hedge Shaping in Katy, TX",
    },
    {
      title: "Emergency Storm Response",
      category: "Emergency Services",
      image: ASSETS.emergencyTreeServiceImage,
      imageClassName: "[&_img]:object-[center_40%]",
      description: "Emergency storm damage cleanup project in Sugar Land, TX",
      detailedDescription: "After a violent thunderstorm swept through Sugar Land, this homeowner was faced with a massive tree that had fallen on their house. Our 24/7 emergency crew responded immediately to assess the hazard. We safely dismantled the tree using specialized rigging to prevent further damage, cleared all debris from the property, and secured the area.\n\nThe result: The client's property was made safe and accessible in a matter of hours, providing immediate peace of mind and preventing a prolonged, stressful disruption.",
      project: "Emergency Storm Response in Sugar Land, TX",
      location: "Sugar Land, TX",
      service: "Emergency Storm Damage Cleanup"
    },
    {
      title: "Safe Tree Removal",
      category: "Tree Removal", 
      image: ASSETS.safeTreeRemovalImage,
      imageClassName: "[&_img]:object-[center_32%]",
      description: "Removal of a hazardous tree in Pasadena, TX",
      detailedDescription: "A large, mature pine tree on this Pasadena property had died, becoming a significant threat to the client's home with every gust of wind. Due to its proximity to the house, this was a highly technical removal. Our experienced crew used professional rigging gear to carefully dismantle the tree from the top down, safely lowering each section into a designated drop zone.\n\nThe result: A major hazard was completely eliminated, protecting the client's home and family. The entire removal was executed with precision and zero impact on the surrounding property.",
      project: "Safe Tree Removal in Pasadena, TX",
      location: "Pasadena, TX",
      service: "Hazardous Tree Removal"
    },
    {
      title: "Stump Grinding Service",
      category: "Stump Grinding",
      image: "/assets/83e4a60f-a3ad-4031-b013-6de73703af69.png",
      description: "Large stump removal and cleanup in Conroe, TX",
      detailedDescription: "Following the removal of a large tree, this Conroe homeowner was left with a stubborn, oversized stump in their backyard. It was a constant obstacle for mowing and a tripping hazard for their children. Our team brought in a powerful stump grinder and obliterated the stump, grinding it well below the ground's surface. We then raked the area clean, hauled away the excess debris, and filled the hole with topsoil.\n\nThe result: The yard space was completely reclaimed. The lawn is now level, safe, and easy to maintain, with no trace that a large tree and stump were ever there.",
      project: "Stump Grinding in Conroe, TX",
      location: "Conroe, TX",
      service: "Stump Grinding Service"
    },
    {
      title: "Professional Tree Pruning",
      category: "Tree Pruning",
      image: "/assets/9b457fbe-2c47-4b38-a85e-5b87bc017dec.png",
      description: "Crown thinning and elevation project in Houston, TX",
      detailedDescription: "The magnificent live oak on this Houston property was casting dense shade, causing the lawn below to struggle. Its lower branches were also encroaching on the driveway. Our trained crew performed a thorough crown thinning, selectively removing branches to improve airflow and allow dappled sunlight to penetrate the canopy. We also elevated the crown, providing ample clearance for vehicles and pedestrians.\n\nThe result: A healthier, more beautiful tree that is now more resilient to Houston's high winds, a brighter lawn that can thrive, and safe, usable space beneath the canopy.",
      project: "Professional Tree Pruning in Houston, TX",
      location: "Houston, TX",
      service: "Crown Thinning & Elevation"
    },
    {
      title: "Professional Lot Clearing",
      category: "Lot Clearing",
      image: "/assets/f9d7952b-990f-4d19-85ca-4612d04564da.png",
      description: "Comprehensive lot clearing project in Houston, TX",
      detailedDescription: "This client was preparing to build a new house on a densely forested and unusable section of their large Houston lot. The area was covered with underbrush, invasive species, and small, undesirable trees. Our crew brought in specialized equipment to clear the entire footprint of the new project. We cleared, chipped, and hauled away all debris, leaving a clean, graded site.\n\nThe result: An unusable, overgrown area was transformed into a build-ready site in just a few days, allowing the client to move forward with their construction project on a clean, professional foundation.",
      project: "Professional Lot Clearing in Houston, TX",
      location: "Houston, TX",
      service: "Comprehensive Lot Clearing"
    }
  ];

  const totalItems = galleryItems.length;

  const openModal = useCallback((index: number) => {
    setActiveItemIndex(index);
  }, []);

  const closeModal = useCallback(() => {
    setActiveItemIndex(null);
  }, []);

  const showPrev = useCallback(() => {
    setActiveItemIndex(prev => {
      if (prev === null) return prev;
      return (prev - 1 + totalItems) % totalItems;
    });
  }, [totalItems]);

  const showNext = useCallback(() => {
    setActiveItemIndex(prev => {
      if (prev === null) return prev;
      return (prev + 1) % totalItems;
    });
  }, [totalItems]);

  const activeItem = activeItemIndex !== null ? galleryItems[activeItemIndex] : null;

  useEffect(() => {
    if (activeItemIndex === null) return;

    const originalOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";

    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        closeModal();
      } else if (event.key === "ArrowLeft") {
        showPrev();
      } else if (event.key === "ArrowRight") {
        showNext();
      }
    };

    window.addEventListener("keydown", handleKeyDown);

    return () => {
      document.body.style.overflow = originalOverflow;
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [activeItemIndex, closeModal, showNext, showPrev]);

  return (
    <section className="section-padding bg-background">
      <div className="container-custom">
        {/* Section Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 bg-success/10 text-success px-4 py-2 rounded-full text-sm font-semibold mb-4">
            <ImageIcon className="h-4 w-4" />
            Our Work Gallery
          </div>
          <h2 className="text-section-title mb-6">
            See Our Professional Results
          </h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            Take a look at our recent projects and see the quality workmanship that has made <CompanyName /> 
            the trusted choice for tree services throughout the Houston area.
          </p>
        </div>

        {/* Gallery Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
          {galleryItems.map((item, index) => (
            <button
              key={item.title}
              type="button"
              className="w-full h-full text-left bg-transparent border-0 p-0 focus:outline-none focus-visible:ring-2 focus-visible:ring-primary"
              onClick={() => openModal(index)}
            >
              <Card 
                className="group overflow-hidden hover-lift animate-fade-in cursor-pointer border-0 h-full flex flex-col"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="relative overflow-hidden h-64 shrink-0">
                  <OptimizedImage
                    src={item.image}
                    alt={`${item.title} - ${item.description}`}
                    className={`w-full h-full transition-transform duration-500 group-hover:scale-110 ${item.imageClassName ?? ""}`}
                    lazy={true}
                  />
                  
                  {/* Overlay */}
                  <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                    <div className="text-center text-white">
                      <Eye className="h-8 w-8 mx-auto mb-2" />
                      <div className="text-sm font-medium">View Details</div>
                    </div>
                  </div>
                  
                </div>
                
                <div className="p-6 flex flex-col flex-1">
                  <h3 className="text-card-title mb-2">{item.title}</h3>
                  <p className="text-sm text-muted-foreground line-clamp-2 min-h-[2.75rem]">{item.description}</p>
                </div>
              </Card>
            </button>
          ))}
        </div>

        {activeItemIndex !== null && activeItem && (
          <div
            className="fixed inset-0 z-[100] flex items-center justify-center bg-black/80 backdrop-blur-sm p-4"
            onClick={closeModal}
          >
            <div
              className="relative w-full max-w-4xl max-h-[90vh] overflow-hidden rounded-2xl bg-zinc-950/95 text-white shadow-2xl border border-white/10 flex flex-col"
              onClick={(event) => event.stopPropagation()}
            >
              <button
                type="button"
                onClick={closeModal}
                className="absolute right-4 top-4 z-20 rounded-full bg-primary text-primary-foreground p-2 shadow-md transition-colors hover:bg-primary/90 focus:outline-none focus-visible:ring-2 focus-visible:ring-primary"
              >
                <X className="h-4 w-4" />
                <span className="sr-only">Close</span>
              </button>

              <div className="relative w-full h-[55vh] sm:h-[60vh] bg-black flex-shrink-0">
                <OptimizedImage
                  src={activeItem.image}
                  alt={`${activeItem.title} - ${activeItem.description}`}
                  className="w-full h-full"
                  lazy={false}
                  priority={true}
                  fit="contain"
                  blur={false}
                />

                {totalItems > 1 && (
                  <>
                    <button
                      type="button"
                      onClick={(event) => {
                        event.stopPropagation();
                        showPrev();
                      }}
                      className="absolute left-4 top-1/2 -translate-y-1/2 rounded-full bg-white/15 p-2 text-white transition hover:bg-white/30 focus:outline-none focus-visible:ring-2 focus-visible:ring-primary"
                    >
                      <ChevronLeft className="h-6 w-6" />
                      <span className="sr-only">Previous image</span>
                    </button>
                    <button
                      type="button"
                      onClick={(event) => {
                        event.stopPropagation();
                        showNext();
                      }}
                      className="absolute right-4 top-1/2 -translate-y-1/2 rounded-full bg-white/15 p-2 text-white transition hover:bg-white/30 focus:outline-none focus-visible:ring-2 focus-visible:ring-primary"
                    >
                      <ChevronRight className="h-6 w-6" />
                      <span className="sr-only">Next image</span>
                    </button>
                  </>
                )}
              </div>

              <div className="px-6 py-6 space-y-3 overflow-y-auto flex-1">
                <div className="inline-flex items-center gap-2 text-sm font-semibold uppercase tracking-wide text-white">
                  <MapPin className="h-4 w-4" />
                  {activeItem.project ?? activeItem.title}
                </div>
                {activeItem.location && (
                  <div className="text-sm text-white/80">{activeItem.location}</div>
                )}
                <p className="text-sm text-white/80 whitespace-pre-line">
                  {activeItem.detailedDescription}
                </p>
              </div>
            </div>
          </div>
        )}

        {/* Before/After Section */}
        <div className="bg-muted/50 rounded-2xl p-8 mb-12">
          <div className="text-center mb-8">
            <h3 className="text-2xl font-bold mb-4">Before & After Transformations</h3>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              See the dramatic difference our professional tree services make. From overgrown trees 
              to clean, healthy landscapes - we transform properties throughout Houston.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-3xl mx-auto">
            <div>
              <h4 className="text-lg font-semibold mb-3 text-center">Before</h4>
              <div className="overflow-hidden rounded-lg">
                <OptimizedImage
                  src={ASSETS.beforePhoto}
                  alt="Before tree service - overgrown palm tree posing a hazard near the home"
                  className="w-full aspect-[3/4] [&_img]:object-cover [&_img]:object-[center_28%]"
                  lazy={true}
                />
              </div>
              <p className="text-muted-foreground text-sm text-center mt-3">
                Overgrown palm tree posing a hazard close to the house and needing removal
              </p>
            </div>
            <div>
              <h4 className="text-lg font-semibold mb-3 text-center">After</h4>
              <div className="overflow-hidden rounded-lg">
                <OptimizedImage
                  src={ASSETS.afterPhoto}
                  alt="After tree service - tree and stump removed with a clean lawn"
                  className="w-full aspect-[3/4] [&_img]:object-cover [&_img]:object-[center_62%]"
                  lazy={true}
                />
              </div>
              <p className="text-muted-foreground text-sm text-center mt-3">
                Tree and stump ground out with no mess left behind and no damage to the lawn or house
              </p>
            </div>
          </div>
        </div>

        {/* CTA Section */}
        <div className="text-center">
          <div className="inline-flex flex-col sm:flex-row gap-4">
            <Button variant="accent" size="lg" asChild className="[&_svg]:!h-5 [&_svg]:!w-5">
              <a href={`tel:${BUSINESS.phoneTel}`}>
                <Phone />
                Call Now
              </a>
            </Button>
            <Button variant="accent" size="lg" asChild className="[&_svg]:!h-5 [&_svg]:!w-5">
              <Link to="/contact">
                <Calendar />
                Get Free Estimate
              </Link>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default GalleryPreview;