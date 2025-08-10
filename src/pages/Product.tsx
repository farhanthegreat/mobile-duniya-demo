import { useParams, useNavigate } from "react-router-dom";
import Layout from "@/components/layout/Layout";
import { Button } from "@/components/ui/button";
import ProductGallery from "@/components/ProductGallery";
import { getProductBySlug } from "@/data/products";
import { useCart } from "@/context/CartContext";
import { Helmet } from "react-helmet-async";

const currency = (amt: number) => new Intl.NumberFormat("bn-BD", { style: "currency", currency: "BDT", maximumFractionDigits: 0 }).format(amt);

const Product = () => {
  const { slug } = useParams();
  const product = slug ? getProductBySlug(slug) : undefined;
  const { addToCart } = useCart();
  const navigate = useNavigate();

  if (!product) {
    return (
      <Layout title="Product Not Found">
        <section className="container py-16 text-center">
          <h1 className="text-2xl font-bold">Product not found</h1>
        </section>
      </Layout>
    );
  }

  const handleAddToCart = () => {
    addToCart(product, 1);
  };

  const handleBuyNow = () => {
    // Navigate to checkout with this single item
    navigate("/checkout", { state: { buyNow: { productId: product.id, qty: 1 } } });
  };

  return (
    <Layout title={product.name} description={product.shortDescription}>
      <Helmet>
        <script type="application/ld+json">
          {JSON.stringify({
            '@context': 'https://schema.org',
            '@type': 'Product',
            name: product.name,
            description: product.shortDescription,
            image: product.images,
            offers: {
              '@type': 'Offer',
              priceCurrency: 'BDT',
              price: product.price,
              availability: 'https://schema.org/InStock',
            },
          })}
        </script>
      </Helmet>
      <section className="container py-10 grid gap-8 md:grid-cols-2">
        <ProductGallery images={product.images} name={product.name} />
        <div>
          <h1 className="text-3xl font-bold mb-2">{product.name}</h1>
          <p className="text-muted-foreground mb-4">{product.shortDescription}</p>
          <div className="text-2xl font-semibold mb-6">{currency(product.price)}</div>
          <div className="flex gap-3 mb-8">
            <Button onClick={handleAddToCart} variant="secondary">কার্টে যোগ করুন</Button>
            <Button onClick={handleBuyNow} variant="hero">এখনই অর্ডার করুন</Button>
          </div>
          <article className="prose prose-sm max-w-none dark:prose-invert">
            <h2>Product details</h2>
            <p>{product.longDescription}</p>
          </article>
        </div>
      </section>
    </Layout>
  );
};

export default Product;
