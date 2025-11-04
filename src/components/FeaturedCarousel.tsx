import { useEffect, useState } from "react";
import MovieCard from "./MovieCard";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { Button } from "@/components/ui/button";

const movies = [
  {
    title: "Celestial Odyssey",
    genre: "Sci-Fi Adventure",
    rating: 8.9,
    duration: "2h 45m",
    releaseDate: "Dec 2024",
    imageUrl: "https://images.unsplash.com/photo-1536440136628-849c177e76a1?w=400&h=600&fit=crop",
  },
  {
    title: "Midnight Chronicles",
    genre: "Mystery Thriller",
    rating: 8.5,
    duration: "2h 15m",
    releaseDate: "Jan 2025",
    imageUrl: "https://images.unsplash.com/photo-1594908900066-3f47337549d8?w=400&h=600&fit=crop",
  },
  {
    title: "The Last Symphony",
    genre: "Drama Musical",
    rating: 9.2,
    duration: "2h 30m",
    releaseDate: "Nov 2024",
    imageUrl: "https://images.unsplash.com/photo-1598899134739-24c46f58b8c0?w=400&h=600&fit=crop",
  },
  {
    title: "Echoes of Tomorrow",
    genre: "Sci-Fi Drama",
    rating: 8.7,
    duration: "2h 20m",
    releaseDate: "Dec 2024",
    imageUrl: "https://images.unsplash.com/photo-1485846234645-a62644f84728?w=400&h=600&fit=crop",
  },
  {
    title: "Urban Legends",
    genre: "Horror Mystery",
    rating: 8.3,
    duration: "1h 55m",
    releaseDate: "Jan 2025",
    imageUrl: "https://images.unsplash.com/photo-1542204165-65bf26472b9b?w=400&h=600&fit=crop",
  },
];

const FeaturedCarousel = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const itemsPerPage = 4;
  const maxIndex = Math.max(0, movies.length - itemsPerPage);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev >= maxIndex ? 0 : prev + 1));
    }, 5000);
    return () => clearInterval(interval);
  }, [maxIndex]);

  const goToPrevious = () => {
    setCurrentIndex((prev) => (prev <= 0 ? maxIndex : prev - 1));
  };

  const goToNext = () => {
    setCurrentIndex((prev) => (prev >= maxIndex ? 0 : prev + 1));
  };

  return (
    <section className="py-16 relative">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between mb-8">
          <div>
            <h2 className="text-3xl md:text-4xl font-bold mb-2">
              Featured <span className="text-gradient">This Week</span>
            </h2>
            <p className="text-muted-foreground">Handpicked movies just for you</p>
          </div>
          <div className="flex gap-2">
            <Button
              variant="outline"
              size="icon"
              onClick={goToPrevious}
              className="rounded-full border-accent/50 hover:bg-accent/10"
            >
              <ChevronLeft className="w-5 h-5" />
            </Button>
            <Button
              variant="outline"
              size="icon"
              onClick={goToNext}
              className="rounded-full border-accent/50 hover:bg-accent/10"
            >
              <ChevronRight className="w-5 h-5" />
            </Button>
          </div>
        </div>

        <div className="overflow-hidden">
          <div
            className="flex gap-6 transition-transform duration-500 ease-out"
            style={{
              transform: `translateX(-${currentIndex * (100 / itemsPerPage)}%)`,
            }}
          >
            {movies.map((movie, index) => (
              <div
                key={index}
                className="flex-shrink-0 w-full sm:w-1/2 lg:w-1/4"
              >
                <MovieCard {...movie} />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default FeaturedCarousel;
