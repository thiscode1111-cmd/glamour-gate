import { Star, Calendar, Clock } from "lucide-react";
import { Card } from "@/components/ui/card";

interface MovieCardProps {
  title: string;
  genre: string;
  rating: number;
  duration: string;
  releaseDate: string;
  imageUrl: string;
}

const MovieCard = ({ title, genre, rating, duration, releaseDate, imageUrl }: MovieCardProps) => {
  return (
    <Card className="group relative overflow-hidden border-0 gradient-card hover-lift cursor-pointer">
      <div className="aspect-[2/3] overflow-hidden">
        <img
          src={imageUrl}
          alt={title}
          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-background via-background/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
      </div>
      
      <div className="absolute bottom-0 left-0 right-0 p-4 transform translate-y-2 group-hover:translate-y-0 transition-transform duration-300">
        <h3 className="text-lg font-bold text-foreground mb-1 line-clamp-1">{title}</h3>
        <p className="text-sm text-muted-foreground mb-2">{genre}</p>
        
        <div className="flex items-center gap-3 text-xs text-muted-foreground opacity-0 group-hover:opacity-100 transition-opacity duration-300">
          <div className="flex items-center gap-1">
            <Star className="w-3 h-3 fill-gold text-gold" />
            <span className="text-gold font-semibold">{rating}</span>
          </div>
          <div className="flex items-center gap-1">
            <Clock className="w-3 h-3" />
            <span>{duration}</span>
          </div>
          <div className="flex items-center gap-1">
            <Calendar className="w-3 h-3" />
            <span>{releaseDate}</span>
          </div>
        </div>
      </div>
    </Card>
  );
};

export default MovieCard;
