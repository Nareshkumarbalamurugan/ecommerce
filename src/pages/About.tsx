import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { CheckCircle, Users, Award, Leaf } from "lucide-react";

const About = () => {
  return (
    <div className="min-h-screen">
      <Navbar />
      
      {/* Header */}
      <section className="bg-gradient-to-br from-primary to-primary/80 text-primary-foreground py-16">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">About SpiceHub</h1>
          <p className="text-lg opacity-90 max-w-2xl mx-auto">
            Your trusted partner in premium wholesale spices since 2008
          </p>
        </div>
      </section>

      <div className="container mx-auto px-4 py-16">
        {/* Our Story */}
        <section className="mb-20">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold mb-6">Our Story</h2>
              <div className="space-y-4 text-muted-foreground">
                <p>
                  Founded in 2008, SpiceHub began with a simple mission: to provide authentic, 
                  premium quality spices to businesses at competitive wholesale prices. What started 
                  as a small family business has grown into one of the most trusted wholesale spice 
                  suppliers in India.
                </p>
                <p>
                  With over 15 years of experience, we've built strong relationships with farmers 
                  and suppliers across the country, ensuring that we source only the finest quality 
                  garlic, turmeric, chilli, and tamarind for our clients.
                </p>
                <p>
                  Today, we serve over 500 businesses including restaurants, food processing units, 
                  spice retailers, and export companies, delivering excellence with every order.
                </p>
              </div>
            </div>
            <div className="grid grid-cols-2 gap-6">
              <div className="bg-card p-6 rounded-xl text-center shadow-md">
                <div className="text-5xl font-bold text-primary mb-2">15+</div>
                <div className="text-sm text-muted-foreground">Years in Business</div>
              </div>
              <div className="bg-card p-6 rounded-xl text-center shadow-md">
                <div className="text-5xl font-bold text-primary mb-2">500+</div>
                <div className="text-sm text-muted-foreground">Happy Clients</div>
              </div>
              <div className="bg-card p-6 rounded-xl text-center shadow-md">
                <div className="text-5xl font-bold text-primary mb-2">50+</div>
                <div className="text-sm text-muted-foreground">Product Varieties</div>
              </div>
              <div className="bg-card p-6 rounded-xl text-center shadow-md">
                <div className="text-5xl font-bold text-primary mb-2">100%</div>
                <div className="text-sm text-muted-foreground">Quality Assured</div>
              </div>
            </div>
          </div>
        </section>

        {/* Why Choose Us */}
        <section className="mb-20 bg-muted/30 -mx-4 px-4 py-16">
          <div className="container mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">Why Choose Us</h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              <div className="text-center">
                <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <CheckCircle className="h-8 w-8 text-primary" />
                </div>
                <h3 className="font-bold text-lg mb-2">Premium Quality</h3>
                <p className="text-sm text-muted-foreground">
                  Sourced directly from trusted farmers and thoroughly quality-checked
                </p>
              </div>
              <div className="text-center">
                <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Award className="h-8 w-8 text-primary" />
                </div>
                <h3 className="font-bold text-lg mb-2">Certified Products</h3>
                <p className="text-sm text-muted-foreground">
                  All products meet national and international quality standards
                </p>
              </div>
              <div className="text-center">
                <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Users className="h-8 w-8 text-primary" />
                </div>
                <h3 className="font-bold text-lg mb-2">Trusted by 500+ Clients</h3>
                <p className="text-sm text-muted-foreground">
                  Built lasting relationships with businesses across India
                </p>
              </div>
              <div className="text-center">
                <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Leaf className="h-8 w-8 text-primary" />
                </div>
                <h3 className="font-bold text-lg mb-2">Authentic Sourcing</h3>
                <p className="text-sm text-muted-foreground">
                  Direct partnerships with farmers ensure authentic products
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Our Values */}
        <section className="mb-20">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">Our Core Values</h2>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-card p-8 rounded-xl shadow-md">
              <h3 className="text-xl font-bold mb-3">Quality First</h3>
              <p className="text-muted-foreground">
                We never compromise on quality. Every batch is carefully inspected to ensure 
                it meets our high standards before reaching your business.
              </p>
            </div>
            <div className="bg-card p-8 rounded-xl shadow-md">
              <h3 className="text-xl font-bold mb-3">Transparency</h3>
              <p className="text-muted-foreground">
                Honest pricing, clear communication, and transparent business practices are 
                the foundation of our relationships with clients.
              </p>
            </div>
            <div className="bg-card p-8 rounded-xl shadow-md">
              <h3 className="text-xl font-bold mb-3">Customer Satisfaction</h3>
              <p className="text-muted-foreground">
                Your success is our success. We go the extra mile to ensure every order 
                meets your expectations and business needs.
              </p>
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="text-center bg-gradient-to-r from-primary to-primary/80 text-primary-foreground rounded-2xl p-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Ready to Partner with Us?
          </h2>
          <p className="text-lg opacity-90 mb-8 max-w-2xl mx-auto">
            Experience the SpiceHub difference. Contact us today for competitive wholesale prices.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="tel:+919876543210"
              className="inline-flex items-center justify-center px-8 py-3 bg-card text-foreground rounded-lg font-medium hover:bg-card/90 transition-colors"
            >
              Call Now
            </a>
            <a
              href="https://wa.me/919876543210"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center px-8 py-3 bg-transparent border-2 border-primary-foreground text-primary-foreground rounded-lg font-medium hover:bg-primary-foreground hover:text-primary transition-colors"
            >
              WhatsApp Us
            </a>
          </div>
        </section>
      </div>

      <Footer />
    </div>
  );
};

export default About;
