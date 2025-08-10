import Layout from "@/components/layout/Layout";
import { Button } from "@/components/ui/button";

const Contact = () => {
  return (
    <Layout title="Contact" description="Get in touch with মোবাইল দুনিয়া support.">
      <section className="container py-10 max-w-3xl">
        <h1 className="text-3xl font-bold mb-4">Contact</h1>
        <p className="text-muted-foreground mb-6">কোনো প্রশ্ন কিংবা জিজ্ঞাসা থাকলে করুন। </p>
        <form className="space-y-4">
          <div className="grid gap-4 md:grid-cols-2">
            <input required placeholder="Your Name" className="w-full rounded-md border bg-background px-3 py-2" />
            <input required type="email" placeholder="Email Address" className="w-full rounded-md border bg-background px-3 py-2" />
          </div>
          <input required placeholder="Subject" className="w-full rounded-md border bg-background px-3 py-2" />
          <textarea required placeholder="Message" rows={5} className="w-full rounded-md border bg-background px-3 py-2" />
          <Button variant="hero">মেসেজ পাঠান</Button>
        </form>
      </section>
    </Layout>
  );
};

export default Contact;
