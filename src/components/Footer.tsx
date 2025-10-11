import { Link } from "react-router-dom";
import { Phone, Mail, MapPin, Facebook, Instagram, Linkedin } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-secondary text-secondary-foreground mt-16 md:mt-20">
      <div className="container mx-auto px-4 py-10 md:py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6 md:gap-8">
          {/* Company Info */}
          <div>
            <h3 className="text-xl font-bold mb-2">SRI LAKSHMI SRINIVAASA GARLIC & CO.</h3>
            <p className="text-xs opacity-90 mb-1">Garlic, General Merchants & Commission Agents</p>
            <p className="text-sm opacity-90 mb-4">Old No. 10, Chinnathambi Mudali Street, Chennai - 600079</p>
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
                <span>Old No. 10, Chinnathambi Mudali Street, Chennai - 600079</span>
              </div>
              <div className="flex items-center space-x-2">
                <Mail className="h-4 w-4 flex-shrink-0" />
                <a href="tel:+914443165353" className="hover:text-accent transition-colors">
                  Shop: 044 43165353 (MSR)
                </a>
              </div>
              <div className="flex items-center space-x-2">
                <Phone className="h-4 w-4 flex-shrink-0" />
                <a href="tel:+919789535353" className="hover:text-accent transition-colors">
                  Cell: 97895 35353
                </a>
              </div>
              <div className="flex items-center space-x-2">
                <Phone className="h-4 w-4 flex-shrink-0" />
                <a href="tel:+919360335353" className="hover:text-accent transition-colors">
                  Cell: 93603 35353
                </a>
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-secondary-foreground/20 mt-8 pt-8 text-center text-sm opacity-80">
          <p>&copy; {new Date().getFullYear()} SRI LAKSHMI SRINIVAASA GARLIC & CO. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
