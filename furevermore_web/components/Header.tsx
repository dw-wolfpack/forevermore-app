"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { Button } from "./ui/Button";
import { usePathname } from "next/navigation";
import { cn } from "@/lib/utils";
import { Menu, X, Sparkles } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

const NavLink = ({ 
  href, 
  children, 
  active, 
  onClick 
}: { 
  href: string; 
  children: React.ReactNode; 
  active: boolean;
  onClick?: () => void;
}) => (
  <Link 
    href={href} 
    onClick={onClick}
    className={cn(
      "text-sm font-medium transition-colors hover:text-primary py-2 md:py-0",
      active ? "text-primary border-b-2 border-primary md:border-b-2" : "text-brand-text/70"
    )}
  >
    {children}
  </Link>
);

export const Header = () => {
  const pathname = usePathname();
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  // Close menu when pathname changes
  useEffect(() => {
    setIsMenuOpen(false);
  }, [pathname]);

  // Prevent scrolling when menu is open
  useEffect(() => {
    if (isMenuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
  }, [isMenuOpen]);

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-brand-bg/80 backdrop-blur-md border-b border-brand-text/5">
      <div className="container mx-auto px-6 h-20 flex items-center justify-between">
        <Link href="/" className="flex items-center gap-2 group">
          <Image 
            src="/logo.png" 
            alt="Furevermore Logo" 
            width={40} 
            height={40} 
            className="transition-transform group-hover:scale-110"
          />
          <span className="text-xl font-bold tracking-tight text-secondary font-serif">
            Furevermore
          </span>
        </Link>

        {/* Desktop Nav */}
        <nav className="hidden md:flex items-center gap-8">
          <NavLink href="/create" active={pathname.startsWith("/create")}>Create Art</NavLink>
          <NavLink href="/gallery" active={pathname === "/gallery"}>Gallery</NavLink>
          <NavLink href="/shop" active={pathname === "/shop"}>Shop</NavLink>
          <NavLink href="/about" active={pathname === "/about"}>About</NavLink>
          <Link href="/create">
            <Button size="sm">Start Creating</Button>
          </Link>
        </nav>

        {/* Mobile menu button */}
        <button 
          className="md:hidden p-2 text-secondary hover:bg-primary/10 rounded-lg transition-colors"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          aria-label="Toggle menu"
        >
          {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </div>

      {/* Mobile Sidebar */}
      <AnimatePresence>
        {isMenuOpen && (
          <>
            {/* Backdrop */}
            <motion.div 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setIsMenuOpen(false)}
              className="fixed inset-0 bg-secondary/20 backdrop-blur-sm z-40 md:hidden"
            />
            
            {/* Sidebar */}
            <motion.div 
              initial={{ x: "100%" }}
              animate={{ x: 0 }}
              exit={{ x: "100%" }}
              transition={{ type: "spring", damping: 25, stiffness: 200 }}
              className="fixed top-0 right-0 bottom-0 w-[280px] bg-brand-bg z-[100] p-8 shadow-2xl md:hidden border-l border-brand-text/5"
            >
              <div className="flex flex-col h-full">
                <div className="flex items-center justify-between mb-12">
                  <span className="text-xl font-serif font-bold text-secondary">Menu</span>
                  <button onClick={() => setIsMenuOpen(false)}>
                    <X className="w-6 h-6 text-brand-muted" />
                  </button>
                </div>

                <nav className="flex flex-col gap-6 text-lg">
                  <NavLink href="/create" active={pathname.startsWith("/create")}>Create Art</NavLink>
                  <NavLink href="/gallery" active={pathname === "/gallery"}>Gallery</NavLink>
                  <NavLink href="/shop" active={pathname === "/shop"}>Shop</NavLink>
                  <NavLink href="/about" active={pathname === "/about"}>About</NavLink>
                </nav>

                <div className="mt-auto pt-8">
                  <Link href="/create" onClick={() => setIsMenuOpen(false)}>
                    <Button className="w-full justify-between group">
                      <span>Start Creating</span>
                      <Sparkles className="w-4 h-4 group-hover:scale-125 transition-transform" />
                    </Button>
                  </Link>
                  <p className="text-xs text-brand-muted text-center mt-6 italic">
                    Museum quality for your best friend.
                  </p>
                </div>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </header>
  );
};
