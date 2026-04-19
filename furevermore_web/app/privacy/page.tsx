import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";

export default function PrivacyPage() {
  return (
    <main className="min-h-screen flex flex-col pt-20">
      <Header />
      <section className="py-20 bg-brand-bg flex-1">
        <div className="container mx-auto px-6 max-w-4xl">
          <h1 className="text-4xl font-serif font-bold text-secondary mb-8">Privacy Policy</h1>
          <div className="prose prose-brown text-brand-muted">
            <p className="mb-4">Last Updated: April 19, 2026</p>
            <p className="mb-6">At Furevermore, we take your privacy—and your pet's privacy—seriously. This policy describes how we handle the photos you upload and the art we generate.</p>
            <h2 className="text-2xl font-bold text-secondary mt-8 mb-4">1. Data Collection</h2>
            <p className="mb-6">We collect the photos you upload to generate AI art. These are stored securely in our AWS infrastructure and are used solely for the purpose of fulfilling your request.</p>
            <h2 className="text-2xl font-bold text-secondary mt-8 mb-4">2. Cookies</h2>
            <p className="mb-6">We use browser cookies to track your free generation usage (limit 2 per day) and to remember your session preferences.</p>
          </div>
        </div>
      </section>
      <Footer />
    </main>
  );
}
