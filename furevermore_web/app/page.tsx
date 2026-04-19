import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/Button";
import { GlassCard } from "@/components/ui/GlassCard";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { Sparkles, Camera, Heart, Share2 } from "lucide-react";

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
                <span>AI-Powered Pet Masterpieces</span>
              </div>
              <h1 className="text-5xl lg:text-7xl font-serif font-bold text-secondary mb-8 leading-[1.1]">
                Your Pet, <br />
                <span className="text-primary italic">Evermore</span> Beautiful.
              </h1>
              <p className="text-xl text-brand-muted mb-10 max-w-lg leading-relaxed">
                Transform your dog's precious moments into timeless keepsakes with the world's most sophisticated AI artistry.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Link href="/create">
                  <Button size="lg" className="w-full sm:w-auto">
                    Start Creating Now
                  </Button>
                </Link>
                <Link href="/gallery">
                  <Button variant="outline" size="lg" className="w-full sm:w-auto">
                    View Gallery
                  </Button>
                </Link>
              </div>
              <div className="mt-12 flex items-center gap-6 text-brand-muted/70">
                <div className="flex -space-x-3">
                  {[1, 2, 3, 4].map((i) => (
                    <div key={i} className="w-10 h-10 rounded-full border-2 border-brand-bg bg-brand-chip overflow-hidden">
                      <Image src={`https://i.pravatar.cc/100?img=${i+10}`} alt="User" width={40} height={40} />
                    </div>
                  ))}
                </div>
                <p className="text-sm font-medium">
                  Trusted by <span className="text-secondary font-bold">25,000+</span> pet parents
                </p>
              </div>
            </div>

            <div className="relative">
              <div className="absolute inset-0 bg-primary/20 blur-[120px] rounded-full" />
              <GlassCard className="relative p-2 overflow-hidden border-brand-text/5 rotate-2">
                <Image 
                  src="/hero.png" 
                  alt="AI Pet Art Showcase" 
                  width={800} 
                  height={800} 
                  className="rounded-2xl"
                  priority
                />
              </GlassCard>
              <div className="absolute -bottom-6 -left-6 bg-white p-4 rounded-2xl shadow-xl flex items-center gap-3 -rotate-3 animate-bounce-slow">
                <div className="w-10 h-10 bg-success/20 rounded-full flex items-center justify-center text-success">
                  <Heart className="w-6 h-6 fill-current" />
                </div>
                <div>
                  <p className="text-xs text-brand-muted">Art Quality</p>
                  <p className="text-sm font-bold">100% Guaranteed</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Social Proof Marks */}
      <section className="py-12 bg-white/50 border-y border-brand-text/5">
        <div className="container mx-auto px-6">
          <div className="flex flex-wrap justify-center items-center gap-8 md:gap-20 opacity-40 grayscale">
             {/* Mock brand logos would go here */}
             <span className="text-2xl font-serif font-bold italic">Vogue Pets</span>
             <span className="text-2xl font-serif font-bold italic">The Canine Times</span>
             <span className="text-2xl font-serif font-bold italic">Modern Dog</span>
             <span className="text-2xl font-serif font-bold italic">Paw Prints</span>
          </div>
        </div>
      </section>

      {/* How it Works */}
      <section className="py-24 bg-brand-bg relative">
        <div className="container mx-auto px-6">
          <div className="text-center mb-20">
            <h2 className="text-4xl md:text-5xl font-serif font-bold text-secondary mb-4">How It Works</h2>
            <p className="text-brand-muted max-w-2xl mx-auto">Three simple steps to create a masterpiece that will last for furevermore.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
            {[
              {
                icon: <Camera className="w-8 h-8" />,
                title: "1. Upload a Photo",
                desc: "Choose a favorite photo of your pet from your phone or computer."
              },
              {
                icon: <Sparkles className="w-8 h-8" />,
                title: "2. Choose a Style",
                desc: "Pick from over 12 artistic styles like Renaissance, Neon, or Watercolor."
              },
              {
                icon: <Heart className="w-8 h-8" />,
                title: "3. Treasure Forever",
                desc: "Get your unique digital portraits or high-quality merchandise delivered."
              }
            ].map((step, i) => (
              <div key={i} className="text-center group">
                <div className="w-20 h-20 bg-white rounded-3xl flex items-center justify-center mx-auto mb-8 shadow-sm group-hover:bg-primary group-hover:text-white transition-all duration-300 group-hover:scale-110">
                  {step.icon}
                </div>
                <h3 className="text-2xl font-serif font-bold text-secondary mb-4">{step.title}</h3>
                <p className="text-brand-muted leading-relaxed">{step.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-24 bg-primary text-white overflow-hidden relative">
        <div className="absolute top-0 right-0 p-20 opacity-10 pointer-events-none">
          <Share2 className="w-64 h-64" />
        </div>
        <div className="container mx-auto px-6 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
            <div>
              <h2 className="text-4xl md:text-5xl font-serif font-bold mb-8">Loved by Pet Parents</h2>
              <p className="text-brand-bg/70 text-lg mb-12">Join thousands of happy customers who have immortalized their furry friends through our AI-powered artistry.</p>
              <Link href="/gallery">
                <Button variant="outline" className="text-white border-brand-bg/20 hover:bg-brand-bg/10">Read More Stories</Button>
              </Link>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
              <GlassCard className="bg-white/10 border-white/10" hoverEffect={false}>
                <div className="flex gap-1 text-primary mb-4">
                  {[1,2,3,4,5].map(i => <Star key={i} className="w-4 h-4 fill-current" />)}
                </div>
                <p className="italic text-brand-bg/90 mb-6">"Absolutely beautiful! My golden retriever looks like a Renaissance painting. I've ordered a canvas!"</p>
                <p className="font-bold text-white">— Sarah, Golden Parent</p>
              </GlassCard>
              <GlassCard className="bg-white/10 border-white/10 mt-8" hoverEffect={false}>
                <div className="flex gap-1 text-primary mb-4">
                  {[1,2,3,4,5].map(i => <Star key={i} className="w-4 h-4 fill-current" />)}
                </div>
                <p className="italic text-brand-bg/90 mb-6 font-Inter">"The Neon Nights style is so cool. It's now the wallpaper on all my devices. Highly recommend!"</p>
                <p className="font-bold text-white">— Michael, Husky Dadd</p>
              </GlassCard>
            </div>
          </div>
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
