"use client";

import { motion } from "framer-motion";
import { TrendingUp, Users, Clock, ArrowUpRight } from "lucide-react";

const cases = [
  {
    icon: TrendingUp,
    type: "E-Commerce Platform",
    problem: "High cart abandonment due to complex checkout flow and poor mobile experience.",
    metric: "+32%",
    metricLabel: "User Retention",
    gradient: "from-secondary/10 to-electric/10",
  },
  {
    icon: Users,
    type: "SaaS Dashboard",
    problem: "Low feature adoption caused by unintuitive navigation and information overload.",
    metric: "+48%",
    metricLabel: "Feature Adoption",
    gradient: "from-primary/10 to-secondary/10",
  },
  {
    icon: Clock,
    type: "Health & Wellness App",
    problem: "Users dropped off during onboarding — too many steps, unclear value proposition.",
    metric: "2×",
    metricLabel: "Faster Onboarding",
    gradient: "from-electric/10 to-secondary/10",
  },
];

const CaseHighlightsSection = () => {
  return (
    <section id="results" className="py-24 lg:py-32 bg-background">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="flex flex-col md:flex-row md:items-end md:justify-between mb-16 gap-4"
        >
          <div className="max-w-lg">
            <span className="text-secondary text-sm font-semibold tracking-widest uppercase">Case Studies</span>
            <h2 className="font-display text-3xl md:text-5xl font-bold text-foreground mt-3 mb-4">
              Results That Speak
            </h2>
            <p className="text-muted-foreground text-lg">
              Real outcomes from product transformations we've delivered.
            </p>
          </div>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-6 max-w-6xl">
          {cases.map((item, i) => (
            <motion.div
              key={item.type}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="group rounded-3xl border border-border bg-card overflow-hidden hover:border-secondary/30 hover:glow-border transition-all duration-500"
            >
              {/* Visual header */}
              <div className={`h-40 bg-gradient-to-br ${item.gradient} flex items-center justify-center relative`}>
                <div className="w-16 h-16 rounded-2xl bg-background/80 flex items-center justify-center shadow-sm">
                  <item.icon className="w-7 h-7 text-secondary" />
                </div>
                <div className="absolute top-4 right-4 opacity-0 group-hover:opacity-100 transition-opacity">
                  <ArrowUpRight className="w-5 h-5 text-muted-foreground" />
                </div>
              </div>
              <div className="p-8">
                <span className="text-xs font-semibold uppercase tracking-wider text-secondary">
                  {item.type}
                </span>
                <p className="text-foreground text-sm leading-relaxed mt-3 mb-6">
                  {item.problem}
                </p>
                <div className="pt-5 border-t border-border flex items-baseline gap-2">
                  <span className="font-display text-3xl font-bold text-gradient">{item.metric}</span>
                  <span className="text-muted-foreground text-sm">{item.metricLabel}</span>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CaseHighlightsSection;
