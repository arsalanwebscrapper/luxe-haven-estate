import a1 from "@/assets/agent-1.jpg";
import a2 from "@/assets/agent-2.jpg";
import a3 from "@/assets/agent-3.jpg";

const agents = [
  { id: 1, img: a1, name: "Elara Vance", title: "Senior Partner" },
  { id: 2, img: a2, name: "Marcus Hale", title: "Managing Director" },
  { id: 3, img: a3, name: "Sera Lin", title: "Global Advisor" },
];

const Agents = () => {
  return (
    <section id="agents" className="container py-16">
      <div className="mb-8">
        <h2 className="font-display text-3xl tracking-tight sm:text-4xl">Our Esteemed Advisors</h2>
        <p className="mt-2 text-foreground/70">Meet the team behind our bespoke advisory.</p>
      </div>
      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {agents.map((a) => (
          <article key={a.id} className="overflow-hidden rounded-xl border bg-card shadow-elegant transition hover:shadow-glow">
            <div className="relative aspect-[3/4] overflow-hidden">
              <img src={a.img} alt={`${a.name}, ${a.title}`} className="h-full w-full object-cover" loading="lazy" />
            </div>
            <div className="p-4">
              <p className="font-medium">{a.name}</p>
              <p className="text-sm text-foreground/70">{a.title}</p>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
};

export default Agents;
