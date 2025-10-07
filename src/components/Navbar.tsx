import { Link, useLocation } from "react-router-dom";
import { Phone, Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useState } from "react";

const Navbar = () => {
  const location = useLocation();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const navLinks = [
    { name: "Home", path: "/" },
    { name: "Products", path: "/products" },
    { name: "About", path: "/about" },
    { name: "Contact", path: "/contact" },
    { name: "Enquiry", path: "/enquiry" },
  ];

  const isActive = (path: string) => location.pathname === path;

  return (
    <nav className="sticky top-0 z-50 bg-card border-b border-border shadow-sm">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          <Link to="/" className="flex items-center space-x-2">
            <div className="text-2xl font-bold text-primary">SpiceHub</div>
            <div className="text-sm text-muted-foreground hidden sm:block">Premium Wholesale</div>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-1">
            {navLinks.map((link) => (
              <Link
                key={link.path}
                to={link.path}
                className={`px-4 py-2 rounded-lg font-medium transition-colors ${
                  isActive(link.path)
                    ? "bg-primary text-primary-foreground"
                    : "text-foreground hover:bg-muted"
                }`}
              >
                {link.name}
              </Link>
            ))}
          </div>

          <div className="hidden md:flex items-center space-x-2">
            <Button variant="outline" size="sm" asChild>
              <a href="tel:+919876543210">
                <Phone className="h-4 w-4 mr-2" />
                Call Now
              </a>
            </Button>
            <Button size="sm" asChild>
              <a
                href="https://wa.me/919876543210"
                target="_blank"
                rel="noopener noreferrer"
              >
                WhatsApp
              </a>
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden p-2"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            {mobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {mobileMenuOpen && (
          <div className="md:hidden pb-4 space-y-2">
            {navLinks.map((link) => (
              <Link
                key={link.path}
                to={link.path}
                onClick={() => setMobileMenuOpen(false)}
                className={`block px-4 py-2 rounded-lg font-medium transition-colors ${
                  isActive(link.path)
                    ? "bg-primary text-primary-foreground"
                    : "text-foreground hover:bg-muted"
                }`}
              >
                {link.name}
              </Link>
            ))}
            <div className="flex flex-col space-y-2 pt-2">
              <Button variant="outline" size="sm" asChild>
                <a href="tel:+919876543210">
                  <Phone className="h-4 w-4 mr-2" />
                  Call Now
                </a>
              </Button>
              <Button size="sm" asChild>
                <a
                  href="https://wa.me/919876543210"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  WhatsApp
                </a>
              </Button>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
