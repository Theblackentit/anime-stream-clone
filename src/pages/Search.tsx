import { useState } from "react";
import Header from "@/components/Header";
import AnimeCard from "@/components/AnimeCard";
import { Input } from "@/components/ui/input";
import { Search as SearchIcon } from "lucide-react";

const allAnime = [
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
    id: "demon-slayer",
    title: "Demon Slayer",
    image: "/src/assets/anime-cover-2.jpg",
    rating: 8.7,
    episodes: 44,
    genre: "Action",
    year: 2019
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
    id: "spirited-away",
    title: "Spirited Away",
    image: "/src/assets/anime-cover-4.jpg",
    rating: 9.3,
    episodes: 1,
    genre: "Adventure",
    year: 2001
  },
  // Add more search results
  ...Array.from({ length: 20 }, (_, i) => ({
    id: `search-${i + 5}`,
    title: `Anime Series ${i + 5}`,
    image: `/src/assets/anime-cover-${(i % 4) + 1}.jpg`,
    rating: 7.0 + Math.random() * 2,
    episodes: Math.floor(Math.random() * 50) + 12,
    genre: ["Action", "Romance", "Adventure", "Comedy", "Fantasy", "Sci-Fi"][i % 6],
    year: 2015 + (i % 9)
  }))
];

const Search = () => {
  const [searchQuery, setSearchQuery] = useState("");
  
  const filteredAnime = allAnime.filter((anime) =>
    anime.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
    anime.genre.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      <div className="container py-8">
        <div className="mb-8">
          <h1 className="text-3xl font-bold mb-4">Search Anime</h1>
          
          <div className="relative max-w-md">
            <SearchIcon className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" />
            <Input
              placeholder="Search for anime..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="pl-10"
            />
          </div>
        </div>
        
        {searchQuery && (
          <div className="mb-6">
            <p className="text-muted-foreground">
              {filteredAnime.length} results for "{searchQuery}"
            </p>
          </div>
        )}
        
        {searchQuery ? (
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6 gap-4">
            {filteredAnime.map((anime) => (
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
            <SearchIcon className="h-16 w-16 mx-auto mb-4 text-muted-foreground" />
            <h3 className="text-xl font-semibold mb-2">Start searching</h3>
            <p className="text-muted-foreground">
              Enter a title or genre to find your favorite anime
            </p>
          </div>
        )}
        
        {searchQuery && filteredAnime.length === 0 && (
          <div className="text-center py-16">
            <SearchIcon className="h-16 w-16 mx-auto mb-4 text-muted-foreground" />
            <h3 className="text-xl font-semibold mb-2">No results found</h3>
            <p className="text-muted-foreground">
              Try searching with different keywords
            </p>
          </div>
        )}
      </div>
    </div>
  );
};

export default Search;