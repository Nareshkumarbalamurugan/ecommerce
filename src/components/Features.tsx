import { Truck, Shield, Package } from "lucide-react";

const features = [
  {
    icon: Truck,
    title: "Fast Delivery",
    description: "Quick bulk order processing & delivery",
  },
  {
    icon: Shield,
    title: "100% Authentic",
    description: "Certified quality and genuine products",
  },
  {
    icon: Package,
    title: "Bulk Orders",
    description: "Wholesale quantities at best prices",
  },
];

const Features = () => {
  return (
    <section className="py-12 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <div
              key={index}
              className="flex items-start space-x-4 p-6 rounded-lg bg-card hover:shadow-lg transition-shadow"
            >
              <div className="flex-shrink-0">
                <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center">
                  <feature.icon className="h-6 w-6 text-primary" />
                </div>
              </div>
              <div>
                <h3 className="font-bold text-lg mb-1">{feature.title}</h3>
                <p className="text-sm text-muted-foreground">{feature.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;
