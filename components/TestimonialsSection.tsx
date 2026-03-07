"use client";

import { motion } from "framer-motion";
import { Star } from "lucide-react";

const testimonials = [
  {
    quote: "They took our outdated platform and turned it into something our users genuinely love. The research phase alone was worth the entire engagement.",
    name: "Sarah Chen",
    role: "VP Product, Meridian",
    initials: "SC",
  },
  {
    quote: "The team at Growth Stack Labs combines strategic thinking with execution speed. Our conversion rate improved within weeks of the redesign launch.",
    name: "Marcus Rivera",
    role: "Founder, Stackwise",
    initials: "MR",
  },
  {
    quote: "What sets them apart is their obsession with data. Every design decision was backed by real user insights, not assumptions.",
    name: "Emily Zhao",
    role: "Head of Design, Lumio",
    initials: "EZ",
  },
];

const TestimonialsSection = () => {
  return (
    <section className="py-24 lg:py-32 bg-background relative">
      <div className="absolute top-0 left-0 right-0 h-px section-divider" />
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="text-secondary text-sm font-semibold tracking-widest uppercase">Testimonials</span>
          <h2 className="font-display text-3xl md:text-5xl font-bold text-foreground mt-3">
            What Our Clients Say
          </h2>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-6 max-w-6xl mx-auto">
          {testimonials.map((t, i) => (
            <motion.div
              key={t.name}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="rounded-3xl border border-border bg-card p-8 flex flex-col"
            >
              <div className="flex gap-1 mb-5">
                {[...Array(5)].map((_, j) => (
                  <Star key={j} className="w-4 h-4 fill-secondary text-secondary" />
                ))}
              </div>
              <p className="text-foreground text-sm leading-relaxed flex-1 mb-6">
                "{t.quote}"
              </p>
              <div className="flex items-center gap-3 pt-5 border-t border-border">
                <div className="w-10 h-10 rounded-full bg-secondary/10 flex items-center justify-center">
                  <span className="text-xs font-semibold text-secondary">{t.initials}</span>
                </div>
                <div>
                  <p className="text-sm font-semibold text-foreground">{t.name}</p>
                  <p className="text-xs text-muted-foreground">{t.role}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
