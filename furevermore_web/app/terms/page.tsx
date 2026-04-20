import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { GlassCard } from "@/components/ui/GlassCard";

export default function TermsPage() {
  return (
    <main className="min-h-screen flex flex-col pt-20 bg-brand-bg text-brand-text">
      <Header />
      
      <section className="py-20 px-6">
        <div className="container mx-auto max-w-4xl">
          <div className="text-center mb-16">
            <h1 className="text-5xl font-serif font-bold text-secondary mb-6">Terms of Service</h1>
            <p className="text-brand-muted italic">Last Updated: April 2026</p>
          </div>

          <div className="space-y-12">
            <GlassCard className="p-10 space-y-6">
              <section>
                <h2 className="text-2xl font-serif font-bold text-secondary mb-4">1. Acceptance of Terms</h2>
                <p className="leading-relaxed">
                  By accessing the Furevermore studio and using our services, you agree to be bound by these Terms of Service. If you do not agree with any part of these terms, you may not use our platform or services.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-serif font-bold text-secondary mb-4">2. The Furevermore Studio</h2>
                <p className="leading-relaxed">
                  Furevermore provides a curated portrait experience using creative technology. All digital artwork and physical keepsakes are subjects of our artistic interpretation. We reserve the right to refine or limit access to the studio to ensure a premium experience for all members.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-serif font-bold text-secondary mb-4">3. Intellectual Property</h2>
                <p className="leading-relaxed">
                  All custom artwork created through Furevermore is for personal, non-commercial use by the user. Furevermore retains the artistic rights to the creative styles and technologies used in the portrait process.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-serif font-bold text-secondary mb-4">4. User Conduct</h2>
                <p className="leading-relaxed">
                  Users are expected to provide high-quality, respectful content for portrait creation. We reserve the right to refuse service for content that violates our community standards or artistic values.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-serif font-bold text-secondary mb-4">5. Physical Keepsakes</h2>
                <p className="leading-relaxed">
                  Shipping and delivery of physical items are handled with care by our curated partners. While we strive for perfection, delivery timelines and material availability may vary based on your location and the specific artisan collection.
                </p>
              </section>
            </GlassCard>
            
            <div className="text-center text-brand-muted italic">
              <p>For any questions regarding these terms, please contact the Furevermore studio.</p>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
