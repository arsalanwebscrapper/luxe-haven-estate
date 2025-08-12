import { Separator } from "@/components/ui/separator";

const AboutStory = () => {
  return (
    <section id="story" className="container py-16">
      <div className="grid items-center gap-10 md:grid-cols-2">
        <div>
          <h2 className="font-display text-3xl tracking-tight sm:text-4xl">The Aurelia Perspective</h2>
          <p className="mt-4 text-foreground/80">
            Our legacy is built on discretion, deep market intelligence, and an unwavering commitment to excellence. We curate, we advise, and we deliver—quietly and confidently.
          </p>
          <div className="mt-6 space-y-4">
            <div className="rounded-lg border bg-card p-4 shadow-elegant">
              <p className="font-medium">Discreet Transactions</p>
              <p className="text-sm text-foreground/70">Confidential processes designed for privacy and assurance.</p>
            </div>
            <div className="rounded-lg border bg-card p-4 shadow-elegant">
              <p className="font-medium">Global Network</p>
              <p className="text-sm text-foreground/70">Trusted relationships across premier markets worldwide.</p>
            </div>
            <div className="rounded-lg border bg-card p-4 shadow-elegant">
              <p className="font-medium">Tailored Solutions</p>
              <p className="text-sm text-foreground/70">Bespoke strategies for acquisition, divestment, and investment.</p>
            </div>
          </div>
        </div>
        <div className="relative">
          <div className="rounded-xl border bg-secondary p-8 shadow-elegant">
            <blockquote className="text-lg italic text-foreground/80">
              “We don’t just sell properties—we steward legacies, crafting meaningful outcomes for our clients.”
            </blockquote>
            <Separator className="my-6" />
            <p className="text-sm text-foreground/70">Aurelia Estates — Luxury Real Estate Advisory</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutStory;
