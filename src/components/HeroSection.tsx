import { Play, Plus, Info } from "lucide-react";
import { Button } from "@/components/ui/button";
import heroBanner from "@/assets/hero-banner.jpg";

const HeroSection = () => {
  return (
    <section className="relative min-h-[80vh] flex items-center overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0">
        <img
          src={heroBanner}
          alt="Featured Anime"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-background via-background/60 to-transparent" />
        <div className="absolute inset-0 bg-gradient-to-t from-background via-transparent to-transparent" />
      </div>
      
      {/* Content */}
      <div className="relative z-10 container">
        <div className="max-w-2xl space-y-6">
          <div className="space-y-2">
            <p className="text-primary font-medium">Featured Series</p>
            <h1 className="text-4xl md:text-6xl font-bold leading-tight">
              Shadow Realm Chronicles
            </h1>
            <p className="text-lg text-muted-foreground">
              A dark fantasy epic following a mysterious protagonist wielding forbidden magic 
              in a world where shadows hold ancient secrets and power comes at a deadly price.
            </p>
          </div>
          
          <div className="flex items-center space-x-4 text-sm text-muted-foreground">
            <span className="bg-primary text-primary-foreground px-2 py-1 rounded">9.2★</span>
            <span>2024</span>
            <span>24 Episodes</span>
            <span>Dark Fantasy</span>
          </div>
          
          <div className="flex items-center space-x-4">
            <Button variant="hero" size="xl" className="text-lg">
              <Play className="h-6 w-6 mr-2" />
              Watch Now
            </Button>
            <Button variant="watch" size="xl">
              <Plus className="h-6 w-6 mr-2" />
              My List
            </Button>
            <Button variant="ghost" size="xl">
              <Info className="h-6 w-6 mr-2" />
              More Info
            </Button>
          </div>
        </div>
      </div>
      
      {/* Floating elements */}
      <div className="absolute top-1/4 right-1/4 w-2 h-2 bg-primary rounded-full animate-float" />
      <div className="absolute bottom-1/3 right-1/3 w-1 h-1 bg-primary-glow rounded-full animate-float" style={{ animationDelay: '1s' }} />
    </section>
  );
};

export default HeroSection;