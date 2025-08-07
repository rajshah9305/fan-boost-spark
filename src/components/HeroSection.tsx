import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import heroImage from "@/assets/hero-bg.jpg";
import profileImage from "@/assets/portrait-1.png";
import { Star, Heart, Users, Calendar } from "lucide-react";

const HeroSection = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Animated background */}
      <div className="absolute inset-0 hero-gradient opacity-80" />
      <div 
        className="absolute inset-0 opacity-20 parallax-bg"
        style={{
          backgroundImage: `url(${heroImage})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundAttachment: 'fixed'
        }}
      />
      
      {/* Floating particles effect */}
      <div className="absolute inset-0">
        {[...Array(20)].map((_, i) => (
          <div
            key={i}
            className="absolute w-2 h-2 bg-primary rounded-full animate-float glow-effect"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 6}s`,
              animationDuration: `${4 + Math.random() * 4}s`
            }}
          />
        ))}
      </div>

      <div className="relative z-10 container mx-auto px-6 text-center">
        <div className="animate-slide-up">
          {/* Profile image */}
          <div className="mb-8 flex justify-center">
            <div className="relative">
              <img 
                src={profileImage}
                alt="Profile"
                className="w-32 h-32 md:w-40 md:h-40 rounded-full object-cover intense-glow animate-pulse-glow"
              />
              <div className="absolute -top-2 -right-2 bg-accent text-accent-foreground rounded-full p-2">
                <Star className="w-6 h-6 fill-current" />
              </div>
            </div>
          </div>

          {/* Hero text */}
          <h1 className="text-5xl md:text-7xl font-bold mb-6 text-foreground drop-shadow-2xl">
            Welcome to the
            <span className="bg-gradient-to-r from-primary via-electric-blue to-stellar-gold bg-clip-text text-transparent">
              {" "}Ultimate Fan{" "}
            </span>
            Experience
          </h1>
          
          <p className="text-xl md:text-2xl text-foreground/90 mb-8 max-w-3xl mx-auto drop-shadow-lg">
            Discover exclusive content, connect with fellow fans, and dive deep into 
            an extraordinary universe of passion and creativity.
          </p>

          {/* Stats */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-10 max-w-2xl mx-auto">
            {[
              { icon: Users, value: "50K+", label: "Fans" },
              { icon: Heart, value: "1M+", label: "Likes" },
              { icon: Star, value: "500+", label: "Posts" },
              { icon: Calendar, value: "3", label: "Years" }
            ].map((stat, index) => (
              <Card key={index} className="card-gradient p-4 border-primary/20 glow-effect animate-zoom-in" style={{ animationDelay: `${index * 0.1}s` }}>
                <stat.icon className="w-6 h-6 text-primary mx-auto mb-2" />
                <div className="text-2xl font-bold text-accent">{stat.value}</div>
                <div className="text-sm text-muted-foreground">{stat.label}</div>
              </Card>
            ))}
          </div>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="bg-primary hover:bg-primary/90 glow-effect animate-pulse-glow text-lg px-8 py-6">
              Explore Content
            </Button>
            <Button variant="outline" size="lg" className="border-accent text-accent hover:bg-accent hover:text-accent-foreground text-lg px-8 py-6">
              Join Community
            </Button>
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 border-primary rounded-full flex justify-center">
          <div className="w-1 h-3 bg-primary rounded-full mt-2 animate-pulse" />
        </div>
      </div>
    </section>
  );
};

export default HeroSection;