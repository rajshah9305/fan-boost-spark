import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Play, Eye, Clock, Zap } from "lucide-react";
import gallery1 from "@/assets/portrait-2.png";
import gallery2 from "@/assets/portrait-3.png";
import gallery3 from "@/assets/portrait-4.png";
import gallery4 from "@/assets/portrait-5.png";
import gallery5 from "@/assets/portrait-6.png";
import gallery6 from "@/assets/portrait-7.png";
import gallery7 from "@/assets/portrait-8.png";
import gallery8 from "@/assets/portrait-9.png";
import gallery9 from "@/assets/portrait-10.png";

const FeaturedContent = () => {
  const featuredItems = [
    {
      id: 1,
      title: "Cosmic Adventures",
      description: "Embark on an epic journey through the stars and discover the mysteries of the universe.",
      image: gallery1,
      type: "Video Series",
      duration: "45 min",
      views: "2.3M",
      badge: "New"
    },
    {
      id: 2,
      title: "Electric Legends",
      description: "Witness the most electrifying moments and legendary performances that defined an era.",
      image: gallery2,
      type: "Highlights",
      duration: "30 min",
      views: "1.8M",
      badge: "Trending"
    },
    {
      id: 3,
      title: "Golden Chronicles",
      description: "Relive the golden moments and timeless stories that continue to inspire millions.",
      image: gallery3,
      type: "Documentary",
      duration: "60 min",
      views: "3.1M",
      badge: "Popular"
    }
  ];

  const getBadgeVariant = (badge: string) => {
    switch (badge) {
      case "New": return "default";
      case "Trending": return "destructive";
      case "Popular": return "secondary";
      default: return "outline";
    }
  };

  return (
    <section className="py-20 px-6">
      <div className="container mx-auto">
        <div className="text-center mb-16 animate-slide-up">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 text-foreground drop-shadow-lg">
            Featured 
            <span className="bg-gradient-to-r from-cosmic-purple to-electric-blue bg-clip-text text-transparent">
              {" "}Content
            </span>
          </h2>
          <p className="text-xl text-foreground/80 max-w-2xl mx-auto">
            Discover the most captivating content, curated especially for passionate fans like you.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {featuredItems.map((item, index) => (
            <Card 
              key={item.id} 
              className="card-gradient border-primary/20 overflow-hidden group hover:scale-105 transition-all duration-300 glow-effect animate-zoom-in bg-card/95 backdrop-blur-sm"
              style={{ animationDelay: `${index * 0.2}s` }}
            >
              <div className="relative overflow-hidden">
                <img 
                  src={item.image}
                  alt={item.title}
                  className="w-full h-48 object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-black/40 group-hover:bg-black/20 transition-colors duration-300" />
                <div className="absolute top-4 left-4">
                  <Badge variant={getBadgeVariant(item.badge)} className="animate-pulse-glow">
                    {item.badge}
                  </Badge>
                </div>
                <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <Button size="icon" className="bg-primary/80 hover:bg-primary animate-pulse-glow">
                    <Play className="w-6 h-6 fill-current" />
                  </Button>
                </div>
              </div>

              <CardHeader>
                <div className="flex items-center justify-between mb-2">
                  <Badge variant="outline" className="text-accent border-accent">
                    {item.type}
                  </Badge>
                  <div className="flex items-center gap-4 text-sm text-muted-foreground">
                    <div className="flex items-center gap-1">
                      <Clock className="w-4 h-4" />
                      {item.duration}
                    </div>
                    <div className="flex items-center gap-1">
                      <Eye className="w-4 h-4" />
                      {item.views}
                    </div>
                  </div>
                </div>
                <CardTitle className="text-xl group-hover:text-primary transition-colors duration-300 text-foreground">
                  {item.title}
                </CardTitle>
              </CardHeader>

              <CardContent>
                <p className="text-foreground/70 mb-4 line-clamp-3">
                  {item.description}
                </p>
                <Button className="w-full bg-secondary hover:bg-secondary/80 text-secondary-foreground">
                  <Zap className="w-4 h-4 mr-2" />
                  Watch Now
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="text-center mt-12">
          <Button size="lg" variant="outline" className="border-primary text-primary hover:bg-primary hover:text-primary-foreground glow-effect">
            View All Content
          </Button>
        </div>
      </div>
    </section>
  );
};

export default FeaturedContent;