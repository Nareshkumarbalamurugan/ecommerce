import { Button } from "@/components/ui/button";
import { Phone } from "lucide-react";
import heroImage from "@/assets/hero-spices.jpg";

const Hero = () => {
  return (
    <section className="relative bg-gradient-to-br from-background to-muted overflow-hidden">
      <div className="container mx-auto px-4 py-16 md:py-24">
        <div className="grid md:grid-cols-2 gap-8 items-center">
          <div className="space-y-6">
            <div className="inline-block">
              <span className="text-sm font-semibold text-primary bg-primary/10 px-4 py-2 rounded-full">
                Premium Wholesale Spices
              </span>
            </div>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight">
              Discover Our
              <br />
              <span className="text-primary">Premium Collection</span>
            </h1>
            <p className="text-lg text-muted-foreground max-w-lg">
              Sourcing the finest garlic, turmeric, chilli, and tamarind for your bulk orders. 
              Quality assured, competitive prices.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Button size="lg" asChild className="shadow-lg hover:shadow-xl transition-shadow">
                <a href="tel:+919876543210">
                  <Phone className="h-5 w-5 mr-2" />
                  Call Now
                </a>
              </Button>
              <Button size="lg" variant="outline" asChild>
                <a
                  href="https://wa.me/919876543210"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  WhatsApp Now
                </a>
              </Button>
            </div>
          </div>
          <div className="relative">
            <img
              src={heroImage}
              alt="Premium wholesale spices including chilli, garlic, turmeric, and tamarind"
              className="rounded-2xl shadow-2xl w-full h-auto"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
