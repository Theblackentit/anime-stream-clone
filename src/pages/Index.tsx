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
        
        {/* Premium Section */}
        <section className="py-16 mt-16 bg-card-gradient">
          <div className="container text-center space-y-8">
            <div className="space-y-4">
              <h2 className="text-3xl font-bold">Go Premium</h2>
              <p className="text-muted-foreground max-w-2xl mx-auto">
                Unlock exclusive content, watch ad-free, and enjoy unlimited streaming 
                of the latest anime series and movies.
              </p>
            </div>
            
            <div className="grid md:grid-cols-3 gap-6 max-w-4xl mx-auto">
              <div className="bg-background/50 backdrop-blur-sm border border-border rounded-lg p-6 space-y-4">
                <h3 className="text-xl font-semibold">Basic</h3>
                <div className="text-3xl font-bold">$4.99<span className="text-sm text-muted-foreground">/mo</span></div>
                <ul className="space-y-2 text-sm text-muted-foreground">
                  <li>✓ HD streaming</li>
                  <li>✓ Limited ads</li>
                  <li>✓ 1 device</li>
                </ul>
              </div>
              
              <div className="bg-primary-gradient border-2 border-primary rounded-lg p-6 space-y-4 transform scale-105 shadow-premium">
                <h3 className="text-xl font-semibold">Premium</h3>
                <div className="text-3xl font-bold">$9.99<span className="text-sm text-muted-foreground">/mo</span></div>
                <ul className="space-y-2 text-sm">
                  <li>✓ 4K Ultra HD</li>
                  <li>✓ No ads</li>
                  <li>✓ 4 devices</li>
                  <li>✓ Offline downloads</li>
                  <li>✓ Exclusive content</li>
                </ul>
              </div>
              
              <div className="bg-background/50 backdrop-blur-sm border border-border rounded-lg p-6 space-y-4">
                <h3 className="text-xl font-semibold">Family</h3>
                <div className="text-3xl font-bold">$14.99<span className="text-sm text-muted-foreground">/mo</span></div>
                <ul className="space-y-2 text-sm text-muted-foreground">
                  <li>✓ Everything in Premium</li>
                  <li>✓ 6 devices</li>
                  <li>✓ Parental controls</li>
                  <li>✓ Multiple profiles</li>
                </ul>
              </div>
            </div>
          </div>
        </section>
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
