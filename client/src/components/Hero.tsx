import { Link } from "wouter";
import { ArrowRight, Sparkles } from "lucide-react";
import { Button } from "@/components/ui/button";
import heroFallback from "@assets/generated_images/hero_fallback_salon_interior.png";

export default function Hero() {
  return (
    <section className="relative min-h-[100svh] flex items-center justify-center overflow-hidden">
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{ backgroundImage: `url(${heroFallback})` }}
      >
        <div className="absolute inset-0 bg-gradient-to-br from-background/95 via-background/80 to-background/60" />
      </div>

      <div className="absolute inset-0 opacity-30">
        <div className="absolute inset-0 bg-gradient-to-br from-primary/20 via-transparent to-primary/10 animate-pulse" style={{ animationDuration: '4s' }} />
      </div>

      <div className="relative z-10 container mx-auto px-4 lg:px-8 py-20 lg:py-32">
        <div className="max-w-4xl mx-auto text-center space-y-8">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 border border-primary/20 backdrop-blur-sm mb-4">
            <Sparkles className="h-4 w-4 text-primary" />
            <span className="text-sm font-medium text-primary">Premium Hair Artistry</span>
          </div>

          <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold tracking-tight leading-tight">
            <span className="block mb-2">HairWorks Salon</span>
            <span className="block text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-serif italic text-primary">
              Bespoke Hair. Elevated Experience.
            </span>
          </h1>

          <p className="text-lg sm:text-xl lg:text-2xl text-muted-foreground max-w-2xl mx-auto leading-relaxed">
            Precision styling, modern craft — book your transformation.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-6">
            <Link href="/book">
              <a data-testid="button-hero-book">
                <Button size="lg" className="text-base px-8 gap-2 group">
                  Book an Experience
                  <ArrowRight className="h-4 w-4 group-hover:translate-x-1 transition-transform" />
                </Button>
              </a>
            </Link>
            <Link href="/gallery">
              <a data-testid="button-hero-gallery">
                <Button
                  size="lg"
                  variant="outline"
                  className="text-base px-8 bg-background/50 backdrop-blur-sm hover:bg-background/80"
                >
                  View Gallery
                </Button>
              </a>
            </Link>
          </div>

          <div className="grid grid-cols-3 gap-8 pt-12 max-w-2xl mx-auto">
            <div className="text-center space-y-1">
              <div className="text-3xl lg:text-4xl font-bold text-primary">10+</div>
              <div className="text-sm text-muted-foreground">Years</div>
            </div>
            <div className="text-center space-y-1">
              <div className="text-3xl lg:text-4xl font-bold text-primary">5K+</div>
              <div className="text-sm text-muted-foreground">Clients</div>
            </div>
            <div className="text-center space-y-1">
              <div className="text-3xl lg:text-4xl font-bold text-primary">98%</div>
              <div className="text-sm text-muted-foreground">Satisfaction</div>
            </div>
          </div>
        </div>
      </div>

      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-background to-transparent" />
    </section>
  );
}
