"use client";

import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { useState } from "react";
import { useToast } from "@/hooks/use-toast";
import { ArrowRight, Mail } from "lucide-react";

const ContactSection = () => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    productLink: "",
    message: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.name.trim() || !formData.email.trim()) {
      toast({ title: "Please fill in required fields.", variant: "destructive" });
      return;
    }
    toast({ title: "Thanks! We'll be in touch soon." });
    setFormData({ name: "", email: "", productLink: "", message: "" });
  };

  return (
    <>
      <section id="contact" className="py-24 lg:py-32 relative overflow-hidden">
        {/* Background */}
        <div className="absolute inset-0 hero-bg" />
        <div className="absolute inset-0 opacity-[0.02]" style={{
          backgroundImage: "linear-gradient(hsl(0 0% 100%) 1px, transparent 1px), linear-gradient(90deg, hsl(0 0% 100%) 1px, transparent 1px)",
          backgroundSize: "60px 60px"
        }} />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full bg-secondary/10 blur-[150px]" />

        <div className="container mx-auto px-6 relative z-10">
          <div className="max-w-2xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.6 }}
              className="text-center mb-12"
            >
              <span className="text-secondary text-sm font-semibold tracking-widest uppercase">Get Started</span>
              <h2 className="font-display text-3xl md:text-5xl font-bold text-primary-foreground mt-3 mb-5">
                Let's Improve Your Product
              </h2>
              <p className="text-primary-foreground/50 text-lg">
                Tell us about your product and we'll show you the opportunities.
              </p>
            </motion.div>

            <motion.form
              onSubmit={handleSubmit}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="space-y-5 glass-dark rounded-3xl p-8 md:p-10 border border-secondary/10"
            >
              <div className="grid sm:grid-cols-2 gap-5">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-primary-foreground/80 mb-2">
                    Name *
                  </label>
                  <Input
                    id="name"
                    placeholder="Your name"
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    maxLength={100}
                    required
                    className="bg-primary-foreground/5 border-primary-foreground/10 text-primary-foreground placeholder:text-primary-foreground/30 focus-visible:ring-secondary h-12 rounded-xl"
                  />
                </div>
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-primary-foreground/80 mb-2">
                    Email *
                  </label>
                  <Input
                    id="email"
                    type="email"
                    placeholder="you@company.com"
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    maxLength={255}
                    required
                    className="bg-primary-foreground/5 border-primary-foreground/10 text-primary-foreground placeholder:text-primary-foreground/30 focus-visible:ring-secondary h-12 rounded-xl"
                  />
                </div>
              </div>
              <div>
                <label htmlFor="productLink" className="block text-sm font-medium text-primary-foreground/80 mb-2">
                  Product Link
                </label>
                <Input
                  id="productLink"
                  placeholder="https://yourproduct.com"
                  value={formData.productLink}
                  onChange={(e) => setFormData({ ...formData, productLink: e.target.value })}
                  maxLength={500}
                  className="bg-primary-foreground/5 border-primary-foreground/10 text-primary-foreground placeholder:text-primary-foreground/30 focus-visible:ring-secondary h-12 rounded-xl"
                />
              </div>
              <div>
                <label htmlFor="message" className="block text-sm font-medium text-primary-foreground/80 mb-2">
                  Message
                </label>
                <Textarea
                  id="message"
                  placeholder="Tell us about your product and what you'd like to improve..."
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  maxLength={1000}
                  rows={4}
                  className="bg-primary-foreground/5 border-primary-foreground/10 text-primary-foreground placeholder:text-primary-foreground/30 focus-visible:ring-secondary rounded-xl resize-none"
                />
              </div>
              <Button type="submit" size="lg" className="w-full bg-secondary text-secondary-foreground hover:bg-secondary/90 rounded-xl h-14 text-base font-semibold shadow-lg shadow-secondary/20">
                Get Growth Audit <ArrowRight className="ml-2 w-5 h-5" />
              </Button>
            </motion.form>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="hero-bg py-10 border-t border-primary-foreground/5">
        <div className="container mx-auto px-6 flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-2">
            <div className="w-7 h-7 rounded-lg bg-secondary flex items-center justify-center">
              <span className="text-secondary-foreground font-bold text-xs">G</span>
            </div>
            <span className="font-display text-sm font-bold text-primary-foreground">Growth Stack Labs</span>
          </div>
          <a href="mailto:labsgrowthstack@gmail.com" className="flex items-center gap-2 text-sm text-primary-foreground/50 hover:text-primary-foreground/80 transition-colors">
            <Mail className="w-4 h-4" /> labsgrowthstack@gmail.com
          </a>
          <p className="text-primary-foreground/30 text-xs">
            © {new Date().getFullYear()} Growth Stack Labs
          </p>
        </div>
      </footer>
    </>
  );
};

export default ContactSection;
