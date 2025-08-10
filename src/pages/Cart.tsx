import Layout from "@/components/layout/Layout";
import { useCart } from "@/context/CartContext";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

const currency = (amt: number) => new Intl.NumberFormat("bn-BD", { style: "currency", currency: "BDT", maximumFractionDigits: 0 }).format(amt);

const Cart = () => {
  const { items, subtotal, updateQty, removeFromCart } = useCart();

  return (
    <Layout title="Cart" description="Review your মোবাইল দুনিয়া cart and proceed to checkout.">
      <section className="container py-10">
        <h1 className="text-3xl font-bold mb-6">আপনার পণ্য তালিকা</h1>
        {items.length === 0 ? (
          <div className="text-center py-16">
            <p className="text-muted-foreground mb-4">আপনি এখনো কোনো কিছু সিলেক্ট করেন নি</p>
            <Button asChild variant="hero"><Link to="/shop">আরও শপিং করুন</Link></Button>
          </div>
        ) : (
          <div className="grid gap-8 md:grid-cols-[1fr_320px]">
            <div className="space-y-4">
              {items.map(({ product, quantity }) => (
                <div key={product.id} className="flex items-center gap-4 rounded-lg border p-3">
                  <img src={product.images[0]} alt={product.name} className="h-20 w-20 rounded-md object-cover" />
                  <div className="flex-1">
                    <h3 className="font-medium">{product.name}</h3>
                    <div className="text-sm text-muted-foreground">{currency(product.price)}</div>
                    <div className="mt-2 flex items-center gap-2">
                      <label htmlFor={`qty-${product.id}`} className="text-sm">Qty</label>
                      <input
                        id={`qty-${product.id}`}
                        type="number"
                        min={1}
                        value={quantity}
                        onChange={(e) => updateQty(product.id, Math.max(1, Number(e.target.value)))}
                        className="w-20 rounded-md border bg-background px-2 py-1"
                      />
                    </div>
                  </div>
                  <Button variant="outline" onClick={() => removeFromCart(product.id)}>Remove</Button>
                </div>
              ))}
            </div>
            <aside className="rounded-lg border p-4 h-fit">
              <h2 className="font-semibold mb-3">Order Summary</h2>
              <div className="flex justify-between text-sm mb-4">
                <span>Subtotal</span>
                <span>{currency(subtotal)}</span>
              </div>
              <Button asChild variant="hero" className="w-full"><Link to="/checkout">অর্ডার সম্পন্ন করুন</Link></Button>
            </aside>
          </div>
        )}
      </section>
    </Layout>
  );
};

export default Cart;
