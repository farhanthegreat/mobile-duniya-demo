import { Helmet } from "react-helmet-async";
import Header from "./Header";
import Footer from "./Footer";

const Layout: React.FC<{ title?: string; description?: string; children: React.ReactNode }>= ({
  title,
  description,
  children,
}) => {
  const pageTitle = title ? `${title} | মোবাইল দুনিয়া` : "মোবাইল দুনিয়া | Shop Mobile Gadgets & Accessories";
  const pageDesc = description ?? "Discover the latest smartphones and accessories. Shop now on মোবাইল দুনিয়া.";

  return (
    <div className="min-h-screen flex flex-col">
      <Helmet>
        <title>{pageTitle}</title>
        <meta name="description" content={pageDesc} />
      </Helmet>
      <Header />
      <main className="flex-1">{children}</main>
      <Footer />
    </div>
  );
};

export default Layout;
