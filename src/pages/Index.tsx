import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Features from "@/components/Features";
import CategoryCard from "@/components/CategoryCard";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import garlicImage from "@/assets/garlic.jpg";
import turmericImage from "@/assets/turmeric.jpg";
import chilliImage from "@/assets/chilli.jpg";
import tamarindImage from "@/assets/tamarind.jpg";

const categories = [
  {
    name: "Garlic",
    image: garlicImage,
    description: "Fresh & dried garlic varieties",
    link: "/products#garlic",
  },
  {
    name: "Turmeric",
    image: turmericImage,
    description: "Raw roots & premium powder",
    link: "/products#turmeric",
  },
  {
    name: "Chilli",
    image: chilliImage,
    description: "Multiple spice level varieties",
    link: "/products#chilli",
  },
  {
    name: "Tamarind",
    image: tamarindImage,
    description: "Whole pods & concentrated pulp",
    link: "/products#tamarind",
  },
];

const Index = () => {
  return (
    <div className="min-h-screen">
      <Navbar />
      <Hero />
      <Features />

      {/* Categories Section */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Browse The Range</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Explore our premium selection of wholesale spices sourced directly from trusted farmers
            </p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {categories.map((category) => (
              <CategoryCard key={category.name} {...category} />
            ))}
          </div>
        </div>
      </section>

      {/* About Section */}
      <section className="py-16 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold mb-6">
                Quality You Can Trust
              </h2>
              <p className="text-muted-foreground mb-4">
                With over 15 years of experience in the wholesale spice industry, SpiceHub has 
                established itself as a trusted partner for businesses seeking premium quality spices.
              </p>
              <p className="text-muted-foreground mb-6">
                We work directly with farmers to ensure the finest quality garlic, turmeric, chilli, 
                and tamarind reach your business at competitive wholesale prices.
              </p>
              <Button asChild>
                <Link to="/about">Learn More About Us</Link>
              </Button>
            </div>
            <div className="grid grid-cols-2 gap-4">
              <div className="bg-card p-6 rounded-xl text-center">
                <div className="text-4xl font-bold text-primary mb-2">15+</div>
                <div className="text-sm text-muted-foreground">Years Experience</div>
              </div>
              <div className="bg-card p-6 rounded-xl text-center">
                <div className="text-4xl font-bold text-primary mb-2">500+</div>
                <div className="text-sm text-muted-foreground">Happy Clients</div>
              </div>
              <div className="bg-card p-6 rounded-xl text-center">
                <div className="text-4xl font-bold text-primary mb-2">50+</div>
                <div className="text-sm text-muted-foreground">Product Varieties</div>
              </div>
              <div className="bg-card p-6 rounded-xl text-center">
                <div className="text-4xl font-bold text-primary mb-2">100%</div>
                <div className="text-sm text-muted-foreground">Quality Assured</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">What Our Clients Say</h2>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                name: "Rajesh Kumar",
                business: "Kumar Spices Ltd.",
                text: "SpiceHub has been our reliable partner for 5 years. Their quality is unmatched and prices are competitive for bulk orders.",
              },
              {
                name: "Priya Sharma",
                business: "Sharma Food Products",
                text: "Excellent service and premium quality spices. Their turmeric variety is the best we've sourced in years.",
              },
              {
                name: "Mohammed Ali",
                business: "Ali Trading Co.",
                text: "Fast delivery, authentic products, and great customer support. Highly recommended for wholesale buyers.",
              },
            ].map((testimonial, index) => (
              <div key={index} className="bg-card p-6 rounded-xl shadow-md">
                <p className="text-muted-foreground mb-4 italic">"{testimonial.text}"</p>
                <div className="font-bold">{testimonial.name}</div>
                <div className="text-sm text-muted-foreground">{testimonial.business}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-gradient-to-r from-primary to-primary/80 text-primary-foreground">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Ready to Place Your Bulk Order?
          </h2>
          <p className="text-lg mb-8 opacity-90 max-w-2xl mx-auto">
            Contact us today for competitive wholesale prices and premium quality spices
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" variant="secondary" asChild>
              <a href="tel:+919876543210">Call Now</a>
            </Button>
            <Button size="lg" variant="outline" asChild className="bg-transparent border-primary-foreground text-primary-foreground hover:bg-primary-foreground hover:text-primary">
              <Link to="/enquiry">Send Enquiry</Link>
            </Button>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Index;
