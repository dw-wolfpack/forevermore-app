import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { GlassCard } from "@/components/ui/GlassCard";

export default function PrivacyPage() {
  return (
    <main className="min-h-screen flex flex-col pt-20 bg-brand-bg text-brand-text">
      <Header />
      
      <section className="py-20 px-6">
        <div className="container mx-auto max-w-4xl">
          <div className="text-center mb-16">
            <h1 className="text-5xl font-serif font-bold text-secondary mb-6">Privacy Policy</h1>
            <p className="text-brand-muted italic">Last Updated: April 2026</p>
          </div>

          <div className="space-y-12">
            <GlassCard className="p-10 space-y-6">
              <section>
                <h2 className="text-2xl font-serif font-bold text-secondary mb-4">1. Our Commitment</h2>
                <p className="leading-relaxed">
                  Your privacy and the security of your pet's images are central to the Furevermore experience. We are committed to protecting the personal information you share with our studio.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-serif font-bold text-secondary mb-4">2. Information Collection</h2>
                <p className="leading-relaxed">
                  We collect information necessary to provide our custom portrait services, including your email for waitlist updates and the photos you upload for artistic processing. All images are handled securely and used only for the purpose of creating your artwork.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-serif font-bold text-secondary mb-4">3. Data Security</h2>
                <p className="leading-relaxed">
                  We employ industry-standard security measures to safeguard your information stored in our studio. Your photos and portraits are protected throughout the creative process.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-serif font-bold text-secondary mb-4">4. Sharing of Information</h2>
                <p className="leading-relaxed">
                  Furevermore does not sell or lease your personal information to third parties. We only share information with our trusted artisan partners to fulfill orders for physical keepsakes.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-serif font-bold text-secondary mb-4">5. Your Artistic Rights</h2>
                <p className="leading-relaxed">
                  You have the right to request the removal of your data and images from our system at any time. We respect your control over your pet's legacy.
                </p>
              </section>
            </GlassCard>
            
            <div className="text-center text-brand-muted italic">
              <p>Your trust is the foundation of our studio experience.</p>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
