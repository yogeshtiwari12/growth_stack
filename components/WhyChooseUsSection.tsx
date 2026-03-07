"use client";

import { motion } from "framer-motion";
import { Shield, Zap, BarChart3, HeartHandshake } from "lucide-react";

const reasons = [
  {
    icon: Shield,
    title: "Research-First Approach",
    description: "Every decision is backed by real data — user interviews, competitive analysis, and market research.",
  },
  {
    icon: Zap,
    title: "Speed Without Compromise",
    description: "We move fast through rapid prototyping and agile sprints, without sacrificing quality or usability.",
  },
  {
    icon: BarChart3,
    title: "Measurable Outcomes",
    description: "We set clear KPIs from day one and track impact through every stage of the transformation.",
  },
  {
    icon: HeartHandshake,
    title: "True Partnership",
    description: "We embed with your team, share context openly, and treat your product like it's our own.",
  },
];

const WhyChooseUsSection = () => {
  return (
    <section className="py-24 lg:py-32 bg-muted/30 relative overflow-hidden">
      <div className="absolute top-0 left-0 right-0 h-px section-divider" />
      <div className="container mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-16 items-center max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6 }}
          >
            <span className="text-secondary text-sm font-semibold tracking-widest uppercase">Why Us</span>
            <h2 className="font-display text-3xl md:text-5xl font-bold text-foreground mt-3 mb-5">
              Built for teams that{" "}
              <span className="text-gradient">ship</span>
            </h2>
            <p className="text-muted-foreground text-lg leading-relaxed mb-8">
              We're not just designers or developers. We're product strategists who understand what it takes to go from insight to impact.
            </p>
            {/* Visual element */}
            <div className="rounded-3xl hero-bg p-8 relative overflow-hidden">
              <div className="absolute top-0 right-0 w-40 h-40 rounded-full bg-secondary/10 blur-[60px]" />
              <p className="text-primary-foreground/60 text-sm font-body leading-relaxed relative z-10">
                "Growth Stack Labs didn't just redesign our product — they helped us rethink how we serve our customers. The results speak for themselves."
              </p>
              <div className="mt-4 flex items-center gap-3 relative z-10">
                <div className="w-10 h-10 rounded-full bg-secondary/20 flex items-center justify-center">
                  <span className="text-xs font-semibold text-secondary">JK</span>
                </div>
                <div>
                  <p className="text-primary-foreground text-sm font-semibold">James Kim</p>
                  <p className="text-primary-foreground/40 text-xs">CPO, TechFlow</p>
                </div>
              </div>
            </div>
          </motion.div>

          <div className="grid sm:grid-cols-2 gap-5">
            {reasons.map((reason, i) => (
              <motion.div
                key={reason.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                className="p-6 rounded-2xl border border-border bg-background hover:border-secondary/20 transition-colors duration-300"
              >
                <div className="w-10 h-10 rounded-xl bg-secondary/10 flex items-center justify-center mb-4">
                  <reason.icon className="w-5 h-5 text-secondary" />
                </div>
                <h3 className="font-display text-base font-semibold text-foreground mb-2">{reason.title}</h3>
                <p className="text-muted-foreground text-sm leading-relaxed">{reason.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUsSection;
