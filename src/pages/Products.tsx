import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import ProductCard from "@/components/ProductCard";
import BankInfo from "@/components/BankInfo";
import ContactPrompt from "@/components/ContactPrompt";
import { useQuery } from "@tanstack/react-query";
import { supabase } from "@/integrations/supabase/client";
import { useEffect } from "react";
import { useLocation, Link } from "react-router-dom";
import garlicImage from "@/assets/garlic.jpg";
import turmericImage from "@/assets/turmeric.jpg";
import chilliImage from "@/assets/chilli.jpg";
import tamarindImage from "@/assets/tamarind.jpg";

// Map image names to actual imports
const imageMap: Record<string, string> = {
  "garlic-1.jpg": garlicImage,
  "turmeric-1.jpg": turmericImage,
  "chilli-1.jpg": chilliImage,
  "tamarind-1.jpg": tamarindImage,
};

const Products = () => {
  const location = useLocation();

  const { data: products, isLoading } = useQuery({
    queryKey: ["products"],
    queryFn: async () => {
      const { data, error } = await supabase
        .from("products")
        .select("*")
        .order("category", { ascending: true })
        .order("name", { ascending: true });

      if (error) throw error;
      return data;
    },
  });

  useEffect(() => {
    if (location.hash) {
      const element = document.querySelector(location.hash);
      if (element) {
        element.scrollIntoView({ behavior: "smooth" });
      }
    }
  }, [location]);

  // Group products by category
  const productsByCategory = products?.reduce((acc: Record<string, any[]>, product) => {
    if (!acc[product.category]) {
      acc[product.category] = [];
    }
    acc[product.category].push(product);
    return acc;
  }, {});

  const categories = Object.keys(productsByCategory || {});

  return (
    <div className="min-h-screen">
      <Navbar />
      
      {/* Header */}
      <section className="bg-gradient-to-br from-primary to-primary/80 text-primary-foreground py-16">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Our Products</h1>
          <p className="text-lg opacity-90 max-w-2xl mx-auto">
            Browse our extensive range of premium wholesale spices. Click any product for details and pricing.
          </p>
        </div>
      </section>

      <div className="container mx-auto px-4 py-16">
        {categories.length > 0 && (
          <div className="flex gap-3 mb-10 overflow-x-auto pb-2 -mx-4 px-4 snap-x">
            {categories.map((cat) => (
              <Link
                key={cat}
                to={`/category/${cat}`}
                className="px-5 py-2.5 rounded-full bg-secondary text-secondary-foreground hover:bg-muted transition-colors whitespace-nowrap snap-start"
              >
                {cat.charAt(0).toUpperCase() + cat.slice(1)}
              </Link>
            ))}
          </div>
        )}
        {isLoading ? (
          <div className="text-center py-16">
            <p>Loading products...</p>
          </div>
        ) : (
          <>
            {/* Garlic Section */}
            <section id="garlic" className="mb-16 scroll-mt-20">
              <div className="mb-8">
                <h2 className="text-3xl font-bold mb-2">Garlic</h2>
                <p className="text-muted-foreground">Premium quality garlic in various forms for your business needs</p>
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                {productsByCategory?.garlic?.map((product) => (
                  <ProductCard
                    key={product.id}
                    id={product.id}
                    name={product.name}
                    image={imageMap[product.images[0]] || garlicImage}
                    description={product.description}
                    quantities={product.quantities}
                    price={Number(product.price_per_kg)}
                    category={product.category}
                  />
                ))}
              </div>
            </section>

            {/* Turmeric Section */}
            <section id="turmeric" className="mb-16 scroll-mt-20">
              <div className="mb-8">
                <h2 className="text-3xl font-bold mb-2">Turmeric</h2>
                <p className="text-muted-foreground">Golden quality turmeric roots and powder for wholesale</p>
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                {productsByCategory?.turmeric?.map((product) => (
                  <ProductCard
                    key={product.id}
                    id={product.id}
                    name={product.name}
                    image={imageMap[product.images[0]] || turmericImage}
                    description={product.description}
                    quantities={product.quantities}
                    price={Number(product.price_per_kg)}
                    category={product.category}
                  />
                ))}
              </div>
            </section>

            {/* Chilli Section */}
            <section id="chilli" className="mb-16 scroll-mt-20">
              <div className="mb-8">
                <h2 className="text-3xl font-bold mb-2">Chilli</h2>
                <p className="text-muted-foreground">Multiple varieties of chillies to suit every taste and requirement</p>
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                {productsByCategory?.chilli?.map((product) => (
                  <ProductCard
                    key={product.id}
                    id={product.id}
                    name={product.name}
                    image={imageMap[product.images[0]] || chilliImage}
                    description={product.description}
                    quantities={product.quantities}
                    price={Number(product.price_per_kg)}
                    category={product.category}
                  />
                ))}
              </div>
            </section>

            {/* Tamarind Section */}
            <section id="tamarind" className="mb-16 scroll-mt-20">
              <div className="mb-8">
                <h2 className="text-3xl font-bold mb-2">Tamarind</h2>
                <p className="text-muted-foreground">High-quality tamarind in whole and processed forms</p>
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                {productsByCategory?.tamarind?.map((product) => (
                  <ProductCard
                    key={product.id}
                    id={product.id}
                    name={product.name}
                    image={imageMap[product.images[0]] || tamarindImage}
                    description={product.description}
                    quantities={product.quantities}
                    price={Number(product.price_per_kg)}
                    category={product.category}
                  />
                ))}
              </div>
            </section>
          </>
        )}

        {/* Bulk Order Note */}
        <div className="bg-muted/50 p-8 rounded-xl">
          <div className="text-center">
            <h3 className="text-2xl font-bold mb-3">Bulk Orders & Custom Requirements</h3>
            <p className="text-muted-foreground mb-6">
              Looking for larger quantities or specific varieties? Contact us directly for competitive wholesale pricing.
            </p>
            <ContactPrompt context="Products page" className="justify-center" />
          </div>
          <BankInfo title="Sample Bank Details for Direct Transfer" />
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default Products;
