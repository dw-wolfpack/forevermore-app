import Link from "next/link";
import Image from "next/image";

export const Footer = () => {
  return (
    <footer className="bg-primary text-brand-bg py-16">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12">
          <div className="col-span-1 md:col-span-2">
            <Link href="/" className="flex items-center gap-2 mb-6">
              <Image src="/logo.png" alt="Furevermore Logo" width={32} height={32} />
              <span className="text-2xl font-bold font-serif text-white">Furevermore</span>
            </Link>
            <p className="text-brand-bg/70 max-w-md mb-8">
              Furevermore turns beloved pet photos into refined custom artwork and keepsakes designed to be treasured for years.
            </p>
          </div>

          <div>
            <h4 className="font-serif text-lg font-bold mb-6 text-white text-brand-bg">Experience</h4>
            <ul className="space-y-4 text-brand-bg/70">
              <li><Link href="/create" className="hover:text-white transition-colors">Join Waitlist</Link></li>
              <li><Link href="/gallery" className="hover:text-white transition-colors">Gallery</Link></li>
              <li><Link href="/shop" className="hover:text-white transition-colors">Art Shop</Link></li>
            </ul>
          </div>

          <div>
            <h4 className="font-serif text-lg font-bold mb-6 text-brand-bg">About</h4>
            <ul className="space-y-4 text-brand-bg/70">
              <li><Link href="/about" className="hover:text-white transition-colors">Our Story</Link></li>
              <li><Link href="/privacy" className="hover:text-white transition-colors">Privacy Policy</Link></li>
              <li><Link href="/terms" className="hover:text-white transition-colors">Terms of Service</Link></li>
            </ul>
          </div>
        </div>

        <div className="mt-16 pt-8 border-t border-brand-bg/10 flex flex-col md:row items-center justify-between gap-4 text-sm text-brand-bg/50">
          <p>© {new Date().getFullYear()} Furevermore. All rights reserved.</p>
          <p>Handcrafted for pet lovers.</p>
        </div>
      </div>
    </footer>
  );
};
