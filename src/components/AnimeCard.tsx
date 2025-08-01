import { Play, Plus, Star } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { useNavigate } from "react-router-dom";

interface AnimeCardProps {
  title: string;
  image: string;
  rating: number;
  episodes: number;
  genre: string;
  year: number;
  description?: string;
}

const AnimeCard = ({ title, image, rating, episodes, genre, year, description }: AnimeCardProps) => {
  const navigate = useNavigate();
  
  const handleClick = () => {
    const id = title.toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/^-|-$/g, '');
    navigate(`/show/${id}`);
  };

  return (
    <Card className="group relative overflow-hidden bg-card-gradient border-border hover:shadow-card transition-all duration-300 transform hover:scale-105 cursor-pointer" onClick={handleClick}>
      <div className="aspect-[3/4] relative overflow-hidden">
        <img
          src={image}
          alt={title}
          className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110"
        />
        
        {/* Overlay with controls */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-4">
          <div className="space-y-2">
            <div className="flex items-center space-x-2 text-sm text-gray-300">
              <Star className="h-4 w-4 fill-yellow-400 text-yellow-400" />
              <span>{rating}</span>
              <span>•</span>
              <span>{episodes} eps</span>
              <span>•</span>
              <span>{year}</span>
            </div>
            
            <p className="text-xs text-gray-400 line-clamp-2">
              {description || `${genre} anime with exciting adventures and compelling characters.`}
            </p>
            
            <div className="flex items-center space-x-2">
              <Button variant="play" size="sm">
                <Play className="h-4 w-4 mr-1" />
                Watch
              </Button>
              <Button variant="ghost" size="icon" className="h-8 w-8">
                <Plus className="h-4 w-4" />
              </Button>
            </div>
          </div>
        </div>
        
        {/* Rating badge */}
        <div className="absolute top-2 right-2 bg-black/70 backdrop-blur-sm rounded-md px-2 py-1 text-xs font-medium">
          {rating}★
        </div>
      </div>
      
      <div className="p-4">
        <h3 className="font-semibold text-sm line-clamp-1 mb-1">{title}</h3>
        <p className="text-xs text-muted-foreground">{genre} • {year}</p>
      </div>
    </Card>
  );
};

export default AnimeCard;