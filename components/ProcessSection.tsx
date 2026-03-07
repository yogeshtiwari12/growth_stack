"use client";

import { motion } from "framer-motion";
import { Compass, Target, PenTool, Code2 } from "lucide-react";

const steps = [
  {
    icon: Compass,
    number: "01",
    title: "Discover",
    description: "Market research, user interviews, and competitive analysis to understand the full landscape.",
  },
  {
    icon: Target,
    number: "02",
    title: "Diagnose",
    description: "Identify pain points, usability gaps, and untapped opportunities for product growth.",
  },
  {
    icon: PenTool,
    number: "03",
    title: "Design",
    description: "Create UX flows, interface systems, and interactive prototypes that solve real problems.",
  },
  {
    icon: Code2,
    number: "04",
    title: "Develop",
    description: "Build, test, and launch production-ready products with continuous data-driven iteration.",
  },
];

const ProcessSection = () => {
  return (
    <section id="process" className="py-24 lg:py-32 hero-bg relative overflow-hidden">
      {/* Background elements */}
      <div className="absolute inset-0 opacity-[0.02]" style={{
        backgroundImage: "linear-gradient(hsl(0 0% 100%) 1px, transparent 1px), linear-gradient(90deg, hsl(0 0% 100%) 1px, transparent 1px)",
        backgroundSize: "60px 60px"
      }} />
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-secondary/20 to-transparent" />

      <div className="container mx-auto px-6 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="text-center mb-20"
        >
          <span className="text-secondary text-sm font-semibold tracking-widest uppercase">Methodology</span>
          <h2 className="font-display text-3xl md:text-5xl font-bold text-primary-foreground mt-3 mb-5">
            Our Process
          </h2>
          <p className="text-primary-foreground/50 text-lg max-w-xl mx-auto">
            A proven framework that transforms products from good to exceptional.
          </p>
        </motion.div>

        <div className="max-w-5xl mx-auto">
          {/* Desktop: horizontal with connecting line */}
          <div className="hidden md:block relative">
            <div className="absolute top-[56px] left-[12.5%] right-[12.5%] h-px bg-gradient-to-r from-secondary/10 via-secondary/30 to-secondary/10" />
            <div className="grid grid-cols-4 gap-8">
              {steps.map((step, i) => (
                <motion.div
                  key={step.number}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-100px" }}
                  transition={{ duration: 0.5, delay: i * 0.15 }}
                  className="text-center group"
                >
                  <div className="w-28 h-28 mx-auto mb-6 rounded-3xl border border-secondary/20 bg-secondary/5 flex flex-col items-center justify-center group-hover:border-secondary/40 group-hover:bg-secondary/10 transition-all duration-500 relative z-10">
                    <step.icon className="w-7 h-7 text-secondary mb-1" />
                    <span className="text-secondary/50 text-xs font-mono">{step.number}</span>
                  </div>
                  <h3 className="font-display text-xl font-semibold text-primary-foreground mb-2">{step.title}</h3>
                  <p className="text-primary-foreground/40 text-sm leading-relaxed">{step.description}</p>
                </motion.div>
              ))}
            </div>
          </div>

          {/* Mobile: vertical timeline */}
          <div className="md:hidden space-y-8">
            {steps.map((step, i) => (
              <motion.div
                key={step.number}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                className="flex gap-5"
              >
                <div className="flex-shrink-0 w-16 h-16 rounded-2xl border border-secondary/20 bg-secondary/5 flex flex-col items-center justify-center">
                  <step.icon className="w-5 h-5 text-secondary" />
                </div>
                <div>
                  <span className="text-secondary/50 text-xs font-mono">{step.number}</span>
                  <h3 className="font-display text-lg font-semibold text-primary-foreground mb-1">{step.title}</h3>
                  <p className="text-primary-foreground/40 text-sm leading-relaxed">{step.description}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProcessSection;
