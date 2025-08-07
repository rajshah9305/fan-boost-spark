import Navigation from "@/components/Navigation";
import HeroSection from "@/components/HeroSection";
import FeaturedContent from "@/components/FeaturedContent";
import Timeline from "@/components/Timeline";
import CommunitySection from "@/components/CommunitySection";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      <main>
        <section id="home">
          <HeroSection />
        </section>
        <section id="content">
          <FeaturedContent />
        </section>
        <section id="timeline">
          <Timeline />
        </section>
        <section id="community">
          <CommunitySection />
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default Index;
