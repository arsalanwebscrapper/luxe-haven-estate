import bg from "@/assets/property-3.jpg";
import { Button } from "@/components/ui/button";

const CtaBanner = () => {
  return (
    <section id="services" className="relative isolate overflow-hidden">
      <div className="absolute inset-0 -z-10">
        <img src={bg} alt="Serene luxury waterfront villa" className="h-[40vh] w-full object-cover" loading="lazy" />
        <div className="absolute inset-0 bg-gradient-hero" />
      </div>
      <div className="container flex h-[40vh] flex-col items-start justify-center">
        <h2 className="font-display text-3xl tracking-tight text-foreground sm:text-4xl">Ready to Discover Your Next Masterpiece?</h2>
        <p className="mt-2 max-w-2xl text-foreground/80">Connect with our expert team for a confidential consultation.</p>
        <div className="mt-6">
          <Button variant="hero" size="lg" className="hover-scale">Schedule Your Consultation</Button>
        </div>
      </div>
    </section>
  );
};

export default CtaBanner;
