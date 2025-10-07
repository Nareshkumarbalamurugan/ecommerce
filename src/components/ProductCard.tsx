import { Button } from "@/components/ui/button";
import { Phone } from "lucide-react";

interface ProductCardProps {
  name: string;
  image: string;
  description: string;
  quantities: string;
}

const ProductCard = ({ name, image, description, quantities }: ProductCardProps) => {
  const whatsappMessage = `Hi, I'm interested in bulk orders of ${name}. Please provide details.`;
  const whatsappUrl = `https://wa.me/919876543210?text=${encodeURIComponent(whatsappMessage)}`;

  return (
    <div className="bg-card rounded-xl overflow-hidden shadow-md hover:shadow-xl transition-shadow">
      <div className="aspect-square overflow-hidden">
        <img src={image} alt={name} className="w-full h-full object-cover" />
      </div>
      <div className="p-6 space-y-4">
        <div>
          <h3 className="text-xl font-bold mb-2">{name}</h3>
          <p className="text-sm text-muted-foreground mb-2">{description}</p>
          <p className="text-sm font-medium text-primary">Available: {quantities}</p>
        </div>
        <div className="flex flex-col sm:flex-row gap-2">
          <Button size="sm" variant="outline" asChild className="flex-1">
            <a href="tel:+919876543210">
              <Phone className="h-4 w-4 mr-2" />
              Call
            </a>
          </Button>
          <Button size="sm" asChild className="flex-1">
            <a href={whatsappUrl} target="_blank" rel="noopener noreferrer">
              WhatsApp
            </a>
          </Button>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
