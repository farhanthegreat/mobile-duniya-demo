import React from "react";
import { Link, useNavigate } from "react-router-dom";
import type { Product } from "@/data/products";
import { Button } from "@/components/ui/button";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogDescription } from "@/components/ui/dialog";
import ProductGallery from "@/components/ProductGallery";
import { useCart } from "@/context/CartContext";

const currency = (amt: number) =>
  new Intl.NumberFormat("bn-BD", {
    style: "currency",
    currency: "BDT",
    maximumFractionDigits: 0,
  }).format(amt);

const ProductCard: React.FC<{ product: Product }> = ({ product }) => {
  const [open, setOpen] = React.useState(false);
  const { addToCart } = useCart();
  const navigate = useNavigate();

  const handleBuyNow = () => {
    setOpen(false);
    navigate("/checkout", {
      state: { buyNow: { productId: product.id, qty: 1 } },
    });
  };

  const handleAdd = () => addToCart(product, 1);

  return (
    <>
      <article className="group rounded-lg border bg-card p-3 transition-transform hover:-translate-y-0.5 hover:shadow-soft">
        <div className="relative overflow-hidden rounded-md">
          <button
            onClick={() => setOpen(true)}
            className="block w-full"
            aria-label={`Quick view ${product.name}`}
          >
            <img
              src={product.images[0]}
              loading="lazy"
              alt={`${product.name} product image`}
              className="aspect-square w-full object-cover transition-transform duration-300 group-hover:scale-105"
            />
          </button>

          {/* Lower-center CTA overlay for mobile friendliness */}
          <div className="pointer-events-none absolute inset-x-0 bottom-2 flex justify-center">
            <Button
              size="sm"
              variant="hero"
              className="pointer-events-auto"
              onClick={() => setOpen(true)}
            >
              এখনই কিনুন
            </Button>
          </div>
        </div>

        <div className="space-y-1 pt-3 text-center">
          <h3 className="font-medium leading-tight">
            <Link to={`/product/${product.slug}`}>{product.name}</Link>
          </h3>
          <div className="font-semibold">{currency(product.price)}</div>
        </div>
      </article>

      {/* Quick View Dialog with animation (handled by shadcn/tailwind-animate) */}
      <Dialog open={open} onOpenChange={setOpen}>
        <DialogContent className="sm:max-w-2xl">
          <DialogHeader>
            <DialogTitle>{product.name}</DialogTitle>
            <DialogDescription>{product.shortDescription}</DialogDescription>
          </DialogHeader>
          <div className="grid gap-6 md:grid-cols-2">
            <ProductGallery images={product.images} name={product.name} />
            <div className="flex flex-col">
              <div className="text-2xl font-semibold mb-4">{currency(product.price)}</div>
              <p className="text-sm text-muted-foreground mb-6 line-clamp-6">
                {product.longDescription}
              </p>
              <div className="mt-auto flex gap-3">
                <Button variant="secondary" onClick={handleAdd}>কার্টে যোগ করুন</Button>
                <Button variant="hero" onClick={handleBuyNow}>এখনই অর্ডার করুন</Button>
              </div>
              <Button asChild variant="link" className="mt-2">
                <Link to={`/product/${product.slug}`} onClick={() => setOpen(false)}>
                  View full details →
                </Link>
              </Button>
            </div>
          </div>
        </DialogContent>
      </Dialog>
    </>
  );
};

export default ProductCard;
