import { Award, Heart, Sparkles, Users } from "lucide-react";
import { Card } from "@/components/ui/card";

export default function About() {
  return (
    <div className="min-h-screen pt-24 pb-20">
      <section className="container mx-auto px-4 lg:px-8 py-12 lg:py-20">
        <div className="text-center mb-12 lg:mb-16 space-y-4">
          <h1 className="text-4xl lg:text-6xl font-bold tracking-tight">
            About HairWorks
          </h1>
          <p className="text-lg lg:text-xl text-muted-foreground max-w-2xl mx-auto">
            Where artistry meets expertise in the heart of Toronto
          </p>
        </div>

        <div className="max-w-4xl mx-auto space-y-12">
          <div className="prose prose-lg dark:prose-invert mx-auto">
            <p className="text-lg leading-relaxed text-muted-foreground">
              Founded over a decade ago, HairWorks Salon has been Toronto's premier destination for luxury hair services. Our philosophy is simple: every client deserves a personalized experience that brings out their unique beauty and confidence.
            </p>
            <p className="text-lg leading-relaxed text-muted-foreground">
              We combine traditional craftsmanship with cutting-edge techniques, using only the finest professional products to ensure exceptional results. Our team of certified stylists is passionate about continuous education, staying ahead of the latest trends and innovations in hair design.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 pt-8">
            <Card className="p-8 space-y-4 hover-elevate" data-testid="value-excellence">
              <div className="inline-flex p-3 rounded-lg bg-primary/10">
                <Award className="h-8 w-8 text-primary" />
              </div>
              <h3 className="text-2xl font-bold">Excellence</h3>
              <p className="text-muted-foreground leading-relaxed">
                We're committed to delivering the highest quality service, using premium products and advanced techniques to achieve outstanding results.
              </p>
            </Card>

            <Card className="p-8 space-y-4 hover-elevate" data-testid="value-passion">
              <div className="inline-flex p-3 rounded-lg bg-primary/10">
                <Heart className="h-8 w-8 text-primary" />
              </div>
              <h3 className="text-2xl font-bold">Passion</h3>
              <p className="text-muted-foreground leading-relaxed">
                Our stylists are artists who love what they do. Their enthusiasm and creativity shine through in every service.
              </p>
            </Card>

            <Card className="p-8 space-y-4 hover-elevate" data-testid="value-innovation">
              <div className="inline-flex p-3 rounded-lg bg-primary/10">
                <Sparkles className="h-8 w-8 text-primary" />
              </div>
              <h3 className="text-2xl font-bold">Innovation</h3>
              <p className="text-muted-foreground leading-relaxed">
                We stay at the forefront of industry trends, continuously learning and adopting the latest techniques and technologies.
              </p>
            </Card>

            <Card className="p-8 space-y-4 hover-elevate" data-testid="value-community">
              <div className="inline-flex p-3 rounded-lg bg-primary/10">
                <Users className="h-8 w-8 text-primary" />
              </div>
              <h3 className="text-2xl font-bold">Community</h3>
              <p className="text-muted-foreground leading-relaxed">
                We've built lasting relationships with our clients, creating a welcoming space where everyone feels valued and beautiful.
              </p>
            </Card>
          </div>
        </div>
      </section>

      <section className="bg-gradient-to-br from-primary/5 via-background to-primary/5 py-20 lg:py-32 mt-12">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl lg:text-5xl font-bold tracking-tight text-center mb-12">
              Our Journey
            </h2>

            <div className="space-y-12">
              <div className="relative pl-8 border-l-2 border-primary/20" data-testid="timeline-2014">
                <div className="absolute -left-3 top-0 w-6 h-6 rounded-full bg-primary" />
                <div className="space-y-2">
                  <div className="text-2xl font-bold text-primary">2014</div>
                  <h3 className="text-xl font-semibold">The Beginning</h3>
                  <p className="text-muted-foreground leading-relaxed">
                    HairWorks Salon opened its doors in downtown Toronto with a vision to create a premium, personalized hair experience.
                  </p>
                </div>
              </div>

              <div className="relative pl-8 border-l-2 border-primary/20" data-testid="timeline-2017">
                <div className="absolute -left-3 top-0 w-6 h-6 rounded-full bg-primary" />
                <div className="space-y-2">
                  <div className="text-2xl font-bold text-primary">2017</div>
                  <h3 className="text-xl font-semibold">Expansion & Recognition</h3>
                  <p className="text-muted-foreground leading-relaxed">
                    Expanded our team to include specialized color and styling experts. Received Toronto's "Best Salon" award.
                  </p>
                </div>
              </div>

              <div className="relative pl-8 border-l-2 border-primary/20" data-testid="timeline-2020">
                <div className="absolute -left-3 top-0 w-6 h-6 rounded-full bg-primary" />
                <div className="space-y-2">
                  <div className="text-2xl font-bold text-primary">2020</div>
                  <h3 className="text-xl font-semibold">Innovation & Adaptation</h3>
                  <p className="text-muted-foreground leading-relaxed">
                    Introduced advanced booking systems and enhanced safety protocols while maintaining our commitment to excellence.
                  </p>
                </div>
              </div>

              <div className="relative pl-8 border-l-2 border-primary/20" data-testid="timeline-2024">
                <div className="absolute -left-3 top-0 w-6 h-6 rounded-full bg-primary" />
                <div className="space-y-2">
                  <div className="text-2xl font-bold text-primary">2024</div>
                  <h3 className="text-xl font-semibold">Continuing Excellence</h3>
                  <p className="text-muted-foreground leading-relaxed">
                    Celebrating 10 years of serving over 5,000 satisfied clients with a 98% satisfaction rate.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
