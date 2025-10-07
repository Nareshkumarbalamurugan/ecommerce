import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Phone, Mail, MapPin, Clock, CreditCard } from "lucide-react";

const Contact = () => {
  return (
    <div className="min-h-screen">
      <Navbar />
      
      {/* Header */}
      <section className="bg-gradient-to-br from-primary to-primary/80 text-primary-foreground py-16">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Contact Us</h1>
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
                  <a href="tel:+919876543210" className="text-muted-foreground hover:text-primary">
                    +91 98765 43210
                  </a>
                  <p className="text-sm text-muted-foreground mt-1">Mon-Sat, 9 AM - 7 PM</p>
                </div>
              </div>

              <div className="flex items-start space-x-4 p-4 bg-card rounded-lg">
                <div className="flex-shrink-0 w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center">
                  <Mail className="h-6 w-6 text-primary" />
                </div>
                <div>
                  <h3 className="font-bold mb-1">Email</h3>
                  <a href="mailto:info@spicehub.com" className="text-muted-foreground hover:text-primary">
                    info@spicehub.com
                  </a>
                  <p className="text-sm text-muted-foreground mt-1">We'll respond within 24 hours</p>
                </div>
              </div>

              <div className="flex items-start space-x-4 p-4 bg-card rounded-lg">
                <div className="flex-shrink-0 w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center">
                  <MapPin className="h-6 w-6 text-primary" />
                </div>
                <div>
                  <h3 className="font-bold mb-1">Address</h3>
                  <p className="text-muted-foreground">
                    123 Spice Market Road<br />
                    Mumbai, Maharashtra 400001<br />
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
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d241317.11609823277!2d72.74109995!3d19.08219865!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3be7c6306644edc1%3A0x5da4ed8f8d648c69!2sMumbai%2C%20Maharashtra!5e0!3m2!1sen!2sin!4v1234567890123!5m2!1sen!2sin"
                width="100%"
                height="300"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                title="SpiceHub Location"
              />
            </div>

            {/* Payment Information */}
            <div className="bg-accent/10 p-8 rounded-xl border border-accent/20">
              <div className="flex items-center space-x-3 mb-4">
                <div className="w-12 h-12 bg-accent/20 rounded-lg flex items-center justify-center">
                  <CreditCard className="h-6 w-6 text-accent-foreground" />
                </div>
                <h3 className="text-2xl font-bold">Payment Information</h3>
              </div>
              <p className="text-muted-foreground mb-6">
                For bulk orders, payment is done via direct bank transfer. Use your banking app to transfer funds.
              </p>
              <div className="bg-card p-6 rounded-lg space-y-3">
                <div>
                  <p className="text-sm text-muted-foreground">Bank Name</p>
                  <p className="font-bold">State Bank of India</p>
                </div>
                <div>
                  <p className="text-sm text-muted-foreground">Account Name</p>
                  <p className="font-bold">SpiceHub Wholesale Pvt. Ltd.</p>
                </div>
                <div>
                  <p className="text-sm text-muted-foreground">Account Number</p>
                  <p className="font-bold">1234567890123</p>
                </div>
                <div>
                  <p className="text-sm text-muted-foreground">IFSC Code</p>
                  <p className="font-bold">SBIN0001234</p>
                </div>
                <div className="pt-4 border-t">
                  <p className="text-sm text-muted-foreground">
                    💡 After payment, please share the transaction screenshot via WhatsApp for order confirmation.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default Contact;
