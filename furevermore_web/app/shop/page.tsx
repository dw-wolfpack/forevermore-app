import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { GlassCard } from "@/components/ui/GlassCard";
import { Button } from "@/components/ui/Button";
import { ShoppingBag, Star, Truck, ShieldCheck, Heart, Package, Sparkles } from "lucide-react";
import Link from "next/link";
import Image from "next/image";

const products = [
  {
    title: "Gallery Canvas",
    description: "A refined canvas print designed to become the centerpiece of your home gallery.",
    price: "From $49",
    tag: "Signature",
    color: "from-amber-100 to-amber-200",
    image: "/canvas.jpg"
  },
  {
    title: "Signature Mug",
    description: "Start every morning with a portrait of your best friend.",
    price: "From $24",
    tag: "Favorite",
    color: "from-blue-100 to-blue-200",
    image: "/mug.jpg"
  },
  {
    title: "Heritage Hoodie",
    description: "Premium comfort, finished with artwork worth wearing.",
    price: "From $65",
    tag: "Collector",
    color: "from-emerald-100 to-emerald-200",
    image: "/hoodie.jpg"
  }
];

const steps = [
  {
    title: "Create Your Art",
    description: "Upload a photo and choose your preferred style.",
    icon: <Sparkles className="w-6 h-6" />
  },
  {
    title: "Choose Your Piece",
    description: "Select from a curated collection of premium home and gift items.",
    icon: <Package className="w-6 h-6" />
  },
  {
    title: "Delivered Beautifully",
    description: "We print, finish, and ship your order with care.",
    icon: <Truck className="w-6 h-6" />
  }
];

import { NewsletterForm } from "@/components/NewsletterForm";

export default function ShopPage() {
  return (
    <main className="min-h-screen flex flex-col pt-20 bg-brand-bg">
      <Header />
      
      {/* Hero Section */}
      <section className="py-20 px-6">
        <div className="container mx-auto">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-5xl md:text-6xl font-serif font-bold text-secondary mb-6">
              Museum Quality for <br />
              <span className="text-primary italic">Your Best Friend.</span>
            </h1>
            <p className="text-xl text-brand-muted mb-8">
              Our first physical collection is being curated with the same care as every portrait. 
              Join the waitlist for early access to premium keepsakes and home pieces.
            </p>
            <div className="max-w-md mx-auto">
              <NewsletterForm compact />
            </div>
          </div>
        </div>
      </section>

      {/* Product Grid */}
      <section className="py-20 px-6 bg-white/30">
        <div className="container mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {products.map((product, i) => (
              <GlassCard key={i} className="group overflow-hidden">
                <div className="aspect-[4/5] relative overflow-hidden bg-brand-chip">
                  <Image 
                    src={product.image} 
                    alt={product.title}
                    fill
                    className="object-cover transition-transform duration-700 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-secondary/40 to-transparent" />
                  <div className="absolute top-4 right-4 bg-white/90 backdrop-blur-sm px-3 py-1 rounded-full text-[10px] font-bold tracking-widest text-secondary uppercase">
                    {product.tag}
                  </div>
                  <div className="absolute bottom-6 left-0 right-0 px-6 translate-y-4 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-300">
                    <p className="text-white text-sm font-bold text-center bg-secondary/80 backdrop-blur-md py-2 rounded-lg">
                      Coming Early Access
                    </p>
                  </div>
                </div>
                <div className="p-8">
                  <h3 className="text-2xl font-serif font-bold text-secondary mb-2">{product.title}</h3>
                  <p className="text-brand-muted mb-4">{product.description}</p>
                  <p className="text-primary font-bold">{product.price}</p>
                </div>
              </GlassCard>
            ))}
          </div>
        </div>
      </section>

      {/* Walkthrough Section */}
      <section className="py-24 px-6 bg-primary text-white overflow-hidden relative">
        <div className="absolute top-0 right-0 -translate-y-1/2 translate-x-1/2 w-96 h-96 bg-primary/20 rounded-full blur-3xl" />
        <div className="container mx-auto relative z-10">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-serif font-bold mb-4">From Portrait to Keepsake</h2>
            <p className="text-primary-foreground/70 text-lg">Your art belongs on a wall, not just a screen.</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12 max-w-5xl mx-auto">
            {steps.map((step, i) => (
              <div key={i} className="text-center">
                <div className="w-16 h-16 bg-white/10 rounded-2xl flex items-center justify-center mx-auto mb-6 border border-white/20">
                  {step.icon}
                </div>
                <h3 className="text-xl font-bold mb-3">{step.title}</h3>
                <p className="text-primary-foreground/60">{step.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Trust Badges */}
      <section className="py-16 px-6">
        <div className="container mx-auto">
          <div className="flex flex-wrap items-center justify-center gap-12 opacity-50 grayscale hover:grayscale-0 transition-all duration-500">
            <div className="flex items-center gap-2 font-bold text-secondary">
              <Sparkles className="w-6 h-6" /> Premium Materials
            </div>
            <div className="flex items-center gap-2 font-bold text-secondary">
              <Heart className="w-6 h-6" /> Thoughtful Finishing
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
