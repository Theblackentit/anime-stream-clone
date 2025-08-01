import Header from "@/components/Header";
import AnimeCard from "@/components/AnimeCard";
import { Button } from "@/components/ui/button";
import { Plus } from "lucide-react";

const myListAnime = [
  {
    id: "attack-on-titan",
    title: "Attack on Titan",
    image: "/src/assets/anime-cover-1.jpg",
    rating: 9.0,
    episodes: 87,
    genre: "Action",
    year: 2013
  },
  {
    id: "your-name",
    title: "Your Name",
    image: "/src/assets/anime-cover-3.jpg",
    rating: 8.4,
    episodes: 1,
    genre: "Romance",
    year: 2016
  },
  {
    id: "demon-slayer",
    title: "Demon Slayer",
    image: "/src/assets/anime-cover-2.jpg",
    rating: 8.7,
    episodes: 44,
    genre: "Action",
    year: 2019
  }
];

const MyList = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      <div className="container py-8">
        <div className="mb-8">
          <h1 className="text-3xl font-bold mb-2">My List</h1>
          <p className="text-muted-foreground">
            Your saved anime series and movies
          </p>
        </div>
        
        {myListAnime.length > 0 ? (
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6 gap-4">
            {myListAnime.map((anime) => (
              <AnimeCard
                key={anime.id}
                title={anime.title}
                image={anime.image}
                rating={anime.rating}
                episodes={anime.episodes}
                genre={anime.genre}
                year={anime.year}
              />
            ))}
          </div>
        ) : (
          <div className="text-center py-16">
            <div className="w-24 h-24 mx-auto mb-4 rounded-full bg-muted flex items-center justify-center">
              <Plus className="h-12 w-12 text-muted-foreground" />
            </div>
            <h3 className="text-xl font-semibold mb-2">Your list is empty</h3>
            <p className="text-muted-foreground mb-4">
              Start adding anime to your list to keep track of what you want to watch
            </p>
            <Button variant="outline">
              Browse Anime
            </Button>
          </div>
        )}
      </div>
    </div>
  );
};

export default MyList;