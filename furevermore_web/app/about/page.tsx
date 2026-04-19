import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { GlassCard } from "@/components/ui/GlassCard";
import { Heart, Sparkles, ShieldCheck } from "lucide-react";

export default function AboutPage() {
  return (
    <main className="min-h-screen flex flex-col pt-20">
      <Header />
      
      <section className="py-20 bg-brand-bg">
        <div className="container mx-auto px-6">
          <div className="max-w-3xl mx-auto text-center mb-20">
            <h1 className="text-5xl font-serif font-bold text-secondary mb-8">Our Mission</h1>
            <p className="text-xl text-brand-muted leading-relaxed">
              At Furevermore, we believe every pet is a masterpiece. Our mission is to combine cutting-edge AI technology with a deep love for animals to create artistic tributes that capture the unique soul of your furry companions.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
            {[
              {
                icon: <Heart className="w-8 h-8 text-primary" />,
                title: "Crafted with Love",
                desc: "Every stroke and every shade is designed to celebrate the bond you share with your pet."
              },
              {
                icon: <Sparkles className="w-8 h-8 text-primary" />,
                title: "AI Excellence",
                desc: "We use the world's most advanced image generation models, fine-tuned specifically for pet artistry."
              },
              {
                icon: <ShieldCheck className="w-8 h-8 text-primary" />,
                title: "Quality First",
                desc: "From digital delivery to physical merchandise, we never compromise on the premium experience."
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
                q: "How long does it take to generate the art?",
                a: "Our AI typically crafts your masterpiece in 60-90 seconds. You'll see it appear in your results vault as soon as it's ready."
              },
              {
                q: "What kind of photos work best?",
                a: "Clear, high-resolution photos with good lighting and eye contact are ideal. Avoid blurry photos or ones where the pet's face is obscured."
              },
              {
                q: "Can I order prints of my art?",
                a: "Yes! Once your art is generated, you can head to the Shop to order canvasses, mugs, phone cases, and more featuring your pet."
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
          <h2 className="text-4xl font-serif font-bold mb-8">Ready to create your masterpiece?</h2>
          <p className="text-brand-bg/70 text-lg mb-12 max-w-2xl mx-auto">
            Join thousands of pet parents who have already immortalized their pets in stunning artistic styles.
          </p>
          <a href="/create" className="inline-block px-10 py-5 bg-primary text-white rounded-full text-lg font-bold hover:bg-primary/90 transition-all hover:scale-105 shadow-xl shadow-primary/20">
            Start Your Portrait
          </a>
        </div>
      </section>

      <Footer />
    </main>
  );
}
