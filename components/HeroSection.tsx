"use client";

import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { ArrowRight, Sparkles } from "lucide-react";

const HeroSection = () => {
  return (
    <section className="hero-bg relative min-h-screen flex items-center overflow-hidden">
      {/* Animated grid */}
      <div className="absolute inset-0 opacity-[0.03]" style={{
        backgroundImage: "linear-gradient(hsl(0 0% 100%) 1px, transparent 1px), linear-gradient(90deg, hsl(0 0% 100%) 1px, transparent 1px)",
        backgroundSize: "80px 80px"
      }} />

      {/* Glow orbs */}
      <div className="absolute top-1/3 right-1/4 w-[600px] h-[600px] rounded-full opacity-15 blur-[150px] animate-pulse-glow"
        style={{ background: "hsl(217 90% 55%)" }} />
      <div className="absolute bottom-1/4 left-1/3 w-[400px] h-[400px] rounded-full opacity-10 blur-[120px] animate-pulse-glow"
        style={{ background: "hsl(200 90% 55%)", animationDelay: "1.5s" }} />

      {/* Floating geometric shapes */}
      <div className="absolute top-1/4 right-[15%] w-20 h-20 border border-secondary/20 rounded-2xl rotate-12 animate-float hidden lg:block" />
      <div className="absolute bottom-1/3 right-[10%] w-14 h-14 border border-secondary/10 rounded-full animate-float hidden lg:block" style={{ animationDelay: "2s" }} />
      <div className="absolute top-[60%] right-[25%] w-3 h-3 bg-secondary/30 rounded-full animate-float hidden lg:block" style={{ animationDelay: "1s" }} />

      <div className="container relative z-10 mx-auto px-6 py-20 lg:py-0">
        <div className="max-w-3xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="inline-flex items-center gap-2 rounded-full border border-secondary/20 bg-secondary/10 px-4 py-1.5 mb-8"
          >
            <Sparkles className="w-3.5 h-3.5 text-secondary" />
            <span className="text-secondary text-xs font-medium tracking-wide uppercase">Product Transformation Studio</span>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.1 }}
            className="font-display text-5xl md:text-6xl lg:text-[5rem] font-bold tracking-tight text-primary-foreground leading-[1.05] mb-6"
          >
            Research. Redesign.
            <br />
            <span className="text-gradient">Rebuild.</span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-lg md:text-xl text-primary-foreground/60 max-w-xl mb-10 leading-relaxed font-body"
          >
            We analyze real-world products and transform them into high-performing digital experiences that users love.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="flex flex-col sm:flex-row gap-4"
          >
            <Button variant="hero" size="xl" className="rounded-full" asChild>
              <a href="#contact">
                Book a Strategy Call <ArrowRight className="ml-1 w-5 h-5" />
              </a>
            </Button>
            <Button variant="hero-outline" size="xl" className="rounded-full" asChild>
              <a href="#process">See Our Process</a>
            </Button>
          </motion.div>

          {/* Trust line */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.6 }}
            className="mt-16 flex items-center gap-4"
          >
            <div className="flex -space-x-2">
              {[0, 1, 2, 3].map(i => (
                <div key={i} className="w-8 h-8 rounded-full border-2 border-navy-deep bg-secondary/20 flex items-center justify-center">
                  <span className="text-[10px] text-secondary font-semibold">{["JK", "ML", "AS", "DR"][i]}</span>
                </div>
              ))}
            </div>
            <p className="text-primary-foreground/40 text-sm">Trusted by 50+ product teams worldwide</p>
          </motion.div>
        </div>
      </div>

      {/* Bottom gradient fade */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-background to-transparent" />
    </section>
  );
};

export default HeroSection;
