import { Search, Bell, User, Play } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

const Header = () => {
  return (
    <header className="sticky top-0 z-50 w-full border-b border-border bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container flex h-16 items-center justify-between">
        {/* Logo */}
        <div className="flex items-center space-x-8">
          <div className="flex items-center space-x-2">
            <Play className="h-8 w-8 text-primary" />
            <span className="text-2xl font-bold bg-primary-gradient bg-clip-text text-transparent">
              AnimeStream
            </span>
          </div>
          
          {/* Navigation */}
          <nav className="hidden md:flex items-center space-x-6">
            <a href="#" className="text-sm font-medium hover:text-primary transition-colors">
              Home
            </a>
            <a href="#" className="text-sm font-medium hover:text-primary transition-colors">
              Popular
            </a>
            <a href="#" className="text-sm font-medium hover:text-primary transition-colors">
              New Releases
            </a>
            <a href="#" className="text-sm font-medium hover:text-primary transition-colors">
              Genres
            </a>
            <a href="#" className="text-sm font-medium hover:text-primary transition-colors">
              My List
            </a>
          </nav>
        </div>

        {/* Search and User Actions */}
        <div className="flex items-center space-x-4">
          <div className="relative hidden sm:block">
            <Search className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" />
            <Input
              placeholder="Search anime..."
              className="w-64 pl-10 bg-card/50 border-border"
            />
          </div>
          
          <Button variant="ghost" size="icon">
            <Bell className="h-5 w-5" />
          </Button>
          
          <Button variant="ghost" size="icon">
            <User className="h-5 w-5" />
          </Button>
          
          <Button variant="premium" size="sm">
            Premium
          </Button>
        </div>
      </div>
    </header>
  );
};

export default Header;