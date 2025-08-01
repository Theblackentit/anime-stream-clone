import { ChevronLeft, ChevronRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import AnimeCard from "./AnimeCard";
import animeCover1 from "@/assets/anime-cover-1.jpg";
import animeCover2 from "@/assets/anime-cover-2.jpg";
import animeCover3 from "@/assets/anime-cover-3.jpg";
import animeCover4 from "@/assets/anime-cover-4.jpg";

interface ContentSectionProps {
  title: string;
  subtitle?: string;
}

const ContentSection = ({ title, subtitle }: ContentSectionProps) => {
  const animeList = [
    {
      title: "Shadow Realm Chronicles",
      image: animeCover1,
      rating: 9.2,
      episodes: 24,
      genre: "Dark Fantasy",
      year: 2024,
      description: "A mysterious protagonist wielding forbidden magic in a world of shadows and ancient secrets."
    },
    {
      title: "Tokyo Neon Warriors",
      image: animeCover2,
      rating: 8.8,
      episodes: 12,
      genre: "Mecha",
      year: 2024,
      description: "Giant robots battle in a cyberpunk future where technology and humanity collide."
    },
    {
      title: "Sakura Academy Romance",
      image: animeCover3,
      rating: 8.5,
      episodes: 24,
      genre: "Romance",
      year: 2023,
      description: "Heartwarming school romance set against the backdrop of cherry blossoms and young love."
    },
    {
      title: "Dragon Slayer Legend",
      image: animeCover4,
      rating: 9.0,
      episodes: 36,
      genre: "Adventure",
      year: 2023,
      description: "Epic fantasy adventure following heroes on a quest to defeat ancient dragons."
    },
    // Duplicate for scrolling effect
    {
      title: "Shadow Realm Chronicles",
      image: animeCover1,
      rating: 9.2,
      episodes: 24,
      genre: "Dark Fantasy",
      year: 2024,
      description: "A mysterious protagonist wielding forbidden magic in a world of shadows and ancient secrets."
    },
    {
      title: "Tokyo Neon Warriors",
      image: animeCover2,
      rating: 8.8,
      episodes: 12,
      genre: "Mecha",
      year: 2024,
      description: "Giant robots battle in a cyberpunk future where technology and humanity collide."
    }
  ];

  return (
    <section className="py-8 container">
      <div className="flex items-center justify-between mb-6">
        <div>
          <h2 className="text-2xl font-bold mb-1">{title}</h2>
          {subtitle && (
            <p className="text-muted-foreground">{subtitle}</p>
          )}
        </div>
        
        <div className="flex items-center space-x-2">
          <Button variant="ghost" size="icon" className="h-8 w-8">
            <ChevronLeft className="h-4 w-4" />
          </Button>
          <Button variant="ghost" size="icon" className="h-8 w-8">
            <ChevronRight className="h-4 w-4" />
          </Button>
        </div>
      </div>
      
      <div className="overflow-x-auto">
        <div className="flex space-x-4 pb-4">
          {animeList.map((anime, index) => (
            <div key={index} className="flex-none w-64">
              <AnimeCard {...anime} />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ContentSection;