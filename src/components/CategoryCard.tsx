import { LucideIcon } from "lucide-react";
import { Card } from "@/components/ui/card";

interface CategoryCardProps {
  title: string;
  icon: LucideIcon;
  count: number;
}

const CategoryCard = ({ title, icon: Icon, count }: CategoryCardProps) => {
  return (
    <Card className="group relative overflow-hidden border-0 gradient-card hover-lift cursor-pointer p-6">
      <div className="absolute inset-0 gradient-radial opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
      
      <div className="relative z-10 flex flex-col items-center text-center">
        <div className="w-16 h-16 rounded-full bg-accent/10 flex items-center justify-center mb-4 group-hover:bg-accent/20 transition-colors duration-300">
          <Icon className="w-8 h-8 text-accent" />
        </div>
        <h3 className="text-xl font-bold text-foreground mb-1">{title}</h3>
        <p className="text-sm text-muted-foreground">{count} shows available</p>
      </div>
    </Card>
  );
};

export default CategoryCard;
