import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { GlassCard } from "@/components/ui/GlassCard";
import Image from "next/image";
import { Button } from "@/components/ui/Button";
import Link from "next/link";

const galleryItems = [
  {
    pet: "Prince",
    title: "Regal Renaissance",
    image: "/pug.png",
    category: "Oil"
  },
  {
    pet: "Luna",
    title: "Watercolor Study",
    image: "/lab.png",
    category: "Watercolor"
  },
  {
    pet: "Cooper",
    title: "Neon Portrait",
    image: "/corgi.png",
    category: "Neon"
  }
];

export default function GalleryPage() {
  return (
    <main className="min-h-screen flex flex-col pt-20">
      <Header />
      
      <section className="py-20 bg-brand-bg">
        <div className="container mx-auto px-6">
          <div className="max-w-3xl mx-auto text-center mb-20">
            <h1 className="text-5xl font-serif font-bold text-secondary mb-6">The Gallery</h1>
            <p className="text-xl text-brand-muted">Explore a selection of custom portraits inspired by beloved pets and timeless artistic styles.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12">
            {galleryItems.map((item, i) => (
              <GlassCard key={i} className="group p-3">
                <div className="relative aspect-square overflow-hidden rounded-2xl mb-4">
                  <Image 
                    src={item.image} 
                    alt={item.title} 
                    fill 
                    className="object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-secondary/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-start justify-end p-4">
                    <span className="text-[10px] font-bold uppercase tracking-widest text-white bg-primary/80 px-2 py-1 rounded backdrop-blur-sm">
                      {item.category}
                    </span>
                  </div>
                </div>
                <div className="px-4 py-4">
                  <p className="font-serif font-bold text-secondary text-xl mb-1">{item.pet}</p>
                  <p className="text-sm text-brand-muted font-medium">{item.title}</p>
                </div>
              </GlassCard>
            ))}
          </div>

          <div className="mt-20 text-center">
            <h2 className="text-3xl font-serif font-bold text-secondary mb-4">Ready to see your pet reimagined?</h2>
            <p className="text-brand-muted mb-8">Join the waitlist and be first to create your portrait.</p>
            <Link href="/create">
              <Button size="lg">Create Your Portrait</Button>
            </Link>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
