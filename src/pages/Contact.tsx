import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Phone, Mail, MapPin, Clock, CreditCard } from "lucide-react";
import BankInfo from "@/components/BankInfo";

const Contact = () => {
  return (
    <div className="min-h-screen">
      <Navbar />
      
      {/* Header */}
      <section className="bg-gradient-to-br from-primary to-primary/80 text-primary-foreground py-16">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Contact SLS Garlic & Co.</h1>
          <p className="text-lg opacity-90 max-w-2xl mx-auto">
            Get in touch with us for bulk orders, pricing, or any questions
          </p>
        </div>
      </section>

      <div className="container mx-auto px-4 py-16">
        <div className="grid lg:grid-cols-2 gap-12">
          {/* Contact Information */}
          <div className="space-y-8">
            <div>
              <h2 className="text-3xl font-bold mb-6">Get In Touch</h2>
              <p className="text-muted-foreground mb-8">
                We're here to help with your wholesale spice requirements. Contact us through any of the channels below.
              </p>
            </div>

            <div className="space-y-6">
              <div className="flex items-start space-x-4 p-4 bg-card rounded-lg">
                <div className="flex-shrink-0 w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center">
                  <Phone className="h-6 w-6 text-primary" />
                </div>
                <div>
                  <h3 className="font-bold mb-1">Phone</h3>
                  <div className="flex flex-col text-muted-foreground">
                    <a href="tel:+914443165353" className="hover:text-primary">Shop: 044 43165353 (MSR)</a>
                    <a href="tel:+919789535353" className="hover:text-primary">Cell: 97895 35353</a>
                    <a href="tel:+919360335353" className="hover:text-primary">Cell: 93603 35353</a>
                  </div>
                  <p className="text-sm text-muted-foreground mt-1">Mon-Sat, 9 AM - 7 PM</p>
                </div>
              </div>

              {/* Email not provided; keeping channels to phone/WhatsApp */}

              <div className="flex items-start space-x-4 p-4 bg-card rounded-lg">
                <div className="flex-shrink-0 w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center">
                  <MapPin className="h-6 w-6 text-primary" />
                </div>
                <div>
                  <h3 className="font-bold mb-1">Address</h3>
                  <p className="text-muted-foreground">
                    Old No. 10, Chinnathambi Mudali Street<br />
                    Chennai - 600079<br />
                    India
                  </p>
                </div>
              </div>

              <div className="flex items-start space-x-4 p-4 bg-card rounded-lg">
                <div className="flex-shrink-0 w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center">
                  <Clock className="h-6 w-6 text-primary" />
                </div>
                <div>
                  <h3 className="font-bold mb-1">Business Hours</h3>
                  <p className="text-muted-foreground">
                    Monday - Friday: 9:00 AM - 7:00 PM<br />
                    Saturday: 9:00 AM - 5:00 PM<br />
                    Sunday: Closed
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Map & Payment Info */}
          <div className="space-y-8">
            {/* Google Map */}
            <div className="bg-card rounded-xl overflow-hidden shadow-lg">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m17!1m12!1m3!1d3886.0961538013785!2d80.27825437507853!3d13.093092287233592!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m2!1m1!2zMTPCsDA1JzM1LjEiTiA4MMKwMTYnNTEuMCJF!5e0!3m2!1sen!2sin!4v1759838957119!5m2!1sen!2sin" 
                width="100%"
                height="300"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                title="SLS Garlic & Co. Location"
              />
            </div>

            {/* Payment Information */}
            <BankInfo />
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default Contact;
