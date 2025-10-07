import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { useState } from "react";
import { useToast } from "@/hooks/use-toast";

const Enquiry = () => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    email: "",
    product: "",
    quantity: "",
    message: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    // Create WhatsApp message
    const whatsappMessage = `New Enquiry:\nName: ${formData.name}\nPhone: ${formData.phone}\nEmail: ${formData.email}\nProduct: ${formData.product}\nQuantity: ${formData.quantity}\nMessage: ${formData.message}`;
  const whatsappUrl = `https://wa.me/919789535353?text=${encodeURIComponent(whatsappMessage)}`;
    
    // Open WhatsApp
    window.open(whatsappUrl, "_blank");
    
    toast({
      title: "Enquiry Sent",
      description: "We'll contact you shortly with details.",
    });
    
    // Reset form
    setFormData({
      name: "",
      phone: "",
      email: "",
      product: "",
      quantity: "",
      message: "",
    });
  };

  const handleChange = (field: string, value: string) => {
    setFormData((prev) => ({ ...prev, [field]: value }));
  };

  return (
    <div className="min-h-screen">
      <Navbar />
      
      {/* Header */}
      <section className="bg-gradient-to-br from-primary to-primary/80 text-primary-foreground py-16">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Send Enquiry</h1>
          <p className="text-lg opacity-90 max-w-2xl mx-auto">
            Fill out the form below and we'll get back to you with the best wholesale prices
          </p>
        </div>
      </section>

      <div className="container mx-auto px-4 py-16">
        <div className="max-w-2xl mx-auto">
          <div className="bg-card rounded-xl shadow-lg p-8">
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <Label htmlFor="name">Full Name *</Label>
                <Input
                  id="name"
                  type="text"
                  required
                  value={formData.name}
                  onChange={(e) => handleChange("name", e.target.value)}
                  placeholder="Enter your full name"
                />
              </div>

              <div>
                <Label htmlFor="phone">Phone Number *</Label>
                <Input
                  id="phone"
                  type="tel"
                  required
                  value={formData.phone}
                  onChange={(e) => handleChange("phone", e.target.value)}
                  placeholder="+91 97895 35353"
                />
              </div>

              <div>
                <Label htmlFor="email">Email Address *</Label>
                <Input
                  id="email"
                  type="email"
                  required
                  value={formData.email}
                  onChange={(e) => handleChange("email", e.target.value)}
                  placeholder="your@email.com"
                />
              </div>

              <div>
                <Label htmlFor="product">Product Interest *</Label>
                <Select value={formData.product} onValueChange={(value) => handleChange("product", value)}>
                  <SelectTrigger>
                    <SelectValue placeholder="Select a product" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="garlic">Garlic</SelectItem>
                    <SelectItem value="turmeric">Turmeric</SelectItem>
                    <SelectItem value="chilli">Chilli</SelectItem>
                    <SelectItem value="tamarind">Tamarind</SelectItem>
                    <SelectItem value="mixed">Mixed Order</SelectItem>
                    <SelectItem value="other">Other</SelectItem>
                  </SelectContent>
                </Select>
              </div>

              <div>
                <Label htmlFor="quantity">Required Quantity *</Label>
                <Input
                  id="quantity"
                  type="text"
                  required
                  value={formData.quantity}
                  onChange={(e) => handleChange("quantity", e.target.value)}
                  placeholder="e.g., 500kg, 1 ton"
                />
              </div>

              <div>
                <Label htmlFor="message">Additional Message</Label>
                <Textarea
                  id="message"
                  rows={4}
                  value={formData.message}
                  onChange={(e) => handleChange("message", e.target.value)}
                  placeholder="Any specific requirements or questions..."
                />
              </div>

              <Button type="submit" size="lg" className="w-full">
                Send Enquiry via WhatsApp
              </Button>
            </form>
          </div>

          <div className="mt-8 text-center text-muted-foreground">
            <p>Or contact us directly:</p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center mt-4">
              <a href="tel:+914443165353" className="text-primary font-medium hover:underline">📞 Shop: 044 43165353 (MSR)</a>
              <a href="tel:+919789535353" className="text-primary font-medium hover:underline">📞 Cell: 97895 35353</a>
              <a href="tel:+919360335353" className="text-primary font-medium hover:underline">📞 Cell: 93603 35353</a>
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default Enquiry;
