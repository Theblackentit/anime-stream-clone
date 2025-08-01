import Header from "@/components/Header";
import AnimeCard from "@/components/AnimeCard";

const newReleases = [
  {
    id: "new-series-1",
    title: "New Adventure Series",
    image: "/src/assets/anime-cover-1.jpg",
    rating: 8.2,
    episodes: 3,
    genre: "Adventure",
    year: 2024
  },
  {
    id: "new-series-2",
    title: "Mystery Academy",
    image: "/src/assets/anime-cover-2.jpg",
    rating: 7.9,
    episodes: 5,
    genre: "Mystery",
    year: 2024
  },
  {
    id: "new-series-3",
    title: "Space Warriors",
    image: "/src/assets/anime-cover-3.jpg",
    rating: 8.5,
    episodes: 8,
    genre: "Sci-Fi",
    year: 2024
  },
  {
    id: "new-series-4",
    title: "Magic Academy",
    image: "/src/assets/anime-cover-4.jpg",
    rating: 8.1,
    episodes: 6,
    genre: "Fantasy",
    year: 2024
  },
  // Add more entries
  ...Array.from({ length: 16 }, (_, i) => ({
    id: `new-${i + 5}`,
    title: `New Release ${i + 5}`,
    image: `/src/assets/anime-cover-${(i % 4) + 1}.jpg`,
    rating: 7.0 + Math.random() * 1.5,
    episodes: Math.floor(Math.random() * 12) + 1,
    genre: ["Action", "Romance", "Adventure", "Comedy"][i % 4],
    year: 2024
  }))
];

const NewReleases = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      <div className="container py-8">
        <div className="mb-8">
          <h1 className="text-3xl font-bold mb-2">New Releases</h1>
          <p className="text-muted-foreground">
            Latest anime series and episodes added this week
          </p>
        </div>
        
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6 gap-4">
          {newReleases.map((anime) => (
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

export default NewReleases;