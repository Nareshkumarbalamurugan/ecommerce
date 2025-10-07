import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";

interface CategoryCardProps {
  name: string;
  image: string;
  description: string;
  link: string;
}

const CategoryCard = ({ name, image, description, link }: CategoryCardProps) => {
  return (
    <Link
      to={link}
      className="group relative overflow-hidden rounded-xl bg-card hover:shadow-xl transition-all duration-300 hover:-translate-y-1"
    >
      <div className="aspect-square overflow-hidden">
        <img
          src={image}
          alt={name}
          className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
        />
      </div>
      <div className="p-6">
        <h3 className="text-xl font-bold mb-2">{name}</h3>
        <p className="text-sm text-muted-foreground mb-4">{description}</p>
        <div className="flex items-center text-primary font-medium group-hover:gap-2 transition-all">
          Browse Products
          <ArrowRight className="h-4 w-4 ml-1 group-hover:ml-0 transition-all" />
        </div>
      </div>
    </Link>
  );
};

export default CategoryCard;
