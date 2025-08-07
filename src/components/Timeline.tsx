import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Star, Trophy, Heart, Zap } from "lucide-react";

const Timeline = () => {
  const timelineEvents = [
    {
      year: "2024",
      title: "Record Breaking Year",
      description: "Achieved unprecedented success with multiple milestones and community growth that exceeded all expectations.",
      icon: Trophy,
      color: "stellar-gold",
      badge: "Latest"
    },
    {
      year: "2023",
      title: "Community Milestone",
      description: "Reached 1 million passionate fans worldwide, creating an incredible global community of supporters.",
      icon: Heart,
      color: "destructive",
      badge: "Achievement"
    },
    {
      year: "2022",
      title: "Legendary Moments",
      description: "Created unforgettable experiences and legendary content that continues to inspire fans everywhere.",
      icon: Star,
      color: "cosmic-purple",
      badge: "Epic"
    },
    {
      year: "2021",
      title: "The Beginning",
      description: "Started this incredible journey with a vision to create something extraordinary for dedicated fans.",
      icon: Zap,
      color: "electric-blue",
      badge: "Origin"
    }
  ];

  return (
    <section className="py-20 px-6 bg-secondary/20">
      <div className="container mx-auto">
        <div className="text-center mb-16 animate-slide-up">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 text-foreground drop-shadow-lg">
            Epic
            <span className="bg-gradient-to-r from-stellar-gold to-cosmic-purple bg-clip-text text-transparent">
              {" "}Timeline
            </span>
          </h2>
          <p className="text-xl text-foreground/80 max-w-2xl mx-auto">
            Follow the incredible journey and witness the moments that shaped this extraordinary story.
          </p>
        </div>

        <div className="relative">
          {/* Timeline line */}
          <div className="absolute left-1/2 transform -translate-x-1/2 h-full w-1 bg-gradient-to-b from-primary via-electric-blue to-stellar-gold opacity-60" />

          <div className="space-y-12">
            {timelineEvents.map((event, index) => (
              <div 
                key={event.year}
                className={`relative flex items-center ${
                  index % 2 === 0 ? 'justify-start' : 'justify-end'
                } animate-slide-up`}
                style={{ animationDelay: `${index * 0.3}s` }}
              >
                {/* Timeline node */}
                <div className="absolute left-1/2 transform -translate-x-1/2 w-6 h-6 rounded-full bg-primary glow-effect animate-pulse-glow z-10" />

                {/* Content card */}
                <Card 
                  className={`w-full max-w-md card-gradient border-primary/20 glow-effect hover:scale-105 transition-all duration-300 bg-card/95 backdrop-blur-sm ${
                    index % 2 === 0 ? 'mr-auto pr-8' : 'ml-auto pl-8'
                  }`}
                >
                  <CardContent className="p-6">
                    <div className="flex items-center justify-between mb-4">
                      <div className="flex items-center gap-3">
                        <div className={`p-2 rounded-full bg-${event.color}/20`}>
                          <event.icon className={`w-5 h-5 text-${event.color}`} />
                        </div>
                        <h3 className="text-2xl font-bold text-foreground">{event.year}</h3>
                      </div>
                      <Badge variant="outline" className="border-primary text-primary animate-pulse-glow">
                        {event.badge}
                      </Badge>
                    </div>
                    
                    <h4 className="text-xl font-semibold mb-3 text-foreground drop-shadow-sm">{event.title}</h4>
                    <p className="text-foreground/70 leading-relaxed">{event.description}</p>
                  </CardContent>
                </Card>
              </div>
            ))}
          </div>
        </div>

        {/* Future teaser */}
        <div className="text-center mt-16 animate-slide-up" style={{ animationDelay: "1.2s" }}>
          <Card className="card-gradient border-primary/20 p-8 max-w-md mx-auto glow-effect">
            <div className="mb-4">
              <div className="w-12 h-12 bg-primary/20 rounded-full flex items-center justify-center mx-auto mb-4 animate-pulse-glow">
                <Zap className="w-6 h-6 text-primary" />
              </div>
              <h3 className="text-xl font-bold text-foreground">2025</h3>
            </div>
            <p className="text-foreground/70">The next chapter awaits...</p>
            <div className="mt-4 flex justify-center space-x-1">
              {[...Array(3)].map((_, i) => (
                <div 
                  key={i}
                  className="w-2 h-2 bg-primary rounded-full animate-pulse"
                  style={{ animationDelay: `${i * 0.2}s` }}
                />
              ))}
            </div>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default Timeline;