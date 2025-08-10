import { useLocation, Link, useNavigate } from "react-router-dom";
import Layout from "@/components/layout/Layout";
import { useCart } from "@/context/CartContext";
import { Button } from "@/components/ui/button";
import React from "react";
import { toast } from "sonner";
import { products } from "@/data/products";

const currency = (amt: number) => new Intl.NumberFormat("bn-BD", { style: "currency", currency: "BDT", maximumFractionDigits: 0 }).format(amt);

type BuyNowState = { buyNow?: { productId: string; qty: number } };

const Checkout = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const { items, subtotal, clearCart } = useCart();
  const state = (location.state as BuyNowState) || {};

  const buyNowItem = state.buyNow
    ? [{ product: products.find((p) => p.id === state.buyNow!.productId)!, quantity: state.buyNow!.qty }]
    : [];

  const orderItems = buyNowItem.length > 0 ? buyNowItem : items;
  const orderTotal = buyNowItem.length > 0
    ? buyNowItem.reduce((s, i) => s + i.product.price * i.quantity, 0)
    : subtotal;

  const [method, setMethod] = React.useState<'cod' | 'bkash'>('cod');
  const [name, setName] = React.useState('');
  const [phone, setPhone] = React.useState('');
  const [address, setAddress] = React.useState('');
  const [trxId, setTrxId] = React.useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!name || !phone || !address) {
      toast.error('Please fill in all required fields.');
      return;
    }
    if (method === 'bkash' && !trxId) {
      toast.error('Please enter your bKash transaction ID.');
      return;
    }

    // Simulate order placed
    toast.success('Order placed successfully!');
    clearCart();
    navigate('/', { replace: true });
  };

  return (
    <Layout title="Checkout" description="Secure checkout with Cash on Delivery or bKash payment.">
      <section className="container py-10 grid gap-8 lg:grid-cols-[1fr_360px]">
        <form onSubmit={handleSubmit} className="space-y-6">
          <h1 className="text-3xl font-bold">অর্ডার সম্পন্ন করুন</h1>
          <div className="grid gap-4 md:grid-cols-2">
            <div className="space-y-2">
              <label className="text-sm font-medium" htmlFor="name">সম্পূর্ণ নাম*</label>
              <input id="name" value={name} onChange={(e) => setName(e.target.value)} required className="w-full rounded-md border bg-background px-3 py-2" />
            </div>
            <div className="space-y-2">
              <label className="text-sm font-medium" htmlFor="phone">মোবাইল নম্বর *</label>
              <input id="phone" value={phone} onChange={(e) => setPhone(e.target.value)} required className="w-full rounded-md border bg-background px-3 py-2" />
            </div>
          </div>
          <div className="space-y-2">
            <label className="text-sm font-medium" htmlFor="address">আপনার ঠিকানা*</label>
            <textarea id="address" value={address} onChange={(e) => setAddress(e.target.value)} required rows={4} className="w-full rounded-md border bg-background px-3 py-2" />
          </div>

          <div className="space-y-3">
            <div className="font-semibold">পেমেন্ট দেওয়ার পদ্ধতি</div>
            <div className="flex gap-4">
              <label className="flex items-center gap-2">
                <input type="radio" name="method" checked={method==='cod'} onChange={() => setMethod('cod')} />
                ক্যাশ অন ডেলিভারি
              </label>
              <label className="flex items-center gap-2">
                <input type="radio" name="method" checked={method==='bkash'} onChange={() => setMethod('bkash')} />
                বিকাশ পেমেন্ট
              </label>
            </div>
            {method === 'bkash' && (
              <div className="rounded-lg border p-4 space-y-3">
                <p className="text-sm">নিচের নম্বরে বিকাশ পেমেন্ট করুন: <strong>01985-308470</strong></p>
                <div className="space-y-2">
                  <label className="text-sm font-medium" htmlFor="trx">ট্রাঞ্জেকশন আইডি*</label>
                  <input id="trx" value={trxId} onChange={(e) => setTrxId(e.target.value)} required className="w-full rounded-md border bg-background px-3 py-2" />
                </div>
              </div>
            )}
          </div>

          <div className="flex gap-3">
            <Button type="submit" variant="hero" size="lg">অর্ডার কনফার্ম করুন</Button>
            <Button asChild variant="outline" size="lg"><Link to="/cart">ফেরত যান</Link></Button>
          </div>
        </form>

        <aside className="h-fit rounded-lg border p-4">
          <h2 className="font-semibold mb-3">যা যা অর্ডার করছেন</h2>
          {orderItems.length === 0 ? (
            <p className="text-sm text-muted-foreground">কোনো কিছু এখনো যোগ করা হয় নি</p>
          ) : (
            <div className="space-y-3">
              {orderItems.map(({ product, quantity }) => (
                <div key={product.id} className="flex items-center gap-3">
                  <img src={product.images[0]} alt={product.name} className="h-14 w-14 rounded-md object-cover" />
                  <div className="flex-1">
                    <div className="text-sm font-medium">{product.name}</div>
                    <div className="text-xs text-muted-foreground">পরিমাণ: {quantity}</div>
                  </div>
                  <div className="text-sm">{currency(product.price * quantity)}</div>
                </div>
              ))}
              <div className="flex justify-between border-t pt-3 font-semibold">
                <span>মোট</span>
                <span>{currency(orderTotal)}</span>
              </div>
            </div>
          )}
        </aside>
      </section>
    </Layout>
  );
};

export default Checkout;
