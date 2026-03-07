"use client";

import { motion } from "framer-motion";
import { Search, Palette, Rocket, ArrowUpRight } from "lucide-react";

const services = [
  {
    icon: Search,
    title: "Product Research",
    description: "Deep-dive into your market, users, and competitors to uncover the insights that drive growth.",
    tags: ["User Interviews", "Competitive Analysis", "Market Sizing"],
  },
  {
    icon: Palette,
    title: "UX/UI Redesign",
    description: "Craft intuitive interfaces that delight users and turn friction into seamless experiences.",
    tags: ["Design Systems", "Prototyping", "Usability Testing"],
  },
  {
    icon: Rocket,
    title: "Product Build & Iteration",
    description: "Ship production-ready products fast, then iterate with data to maximize impact.",
    tags: ["Agile Development", "A/B Testing", "Analytics"],
  },
];

const WhatWeDoSection = () => {
  return (
    <section id="services" className="py-24 lg:py-32 bg-background">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="max-w-2xl mb-16"
        >
          <span className="text-secondary text-sm font-semibold tracking-widest uppercase">Services</span>
          <h2 className="font-display text-3xl md:text-5xl font-bold text-foreground mt-3 mb-5">
            What We Do
          </h2>
          <p className="text-muted-foreground text-lg leading-relaxed">
            We take existing real-world products, research customer needs, competitors, and usability gaps — then redesign and build improved product experiences.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-6 max-w-6xl">
          {services.map((service, i) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="group relative rounded-3xl border border-border bg-card p-8 hover:border-secondary/30 hover:glow-border transition-all duration-500 cursor-pointer"
            >
              <div className="flex items-start justify-between mb-6">
                <div className="w-14 h-14 rounded-2xl bg-secondary/10 flex items-center justify-center group-hover:bg-secondary/20 transition-colors duration-300">
                  <service.icon className="w-6 h-6 text-secondary" />
                </div>
                <ArrowUpRight className="w-5 h-5 text-muted-foreground/30 group-hover:text-secondary transition-colors duration-300" />
              </div>
              <h3 className="font-display text-xl font-semibold text-foreground mb-3">{service.title}</h3>
              <p className="text-muted-foreground leading-relaxed mb-6 text-sm">{service.description}</p>
              <div className="flex flex-wrap gap-2">
                {service.tags.map(tag => (
                  <span key={tag} className="text-xs font-medium px-3 py-1 rounded-full bg-muted text-muted-foreground">
                    {tag}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhatWeDoSection;
