import heroImage from "@/assets/hero-luxury-villa.jpg";
import { Button } from "@/components/ui/button";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Input } from "@/components/ui/input";

const Hero = () => {
  return (
    <section id="home" className="relative isolate overflow-hidden">
      <div className="absolute inset-0 -z-10">
        <img
          src={heroImage}
          alt="Modern luxury villa with infinity pool at sunset"
          className="h-[70vh] w-full object-cover"
          loading="eager"
        />
        <div className="absolute inset-0 bg-gradient-hero" aria-hidden="true" />
      </div>

      <div className="container flex h-[70vh] flex-col items-start justify-center">
        <div className="max-w-3xl animate-enter">
          <h1 className="font-display text-4xl leading-tight tracking-tight text-foreground sm:text-5xl md:text-6xl">
            Curating Excellence in Luxury Real Estate
          </h1>
          <p className="mt-4 max-w-2xl text-base text-foreground/80 sm:text-lg">
            Unlocking access to the world's most coveted residences. Discreet, bespoke, and deeply informed advisory.
          </p>
        </div>

        <div className="mt-8 w-full max-w-5xl rounded-xl border bg-card/60 p-3 shadow-elegant backdrop-blur">
          <form
            className="grid grid-cols-2 gap-3 md:grid-cols-6"
            onSubmit={(e) => {
              e.preventDefault();
            }}
          >
            <Select>
              <SelectTrigger className="bg-background/60"><SelectValue placeholder="Location" /></SelectTrigger>
              <SelectContent>
                <SelectItem value="beverly">Beverly Hills</SelectItem>
                <SelectItem value="dubai">Dubai</SelectItem>
                <SelectItem value="london">London</SelectItem>
              </SelectContent>
            </Select>

            <Select>
              <SelectTrigger className="bg-background/60"><SelectValue placeholder="Property Type" /></SelectTrigger>
              <SelectContent>
                <SelectItem value="estate">Estate</SelectItem>
                <SelectItem value="penthouse">Penthouse</SelectItem>
                <SelectItem value="waterfront">Waterfront Villa</SelectItem>
              </SelectContent>
            </Select>

            <Input className="bg-background/60" placeholder="Min Price" />
            <Input className="bg-background/60" placeholder="Max Price" />

            <Select>
              <SelectTrigger className="bg-background/60"><SelectValue placeholder="Beds" /></SelectTrigger>
              <SelectContent>
                <SelectItem value="3">3+</SelectItem>
                <SelectItem value="4">4+</SelectItem>
                <SelectItem value="5">5+</SelectItem>
              </SelectContent>
            </Select>

            <Button type="submit" variant="hero" className="w-full">Discover Properties</Button>
          </form>
        </div>

        <div className="mt-6 text-sm text-foreground/70">Scroll for more</div>
      </div>
    </section>
  );
};

export default Hero;
