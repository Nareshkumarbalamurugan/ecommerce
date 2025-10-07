import { useState } from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Card } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { useToast } from "@/hooks/use-toast";
import { Package, Users, MessageSquare, BarChart } from "lucide-react";

const Admin = () => {
  const { toast } = useToast();
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [password, setPassword] = useState("");

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();
    if (password === "admin123") {
      setIsAuthenticated(true);
      toast({
        title: "Login Successful",
        description: "Welcome to the admin panel",
      });
    } else {
      toast({
        title: "Login Failed",
        description: "Incorrect password",
        variant: "destructive",
      });
    }
  };

  if (!isAuthenticated) {
    return (
      <div className="min-h-screen">
        <Navbar />
        <div className="container mx-auto px-4 py-16">
          <div className="max-w-md mx-auto">
            <Card className="p-8">
              <h1 className="text-2xl font-bold mb-6 text-center">Admin Login</h1>
              <form onSubmit={handleLogin} className="space-y-4">
                <div>
                  <Label htmlFor="password">Password</Label>
                  <Input
                    id="password"
                    type="password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    placeholder="Enter admin password"
                  />
                </div>
                <Button type="submit" className="w-full">
                  Login
                </Button>
              </form>
              <p className="text-xs text-muted-foreground text-center mt-4">
                Demo password: admin123
              </p>
            </Card>
          </div>
        </div>
        <Footer />
      </div>
    );
  }

  return (
    <div className="min-h-screen">
      <Navbar />
      
      <section className="bg-gradient-to-br from-primary to-primary/80 text-primary-foreground py-12">
        <div className="container mx-auto px-4">
          <h1 className="text-4xl font-bold mb-2">Admin Dashboard</h1>
          <p className="opacity-90">Manage products, enquiries, and view statistics</p>
        </div>
      </section>

      <div className="container mx-auto px-4 py-8">
        {/* Statistics Cards */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-8">
          <Card className="p-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm text-muted-foreground">Total Products</p>
                <p className="text-3xl font-bold">14</p>
              </div>
              <Package className="h-8 w-8 text-primary" />
            </div>
          </Card>
          <Card className="p-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm text-muted-foreground">Total Clients</p>
                <p className="text-3xl font-bold">523</p>
              </div>
              <Users className="h-8 w-8 text-primary" />
            </div>
          </Card>
          <Card className="p-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm text-muted-foreground">Enquiries</p>
                <p className="text-3xl font-bold">47</p>
              </div>
              <MessageSquare className="h-8 w-8 text-primary" />
            </div>
          </Card>
          <Card className="p-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm text-muted-foreground">This Month</p>
                <p className="text-3xl font-bold">₹8.2L</p>
              </div>
              <BarChart className="h-8 w-8 text-primary" />
            </div>
          </Card>
        </div>

        {/* Tabs */}
        <Tabs defaultValue="products" className="space-y-6">
          <TabsList>
            <TabsTrigger value="products">Products</TabsTrigger>
            <TabsTrigger value="enquiries">Enquiries</TabsTrigger>
            <TabsTrigger value="settings">Settings</TabsTrigger>
          </TabsList>

          <TabsContent value="products">
            <Card className="p-6">
              <h2 className="text-2xl font-bold mb-6">Product Management</h2>
              <div className="space-y-4">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <Label htmlFor="product-name">Product Name</Label>
                    <Input id="product-name" placeholder="e.g., White Garlic" />
                  </div>
                  <div>
                    <Label htmlFor="product-category">Category</Label>
                    <Input id="product-category" placeholder="e.g., Garlic" />
                  </div>
                  <div>
                    <Label htmlFor="product-quantity">Available Quantities</Label>
                    <Input id="product-quantity" placeholder="e.g., 50kg, 100kg" />
                  </div>
                  <div>
                    <Label htmlFor="product-price">Price per kg</Label>
                    <Input id="product-price" type="number" placeholder="e.g., 120" />
                  </div>
                </div>
                <div>
                  <Label htmlFor="product-description">Description</Label>
                  <Textarea
                    id="product-description"
                    placeholder="Product description..."
                    rows={3}
                  />
                </div>
                <Button>Add Product</Button>
              </div>
            </Card>
          </TabsContent>

          <TabsContent value="enquiries">
            <Card className="p-6">
              <h2 className="text-2xl font-bold mb-6">Recent Enquiries</h2>
              <div className="space-y-4">
                {[
                  { name: "Rajesh Kumar", product: "Garlic", quantity: "500kg", date: "2 hours ago" },
                  { name: "Priya Sharma", product: "Turmeric", quantity: "1 ton", date: "5 hours ago" },
                  { name: "Mohammed Ali", product: "Chilli", quantity: "250kg", date: "1 day ago" },
                ].map((enquiry, index) => (
                  <div key={index} className="flex items-center justify-between p-4 bg-muted rounded-lg">
                    <div>
                      <p className="font-bold">{enquiry.name}</p>
                      <p className="text-sm text-muted-foreground">
                        {enquiry.product} - {enquiry.quantity}
                      </p>
                    </div>
                    <div className="text-right">
                      <p className="text-sm text-muted-foreground">{enquiry.date}</p>
                      <Button size="sm" variant="outline" className="mt-2">
                        View Details
                      </Button>
                    </div>
                  </div>
                ))}
              </div>
            </Card>
          </TabsContent>

          <TabsContent value="settings">
            <Card className="p-6">
              <h2 className="text-2xl font-bold mb-6">Settings</h2>
              <div className="space-y-4">
                <div>
                  <Label htmlFor="business-phone">Business Phone</Label>
                  <Input id="business-phone" defaultValue="+91 98765 43210" />
                </div>
                <div>
                  <Label htmlFor="business-email">Business Email</Label>
                  <Input id="business-email" defaultValue="info@spicehub.com" />
                </div>
                <div>
                  <Label htmlFor="whatsapp-number">WhatsApp Number</Label>
                  <Input id="whatsapp-number" defaultValue="+91 98765 43210" />
                </div>
                <div>
                  <Label htmlFor="business-address">Business Address</Label>
                  <Textarea
                    id="business-address"
                    defaultValue="123 Spice Market Road, Mumbai, Maharashtra 400001"
                    rows={3}
                  />
                </div>
                <Button>Save Settings</Button>
              </div>
            </Card>
          </TabsContent>
        </Tabs>
      </div>

      <Footer />
    </div>
  );
};

export default Admin;
