const Footer = () => {
  return (
    <footer className="border-t mt-16">
      <div className="container py-10 text-center md:text-left grid gap-6 md:grid-cols-3">
        <div>
          <h3 className="font-semibold mb-2">মোবাইল দুনিয়া</h3>
          <p className="text-sm text-muted-foreground">Premium smartphones & accessories. Fast delivery, secure checkout.</p>
        </div>
        <div>
          <h4 className="font-medium mb-2">Support</h4>
          <ul className="space-y-1 text-sm text-muted-foreground">
            <li>Hotline: +880 1818-622069</li>
          </ul>
        </div>
        <div>
          <h4 className="font-medium mb-2">Policies</h4>
          <ul className="space-y-1 text-sm text-muted-foreground">
            <li>Shipping & Delivery</li>
            <li>Returns & Refunds</li>
            <li>Privacy Policy</li>
          </ul>
        </div>
      </div>
      <div className="border-t">
        <div className="container py-6 text-sm text-muted-foreground text-center">
          © {new Date().getFullYear()} মোবাইল দুনিয়া. All rights reserved.
        </div>
      </div>
    </footer>
  );
};

export default Footer;
