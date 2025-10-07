import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import ProductCard from "@/components/ProductCard";
import garlicImage from "@/assets/garlic.jpg";
import turmericImage from "@/assets/turmeric.jpg";
import chilliImage from "@/assets/chilli.jpg";
import tamarindImage from "@/assets/tamarind.jpg";
import { useEffect } from "react";
import { useLocation } from "react-router-dom";

const products = {
  garlic: [
    {
      name: "White Garlic",
      image: garlicImage,
      description: "Fresh premium white garlic bulbs",
      quantities: "50kg, 100kg, 500kg bags",
    },
    {
      name: "Purple Garlic",
      image: garlicImage,
      description: "Aromatic purple variety garlic",
      quantities: "50kg, 100kg, 500kg bags",
    },
    {
      name: "Dried Garlic Flakes",
      image: garlicImage,
      description: "Premium quality dried garlic",
      quantities: "25kg, 50kg, 100kg bags",
    },
  ],
  turmeric: [
    {
      name: "Raw Turmeric Roots",
      image: turmericImage,
      description: "Fresh turmeric rhizomes",
      quantities: "50kg, 100kg, 500kg bags",
    },
    {
      name: "Turmeric Powder",
      image: turmericImage,
      description: "Pure ground turmeric powder",
      quantities: "25kg, 50kg, 100kg bags",
    },
    {
      name: "Organic Turmeric",
      image: turmericImage,
      description: "Certified organic turmeric",
      quantities: "25kg, 50kg bags",
    },
  ],
  chilli: [
    {
      name: "Red Chilli Whole",
      image: chilliImage,
      description: "Dried red chillies, medium heat",
      quantities: "25kg, 50kg, 100kg bags",
    },
    {
      name: "Red Chilli Powder",
      image: chilliImage,
      description: "Ground red chilli powder",
      quantities: "25kg, 50kg, 100kg bags",
    },
    {
      name: "Green Chilli Fresh",
      image: chilliImage,
      description: "Fresh green chillies",
      quantities: "50kg, 100kg crates",
    },
    {
      name: "Kashmiri Chilli",
      image: chilliImage,
      description: "Mild heat, rich color variety",
      quantities: "25kg, 50kg bags",
    },
  ],
  tamarind: [
    {
      name: "Tamarind Pods",
      image: tamarindImage,
      description: "Whole dried tamarind pods",
      quantities: "50kg, 100kg, 500kg bags",
    },
    {
      name: "Seedless Tamarind",
      image: tamarindImage,
      description: "Premium seedless tamarind",
      quantities: "25kg, 50kg bags",
    },
    {
      name: "Tamarind Concentrate",
      image: tamarindImage,
      description: "Pure tamarind pulp concentrate",
      quantities: "25kg, 50kg containers",
    },
  ],
};

const Products = () => {
  const location = useLocation();

  useEffect(() => {
    if (location.hash) {
      const element = document.querySelector(location.hash);
      if (element) {
        element.scrollIntoView({ behavior: "smooth" });
      }
    }
  }, [location]);

  return (
    <div className="min-h-screen">
      <Navbar />
      
      {/* Header */}
      <section className="bg-gradient-to-br from-primary to-primary/80 text-primary-foreground py-16">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Our Products</h1>
          <p className="text-lg opacity-90 max-w-2xl mx-auto">
            Browse our extensive range of premium wholesale spices. For bulk orders, contact us via call or WhatsApp.
          </p>
        </div>
      </section>

      <div className="container mx-auto px-4 py-16">
        {/* Garlic Section */}
        <section id="garlic" className="mb-16 scroll-mt-20">
          <div className="mb-8">
            <h2 className="text-3xl font-bold mb-2">Garlic</h2>
            <p className="text-muted-foreground">Premium quality garlic in various forms for your business needs</p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {products.garlic.map((product, index) => (
              <ProductCard key={index} {...product} />
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
            {products.turmeric.map((product, index) => (
              <ProductCard key={index} {...product} />
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
            {products.chilli.map((product, index) => (
              <ProductCard key={index} {...product} />
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
            {products.tamarind.map((product, index) => (
              <ProductCard key={index} {...product} />
            ))}
          </div>
        </section>

        {/* Bulk Order Note */}
        <div className="bg-muted/50 p-8 rounded-xl text-center">
          <h3 className="text-2xl font-bold mb-3">Bulk Orders & Custom Requirements</h3>
          <p className="text-muted-foreground mb-6">
            Looking for larger quantities or specific varieties? Contact us directly for competitive wholesale pricing.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="tel:+919876543210"
              className="inline-flex items-center justify-center px-6 py-3 bg-primary text-primary-foreground rounded-lg font-medium hover:bg-primary/90 transition-colors"
            >
              Call: +91 98765 43210
            </a>
            <a
              href="https://wa.me/919876543210"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center px-6 py-3 bg-accent text-accent-foreground rounded-lg font-medium hover:bg-accent/90 transition-colors"
            >
              WhatsApp Us
            </a>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default Products;
