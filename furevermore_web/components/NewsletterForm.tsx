"use client";

import { useState } from "react";
import { Button } from "./ui/Button";
import { Sparkles, CheckCircle2, Loader2 } from "lucide-react";

interface NewsletterFormProps {
  title?: string;
  description?: string;
  compact?: boolean;
  centered?: boolean;
}

export const NewsletterForm = ({ 
  title = "Join the Pack", 
  description = "Be the first to know when we open our doors.",
  compact = false,
  centered = true
}: NewsletterFormProps) => {
  const [subscribed, setSubscribed] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubscribe = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);

    const formData = new FormData(e.currentTarget);
    const email = formData.get("email");

    try {
      const response = await fetch("https://formspree.io/f/mlgalezw", {
        method: "POST",
        body: JSON.stringify({ email }),
        headers: {
          'Accept': 'application/json',
          'Content-Type': 'application/json'
        }
      });

      if (response.ok) {
        setSubscribed(true);
      }
    } catch (error) {
      console.error("Subscription failed:", error);
    } finally {
      setIsSubmitting(false);
    }
  };

  if (subscribed) {
    return (
        <div className={`py-4 animate-in fade-in zoom-in duration-500 ${centered ? 'text-center' : ''}`}>
          <div className={`w-16 h-16 bg-success/10 rounded-full flex items-center justify-center mb-6 text-success ${centered ? 'mx-auto' : ''}`}>
            <CheckCircle2 className="w-10 h-10" />
          </div>
          <h3 className="text-2xl font-serif font-bold text-secondary mb-2">Welcome to the Pack!</h3>
          <p className="text-brand-muted">
            We've added your name to the list.
          </p>
        </div>
    );
  }

  return (
    <div className={centered ? 'text-center' : ''}>
      {!compact && (
        <>
          <div className={`w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center mb-6 text-primary ${centered ? 'mx-auto' : ''}`}>
            <Sparkles className="w-6 h-6" />
          </div>
          <h2 className="text-3xl font-serif font-bold text-secondary mb-4">{title}</h2>
          <p className="text-brand-muted mb-8 leading-relaxed max-w-md mx-auto">
            {description}
          </p>
        </>
      )}
      
      <form className={`flex flex-col sm:flex-row gap-3 max-w-md ${centered ? 'mx-auto' : ''}`} onSubmit={handleSubscribe}>
        <input 
          type="email" 
          name="email"
          placeholder="your@email.com" 
          className="flex-1 px-8 py-3 rounded-full border border-brand-text/10 focus:outline-none focus:ring-2 focus:ring-primary/50 bg-white/50 backdrop-blur-sm"
          required
          disabled={isSubmitting}
        />
        <Button type="submit" disabled={isSubmitting} className="min-w-[140px]">
          {isSubmitting ? (
            <Loader2 className="w-4 h-4 animate-spin" />
          ) : (
            compact ? "Join Waitlist" : "Stay Updated"
          )}
        </Button>
      </form>
    </div>
  );
};
