import { Link, useLocation } from "react-router-dom";

interface ProductCardProps {
  id: string;
  name: string;
  image: string;
  description: string;
  quantities: string;
  price: number;
  category?: string;
}

const ProductCard = ({ id, name, image, description, quantities, price, category }: ProductCardProps) => {
  const location = useLocation();
  return (
    <Link
      to={`/product/${id}`}
      state={{ from: location.pathname, category }}
      className="bg-card rounded-xl overflow-hidden shadow-sm hover:shadow-lg transition-all hover:-translate-y-1 block border border-border/60"
    >
      <div className="aspect-square overflow-hidden">
        <img src={image} alt={name} loading="lazy" className="w-full h-full object-cover hover:scale-110 transition-transform duration-300" />
      </div>
      <div className="p-6 space-y-3">
        <div>
          <h3 className="text-xl font-bold mb-2">{name}</h3>
          <p className="text-sm text-muted-foreground mb-2">{description}</p>
          <p className="text-sm text-muted-foreground">Available: {quantities}</p>
        </div>
        <div className="flex items-center justify-between pt-3 border-t border-border/60">
          <div>
            <div className="text-xs text-muted-foreground">Price per kg</div>
            <div className="text-2xl font-bold text-primary">₹{price}</div>
          </div>
          <div className="text-sm text-primary font-medium">
            View Details →
          </div>
        </div>
      </div>
    </Link>
  );
};

export default ProductCard;
