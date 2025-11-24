import MarqueeTestimonials from "../MarqueeTestimonials";
import avatar1 from "@assets/generated_images/testimonial_avatar_woman_one.png";
import avatar2 from "@assets/generated_images/testimonial_avatar_man_one.png";
import avatar3 from "@assets/generated_images/testimonial_avatar_woman_two.png";

export default function MarqueeTestimonialsExample() {
  const testimonials = [
    {
      name: "Sarah Johnson",
      image: avatar1,
      text: "Absolutely transformed my look! The stylist understood exactly what I wanted.",
      rating: 5
    },
    {
      name: "Michael Chen",
      image: avatar2,
      text: "Best haircut I've ever had. The attention to detail is incredible.",
      rating: 5
    },
    {
      name: "Emma Rodriguez",
      image: avatar3,
      text: "Such a luxurious experience from start to finish. Highly recommend!",
      rating: 5
    }
  ];

  return <MarqueeTestimonials testimonials={testimonials} />;
}
