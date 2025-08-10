import heroImage from "@/assets/hero-mobile-duniya.jpg";
import Layout from "@/components/layout/Layout";
import { Button } from "@/components/ui/button";
import ProductCard from "@/components/ProductCard";
import { products } from "@/data/products";
import { Helmet } from "react-helmet-async";
import { Link } from "react-router-dom";

const Index = () => {
  const featured = products.slice(0, 4);

  return (
    <Layout title="Home" description="Buy premium smartphones and mobile accessories in Bangladesh. Cash on Delivery and bKash accepted.">
      <Helmet>
        <script type="application/ld+json">
          {JSON.stringify({
            '@context': 'https://schema.org',
            '@type': 'Store',
            name: 'মোবাইল দুনিয়া',
            url: 'https://6e092d6f-17bc-4a9e-834a-632b3d665ada.lovableproject.com/',
            description: 'Premium smartphones & accessories',
          })}
        </script>
      </Helmet>
      <section className="relative">
        <div className="container py-10 md:py-16 grid gap-8 md:grid-cols-2 items-center">
          <div className="order-2 md:order-1 space-y-5">
            <h1 className="text-4xl md:text-5xl font-bold leading-tight">Latest Smartphones & Accessories</h1>
            <p className="text-muted-foreground text-lg">Discover flagship performance and essential gear. Fast delivery across Bangladesh.</p>
            <div className="flex gap-3">
              <Button asChild variant="hero" size="lg"><Link to="/shop">এখনই কিনুন</Link></Button>
              <Button asChild variant="outline" size="lg"><Link to="/about">Learn More</Link></Button>
            </div>
          </div>
          <div className="order-1 md:order-2">
            <div className="relative overflow-hidden rounded-2xl shadow-elevate border">
              <img src={heroImage} alt="iPhone and Samsung Galaxy hero banner" className="w-full object-cover" />
            </div>
          </div>
        </div>
      </section>

      <section className="container py-8">
        <h2 className="text-2xl font-semibold mb-4">Featured Products</h2>
        <div className="grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-4">
          {featured.map((p) => (
            <ProductCard key={p.id} product={p} />
          ))}
        </div>
      </section>
    </Layout>
  );
};

export default Index;
