import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { MessageCircle, Users, Share2, Heart, Star, TrendingUp } from "lucide-react";

const CommunitySection = () => {
  const communityStats = [
    { icon: Users, value: "50,000+", label: "Active Members", color: "electric-blue" },
    { icon: MessageCircle, value: "1M+", label: "Messages", color: "cosmic-purple" },
    { icon: Heart, value: "5M+", label: "Reactions", color: "destructive" },
    { icon: Share2, value: "100K+", label: "Shares", color: "stellar-gold" }
  ];

  const featuredPosts = [
    {
      id: 1,
      author: "CosmicExplorer",
      content: "Just witnessed the most incredible performance! The energy was absolutely electric ⚡",
      likes: 1234,
      replies: 89,
      time: "2 hours ago",
      badge: "Top Fan"
    },
    {
      id: 2,
      author: "StellarDreamer",
      content: "Can't believe how far we've come as a community. Three years of pure magic! ✨",
      likes: 2156,
      replies: 156,
      time: "4 hours ago",
      badge: "Veteran"
    },
    {
      id: 3,
      author: "ElectricSoul",
      content: "The new content dropped and I'm speechless. This is why I'm such a devoted fan! 🌟",
      likes: 987,
      replies: 67,
      time: "6 hours ago",
      badge: "Rising Star"
    }
  ];

  return (
    <section className="py-20 px-6">
      <div className="container mx-auto">
        <div className="text-center mb-16 animate-slide-up">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 text-glow">
            Join the
            <span className="bg-gradient-to-r from-electric-blue to-stellar-gold bg-clip-text text-transparent">
              {" "}Community
            </span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Connect with passionate fans worldwide. Share experiences, create memories, and be part of something extraordinary.
          </p>
        </div>

        {/* Community Stats */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-16">
          {communityStats.map((stat, index) => (
            <Card 
              key={index}
              className="card-gradient border-primary/20 text-center p-6 group hover:scale-105 transition-all duration-300 glow-effect animate-zoom-in"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className={`w-12 h-12 bg-${stat.color}/20 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:animate-pulse-glow`}>
                <stat.icon className={`w-6 h-6 text-${stat.color}`} />
              </div>
              <div className="text-2xl md:text-3xl font-bold text-accent mb-2">{stat.value}</div>
              <div className="text-sm text-muted-foreground">{stat.label}</div>
            </Card>
          ))}
        </div>

        {/* Featured Posts */}
        <div className="mb-16">
          <h3 className="text-2xl font-bold text-center mb-8 flex items-center justify-center gap-2">
            <TrendingUp className="w-6 h-6 text-primary" />
            Trending in Community
          </h3>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {featuredPosts.map((post, index) => (
              <Card 
                key={post.id}
                className="card-gradient border-primary/20 hover:border-primary/40 transition-all duration-300 glow-effect animate-slide-up"
                style={{ animationDelay: `${index * 0.2}s` }}
              >
                <CardHeader className="pb-3">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-3">
                      <div className="w-10 h-10 bg-primary/20 rounded-full flex items-center justify-center">
                        <Star className="w-5 h-5 text-primary" />
                      </div>
                      <div>
                        <CardTitle className="text-sm text-accent">{post.author}</CardTitle>
                        <p className="text-xs text-muted-foreground">{post.time}</p>
                      </div>
                    </div>
                    <Badge variant="outline" className="border-accent text-accent text-xs">
                      {post.badge}
                    </Badge>
                  </div>
                </CardHeader>
                
                <CardContent>
                  <p className="text-sm mb-4 leading-relaxed">{post.content}</p>
                  
                  <div className="flex items-center justify-between text-xs text-muted-foreground">
                    <div className="flex items-center gap-4">
                      <div className="flex items-center gap-1 hover:text-destructive transition-colors cursor-pointer">
                        <Heart className="w-4 h-4" />
                        {post.likes.toLocaleString()}
                      </div>
                      <div className="flex items-center gap-1 hover:text-primary transition-colors cursor-pointer">
                        <MessageCircle className="w-4 h-4" />
                        {post.replies}
                      </div>
                    </div>
                    <Button size="sm" variant="ghost" className="h-6 px-2 text-xs">
                      Reply
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Join CTA */}
        <Card className="card-gradient border-primary/20 p-8 text-center glow-effect animate-slide-up" style={{ animationDelay: "0.6s" }}>
          <div className="mb-6">
            <div className="w-16 h-16 bg-primary/20 rounded-full flex items-center justify-center mx-auto mb-4 animate-pulse-glow">
              <Users className="w-8 h-8 text-primary" />
            </div>
            <h3 className="text-2xl font-bold mb-2 text-glow">Ready to Join the Family?</h3>
            <p className="text-muted-foreground max-w-md mx-auto">
              Become part of our incredible community and unlock exclusive content, early access, and special perks.
            </p>
          </div>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="bg-primary hover:bg-primary/90 glow-effect">
              <Users className="w-5 h-5 mr-2" />
              Join Community
            </Button>
            <Button size="lg" variant="outline" className="border-accent text-accent hover:bg-accent hover:text-accent-foreground">
              <Star className="w-5 h-5 mr-2" />
              Follow Updates
            </Button>
          </div>
        </Card>
      </div>
    </section>
  );
};

export default CommunitySection;