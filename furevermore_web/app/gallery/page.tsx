import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { GlassCard } from "@/components/ui/GlassCard";
import Image from "next/image";
import { Button } from "@/components/ui/Button";
import Link from "next/link";

const galleryItems = [
  {
    title: "Regal Renaissance",
    pet: "Prince the Pug",
    image: "/pug.png",
    style: "Oil Painting"
  },
  {
    title: "Watercolor Dream",
    pet: "Luna the Lab",
    image: "/lab.png",
    style: "Watercolor"
  },
  {
    title: "Neon Nights",
    pet: "Cooper the Corgi",
    image: "/corgi.png",
    style: "Cyberpunk"
  }
];

export default function GalleryPage() {
  return (
    <main className="min-h-screen flex flex-col pt-20">
      <Header />
      
      <section className="py-20 bg-brand-bg">
        <div className="container mx-auto px-6">
          <div className="max-w-3xl mx-auto text-center mb-20">
            <h1 className="text-5xl font-serif font-bold text-secondary mb-6">Community Gallery</h1>
            <p className="text-xl text-brand-muted">Explore the masterpieces created by our wonderful community.</p>
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
                  <div className="absolute inset-0 bg-gradient-to-t from-secondary/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-6">
                    <div className="text-white">
                      <p className="text-primary font-bold text-sm mb-1">{item.style}</p>
                      <h3 className="text-xl font-serif font-bold">{item.title}</h3>
                    </div>
                  </div>
                </div>
                <div className="px-4 py-2">
                  <p className="font-bold text-secondary">{item.pet}</p>
                  <p className="text-sm text-brand-muted">{item.style} Series</p>
                </div>
              </GlassCard>
            ))}
          </div>

          <div className="mt-20 text-center">
            <h2 className="text-3xl font-serif font-bold text-secondary mb-8">Want to see your pet here?</h2>
            <Link href="/create">
              <Button size="lg">Create Your Own Portrait</Button>
            </Link>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
