import { useParams, useNavigate } from "react-router-dom";
import { Play, Plus, Star, ArrowLeft, Clock, Calendar } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import Header from "@/components/Header";

// Mock data for show details
const mockShowData = {
  "attack-on-titan": {
    title: "Attack on Titan",
    description: "When the man-eating giants called Titans first appeared, humans retreated behind massive walls. After a hundred years of safety, a colossal-sized Titan smashes through the defenses, unleashing a flood of giants and carnage in the city.",
    rating: 9.0,
    year: 2013,
    genres: ["Action", "Drama", "Fantasy"],
    episodes: 87,
    status: "Completed",
    studio: "MAPPA",
    image: "/src/assets/anime-cover-1.jpg",
    banner: "/src/assets/hero-banner.jpg",
    seasons: [
      {
        title: "Season 1",
        episodes: [
          { number: 1, title: "To You, in 2000 Years", duration: "24:30", thumbnail: "/src/assets/anime-cover-1.jpg" },
          { number: 2, title: "That Day", duration: "24:30", thumbnail: "/src/assets/anime-cover-1.jpg" },
          { number: 3, title: "A Dim Light Amid Despair", duration: "24:30", thumbnail: "/src/assets/anime-cover-1.jpg" },
          { number: 4, title: "The Night of the Closing Ceremony", duration: "24:30", thumbnail: "/src/assets/anime-cover-1.jpg" },
          { number: 5, title: "First Battle", duration: "24:30", thumbnail: "/src/assets/anime-cover-1.jpg" },
        ]
      },
      {
        title: "Season 2",
        episodes: [
          { number: 26, title: "Beast Titan", duration: "24:30", thumbnail: "/src/assets/anime-cover-1.jpg" },
          { number: 27, title: "I'm Home", duration: "24:30", thumbnail: "/src/assets/anime-cover-1.jpg" },
          { number: 28, title: "Southwestward", duration: "24:30", thumbnail: "/src/assets/anime-cover-1.jpg" },
        ]
      }
    ]
  }
};

const ShowDetails = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  
  const show = mockShowData[id as keyof typeof mockShowData] || mockShowData["attack-on-titan"];

  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      {/* Hero Banner */}
      <div className="relative h-[70vh] overflow-hidden">
        <img
          src={show.banner}
          alt={show.title}
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-background via-background/60 to-transparent" />
        
        <div className="absolute bottom-0 left-0 right-0 p-8">
          <div className="container">
            <Button
              variant="ghost"
              size="sm"
              onClick={() => navigate(-1)}
              className="mb-4"
            >
              <ArrowLeft className="h-4 w-4 mr-2" />
              Back
            </Button>
            
            <div className="flex flex-col md:flex-row gap-6">
              <img
                src={show.image}
                alt={show.title}
                className="w-48 h-72 object-cover rounded-lg shadow-lg"
              />
              
              <div className="flex-1 space-y-4">
                <h1 className="text-4xl font-bold">{show.title}</h1>
                
                <div className="flex items-center gap-4 text-sm">
                  <div className="flex items-center gap-1">
                    <Star className="h-4 w-4 fill-yellow-400 text-yellow-400" />
                    <span>{show.rating}</span>
                  </div>
                  <span>•</span>
                  <span>{show.year}</span>
                  <span>•</span>
                  <span>{show.episodes} episodes</span>
                  <span>•</span>
                  <Badge variant="secondary">{show.status}</Badge>
                </div>
                
                <div className="flex gap-2 flex-wrap">
                  {show.genres.map((genre) => (
                    <Badge key={genre} variant="outline">{genre}</Badge>
                  ))}
                </div>
                
                <p className="text-muted-foreground max-w-2xl">{show.description}</p>
                
                <div className="flex gap-4">
                  <Button variant="play" size="lg">
                    <Play className="h-5 w-5 mr-2" />
                    Watch Now
                  </Button>
                  <Button variant="outline" size="lg">
                    <Plus className="h-5 w-5 mr-2" />
                    Add to List
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      
      {/* Episodes Section */}
      <div className="container py-8">
        <h2 className="text-2xl font-bold mb-6">Episodes</h2>
        
        <div className="space-y-8">
          {show.seasons.map((season, seasonIndex) => (
            <div key={seasonIndex} className="space-y-4">
              <h3 className="text-xl font-semibold">{season.title}</h3>
              
              <div className="grid gap-4">
                {season.episodes.map((episode) => (
                  <div
                    key={episode.number}
                    className="group flex gap-4 p-4 rounded-lg bg-card hover:bg-card/80 border border-border cursor-pointer transition-colors"
                  >
                    <div className="relative w-32 h-20 flex-shrink-0">
                      <img
                        src={episode.thumbnail}
                        alt={`Episode ${episode.number}`}
                        className="w-full h-full object-cover rounded"
                      />
                      <div className="absolute inset-0 bg-black/50 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
                        <Play className="h-6 w-6 text-white" />
                      </div>
                    </div>
                    
                    <div className="flex-1 space-y-2">
                      <div className="flex items-center justify-between">
                        <h4 className="font-medium">
                          Episode {episode.number}: {episode.title}
                        </h4>
                        <div className="flex items-center gap-4 text-sm text-muted-foreground">
                          <div className="flex items-center gap-1">
                            <Clock className="h-3 w-3" />
                            {episode.duration}
                          </div>
                        </div>
                      </div>
                      
                      <p className="text-sm text-muted-foreground line-clamp-2">
                        Watch Episode {episode.number} of {show.title}. An exciting continuation of the story with incredible action and character development.
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ShowDetails;