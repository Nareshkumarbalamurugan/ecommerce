import { useParams, Link, useLocation } from "react-router-dom";
import { useQuery } from "@tanstack/react-query";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Phone, ArrowLeft, CreditCard } from "lucide-react";
import { supabase } from "@/integrations/supabase/client";
import { useState } from "react";
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
import BankInfo from "@/components/BankInfo";
import ContactPrompt from "@/components/ContactPrompt";

// Map image names to actual imports
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

const ProductDetail = () => {
  const { id } = useParams();
  const location = useLocation() as { state?: { from?: string; category?: string } };
  const [selectedImage, setSelectedImage] = useState(0);

  const { data: product, isLoading } = useQuery({
    queryKey: ["product", id],
    queryFn: async () => {
      const { data, error } = await supabase
        .from("products")
        .select("*")
        .eq("id", id)
        .single();

      if (error) throw error;
      return data;
    },
  });

  if (isLoading) {
    return (
      <div className="min-h-screen">
        <Navbar />
        <div className="container mx-auto px-4 py-16 text-center">
          <p>Loading product details...</p>
        </div>
        <Footer />
      </div>
    );
  }

  if (!product) {
    return (
      <div className="min-h-screen">
        <Navbar />
        <div className="container mx-auto px-4 py-16 text-center">
          <p>Product not found</p>
          <Link to="/products" className="text-primary hover:underline mt-4 inline-block">
            Back to Products
          </Link>
        </div>
        <Footer />
      </div>
    );
  }

  const images = product.images.map((img: string) => imageMap[img] || garlicImage);
  const whatsappMessage = `Hi, I'm interested in bulk orders of ${product.name}. Please provide details.`;
  const whatsappUrl = `https://wa.me/919789535353?text=${encodeURIComponent(whatsappMessage)}`;

  return (
    <div className="min-h-screen">
      <Navbar />

      <div className="container mx-auto px-4 py-8">
        <Link
          to={location.state?.category ? `/category/${location.state.category}` : 
              location.state?.from || "/products"}
          className="inline-flex items-center text-primary hover:underline mb-6"
        >
          <ArrowLeft className="h-4 w-4 mr-2" />
          Back to Products
        </Link>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Image Gallery */}
          <div>
            <div className="aspect-square rounded-xl overflow-hidden bg-muted mb-4">
              <img
                src={images[selectedImage]}
                alt={product.name}
                className="w-full h-full object-cover"
              />
            </div>
            <div className="grid grid-cols-3 gap-4">
              {images.map((img: string, index: number) => (
                <button
                  key={index}
                  onClick={() => setSelectedImage(index)}
                  className={`aspect-square rounded-lg overflow-hidden border-2 transition-all ${
                    selectedImage === index
                      ? "border-primary"
                      : "border-transparent hover:border-muted-foreground"
                  }`}
                >
                  <img
                    src={img}
                    alt={`${product.name} - Image ${index + 1}`}
                    className="w-full h-full object-cover"
                  />
                </button>
              ))}
            </div>
          </div>

          {/* Product Info */}
          <div className="space-y-6">
            <div>
              <div className="text-sm text-muted-foreground mb-2 uppercase">
                {product.category}
              </div>
              <h1 className="text-4xl font-bold mb-4">{product.name}</h1>
              <p className="text-muted-foreground text-lg">{product.description}</p>
            </div>

            <div className="bg-primary/10 p-6 rounded-xl">
              <div className="text-sm text-muted-foreground mb-2">Price per kg</div>
              <div className="text-4xl font-bold text-primary">
                ₹{product.price_per_kg}
              </div>
            </div>

            <div>
              <div className="font-bold mb-2">Available Quantities:</div>
              <p className="text-muted-foreground">{product.quantities}</p>
            </div>

            {/* Contact Buttons */}
            <div className="space-y-3">
              <ContactPrompt context="Product detail" productName={product.name} />
            </div>

            {/* Bank Details */}
            <BankInfo compact />

            {/* Additional Contact Info */}
            <div className="border-t pt-4">
              <p className="text-sm text-muted-foreground mb-2">Contact Us:</p>
              <div className="space-y-1 text-sm">
                <p>📞 Shop: 044 43165353 (MSR)</p>
                <p>📞 Cell: 97895 35353</p>
                <p>📞 Cell: 93603 35353</p>
                <p>⏰ Mon-Sat: 9 AM - 7 PM</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default ProductDetail;
