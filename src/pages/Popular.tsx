import Header from "@/components/Header";
import AnimeCard from "@/components/AnimeCard";

const popularAnime = [
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
  // Add more entries to fill the grid
  ...Array.from({ length: 16 }, (_, i) => ({
    id: `popular-${i + 5}`,
    title: `Popular Anime ${i + 5}`,
    image: `/src/assets/anime-cover-${(i % 4) + 1}.jpg`,
    rating: 7.5 + Math.random() * 1.5,
    episodes: Math.floor(Math.random() * 50) + 12,
    genre: ["Action", "Romance", "Adventure", "Comedy"][i % 4],
    year: 2020 + (i % 4)
  }))
];

const Popular = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      <div className="container py-8">
        <div className="mb-8">
          <h1 className="text-3xl font-bold mb-2">Popular Anime</h1>
          <p className="text-muted-foreground">
            The most watched and highest rated anime series
          </p>
        </div>
        
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6 gap-4">
          {popularAnime.map((anime) => (
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
      </div>
    </div>
  );
};

export default Popular;