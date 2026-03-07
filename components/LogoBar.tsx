const logos = [
  "Stripe", "Notion", "Linear", "Figma", "Vercel", "Webflow",
  "Stripe", "Notion", "Linear", "Figma", "Vercel", "Webflow",
];

const LogoBar = () => {
  return (
    <section className="py-12 border-y border-border/50 bg-muted/30 overflow-hidden">
      <div className="container mx-auto px-6 mb-6">
        <p className="text-center text-xs uppercase tracking-[0.2em] text-muted-foreground font-medium">
          Trusted by teams building products at
        </p>
      </div>
      <div className="relative">
        <div className="absolute left-0 top-0 bottom-0 w-20 bg-gradient-to-r from-muted/30 to-transparent z-10" />
        <div className="absolute right-0 top-0 bottom-0 w-20 bg-gradient-to-l from-muted/30 to-transparent z-10" />
        <div className="flex animate-marquee">
          {logos.map((name, i) => (
            <div key={i} className="flex-shrink-0 mx-10 flex items-center justify-center">
              <span className="font-display text-lg font-semibold text-muted-foreground/40 select-none whitespace-nowrap">
                {name}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default LogoBar;
