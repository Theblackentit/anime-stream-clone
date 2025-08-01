import Header from "@/components/Header";
import HeroSection from "@/components/HeroSection";
import ContentSection from "@/components/ContentSection";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      <main>
        <HeroSection />
        
        <div className="space-y-8">
          <ContentSection 
            title="Trending Now" 
            subtitle="Most popular anime this week"
          />
          
          <ContentSection 
            title="New Releases" 
            subtitle="Latest episodes and series"
          />
          
          <ContentSection 
            title="Action & Adventure" 
            subtitle="Epic battles and thrilling quests"
          />
          
          <ContentSection 
            title="Romance" 
            subtitle="Heartwarming love stories"
          />
          
          <ContentSection 
            title="Continue Watching" 
            subtitle="Pick up where you left off"
          />
        </div>
        
      </main>
      
      {/* Footer */}
      <footer className="border-t border-border mt-16 py-8">
        <div className="container text-center text-muted-foreground">
          <p>&copy; 2024 AnimeStream. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
};

export default Index;
