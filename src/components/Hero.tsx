import { Search } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import heroImage from "@/assets/hero-cinema.jpg";

const Hero = () => {
  return (
    <section className="relative min-h-[90vh] flex items-center justify-center overflow-hidden">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0 z-0">
        <img
          src={heroImage}
          alt="Cinema Experience"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-background via-background/90 to-background/40" />
        <div className="absolute inset-0 gradient-radial" />
      </div>

      {/* Content */}
      <div className="relative z-10 container mx-auto px-4 text-center animate-fade-in">
        <h1 className="text-5xl md:text-7xl font-bold mb-6 animate-fade-in">
          <span className="text-gradient">Experience</span> Entertainment
          <br />
          Like Never Before
        </h1>
        <p className="text-xl md:text-2xl text-muted-foreground mb-8 max-w-2xl mx-auto animate-fade-in" style={{ animationDelay: "0.1s" }}>
          Book tickets for movies, events, and shows in seconds. Your gateway to unforgettable moments.
        </p>

        {/* Search Bar */}
        <div className="max-w-2xl mx-auto mb-6 animate-fade-in" style={{ animationDelay: "0.2s" }}>
          <div className="flex gap-2 p-2 rounded-full bg-card/50 backdrop-blur-sm border border-border">
            <Input
              type="text"
              placeholder="Search for movies, events, or sports..."
              className="border-0 bg-transparent text-foreground placeholder:text-muted-foreground focus-visible:ring-0"
            />
            <Button size="lg" className="rounded-full bg-accent hover:bg-accent/90 text-accent-foreground">
              <Search className="w-5 h-5" />
            </Button>
          </div>
        </div>

        {/* Quick Links */}
        <div className="flex flex-wrap gap-3 justify-center animate-fade-in" style={{ animationDelay: "0.3s" }}>
          <Button variant="outline" className="rounded-full border-accent/50 hover:bg-accent/10 hover:border-accent">
            Movies
          </Button>
          <Button variant="outline" className="rounded-full border-accent/50 hover:bg-accent/10 hover:border-accent">
            Events
          </Button>
          <Button variant="outline" className="rounded-full border-accent/50 hover:bg-accent/10 hover:border-accent">
            Sports
          </Button>
          <Button variant="outline" className="rounded-full border-accent/50 hover:bg-accent/10 hover:border-accent">
            Plays
          </Button>
        </div>
      </div>
    </section>
  );
};

export default Hero;
