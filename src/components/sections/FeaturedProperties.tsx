import { Card, CardContent } from "@/components/ui/card";
import p1 from "@/assets/property-1.jpg";
import p2 from "@/assets/property-2.jpg";
import p3 from "@/assets/property-3.jpg";
import p4 from "@/assets/property-4.jpg";
import p5 from "@/assets/property-5.jpg";
import p6 from "@/assets/property-6.jpg";
import { Bed, Bath, Ruler } from "lucide-react";

const properties = [
  { id: 1, img: p1, location: "Beverly Hills, California", price: "$35,000,000", beds: 6, baths: 8, area: "12,400 sqft" },
  { id: 2, img: p2, location: "Manhattan, New York", price: "$28,500,000", beds: 4, baths: 5, area: "6,800 sqft" },
  { id: 3, img: p3, location: "Palm Jumeirah, Dubai", price: "$42,000,000", beds: 7, baths: 9, area: "15,200 sqft" },
  { id: 4, img: p4, location: "Aspen, Colorado", price: "$19,750,000", beds: 5, baths: 6, area: "5,900 sqft" },
  { id: 5, img: p5, location: "Paris, France", price: "$22,300,000", beds: 4, baths: 4, area: "4,200 sqft" },
  { id: 6, img: p6, location: "Palm Springs, California", price: "$17,900,000", beds: 5, baths: 6, area: "7,300 sqft" },
];

const FeaturedProperties = () => {
  return (
    <section id="properties" className="bg-secondary/40 py-16">
      <div className="container">
        <div className="mb-8 flex items-end justify-between">
          <div>
            <h2 className="font-display text-3xl tracking-tight sm:text-4xl">Signature Residences</h2>
            <p className="mt-2 text-foreground/70">A curated selection from our private portfolio.</p>
          </div>
          <a href="#properties" className="hidden text-sm text-primary underline-offset-4 hover:underline md:block">View all</a>
        </div>
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {properties.map((p) => (
            <article key={p.id} className="group overflow-hidden rounded-xl border bg-card shadow-elegant transition hover:shadow-glow">
              <div className="relative aspect-[4/3] overflow-hidden">
                <img src={p.img} alt={`${p.location} luxury property`} className="h-full w-full object-cover transition duration-300 group-hover:scale-105" loading="lazy" />
              </div>
              <Card>
                <CardContent className="p-4">
                  <p className="text-sm text-foreground/70">{p.location}</p>
                  <div className="mt-1 flex items-center justify-between">
                    <p className="font-medium">{p.price}</p>
                    <a href="#" className="text-sm text-primary underline-offset-4 hover:underline">View details</a>
                  </div>
                  <div className="mt-3 flex items-center gap-4 text-sm text-foreground/70">
                    <span className="inline-flex items-center gap-1"><Bed className="size-4" /> {p.beds}</span>
                    <span className="inline-flex items-center gap-1"><Bath className="size-4" /> {p.baths}</span>
                    <span className="inline-flex items-center gap-1"><Ruler className="size-4" /> {p.area}</span>
                  </div>
                </CardContent>
              </Card>
            </article>
          ))}
        </div>
        <div className="mt-10 text-center">
          <a href="#properties" className="story-link relative inline-block text-sm">View all properties</a>
        </div>
      </div>
    </section>
  );
};

export default FeaturedProperties;
