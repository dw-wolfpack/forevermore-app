import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { GlassCard } from "@/components/ui/GlassCard";
import { Heart, Sparkles, ShieldCheck } from "lucide-react";
import Link from "next/link";

export default function AboutPage() {
  return (
    <main className="min-h-screen flex flex-col pt-20">
      <Header />
      
      <section className="py-20 bg-brand-bg">
        <div className="container mx-auto px-6">
          <div className="max-w-3xl mx-auto text-center mb-20">
            <h1 className="text-5xl font-serif font-bold text-secondary mb-8">Our Mission</h1>
            <p className="text-xl text-brand-muted leading-relaxed">
              At Furevermore, we believe the animals we love deserve more than a folder of forgotten photos. We create refined custom pet artwork and keepsakes that honor the personality, beauty, and bond behind every image.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
            {[
              {
                icon: <Heart className="w-8 h-8 text-primary" />,
                title: "Crafted with Care",
                desc: "Every portrait is designed to feel personal, polished, and worthy of display."
              },
              {
                icon: <Sparkles className="w-8 h-8 text-primary" />,
                title: "Thoughtfully Powered",
                desc: "We use thoughtfully designed creative technology to transform beloved pet photos into artful, display-worthy pieces."
              },
              {
                icon: <ShieldCheck className="w-8 h-8 text-primary" />,
                title: "Quality Above All",
                desc: "From digital portraits to future physical collections, we design every detail around a premium experience."
              }
            ].map((item, i) => (
              <GlassCard key={i} className="text-center p-10">
                <div className="w-16 h-16 bg-white rounded-2xl flex items-center justify-center mx-auto mb-6 shadow-sm">
                  {item.icon}
                </div>
                <h3 className="text-2xl font-serif font-bold text-secondary mb-4">{item.title}</h3>
                <p className="text-brand-muted leading-relaxed">{item.desc}</p>
              </GlassCard>
            ))}
          </div>
        </div>
      </section>

      <section className="py-24 bg-brand-bg">
        <div className="container mx-auto px-6 max-w-4xl">
          <h2 className="text-4xl font-serif font-bold text-secondary mb-12 text-center">Frequently Asked Questions</h2>
          <div className="grid grid-cols-1 gap-8">
            {[
              {
                q: "How long does it take to create the art?",
                a: "Once the studio opens, most portraits will be ready within minutes. You'll see several artistic variations to choose from."
              },
              {
                q: "What kind of photos work best?",
                a: "Clear, well-lit photos where your pet's face is fully visible produce the most artful results."
              },
              {
                q: "Can I order prints of my art?",
                a: "Physical products are coming soon. Join the waitlist to be the first to know when our first collection of canvases and keepsakes launches."
              }
            ].map((faq, i) => (
              <GlassCard key={i}>
                <h4 className="text-xl font-bold text-secondary mb-2">{faq.q}</h4>
                <p className="text-brand-muted">{faq.a}</p>
              </GlassCard>
            ))}
          </div>
        </div>
      </section>

      <section className="py-24 bg-secondary text-white">

        <div className="container mx-auto px-6 text-center">
          <h2 className="text-4xl font-serif font-bold mb-8">Ready to see your pet reimagined?</h2>
          <p className="text-brand-bg/70 text-lg mb-12 max-w-2xl mx-auto">
            Join the waitlist and be the first to know when the studio opens its doors for custom portraits.
          </p>
          <Link href="/create" className="inline-block px-10 py-5 bg-primary text-white rounded-full text-lg font-bold hover:bg-primary/90 transition-all hover:scale-105 shadow-xl shadow-primary/20">
            Join the Waitlist
          </Link>
        </div>
      </section>

      <Footer />
    </main>
  );
}
