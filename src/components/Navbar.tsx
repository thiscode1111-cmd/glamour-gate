import { Sparkles, MapPin, User, Menu } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useState } from "react";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 border-b border-border/50 bg-background/80 backdrop-blur-lg">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <div className="flex items-center gap-2">
            <Sparkles className="w-8 h-8 text-accent" />
            <span className="text-2xl font-bold text-gradient">CineVerse</span>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-6">
            <a href="#" className="text-foreground hover:text-accent transition-colors">
              Movies
            </a>
            <a href="#" className="text-foreground hover:text-accent transition-colors">
              Events
            </a>
            <a href="#" className="text-foreground hover:text-accent transition-colors">
              Sports
            </a>
            <a href="#" className="text-foreground hover:text-accent transition-colors">
              Plays
            </a>
          </div>

          {/* Right Section */}
          <div className="flex items-center gap-3">
            <Button variant="ghost" size="sm" className="hidden md:flex items-center gap-2">
              <MapPin className="w-4 h-4" />
              <span>Mumbai</span>
            </Button>
            <Button variant="outline" size="sm" className="rounded-full border-accent/50 hover:bg-accent/10">
              <User className="w-4 h-4" />
            </Button>
            <Button
              variant="ghost"
              size="sm"
              className="md:hidden"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              <Menu className="w-5 h-5" />
            </Button>
          </div>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="md:hidden py-4 border-t border-border/50 animate-fade-in">
            <div className="flex flex-col gap-3">
              <a href="#" className="text-foreground hover:text-accent transition-colors py-2">
                Movies
              </a>
              <a href="#" className="text-foreground hover:text-accent transition-colors py-2">
                Events
              </a>
              <a href="#" className="text-foreground hover:text-accent transition-colors py-2">
                Sports
              </a>
              <a href="#" className="text-foreground hover:text-accent transition-colors py-2">
                Plays
              </a>
              <Button variant="ghost" size="sm" className="justify-start">
                <MapPin className="w-4 h-4 mr-2" />
                Mumbai
              </Button>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
