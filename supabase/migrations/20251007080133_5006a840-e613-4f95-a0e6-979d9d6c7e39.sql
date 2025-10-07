-- Create products table for managing spice inventory
CREATE TABLE IF NOT EXISTS public.products (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  name TEXT NOT NULL,
  category TEXT NOT NULL,
  description TEXT NOT NULL,
  price_per_kg NUMERIC(10,2) NOT NULL,
  quantities TEXT NOT NULL,
  images TEXT[] NOT NULL DEFAULT '{}',
  created_at TIMESTAMPTZ NOT NULL DEFAULT now(),
  updated_at TIMESTAMPTZ NOT NULL DEFAULT now()
);

-- Enable Row Level Security
ALTER TABLE public.products ENABLE ROW LEVEL SECURITY;

-- Create policies for public read access (no authentication required for viewing products)
CREATE POLICY "Anyone can view products"
  ON public.products
  FOR SELECT
  USING (true);

-- Create policy for insert/update/delete (for admin panel - will need authentication later)
CREATE POLICY "Public can manage products"
  ON public.products
  FOR ALL
  USING (true)
  WITH CHECK (true);

-- Create function to update timestamps
CREATE OR REPLACE FUNCTION public.update_products_updated_at()
RETURNS TRIGGER AS $$
BEGIN
  NEW.updated_at = now();
  RETURN NEW;
END;
$$ LANGUAGE plpgsql;

-- Create trigger for automatic timestamp updates
CREATE TRIGGER update_products_updated_at
  BEFORE UPDATE ON public.products
  FOR EACH ROW
  EXECUTE FUNCTION public.update_products_updated_at();

-- Create indexes for better performance
CREATE INDEX idx_products_category ON public.products(category);
CREATE INDEX idx_products_name ON public.products(name);

-- Insert sample product data
INSERT INTO public.products (name, category, description, price_per_kg, quantities, images) VALUES
('White Garlic', 'garlic', 'Fresh premium white garlic bulbs', 120.00, '50kg, 100kg, 500kg bags', ARRAY['garlic-1.jpg', 'garlic-2.jpg', 'garlic-3.jpg']),
('Purple Garlic', 'garlic', 'Aromatic purple variety garlic', 135.00, '50kg, 100kg, 500kg bags', ARRAY['garlic-1.jpg', 'garlic-2.jpg', 'garlic-3.jpg']),
('Dried Garlic Flakes', 'garlic', 'Premium quality dried garlic', 180.00, '25kg, 50kg, 100kg bags', ARRAY['garlic-1.jpg', 'garlic-2.jpg', 'garlic-3.jpg']),
('Raw Turmeric Roots', 'turmeric', 'Fresh turmeric rhizomes', 85.00, '50kg, 100kg, 500kg bags', ARRAY['turmeric-1.jpg', 'turmeric-2.jpg', 'turmeric-3.jpg']),
('Turmeric Powder', 'turmeric', 'Pure ground turmeric powder', 220.00, '25kg, 50kg, 100kg bags', ARRAY['turmeric-1.jpg', 'turmeric-2.jpg', 'turmeric-3.jpg']),
('Organic Turmeric', 'turmeric', 'Certified organic turmeric', 280.00, '25kg, 50kg bags', ARRAY['turmeric-1.jpg', 'turmeric-2.jpg', 'turmeric-3.jpg']),
('Red Chilli Whole', 'chilli', 'Dried red chillies, medium heat', 150.00, '25kg, 50kg, 100kg bags', ARRAY['chilli-1.jpg', 'chilli-2.jpg', 'chilli-3.jpg']),
('Red Chilli Powder', 'chilli', 'Ground red chilli powder', 175.00, '25kg, 50kg, 100kg bags', ARRAY['chilli-1.jpg', 'chilli-2.jpg', 'chilli-3.jpg']),
('Green Chilli Fresh', 'chilli', 'Fresh green chillies', 95.00, '50kg, 100kg crates', ARRAY['chilli-1.jpg', 'chilli-2.jpg', 'chilli-3.jpg']),
('Kashmiri Chilli', 'chilli', 'Mild heat, rich color variety', 195.00, '25kg, 50kg bags', ARRAY['chilli-1.jpg', 'chilli-2.jpg', 'chilli-3.jpg']),
('Tamarind Pods', 'tamarind', 'Whole dried tamarind pods', 75.00, '50kg, 100kg, 500kg bags', ARRAY['tamarind-1.jpg', 'tamarind-2.jpg', 'tamarind-3.jpg']),
('Seedless Tamarind', 'tamarind', 'Premium seedless tamarind', 110.00, '25kg, 50kg bags', ARRAY['tamarind-1.jpg', 'tamarind-2.jpg', 'tamarind-3.jpg']),
('Tamarind Concentrate', 'tamarind', 'Pure tamarind pulp concentrate', 140.00, '25kg, 50kg containers', ARRAY['tamarind-1.jpg', 'tamarind-2.jpg', 'tamarind-3.jpg']);