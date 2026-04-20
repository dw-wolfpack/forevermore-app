"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/Button";
import { GlassCard } from "@/components/ui/GlassCard";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { Sparkles, Camera, Heart, Share2, CheckCircle2 } from "lucide-react";

import { NewsletterForm } from "@/components/NewsletterForm";

export default function Home() {
  return (
    <main className="min-h-screen flex flex-col pt-20 overflow-x-hidden">
      <Header />

      {/* Hero Section */}
      <section className="relative py-20 lg:py-32 overflow-hidden">
        <div className="container mx-auto px-6 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div className="text-left">
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 text-primary font-semibold text-sm mb-6">
                <Sparkles className="w-4 h-4" />
                <span>Artful Keepsakes for Pet Lovers</span>
              </div>
              <h1 className="text-5xl lg:text-7xl font-serif font-bold text-secondary mb-8 leading-[1.1]">
                Your Pet, <br />
                <span className="text-primary italic">Evermore</span> Beautiful.
              </h1>
              <p className="text-xl text-brand-muted mb-10 max-w-lg leading-relaxed">
                Turn a favorite photo of your pet into custom artwork and keepsakes made to be treasured for years.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Link href="/create">
                  <Button size="lg" className="w-full sm:w-auto">
                    Create Your Portrait
                  </Button>
                </Link>
                <Link href="/gallery">
                  <Button variant="outline" size="lg" className="w-full sm:w-auto">
                    Explore the Gallery
                  </Button>
                </Link>
              </div>
              <div className="mt-12 flex items-center gap-6 text-brand-muted/70">
                <p className="text-sm font-medium italic border-l-2 border-primary/20 pl-4">
                  Digital Portraits &bull; Physical Keepsakes Coming Soon
                </p>
              </div>
            </div>

            <div className="relative">
              <div className="absolute inset-0 bg-primary/20 blur-[120px] rounded-full" />
              <GlassCard className="relative p-2 overflow-hidden border-brand-text/5 rotate-2">
                <Image 
                  src="/hero.png" 
                  alt="Furevermore Portrait Showcase" 
                  width={800} 
                  height={800} 
                  className="rounded-2xl"
                  priority
                />
              </GlassCard>
              {/* Empty space for balance */}
            </div>
          </div>
        </div>
      </section>

      {/* Brand Statement Section */}
      <section className="py-24 bg-white/50 border-y border-brand-text/5">
        <div className="container mx-auto px-6">
          <div className="text-center">
             <p className="text-2xl font-serif font-bold italic text-secondary leading-relaxed max-w-3xl mx-auto">
               Portraits in styles from classic to contemporary, designed for pet lovers who want more than a snapshot.
             </p>
          </div>
        </div>
      </section>

      {/* How it Works */}
      <section className="py-24 bg-brand-bg relative">
        <div className="container mx-auto px-6">
          <div className="text-center mb-20">
            <h2 className="text-4xl md:text-5xl font-serif font-bold text-secondary mb-4">How It Works</h2>
            <p className="text-brand-muted max-w-2xl mx-auto">Three simple steps to create a portrait worth keeping.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
            {[
              {
                icon: <Camera className="w-8 h-8" />,
                title: "1. Upload a Photo",
                desc: "Choose a favorite image of your pet from your phone or computer."
              },
              {
                icon: <Sparkles className="w-8 h-8" />,
                title: "2. Choose a Style",
                desc: "Select from a curated collection of artistic styles, from painterly classics to modern color."
              },
              {
                icon: <Heart className="w-8 h-8" />,
                title: "3. Treasure It Forever",
                desc: "Receive your custom digital portrait, with premium physical keepsakes coming soon."
              }
            ].map((step, i) => (
              <div key={i} className="text-center group">
                <div className="w-20 h-20 bg-brand-chip rounded-3xl flex items-center justify-center mx-auto mb-8 shadow-sm group-hover:bg-primary group-hover:text-white transition-all duration-300 group-hover:scale-110">
                  {step.icon}
                </div>
                <h3 className="text-2xl font-serif font-bold text-secondary mb-4">{step.title}</h3>
                <p className="text-brand-muted leading-relaxed">{step.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Emotional Brand Section */}
      <section className="py-32 bg-primary text-white overflow-hidden relative">
        <div className="absolute top-0 right-0 p-20 opacity-10 pointer-events-none">
          <Heart className="w-64 h-64" />
        </div>
        <div className="container mx-auto px-6 relative z-10">
          <div className="max-w-3xl">
            <h2 className="text-4xl md:text-5xl font-serif font-bold mb-8 leading-tight">
              Made for the pets who become <br />
              <span className="italic">part of everything.</span>
            </h2>
            <p className="text-brand-bg/80 text-xl mb-12 leading-relaxed">
              From playful companions to lifelong best friends, Furevermore turns beloved photos into portraits worth keeping close.
            </p>
            <Link href="/create">
              <Button variant="outline" className="text-white border-brand-bg/30 hover:bg-brand-bg/10 px-8">
                Join the Waitlist
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Newsletter / Join the Pack */}
      <section className="py-24 px-6 relative overflow-hidden">
        <div className="absolute inset-0 bg-brand-bg -z-20" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full max-w-4xl h-full bg-primary/5 blur-[120px] -z-10" />
        
        <div className="container mx-auto max-w-4xl">
          <GlassCard className="p-12 md:p-16 text-center shadow-2xl border-brand-text/5 relative overflow-hidden">
            <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-primary to-transparent" />
            <NewsletterForm 
              title="Join the Pack"
              description="Be the first to know when the studio opens. Get early access to new portrait styles, limited releases, and upcoming keepsake collections."
            />
          </GlassCard>
        </div>
      </section>

      <Footer />
    </main>
  );
}

const Star = ({ className }: { className?: string }) => (
  <svg className={className} width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M12 2L15.09 8.26L22 9.27L17 14.14L18.18 21.02L12 17.77L5.82 21.02L7 14.14L2 9.27L8.91 8.26L12 2Z" />
  </svg>
);
