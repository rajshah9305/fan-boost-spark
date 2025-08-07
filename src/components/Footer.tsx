import { Button } from "@/components/ui/button";
import { Star, Heart, Twitter, Instagram, Youtube, Mail } from "lucide-react";

const Footer = () => {
  const socialLinks = [
    { icon: Twitter, href: "#", label: "Twitter" },
    { icon: Instagram, href: "#", label: "Instagram" },
    { icon: Youtube, href: "#", label: "YouTube" },
    { icon: Mail, href: "#", label: "Email" }
  ];

  const footerLinks = {
    "Quick Links": ["Home", "Content", "Timeline", "Community"],
    "Support": ["Help Center", "Contact Us", "Privacy Policy", "Terms of Service"],
    "Connect": ["Newsletter", "Events", "Merchandise", "Fan Submissions"]
  };

  return (
    <footer className="bg-secondary/20 border-t border-primary/20 py-16 px-6">
      <div className="container mx-auto">
        {/* Main Footer Content */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          {/* Brand Section */}
          <div className="lg:col-span-1">
            <div className="flex items-center gap-2 mb-6">
              <div className="w-10 h-10 bg-primary rounded-full flex items-center justify-center glow-effect animate-pulse-glow">
                <Star className="w-6 h-6 text-primary-foreground fill-current" />
              </div>
              <span className="text-xl font-bold text-glow">FanVerse</span>
            </div>
            <p className="text-muted-foreground mb-6 leading-relaxed">
              The ultimate destination for passionate fans. Join our community and experience the extraordinary.
            </p>
            <div className="flex items-center gap-4">
              {socialLinks.map((social) => (
                <Button
                  key={social.label}
                  variant="outline"
                  size="icon"
                  className="border-primary/40 hover:bg-primary hover:text-primary-foreground glow-effect"
                  asChild
                >
                  <a href={social.href} aria-label={social.label}>
                    <social.icon className="w-4 h-4" />
                  </a>
                </Button>
              ))}
            </div>
          </div>

          {/* Footer Links */}
          {Object.entries(footerLinks).map(([category, links]) => (
            <div key={category}>
              <h3 className="text-lg font-semibold mb-4 text-accent">{category}</h3>
              <ul className="space-y-3">
                {links.map((link) => (
                  <li key={link}>
                    <a
                      href="#"
                      className="text-muted-foreground hover:text-primary transition-colors duration-300"
                    >
                      {link}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Newsletter Section */}
        <div className="border-t border-primary/20 pt-12 mb-8">
          <div className="text-center max-w-2xl mx-auto">
            <h3 className="text-2xl font-bold mb-4 text-glow">Stay Connected</h3>
            <p className="text-muted-foreground mb-6">
              Get exclusive updates, early access to content, and special fan perks delivered to your inbox.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
              <input
                type="email"
                placeholder="Enter your email"
                className="flex-1 px-4 py-3 bg-background border border-primary/20 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary"
              />
              <Button className="bg-primary hover:bg-primary/90 glow-effect px-8">
                Subscribe
              </Button>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-primary/20 pt-8 flex flex-col md:flex-row items-center justify-between gap-4">
          <div className="text-muted-foreground text-sm">
            © 2024 FanVerse. Made with{" "}
            <Heart className="w-4 h-4 inline text-destructive fill-current animate-pulse" />{" "}
            for passionate fans everywhere.
          </div>
          
          <div className="flex items-center gap-6 text-sm text-muted-foreground">
            <a href="#" className="hover:text-primary transition-colors">Privacy</a>
            <a href="#" className="hover:text-primary transition-colors">Terms</a>
            <a href="#" className="hover:text-primary transition-colors">Cookies</a>
          </div>
        </div>

        {/* Decorative Elements */}
        <div className="absolute bottom-0 left-0 w-full h-1 bg-gradient-to-r from-primary via-electric-blue to-stellar-gold opacity-60" />
      </div>
    </footer>
  );
};

export default Footer;