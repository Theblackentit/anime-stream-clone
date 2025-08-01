import Header from "@/components/Header";
import AnimeCard from "@/components/AnimeCard";
import { Badge } from "@/components/ui/badge";

const genres = [
  "Action", "Adventure", "Comedy", "Drama", "Fantasy", "Horror", 
  "Mystery", "Romance", "Sci-Fi", "Slice of Life", "Sports", "Thriller"
];

const genreAnime = {
  "Action": [
    { id: "action-1", title: "Battle Warriors", image: "/src/assets/anime-cover-1.jpg", rating: 8.5, episodes: 24, genre: "Action", year: 2023 },
    { id: "action-2", title: "Fight Masters", image: "/src/assets/anime-cover-2.jpg", rating: 8.2, episodes: 36, genre: "Action", year: 2022 },
  ],
  "Romance": [
    { id: "romance-1", title: "Love Story", image: "/src/assets/anime-cover-3.jpg", rating: 8.0, episodes: 12, genre: "Romance", year: 2023 },
    { id: "romance-2", title: "Heart Beats", image: "/src/assets/anime-cover-4.jpg", rating: 7.8, episodes: 24, genre: "Romance", year: 2022 },
  ],
  "Adventure": [
    { id: "adventure-1", title: "Epic Quest", image: "/src/assets/anime-cover-1.jpg", rating: 8.7, episodes: 48, genre: "Adventure", year: 2023 },
    { id: "adventure-2", title: "Journey Beyond", image: "/src/assets/anime-cover-2.jpg", rating: 8.3, episodes: 32, genre: "Adventure", year: 2022 },
  ]
};

const Genres = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      <div className="container py-8">
        <div className="mb-8">
          <h1 className="text-3xl font-bold mb-2">Browse by Genre</h1>
          <p className="text-muted-foreground">
            Discover anime by your favorite genres
          </p>
        </div>
        
        {/* Genre Tags */}
        <div className="flex flex-wrap gap-2 mb-8">
          {genres.map((genre) => (
            <Badge 
              key={genre} 
              variant="outline" 
              className="cursor-pointer hover:bg-primary hover:text-primary-foreground transition-colors"
            >
              {genre}
            </Badge>
          ))}
        </div>
        
        {/* Genre Sections */}
        <div className="space-y-8">
          {Object.entries(genreAnime).map(([genre, animeList]) => (
            <div key={genre}>
              <h2 className="text-2xl font-semibold mb-4">{genre}</h2>
              <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6 gap-4">
                {animeList.map((anime) => (
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
                {/* Fill with more items */}
                {Array.from({ length: 6 }, (_, i) => (
                  <AnimeCard
                    key={`${genre}-${i}`}
                    title={`${genre} Anime ${i + 3}`}
                    image={`/src/assets/anime-cover-${(i % 4) + 1}.jpg`}
                    rating={7.0 + Math.random() * 1.5}
                    episodes={Math.floor(Math.random() * 30) + 12}
                    genre={genre}
                    year={2023}
                  />
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Genres;