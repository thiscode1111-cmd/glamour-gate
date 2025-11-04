import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import FeaturedCarousel from "@/components/FeaturedCarousel";
import Categories from "@/components/Categories";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <main className="pt-16">
        <Hero />
        <FeaturedCarousel />
        <Categories />
        
        {/* Trending Section */}
        <section className="py-16 relative">
          <div className="container mx-auto px-4">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold mb-4">
                Trending <span className="text-gradient">Now</span>
              </h2>
              <p className="text-muted-foreground text-lg">
                What everyone's watching
              </p>
            </div>
            <FeaturedCarousel />
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="border-t border-border/50 py-8 mt-16">
        <div className="container mx-auto px-4 text-center">
          <p className="text-muted-foreground">
            © 2024 CineVerse. Your gateway to entertainment.
          </p>
        </div>
      </footer>
    </div>
  );
};

export default Index;
