import { Link } from "react-router-dom";
import { Phone, Mail, MapPin, Facebook, Instagram, Linkedin } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-secondary text-secondary-foreground mt-20">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Company Info */}
          <div>
            <h3 className="text-xl font-bold mb-4">SpiceHub</h3>
            <p className="text-sm opacity-90 mb-4">
              Premium wholesale supplier of authentic spices. Quality you can trust, prices you'll love.
            </p>
            <div className="flex space-x-3">
              <a
                href="https://facebook.com"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-accent transition-colors"
              >
                <Facebook className="h-5 w-5" />
              </a>
              <a
                href="https://instagram.com"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-accent transition-colors"
              >
                <Instagram className="h-5 w-5" />
              </a>
              <a
                href="https://linkedin.com"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-accent transition-colors"
              >
                <Linkedin className="h-5 w-5" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-bold mb-4">Quick Links</h4>
            <ul className="space-y-2 text-sm">
              <li>
                <Link to="/" className="hover:text-accent transition-colors">
                  Home
                </Link>
              </li>
              <li>
                <Link to="/products" className="hover:text-accent transition-colors">
                  Products
                </Link>
              </li>
              <li>
                <Link to="/about" className="hover:text-accent transition-colors">
                  About Us
                </Link>
              </li>
              <li>
                <Link to="/enquiry" className="hover:text-accent transition-colors">
                  Enquiry
                </Link>
              </li>
              <li>
                <Link to="/contact" className="hover:text-accent transition-colors">
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          {/* Products */}
          <div>
            <h4 className="font-bold mb-4">Our Products</h4>
            <ul className="space-y-2 text-sm">
              <li>Garlic (Fresh & Dried)</li>
              <li>Turmeric (Raw & Powder)</li>
              <li>Chilli (Multiple Varieties)</li>
              <li>Tamarind (Whole & Pulp)</li>
              <li>Custom Bulk Orders</li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-bold mb-4">Contact Us</h4>
            <div className="space-y-3 text-sm">
              <div className="flex items-start space-x-2">
                <MapPin className="h-4 w-4 mt-1 flex-shrink-0" />
                <span>123 Spice Market Road, Mumbai, Maharashtra 400001</span>
              </div>
              <div className="flex items-center space-x-2">
                <Phone className="h-4 w-4 flex-shrink-0" />
                <a href="tel:+919876543210" className="hover:text-accent transition-colors">
                  +91 98765 43210
                </a>
              </div>
              <div className="flex items-center space-x-2">
                <Mail className="h-4 w-4 flex-shrink-0" />
                <a href="mailto:info@spicehub.com" className="hover:text-accent transition-colors">
                  info@spicehub.com
                </a>
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-secondary-foreground/20 mt-8 pt-8 text-center text-sm opacity-80">
          <p>&copy; {new Date().getFullYear()} SpiceHub. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
