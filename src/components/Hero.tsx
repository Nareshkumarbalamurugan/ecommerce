import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Phone, ChevronLeft, ChevronRight } from "lucide-react";
import heroImage from "@/assets/myimages/hero3.jpg";
import godImage from "@/assets/myimages/god.jpeg";
import visitcardimage from "@/assets/myimages/visitcard1.png";
import heroimage2 from "@/assets/myimages/hero2.png";
import ContactPrompt from "@/components/ContactPrompt";

// Carousel images - replace these with your actual images later
const carouselImages = [
  visitcardimage,// Current hero image
  heroImage,
  heroimage2,
  godImage,  // Placeholder 2 // Placeholder 3// Placeholder 4
];

const Hero = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  // Auto-rotate carousel every 4 seconds
  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % carouselImages.length);
    }, 4000);

    return () => clearInterval(timer);
  }, []);

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % carouselImages.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + carouselImages.length) % carouselImages.length);
  };

  return (
    <section className="relative overflow-hidden min-h-[85vh] flex items-center" style={{ background: "var(--hero-gradient)" }}>
      {/* Decorative elements */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-20 left-10 w-72 h-72 bg-primary rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-primary rounded-full blur-3xl"></div>
      </div>
      
      <div className="container mx-auto px-4 py-16 relative z-10">
        <div className="grid lg:grid-cols-[1fr_1.3fr] gap-12 lg:gap-16 items-center">
          {/* Text Content */}
          <div className="space-y-8 order-1 lg:order-1">
            <div className="inline-block">
              <span className="text-sm font-medium text-primary bg-primary/10 px-5 py-2.5 rounded-full border border-primary/20">
                Direct from Source • Bulk Orders Welcome
              </span>
            </div>
            
            <h1 className="text-4xl sm:text-5xl md:text-6xl xl:text-7xl font-bold leading-[1.1] tracking-tight">
              Fresh Garlic, Turmeric & More
              <span className="block mt-2 text-primary bg-gradient-to-r from-primary to-primary/70 bg-clip-text text-transparent">
                Straight to Your Business
              </span>
            </h1>
            
            <p className="text-xl text-muted-foreground max-w-xl leading-relaxed">
              We've been supplying restaurants, retailers, and food manufacturers with high-grade spices since day one. No middlemen, no markup—just quality products at wholesale rates.
            </p>
            
            <div className="flex flex-wrap gap-4 pt-2">
              <ContactPrompt context="Homepage hero" />
              <div className="flex items-center gap-2 text-sm text-muted-foreground">
                <div className="flex -space-x-2">
                  <div className="w-8 h-8 rounded-full bg-primary/20 border-2 border-background"></div>
                  <div className="w-8 h-8 rounded-full bg-primary/30 border-2 border-background"></div>
                  <div className="w-8 h-8 rounded-full bg-primary/40 border-2 border-background"></div>
                </div>
                <span className="font-medium">500+ Happy Clients</span>
              </div>
            </div>
          </div>

          {/* Carousel */}
          <div className="relative order-2 lg:order-2 group max-w-2xl mx-auto lg:max-w-none w-full">
            {/* Background decoration */}
            <div className="absolute -inset-4 bg-gradient-to-tr from-primary/20 to-transparent rounded-3xl blur-2xl opacity-40 -z-10"></div>
            
            <div className="relative rounded-3xl overflow-hidden border-2 border-border/50 shadow-2xl aspect-[4/3] bg-muted">
              {/* Carousel Images */}
              <div className="absolute inset-0 w-full h-full">
                {carouselImages.map((image, index) => (
                  <div
                    key={index}
                    className={`absolute inset-0 transition-all duration-1000 overflow-hidden ${
                      index === currentSlide 
                        ? "opacity-100 scale-100" 
                        : "opacity-0 scale-105"
                    }`}
                  >
                    <img
                      src={image}
                      alt={`Slide ${index + 1} - Premium wholesale spices`}
                      className="w-full h-full object-contain"
                    />
                  </div>
                ))}
              </div>

              {/* Navigation Arrows */}
              <button
                onClick={prevSlide}
                className="absolute left-4 top-1/2 -translate-y-1/2 bg-background/80 backdrop-blur hover:bg-background text-foreground p-3 rounded-full transition-all opacity-0 group-hover:opacity-100 shadow-lg"
                aria-label="Previous slide"
              >
                <ChevronLeft className="w-5 h-5" />
              </button>
              <button
                onClick={nextSlide}
                className="absolute right-4 top-1/2 -translate-y-1/2 bg-background/80 backdrop-blur hover:bg-background text-foreground p-3 rounded-full transition-all opacity-0 group-hover:opacity-100 shadow-lg"
                aria-label="Next slide"
              >
                <ChevronRight className="w-5 h-5" />
              </button>

              {/* Slide Indicators */}
              <div className="absolute bottom-6 left-1/2 -translate-x-1/2 flex gap-2 bg-background/40 backdrop-blur px-3 py-2 rounded-full">
                {carouselImages.map((_, index) => (
                  <button
                    key={index}
                    onClick={() => setCurrentSlide(index)}
                    className={`h-2 rounded-full transition-all ${
                      index === currentSlide
                        ? "bg-primary w-8"
                        : "bg-white/60 hover:bg-white/80 w-2"
                    }`}
                    aria-label={`Go to slide ${index + 1}`}
                  />
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
