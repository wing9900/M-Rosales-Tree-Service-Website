import { useState } from "react";
import Layout from "@/components/layout/Layout";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Dialog, DialogContent, DialogTrigger } from "@/components/ui/dialog";
import { OptimizedImage } from "@/components/ui/optimized-image";
import { ArrowLeft, Eye, X, ChevronLeft, ChevronRight, Image as ImageIcon, Calendar, Phone } from "lucide-react";
import { Link } from "react-router-dom";

const Gallery = () => {
  const [selectedImage, setSelectedImage] = useState<number | null>(null);
  const [selectedFilter, setSelectedFilter] = useState<string>("All");

  const galleryImages = [
    {
      id: 1,
      title: "Professional Lot Clearing",
      category: "Lot Clearing",
      location: "Houston, TX",
      image: "/assets/c560043f-b9f2-45db-bea6-329e65825c95.png",
      description: "Comprehensive lot clearing project showcasing our professional forest management services"
    },
    {
      id: 2,
      title: "Mature Tree Preservation",
      category: "Tree Preservation",
      location: "Sugar Land, TX",
      image: "/assets/5944f598-0061-466f-8e06-320c8005941e.png",
      description: "Beautiful example of how proper tree care enhances property value and curb appeal"
    },
     {
      id: 7,
      title: "Landscape Design Integration",
      category: "Landscape Design",
      location: "Houston, TX",
      image: "/assets/eda396dd-d8a3-4d24-9117-15aaad371689.png",
      description: "Professional integration of tree care with landscape design and garden features"
    },
    {
      id: 4,
      title: "Hedge Trimming & Shaping",
      category: "Hedge Trimming",
      location: "Katy, TX",
      image: "/assets/de6067fd-0835-4fd1-9439-92ef3b8ef3df.png",
      description: "Precision hedge trimming and landscape shaping for residential properties"
    },
    {
      id: 5,
      title: "Tree Establishment",
      category: "Tree Care",
      location: "Conroe, TX",
      image: "/assets/e0fa01c9-67f7-4b35-9696-dd91d85fc80e.png",
      description: "Expert care establishing a young tree and maximizing its odds of success in a residential landscape setting"
    },
    {
      id: 6,
      title: "Lawn Fertilization",
      category: "Lawn Care",
      location: "Pasadena, TX",
      image: "/assets/379f6253-3016-4f42-acaf-a587854ce122.png",
      description: "Customized fertilization programs providing key nutrients to promote lush, green growth and build resilience against our hot summers."
    },
    {
      id: 3,
      title: "Vista Pruning",
      category: "Tree Pruning",
      location: "The Woodlands, TX",
      image: "/assets/8b7ff4ea-2009-4747-934a-12ebcf276408.png",
      description: "Professional pruning and maintenance of a mature oak tree for optimal health, safety, and view enjoyment"
    },
  
    {
      id: 8,
      title: "Forest Management",
      category: "Forest Management",
      location: "Rosenberg, TX",
      image: "/assets/9b409e51-e319-4d2f-a64f-0db55d5b4e73.png",
      description: "Large-scale forest management and selective clearing for residential developments"
    }
  ];

  const categories = ["All", ...Array.from(new Set(galleryImages.map(img => img.category)))];

  const filteredImages = selectedFilter === "All" 
    ? galleryImages 
    : galleryImages.filter(img => img.category === selectedFilter);

  const activeImage = selectedImage !== null ? filteredImages[selectedImage] : null;
  const overlayPaddingClasses =
    activeImage && activeImage.id === 6
      ? "pt-8 pb-16 sm:pt-10 sm:pb-8"
      : "pt-8 pb-16";

  const overlayContentOffsetClasses =
    activeImage && activeImage.id === 6 ? "mb-[13%] sm:mb-0" : "mb-[13%] sm:mb-0";

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
    <Layout hideCTA={true}>
      {/* SEO Meta Tags */}
      <div className="hidden">
        <h1>Houston Tree Service Gallery - Professional Tree Care Results</h1>
        <meta name="description" content="View our professional tree service work in Houston, Sugar Land, The Woodlands, and surrounding areas. See real results from our certified arborists." />
      </div>
      
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
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
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
                <p className="text-xs text-muted-foreground line-clamp-2">{image.description}</p>
              </div>
            </Card>
          ))}
        </div>

        {/* Modal for Image Viewing */}
        {selectedImage !== null && activeImage && (
          <Dialog open={selectedImage !== null} onOpenChange={closeModal}>
            <DialogContent className="w-screen h-screen max-w-none p-0 bg-black/95 border-0 sm:max-w-4xl sm:h-auto">
              <div className="relative w-full h-full">
                {/* Close Button */}
                <Button
                  variant="ghost"
                  size="icon"
                  className="absolute top-[22%] sm:top-4 right-4 z-50 text-white hover:bg-white/20"
                  onClick={closeModal}
                >
                  <X className="h-6 w-6" />
                </Button>

                {/* Navigation Buttons */}
                <Button
                  variant="ghost"
                  size="icon"
                  className="absolute left-4 top-1/2 -translate-y-1/2 z-50 text-white hover:bg-white/20"
                  onClick={() => navigateImage('prev')}
                >
                  <ChevronLeft className="h-8 w-8" />
                </Button>

                <Button
                  variant="ghost"
                  size="icon"
                  className="absolute right-4 top-1/2 -translate-y-1/2 z-50 text-white hover:bg-white/20"
                  onClick={() => navigateImage('next')}
                >
                  <ChevronRight className="h-8 w-8" />
                </Button>

                {/* Image */}
                <div className="flex items-center justify-center w-full h-full sm:h-[85vh] p-4">
                  <OptimizedImage
                    src={activeImage.image}
                    alt={activeImage.title}
                    className="max-w-full max-h-full object-contain"
                    lazy={false}
                    priority={false}
                  />
                </div>

                {/* Image Info */}
                <div className={`absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 to-transparent px-4 sm:px-6 sm:p-6 text-white ${overlayPaddingClasses} flex flex-col justify-end`}>
                  <div className={overlayContentOffsetClasses}>
                    <h3 className="text-xl font-semibold mb-1">{activeImage.title}</h3>
                    <p className="text-sm text-white/80 mb-2">{activeImage.location}</p>
                    <p className="text-sm text-white/70">{activeImage.description}</p>
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
              <div className="text-3xl font-bold text-primary mb-2">27+</div>
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
              <a href="tel:+11234567890">
                <Phone />
                Call Now
              </a>
            </Button>
            <Link to="/contact">
              <Button size="lg" className="shadow-md hover:shadow-lg hover:bg-primary/80 [&_svg]:!h-5 [&_svg]:!w-5">
                <Calendar />
                Get Free Estimate
              </Button>
            </Link>
          </div>
        </section>
      </div>
    </Layout>
  );
};

export default Gallery;