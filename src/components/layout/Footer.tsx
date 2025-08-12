import { useToast } from "@/hooks/use-toast";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

const Footer = () => {
  const { toast } = useToast();

  return (
    <footer id="contact" className="border-t bg-secondary/50">
      <div className="container grid gap-10 py-12 md:grid-cols-4">
        <div>
          <div className="text-lg font-semibold">Aurelia Estates</div>
          <p className="mt-3 text-sm text-foreground/70">
            Curating excellence in luxury real estate across premier global markets.
          </p>
        </div>
        <div>
          <div className="text-sm font-semibold">Navigation</div>
          <ul className="mt-3 space-y-2 text-sm text-foreground/80">
            <li><a href="#home" className="hover:underline">Home</a></li>
            <li><a href="#properties" className="hover:underline">Properties</a></li>
            <li><a href="#story" className="hover:underline">Our Story</a></li>
            <li><a href="#agents" className="hover:underline">Agents</a></li>
          </ul>
        </div>
        <div>
          <div className="text-sm font-semibold">Services</div>
          <ul className="mt-3 space-y-2 text-sm text-foreground/80">
            <li>Buyer Representation</li>
            <li>Seller Representation</li>
            <li>Investment Advisory</li>
            <li>Property Management</li>
          </ul>
        </div>
        <div>
          <div className="text-sm font-semibold">Receive Exclusive Listings</div>
          <form
            className="mt-3 flex gap-2"
            onSubmit={(e) => {
              e.preventDefault();
              toast({ title: "Subscribed", description: "You will receive exclusive updates." });
            }}
          >
            <Input type="email" required placeholder="Your email" className="bg-background/60" />
            <Button variant="premium">Subscribe</Button>
          </form>
          <p className="mt-2 text-xs text-foreground/60">By subscribing, you agree to our Privacy Policy.</p>
        </div>
      </div>
      <div className="border-t">
        <div className="container flex h-12 items-center justify-between text-xs text-foreground/60">
          <p>© {new Date().getFullYear()} Aurelia Estates. All rights reserved.</p>
          <a href="#home" className="hover:underline">Back to top</a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
