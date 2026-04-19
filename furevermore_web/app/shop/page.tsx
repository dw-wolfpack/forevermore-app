import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { GlassCard } from "@/components/ui/GlassCard";
import { ShoppingBag } from "lucide-react";

export default function ShopPage() {
  return (
    <main className="min-h-screen flex flex-col pt-20 bg-brand-bg">
      <Header />
      <section className="flex-1 flex items-center justify-center p-6">
        <GlassCard className="max-w-md w-full p-12 text-center">
          <div className="w-20 h-20 bg-primary/10 rounded-full flex items-center justify-center mx-auto text-primary mb-6">
            <ShoppingBag className="w-10 h-10" />
          </div>
          <h1 className="text-3xl font-serif font-bold text-secondary mb-4">The Art Shop</h1>
          <p className="text-brand-muted mb-8 text-lg">
            We're currently hand-picking the finest canvases and products for your pet's masterpieces.
          </p>
          <div className="inline-block px-6 py-2 bg-secondary text-white rounded-full text-sm font-bold">
            COMING SOON
          </div>
        </GlassCard>
      </section>
      <Footer />
    </main>
  );
}
