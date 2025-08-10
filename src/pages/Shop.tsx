import Layout from "@/components/layout/Layout";
import ProductCard from "@/components/ProductCard";
import { products } from "@/data/products";

const Shop = () => {
  return (
    <Layout title="Shop" description="Browse smartphones, earbuds, chargers, and more at মোবাইল দুনিয়া.">
      <section className="container py-10">
        <h1 className="text-3xl font-bold mb-6">Shop</h1>
        <div className="grid grid-cols-2 gap-4 md:grid-cols-3 lg:grid-cols-4">
          {products.map((p) => (
            <ProductCard key={p.id} product={p} />
          ))}
        </div>
      </section>
    </Layout>
  );
};

export default Shop;
