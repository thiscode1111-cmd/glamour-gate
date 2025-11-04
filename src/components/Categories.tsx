import CategoryCard from "./CategoryCard";
import { Film, Music, Trophy, Drama } from "lucide-react";

const categories = [
  { title: "Movies", icon: Film, count: 245 },
  { title: "Events", icon: Music, count: 128 },
  { title: "Sports", icon: Trophy, count: 87 },
  { title: "Plays", icon: Drama, count: 54 },
];

const Categories = () => {
  return (
    <section className="py-16 relative">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Browse By <span className="text-gradient">Category</span>
          </h2>
          <p className="text-muted-foreground text-lg">
            Find exactly what you're looking for
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {categories.map((category, index) => (
            <div
              key={category.title}
              className="animate-fade-in"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <CategoryCard {...category} />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Categories;
