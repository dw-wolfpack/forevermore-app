"use client";

import Link from "next/link";
import Image from "next/image";
import { Button } from "./ui/Button";
import { usePathname } from "next/navigation";
import { cn } from "@/lib/utils";

const NavLink = ({ href, children, active }: { href: string; children: React.ReactNode; active: boolean }) => (
  <Link 
    href={href} 
    className={cn(
      "text-sm font-medium transition-colors hover:text-primary",
      active ? "text-primary border-b-2 border-primary" : "text-brand-text/70"
    )}
  >
    {children}
  </Link>
);

export const Header = () => {
  const pathname = usePathname();

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

        <nav className="hidden md:flex items-center gap-8">
          <NavLink href="/create" active={pathname.startsWith("/create")}>Create Art</NavLink>
          <NavLink href="/gallery" active={pathname === "/gallery"}>Gallery</NavLink>
          <NavLink href="/shop" active={pathname === "/shop"}>Shop</NavLink>
          <NavLink href="/about" active={pathname === "/about"}>About</NavLink>
          <Link href="/create">
            <Button size="sm">Start Creating</Button>
          </Link>
        </nav>

        {/* Mobile menu button could go here */}
      </div>
    </header>
  );
};
