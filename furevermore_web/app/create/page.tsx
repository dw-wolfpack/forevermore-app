"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { Button } from "@/components/ui/Button";
import { GlassCard } from "@/components/ui/GlassCard";
import { Upload, Sparkles, Loader2, CheckCircle2, AlertCircle } from "lucide-react";
import Cookies from "js-cookie";
import  STYLES  from "@/lib/styleConfig.json";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";

const AWS_BASE_URL = process.env.NEXT_PUBLIC_AWS_BASE_URL || 'https://e0r2hs54xd.execute-api.us-west-2.amazonaws.com';
const FREE_LIMIT = 2;

type Step = "UPLOAD" | "STYLE" | "LOADING" | "RESULT" | "LIMIT";

export default function CreatePage() {
  const [step, setStep] = useState<Step>("UPLOAD");
  const [file, setFile] = useState<File | null>(null);
  const [preview, setPreview] = useState<string | null>(null);
  const [isUploading, setIsUploading] = useState(false);
  const [s3Key, setS3Key] = useState<string | null>(null);
  const [getUrl, setGetUrl] = useState<string | null>(null);
  const [selectedStyle, setSelectedStyle] = useState<any>(null);
  const [progress, setProgress] = useState(0);
  const [results, setResults] = useState<string[]>([]);
  const [error, setError] = useState<string | null>(null);
  const [usageCount, setUsageCount] = useState(0);

  useEffect(() => {
    const count = parseInt(Cookies.get("furevermore_usage") || "0");
    setUsageCount(count);
  }, []);

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const selectedFile = e.target.files?.[0];
    if (selectedFile) {
      setFile(selectedFile);
      setPreview(URL.createObjectURL(selectedFile));
      uploadToS3(selectedFile);
    }
  };

  const uploadToS3 = async (selectedFile: File) => {
    setIsUploading(true);
    setError(null);
    try {
      const presignResp = await fetch(`${AWS_BASE_URL}/presign_upload`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          filename: `web_pet_${Date.now()}.jpg`,
          contentType: 'image/jpeg'
        }),
      });

      if (!presignResp.ok) throw new Error("Failed to get upload URL");
      const { put_url, get_url, key } = await presignResp.json();

      const uploadResp = await fetch(put_url, {
        method: 'PUT',
        headers: { 'Content-Type': 'image/jpeg' },
        body: selectedFile,
      });

      if (!uploadResp.ok) throw new Error("S3 upload failed");

      setS3Key(key);
      setGetUrl(get_url);
    } catch (err: any) {
      setError(err.message);
    } finally {
      setIsUploading(false);
    }
  };

  const handleStyleSelect = (style: any) => {
    if (usageCount >= FREE_LIMIT) {
      setStep("LIMIT");
      return;
    }
    setSelectedStyle(style);
    startGeneration(style);
  };

  const startGeneration = async (style: any) => {
    setStep("LOADING");
    setProgress(0);
    setError(null);

    try {
      const startResp = await fetch(`${AWS_BASE_URL}/generate/start`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          image_url: getUrl,
          blend_prompt: style.prompt,
        }),
      });

      if (!startResp.ok) throw new Error("Generation failed to start");
      const { image_id } = await startResp.json();

      // Polling
      let status = "pending";
      let attempts = 0;
      while (status !== "completed" && status !== "failed" && attempts < 60) {
        await new Promise(r => setTimeout(r, 5000));
        attempts++;
        setProgress(Math.min((attempts / 40) * 100, 95));

        const statusResp = await fetch(`${AWS_BASE_URL}/generate/status`, {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({ image_id }),
        });

        if (statusResp.ok) {
          const data = await statusResp.json();
          status = data.status;
          if (status === "completed") {
            setResults(data.images);
            setProgress(100);
            setStep("RESULT");
            const newCount = usageCount + 1;
            setUsageCount(newCount);
            Cookies.set("furevermore_usage", newCount.toString(), { expires: 30 });
          }
        }
      }

      if (status !== "completed") throw new Error("Generation timed out or failed");

    } catch (err: any) {
      setError(err.message);
      setStep("STYLE");
    }
  };

  return (
    <main className="min-h-screen flex flex-col pt-20 bg-brand-bg relative overflow-hidden">
      <Header />
      
      {/* Background decoration */}
      <div className="absolute top-0 right-0 w-1/2 h-1/2 bg-primary/5 blur-[150px] -z-10" />
      <div className="absolute bottom-0 left-0 w-1/2 h-1/2 bg-primary/5 blur-[150px] -z-10" />

      <section className="flex-1 py-12 lg:py-20">
        <div className="container mx-auto px-6 max-w-5xl">
          
          {/* Progress Header */}
          <div className="flex items-center justify-between mb-12">
            <div>
              <h1 className="text-3xl font-serif font-bold text-secondary">
                {step === "UPLOAD" && "Step 1: Upload Photo"}
                {step === "STYLE" && "Step 2: Choose Your Style"}
                {(step === "LOADING" || step === "RESULT") && "Your Masterpiece"}
                {step === "LIMIT" && "Daily Limit Reached"}
              </h1>
              <p className="text-brand-muted mt-2">
                {step === "UPLOAD" && "Choose a clear photo of your beloved pet."}
                {step === "STYLE" && "Pick an artistic style that reflects their soul."}
                {step === "LOADING" && "Our AI is painting your pet's masterpiece..."}
                {step === "RESULT" && "Behold! Your pet's timeless tribute."}
              </p>
            </div>
            <div className="text-right">
              <span className="text-sm font-bold text-primary bg-primary/10 px-4 py-2 rounded-full">
                {usageCount}/{FREE_LIMIT} Free Creations Used
              </span>
            </div>
          </div>

          <AnimatePresence mode="wait">
            {step === "UPLOAD" && (
              <motion.div
                key="upload"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
              >
                <GlassCard className="max-w-2xl mx-auto p-12 text-center border-dashed border-2 border-brand-text/10">
                  <div className="mb-8">
                    <div className="w-20 h-20 bg-primary/10 rounded-full flex items-center justify-center mx-auto text-primary mb-6">
                      <Upload className="w-10 h-10" />
                    </div>
                    <h2 className="text-2xl font-serif font-bold mb-4">Choose Your Photo</h2>
                    <p className="text-brand-muted mb-8 italic">High-resolution photos with clear eye contact work best.</p>
                  </div>

                  <input
                    type="file"
                    id="pet-upload"
                    className="hidden"
                    accept="image/*"
                    onChange={handleFileChange}
                  />
                  
                  {preview ? (
                    <div className="relative w-64 h-64 mx-auto mb-8 rounded-2xl overflow-hidden shadow-xl">
                      <Image src={preview} alt="Preview" fill className="object-cover" />
                      {isUploading && (
                        <div className="absolute inset-0 bg-black/50 flex items-center justify-center">
                          <Loader2 className="w-10 h-10 text-white animate-spin" />
                        </div>
                      )}
                    </div>
                  ) : null}

                  <div className="flex flex-col items-center gap-4">
                    <Button onClick={() => document.getElementById('pet-upload')?.click()}>
                      {isUploading ? "Uploading..." : file ? "Change Photo" : "Select Photo"}
                    </Button>
                    {getUrl && !isUploading && (
                      <Button variant="outline" onClick={() => setStep("STYLE")}>
                        Continue to Styles →
                      </Button>
                    )}
                  </div>
                </GlassCard>
              </motion.div>
            )}

            {step === "STYLE" && (
              <motion.div
                key="style"
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -20 }}
                className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6"
              >
                {STYLES.map((style: any) => (
                  <GlassCard 
                    key={style.key} 
                    className="cursor-pointer group flex flex-col justify-between"
                    onClick={() => handleStyleSelect(style)}
                  >
                    <div>
                      <div className="text-4xl mb-4">{style.icon}</div>
                      <div className="flex items-center justify-between mb-2">
                        <h3 className="text-xl font-bold font-serif text-secondary">{style.title}</h3>
                        {style.badge && (
                          <span className="text-[10px] font-bold uppercase tracking-wider bg-primary text-white px-2 py-1 rounded-md">
                            {style.badge}
                          </span>
                        )}
                      </div>
                      <p className="text-sm text-brand-muted leading-relaxed">{style.desc}</p>
                    </div>
                    <div className="mt-6 flex justify-end">
                       <div className="w-8 h-8 rounded-full bg-brand-bg flex items-center justify-center group-hover:bg-primary group-hover:text-white transition-colors">
                         →
                       </div>
                    </div>
                  </GlassCard>
                ))}
              </motion.div>
            )}

            {step === "LOADING" && (
              <motion.div
                key="loading"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                className="max-w-2xl mx-auto text-center py-20"
              >
                <div className="relative w-48 h-48 mx-auto mb-12">
                   <div className="absolute inset-0 border-4 border-brand-chip rounded-full" />
                   <motion.div 
                     className="absolute inset-0 border-4 border-primary rounded-full border-t-transparent"
                     animate={{ rotate: 360 }}
                     transition={{ duration: 1.5, repeat: Infinity, ease: "linear" }}
                   />
                   <div className="absolute inset-0 flex items-center justify-center text-5xl">
                     🎨
                   </div>
                </div>
                <h2 className="text-3xl font-serif font-bold mb-6">Painting Your Masterpiece...</h2>
                <div className="w-full bg-brand-chip rounded-full h-3 mb-4 overflow-hidden">
                  <motion.div 
                    className="bg-primary h-full"
                    initial={{ width: 0 }}
                    animate={{ width: `${progress}%` }}
                  />
                </div>
                <p className="text-brand-muted font-medium">{Math.round(progress)}% complete</p>
                <p className="mt-8 text-secondary italic">"Did you know? Our AI captures the soulful gaze that makes your pet unique."</p>
              </motion.div>
            )}

            {step === "RESULT" && (
              <motion.div
                key="result"
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                className="space-y-12"
              >
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                  {results.map((url, i) => (
                    <GlassCard key={i} className="p-2 overflow-hidden shadow-2xl">
                      <div className="relative aspect-square rounded-2xl overflow-hidden">
                         <Image src={url} alt={`Pet Result ${i}`} fill className="object-cover" />
                      </div>
                    </GlassCard>
                  ))}
                </div>
                
                <div className="flex flex-col items-center gap-6">
                  <div className="flex gap-4">
                    <Button onClick={() => window.print()}>Download All</Button>
                    <Link href="/shop">
                      <Button variant="outline">Order Prints & Merch</Button>
                    </Link>
                  </div>
                  <Button variant="ghost" onClick={() => setStep("UPLOAD")}>Start New Creation</Button>
                </div>
              </motion.div>
            )}

            {step === "LIMIT" && (
              <motion.div
                key="limit"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                className="max-w-2xl mx-auto text-center py-20"
              >
                <div className="w-20 h-20 bg-secondary/10 rounded-full flex items-center justify-center mx-auto text-secondary mb-8">
                  <AlertCircle className="w-10 h-10" />
                </div>
                <h2 className="text-4xl font-serif font-bold mb-6 text-secondary">Daily Limit Reached</h2>
                <p className="text-xl text-brand-muted mb-12">
                  You've used your 2 free daily creations! Sign up for our Early Access pack to get unlimited generations and be the first to know about our official launch.
                </p>
                <GlassCard className="max-w-md mx-auto p-8">
                   <h3 className="text-xl font-bold mb-4">Join the Pack</h3>
                   <div className="flex flex-col gap-4">
                     <input 
                       type="email" 
                       placeholder="your@email.com" 
                       className="px-6 py-4 rounded-full border border-brand-text/10 focus:outline-none focus:ring-2 focus:ring-primary/50"
                     />
                     <Button>Sign Up & Unlock Updates</Button>
                   </div>
                   <p className="text-xs text-brand-muted mt-4">We promise not to bark too often. Just the important stuff.</p>
                </GlassCard>
              </motion.div>
            )}
          </AnimatePresence>

          {error && (
            <div className="mt-8 p-4 bg-red-50 border border-red-200 text-red-600 rounded-2xl flex items-center gap-3">
              <AlertCircle className="w-5 h-5" />
              <p>{error}</p>
            </div>
          )}

        </div>
      </section>

      <Footer />
    </main>
  );
}
