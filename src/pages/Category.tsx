import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import ProductCard from "@/components/ProductCard";
import { useParams, Link } from "react-router-dom";
import { useQuery } from "@tanstack/react-query";
import { supabase } from "@/integrations/supabase/client";
import garlicImage from "@/assets/garlic.jpg";
import garlicImage2 from "@/assets/garlic-2.jpg";
import garlicImage3 from "@/assets/garlic-3.jpg";
import turmericImage from "@/assets/turmeric.jpg";
import turmericImage2 from "@/assets/turmeric-2.jpg";
import turmericImage3 from "@/assets/turmeric-3.jpg";
import chilliImage from "@/assets/chilli.jpg";
import chilliImage2 from "@/assets/chilli-2.jpg";
import chilliImage3 from "@/assets/chilli-3.jpg";
import tamarindImage from "@/assets/tamarind.jpg";
import tamarindImage2 from "@/assets/tamarind-2.jpg";
import tamarindImage3 from "@/assets/tamarind-3.jpg";

const titleCase = (s: string) => s.charAt(0).toUpperCase() + s.slice(1);

const imageMap: Record<string, string> = {
  "garlic-1.jpg": garlicImage,
  "garlic-2.jpg": garlicImage2,
  "garlic-3.jpg": garlicImage3,
  "turmeric-1.jpg": turmericImage,
  "turmeric-2.jpg": turmericImage2,
  "turmeric-3.jpg": turmericImage3,
  "chilli-1.jpg": chilliImage,
  "chilli-2.jpg": chilliImage2,
  "chilli-3.jpg": chilliImage3,
  "tamarind-1.jpg": tamarindImage,
  "tamarind-2.jpg": tamarindImage2,
  "tamarind-3.jpg": tamarindImage3,
};

const Category = () => {
  const { category = "" } = useParams();

  const { data: products, isLoading } = useQuery({
    queryKey: ["category-products", category],
    queryFn: async () => {
      const { data, error } = await supabase
        .from("products")
        .select("*")
        .eq("category", category)
        .order("name", { ascending: true });
      if (error) throw error;
      return data;
    },
  });

  return (
    <div className="min-h-screen">
      <Navbar />

      <section className="bg-gradient-to-br from-primary to-primary/80 text-primary-foreground py-12">
        <div className="container mx-auto px-4">
          <nav className="text-sm mb-2 opacity-90">
            <Link to="/" className="hover:underline">Home</Link>
            <span className="mx-2">/</span>
            <Link to="/products" className="hover:underline">Products</Link>
            <span className="mx-2">/</span>
            <span className="font-medium">{titleCase(category)}</span>
          </nav>
          <h1 className="text-3xl md:text-4xl font-bold">{titleCase(category)} Products</h1>
          <p className="opacity-90 mt-2">Explore all {category} options available for wholesale.</p>
        </div>
      </section>

      <div className="container mx-auto px-4 py-12">
        {isLoading ? (
          <div className="text-center py-16">Loading products...</div>
        ) : products && products.length > 0 ? (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {products.map((product) => (
              <ProductCard
                key={product.id}
                id={product.id}
                name={product.name}
                image={imageMap[product.images?.[0]] || garlicImage}
                description={product.description}
                quantities={product.quantities}
                price={Number(product.price_per_kg)}
                category={product.category}
              />
            ))}
          </div>
        ) : (
          <div className="text-center py-16 text-muted-foreground">No products found in this category.</div>
        )}
      </div>

      <Footer />
    </div>
  );
};

export default Category;
