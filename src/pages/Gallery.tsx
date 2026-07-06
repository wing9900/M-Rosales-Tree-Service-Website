import { useState } from "react";
import Layout from "@/components/layout/Layout";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Dialog, DialogContent } from "@/components/ui/dialog";
import { OptimizedImage } from "@/components/ui/optimized-image";
import { ReviewCarouselText } from "@/components/ReviewCarouselText";
import { Eye, X, ChevronLeft, ChevronRight, Image as ImageIcon, Calendar, Phone } from "lucide-react";
import { Link } from "react-router-dom";
import { BUSINESS } from "@/lib/business";
import { STUMP_GRINDING_JOB, TREE_REMOVAL_JOBS } from "@/lib/galleryImages";
import { cn } from "@/lib/utils";

/** Gallery captions longer than this get a Read more toggle on mobile. */
const GALLERY_MOBILE_EXPAND_THRESHOLD = 132;
/** Collapsed preview length for long gallery captions (~two lines on mobile). */
const GALLERY_MOBILE_PREVIEW_LENGTH = 108;

const Gallery = () => {
  const [selectedImage, setSelectedImage] = useState<number | null>(null);
  const [selectedFilter, setSelectedFilter] = useState<string>("All");

  const galleryImages = [
    ...TREE_REMOVAL_JOBS,
    {
      id: 120,
      title: STUMP_GRINDING_JOB.title,
      category: STUMP_GRINDING_JOB.category,
      location: STUMP_GRINDING_JOB.location,
      image: STUMP_GRINDING_JOB.image,
      description: STUMP_GRINDING_JOB.description,
      imageClassName: STUMP_GRINDING_JOB.imageClassName,
    },
    {
      id: 1,
      title: "Professional Lot Clearing",
      category: "Lot Clearing",
      location: "Houston, TX",
      image: "/assets/c560043f-b9f2-45db-bea6-329e65825c95.jpg",
      description: "Comprehensive lot clearing project showcasing our professional forest management services."
    },
    {
      id: 2,
      title: "Mature Tree Preservation",
      category: "Tree Preservation",
      location: "Sugar Land, TX",
      image: "/assets/5944f598-0061-466f-8e06-320c8005941e.jpg",
      description: "Beautiful example of how proper tree care enhances property value and curb appeal."
    },
     {
      id: 7,
      title: "Landscape Design Integration",
      category: "Landscape Design",
      location: "Houston, TX",
      image: "/assets/eda396dd-d8a3-4d24-9117-15aaad371689.jpg",
      description: "Professional integration of tree care with landscape design and garden features."
    },
    {
      id: 4,
      title: "Hedge Trimming & Shaping",
      category: "Hedge Trimming",
      location: "Katy, TX",
      image: "/assets/de6067fd-0835-4fd1-9439-92ef3b8ef3df.jpg",
      description: "Precision hedge trimming and landscape shaping for residential properties."
    },
    {
      id: 5,
      title: "Tree Establishment",
      category: "Tree Care",
      location: "Conroe, TX",
      image: "/assets/e0fa01c9-67f7-4b35-9696-dd91d85fc80e.jpg",
      description: "Expert care establishing a young tree and maximizing its odds of success in a residential landscape setting."
    },
    {
      id: 3,
      title: "Vista Pruning",
      category: "Tree Pruning",
      location: "The Woodlands, TX",
      image: "/assets/8b7ff4ea-2009-4747-934a-12ebcf276408.jpg",
      description: "Professional pruning and maintenance of a mature oak tree for optimal health, safety, and view enjoyment."
    },
    {
      id: 9,
      title: "Pruning For House Clearance",
      category: "Tree Pruning",
      location: "Houston, TX",
      image: "/assets/gallery/tree-pruning-house-clearance-pear.jpg",
      description: "Ornamental pear trees pruned to remove dead branches, provide clearance of the client's house, and enhance their overall shape.",
      imageClassName: "[&_img]:object-[center_40%]",
    },
    {
      id: 10,
      title: "Structural Clearance Tree Pruning",
      category: "Tree Pruning",
      location: "Houston, TX",
      image: "/assets/gallery/tree-pruning-house-clearance-canopy.jpg",
      description: "Pruned and thinned this tree's canopy to reduce the sail effect and to provide structural clearance.",
      imageClassName: "[&_img]:object-[center_35%]",
    },
    {
      id: 11,
      title: "Large Tree Pruning In Front Yard",
      category: "Tree Pruning",
      location: "Houston, TX",
      image: "/assets/gallery/large-tree-pruning-front-yard.jpg",
      description:
        "Large oak tree pruned to remove deadwood and reduce the overextended limbs to alleviate the risk of branch failure.",
      imageClassName: "[&_img]:object-[center_35%]",
    },
  
    {
      id: 8,
      title: "Forest Management",
      category: "Forest Management",
      location: "Rosenberg, TX",
      image: "/assets/9b409e51-e319-4d2f-a64f-0db55d5b4e73.jpg",
      description: "Large-scale forest management and selective clearing for residential developments."
    }
  ];

  const categories = ["All", ...Array.from(new Set(galleryImages.map(img => img.category)))];

  const filteredImages = selectedFilter === "All" 
    ? galleryImages 
    : galleryImages.filter(img => img.category === selectedFilter);

  const activeImage = selectedImage !== null ? filteredImages[selectedImage] : null;

  const openModal = (index: number) => {
    setSelectedImage(index);
  };

  const closeModal = () => {
    setSelectedImage(null);
  };

  const navigateImage = (direction: 'prev' | 'next') => {
    if (selectedImage === null) return;
    
    const newIndex = direction === 'prev' 
      ? (selectedImage - 1 + filteredImages.length) % filteredImages.length
      : (selectedImage + 1) % filteredImages.length;
    
    setSelectedImage(newIndex);
  };

  return (
    <Layout>
      <div className="container-custom section-padding">
        {/* Header */}
        <header className="text-center mb-12">
          <div className="inline-flex items-center gap-2 bg-success/10 text-success px-4 py-2 rounded-full text-sm font-semibold mb-4">
            <ImageIcon className="h-4 w-4" />
            Professional Gallery
          </div>
          
          <h1 className="text-section-title font-bold text-foreground mb-4">
            Our Tree Service Gallery
          </h1>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto mb-8">
            Explore our portfolio of professional tree services throughout Houston and surrounding areas. 
            Each project showcases our commitment to quality, safety, and customer satisfaction.
          </p>

          {/* Filter Buttons */}
          <div className="flex flex-wrap justify-center gap-2 mb-8">
            {categories.map((category) => (
              <Button
                key={category}
                variant={selectedFilter === category ? "default" : "outline"}
                size="sm"
                onClick={() => setSelectedFilter(category)}
                className="transition-all duration-200 hover:bg-primary hover:text-primary-foreground"
              >
                {category}
              </Button>
            ))}
          </div>
        </header>

        {/* Gallery Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 mb-12">
          {filteredImages.map((image, index) => (
            <Card 
              key={image.id} 
              className="group overflow-hidden hover-lift animate-fade-in cursor-pointer"
              style={{ animationDelay: `${index * 0.05}s` }}
              onClick={() => openModal(index)}
            >
              <div className="relative overflow-hidden aspect-square">
                <OptimizedImage
                  src={image.image}
                  alt={`${image.title} - ${image.description}`}
                  className={`w-full h-full transition-transform duration-500 group-hover:scale-110 ${"imageClassName" in image && image.imageClassName ? image.imageClassName : ""}`}
                  lazy={true}
                  aspectRatio="1/1"
                />
                
                {/* Overlay */}
                <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                  <div className="text-center text-white">
                    <Eye className="h-8 w-8 mx-auto mb-2" />
                    <div className="text-sm font-medium">View Details</div>
                  </div>
                </div>
                
              </div>
              
              <div className="p-4">
                <h3 className="font-semibold text-foreground mb-1 text-sm">{image.title}</h3>
                <p className="text-xs text-muted-foreground mb-2">{image.location}</p>
                <p className="text-xs text-muted-foreground">{image.description}</p>
              </div>
            </Card>
          ))}
        </div>

        {/* Modal for Image Viewing */}
        {selectedImage !== null && activeImage && (
          <Dialog open={selectedImage !== null} onOpenChange={closeModal}>
            <DialogContent className="fixed inset-0 left-0 top-0 z-50 grid h-[100dvh] max-h-[100dvh] w-screen max-w-none translate-x-0 translate-y-0 grid-rows-[1fr_auto] gap-0 overflow-hidden border-0 bg-black p-0 sm:inset-auto sm:left-[50%] sm:top-[50%] sm:block sm:h-auto sm:max-h-none sm:w-full sm:max-w-4xl sm:translate-x-[-50%] sm:translate-y-[-50%] sm:overflow-visible sm:bg-black/95">
              <div className="relative flex h-full min-h-0 w-full flex-col overflow-hidden sm:block sm:h-auto sm:overflow-visible">
                {/* Close Button */}
                <Button
                  variant="ghost"
                  size="icon"
                  className="absolute top-4 right-4 z-50 text-white hover:bg-white/20"
                  onClick={closeModal}
                >
                  <X className="h-6 w-6" />
                </Button>

                {/* Image area — bounded by remaining space above the caption on mobile */}
                <div className="relative flex min-h-0 flex-1 items-center justify-center overflow-hidden px-12 pt-14 pb-2 sm:h-[85vh] sm:flex-none sm:overflow-visible sm:p-4">
                  <Button
                    variant="ghost"
                    size="icon"
                    className="absolute left-2 top-1/2 z-50 -translate-y-1/2 text-white hover:bg-white/20 sm:left-4"
                    onClick={() => navigateImage('prev')}
                  >
                    <ChevronLeft className="h-8 w-8" />
                  </Button>

                  <Button
                    variant="ghost"
                    size="icon"
                    className="absolute right-2 top-1/2 z-50 -translate-y-1/2 text-white hover:bg-white/20 sm:right-4"
                    onClick={() => navigateImage('next')}
                  >
                    <ChevronRight className="h-8 w-8" />
                  </Button>

                  <div className="flex h-full w-full min-h-0 min-w-0 items-center justify-center sm:relative sm:inline-block sm:h-auto sm:w-auto">
                    <img
                      src={activeImage.image}
                      alt={activeImage.title}
                      className={cn(
                        "block object-contain",
                        "max-h-full max-w-full h-auto w-auto",
                        "max-sm:object-top",
                        "sm:max-h-none sm:max-w-none sm:w-[min(calc(100vw-2rem),56rem)] sm:h-[min(calc(100vh-2rem),calc(85vh-2rem))]",
                        "modalImageClassName" in activeImage && activeImage.modalImageClassName
                      )}
                    />

                    {/* Desktop caption overlay — unchanged */}
                    <div className="absolute bottom-0 left-0 right-0 hidden text-white pointer-events-none sm:block">
                      <div className="bg-gradient-to-t from-black/80 to-transparent px-4 sm:px-6 pt-6 pb-4">
                        <h3 className="text-xl font-semibold mb-1">{activeImage.title}</h3>
                        <p className="text-sm text-white/80 mb-2">{activeImage.location}</p>
                        <p className="text-sm text-white/70 leading-relaxed">{activeImage.description}</p>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Mobile caption panel — always reserved at the bottom */}
                <div className="flex h-[9rem] shrink-0 flex-col border-t border-white/10 bg-black px-4 pt-3 pb-[max(1rem,env(safe-area-inset-bottom))] sm:hidden">
                  <h3 className="shrink-0 text-base font-semibold leading-snug text-white line-clamp-1">
                    {activeImage.title}
                  </h3>
                  <p className="mt-0.5 shrink-0 text-xs text-white/65">{activeImage.location}</p>
                  <div className="mt-2 flex min-h-0 flex-1 flex-col" key={activeImage.id}>
                    <ReviewCarouselText
                      text={activeImage.description}
                      expandThreshold={GALLERY_MOBILE_EXPAND_THRESHOLD}
                      previewLength={GALLERY_MOBILE_PREVIEW_LENGTH}
                      textClassName="text-sm leading-relaxed text-white/80"
                    />
                  </div>
                </div>
              </div>
            </DialogContent>
          </Dialog>
        )}

        {/* Stats Section */}
        <div className="bg-muted/30 rounded-2xl p-8 mb-12">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
            <div>
              <div className="text-3xl font-bold text-primary mb-2">500+</div>
              <div className="text-sm text-muted-foreground">Projects Completed</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-primary mb-2">{BUSINESS.yearsExperience}</div>
              <div className="text-sm text-muted-foreground">Years Experience</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-primary mb-2">100%</div>
              <div className="text-sm text-muted-foreground">Satisfaction Rate</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-primary mb-2">24/7</div>
              <div className="text-sm text-muted-foreground">Emergency Service</div>
            </div>
          </div>
        </div>

        {/* CTA Section */}
        <section className="text-center p-8 rounded-lg bg-primary/5 border border-primary/10">
          <h2 className="text-2xl font-bold text-foreground mb-4">
            Ready to Transform Your Property?
          </h2>
          <p className="text-muted-foreground mb-6 max-w-2xl mx-auto">
            Join hundreds of satisfied customers who trust us with their tree care needs. 
            Get a free consultation and see how we can enhance your landscape.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="shadow-md hover:shadow-lg hover:bg-primary/80 [&_svg]:!h-5 [&_svg]:!w-5" asChild>
              <a href={`tel:${BUSINESS.phoneTel}`}>
                <Phone />
                Call Now
              </a>
            </Button>
            <Button size="lg" className="shadow-md hover:shadow-lg hover:bg-primary/80 [&_svg]:!h-5 [&_svg]:!w-5" asChild>
              <Link to="/contact">
                <Calendar />
                Get Free Estimate
              </Link>
            </Button>
          </div>
        </section>
      </div>
    </Layout>
  );
};

export default Gallery;