import { Button } from "@/components/ui/button";
import { Phone } from "lucide-react";
import heroImage from "@/assets/hero-spices.jpg";
import ContactPrompt from "@/components/ContactPrompt";

const Hero = () => {
  return (
    <section className="relative overflow-hidden" style={{ background: "var(--hero-gradient)" }}>
      <div className="container mx-auto px-4 py-12 md:py-20">
        <div className="grid md:grid-cols-2 gap-8 md:gap-12 items-center">
          <div className="space-y-6 text-center md:text-left">
            <div className="flex justify-center md:justify-start">
              <span className="text-xs sm:text-sm font-semibold text-primary bg-primary/10 px-4 py-2 rounded-full">
                SLS Garlic & Co. • Premium Wholesale
              </span>
            </div>
            <h1 className="text-3xl md:text-5xl lg:text-6xl font-bold leading-tight">
              Discover Our
              <br />
              <span className="text-primary">Premium Collection</span>
            </h1>
            <p className="text-lg text-muted-foreground max-w-lg">
              Sourcing the finest garlic, turmeric, chilli, and tamarind for your bulk orders. 
              Quality assured, competitive prices.
            </p>
            <div className="flex flex-col sm:flex-row gap-3 sm:gap-4">
              <ContactPrompt context="Homepage hero" />
            </div>
          </div>
          <div className="relative mt-8 md:mt-0 max-w-md mx-auto md:max-w-none w-full">
            <div className="rounded-2xl overflow-hidden border border-border shadow-[var(--shadow-glow)] aspect-video md:aspect-auto">
              <img
                src={heroImage}
                alt="Premium wholesale spices including chilli, garlic, turmeric, and tamarind"
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
