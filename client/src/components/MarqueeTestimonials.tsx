import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar";
import { Star } from "lucide-react";

interface Testimonial {
  name: string;
  image: string;
  text: string;
  rating: number;
}

interface MarqueeTestimonialsProps {
  testimonials: Testimonial[];
}

export default function MarqueeTestimonials({ testimonials }: MarqueeTestimonialsProps) {
  const doubledTestimonials = [...testimonials, ...testimonials];

  return (
    <div className="relative w-full overflow-hidden py-12">
      <div className="flex gap-6 animate-marquee hover:pause-animation">
        {doubledTestimonials.map((testimonial, index) => (
          <div
            key={index}
            className="flex-shrink-0 w-[350px] lg:w-[400px] bg-card/50 backdrop-blur-sm border border-card-border rounded-lg p-6 hover-elevate"
            data-testid={`testimonial-${index}`}
          >
            <div className="flex items-center gap-4 mb-4">
              <Avatar className="h-12 w-12">
                <AvatarImage src={testimonial.image} alt={testimonial.name} />
                <AvatarFallback>{testimonial.name.charAt(0)}</AvatarFallback>
              </Avatar>
              <div>
                <div className="font-semibold">{testimonial.name}</div>
                <div className="flex gap-1">
                  {Array.from({ length: testimonial.rating }).map((_, i) => (
                    <Star key={i} className="h-4 w-4 fill-primary text-primary" />
                  ))}
                </div>
              </div>
            </div>
            <p className="text-muted-foreground leading-relaxed">"{testimonial.text}"</p>
          </div>
        ))}
      </div>

      <style>{`
        @keyframes marquee {
          0% {
            transform: translateX(0);
          }
          100% {
            transform: translateX(-50%);
          }
        }
        .animate-marquee {
          animation: marquee 40s linear infinite;
          will-change: transform;
        }
        .pause-animation:hover {
          animation-play-state: paused;
        }
      `}</style>
    </div>
  );
}
