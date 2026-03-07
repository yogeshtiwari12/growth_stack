"use client";

import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

const CTABanner = () => {
  return (
    <section className="py-20 bg-background relative overflow-hidden">
      <div className="absolute top-0 left-0 right-0 h-px section-divider" />
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="max-w-4xl mx-auto text-center"
        >
          <h2 className="font-display text-3xl md:text-5xl font-bold text-foreground mb-5">
            Ready to transform your{" "}
            <span className="text-gradient">product?</span>
          </h2>
          <p className="text-muted-foreground text-lg mb-10 max-w-xl mx-auto">
            Book a free strategy call. We'll audit your product and show you exactly where the growth opportunities are.
          </p>
          <Button size="xl" className="bg-secondary text-secondary-foreground hover:bg-secondary/90 rounded-full shadow-lg shadow-secondary/20" asChild>
            <a href="#contact">
              Start Your Growth Audit <ArrowRight className="ml-2 w-5 h-5" />
            </a>
          </Button>
        </motion.div>
      </div>
    </section>
  );
};

export default CTABanner;
