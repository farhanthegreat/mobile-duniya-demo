import { Link, NavLink } from "react-router-dom";
import { ShoppingCart } from "lucide-react";
import { useCart } from "@/context/CartContext";
import { Button } from "@/components/ui/button";

const navLinkClass = ({ isActive }: { isActive: boolean }) =>
  `px-3 py-2 rounded-md text-sm font-medium transition-colors ${
    isActive ? "text-primary" : "text-muted-foreground hover:text-foreground"
  }`;

const Header = () => {
  const { totalQty } = useCart();

  return (
    <header className="sticky top-0 z-40 w-full bg-background/80 backdrop-blur supports-[backdrop-filter]:bg-background/60 border-b">
      <div className="container flex h-16 items-center justify-between">
        <div className="flex items-center gap-6">
          <Link to="/" className="font-bold text-lg tracking-tight">
            মোবাইল দুনিয়া
          </Link>
          <nav className="hidden md:flex items-center gap-1">
            <NavLink to="/" className={navLinkClass} end>হোম</NavLink>
            <NavLink to="/shop" className={navLinkClass}>শপ</NavLink>
            <NavLink to="/about" className={navLinkClass}>আমাদের সম্পর্কে</NavLink>
            <NavLink to="/contact" className={navLinkClass}>যোগাযোগ</NavLink>
          </nav>
        </div>
        <div className="flex items-center gap-3">
          <Link to="/cart" aria-label="Cart" className="relative">
            <Button variant="outline" size="icon">
              <ShoppingCart />
            </Button>
            {totalQty > 0 && (
              <span className="absolute -right-1 -top-1 inline-flex h-5 min-w-5 items-center justify-center rounded-full bg-primary px-1 text-xs font-semibold text-primary-foreground">
                {totalQty}
              </span>
            )}
          </Link>
          <Button asChild variant="hero" className="hidden sm:inline-flex">
            <Link to="/shop">এখনই কিনুন</Link>
          </Button>
        </div>
      </div>
    </header>
  );
};

export default Header;
