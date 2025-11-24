import Hero from "@/components/Hero";
import ServiceCard from "@/components/ServiceCard";
import MarqueeTestimonials from "@/components/MarqueeTestimonials";
import GalleryGrid from "@/components/GalleryGrid";
import { useState } from "react";
import { Link } from "wouter";
import { Button } from "@/components/ui/button";
import { Scissors, Palette, Sparkles, Users, Award, Clock } from "lucide-react";
import Lightbox from "@/components/Lightbox";
import avatar1 from "@assets/generated_images/testimonial_avatar_woman_one.png";
import avatar2 from "@assets/generated_images/testimonial_avatar_man_one.png";
import avatar3 from "@assets/generated_images/testimonial_avatar_woman_two.png";
import gallery1 from "@assets/generated_images/gallery_image_elegant_waves.png";
import gallery2 from "@assets/generated_images/gallery_image_balayage_color.png";
import gallery3 from "@assets/generated_images/gallery_image_formal_updo.png";
import gallery4 from "@assets/generated_images/gallery_image_mens_styling.png";

export default function Home() {
  const [lightboxOpen, setLightboxOpen] = useState(false);
  const [lightboxIndex, setLightboxIndex] = useState(0);

  const testimonials = [
    {
      name: "Sarah Johnson",
      image: avatar1,
      text: "Absolutely transformed my look! The stylist understood exactly what I wanted and delivered beyond expectations.",
      rating: 5
    },
    {
      name: "Michael Chen",
      image: avatar2,
      text: "Best haircut I've ever had. The attention to detail and precision is incredible. Worth every penny!",
      rating: 5
    },
    {
      name: "Emma Rodriguez",
      image: avatar3,
      text: "Such a luxurious experience from start to finish. The salon is beautiful and the staff are amazing.",
      rating: 5
    }
  ];

  const galleryImages = [
    { src: gallery1, alt: "Elegant Wavy Style", category: "Styling" },
    { src: gallery2, alt: "Balayage Color", category: "Color" },
    { src: gallery3, alt: "Formal Updo", category: "Special Events" },
    { src: gallery4, alt: "Men's Cut", category: "Men's Styling" }
  ];

  const handleImageClick = (index: number) => {
    setLightboxIndex(index);
    setLightboxOpen(true);
  };

  return (
    <div className="min-h-screen">
      <Hero />

      <section className="container mx-auto px-4 lg:px-8 py-20 lg:py-32">
        <div className="text-center mb-12 lg:mb-16 space-y-4">
          <h2 className="text-3xl lg:text-5xl font-bold tracking-tight">
            Premium Hair Services
          </h2>
          <p className="text-lg lg:text-xl text-muted-foreground max-w-2xl mx-auto">
            Expert artistry meets modern technique for exceptional results
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          <ServiceCard
            title="Precision Cut & Style"
            description="Expert cutting techniques tailored to your unique features and lifestyle."
            icon={<Scissors className="h-6 w-6" />}
            priceRange="$80-$120"
            duration="60 min"
            details="Our precision cutting service includes a thorough consultation, custom cut designed for your face shape and hair type, and professional styling with tips for at-home maintenance."
            testId="service-precision-cut"
          />
          <ServiceCard
            title="Balayage & Color"
            description="Hand-painted highlights and custom color for natural, luminous results."
            icon={<Palette className="h-6 w-6" />}
            priceRange="$180-$350"
            duration="2-3 hours"
            details="Our color specialists use premium products and advanced techniques to create stunning, natural-looking color that complements your skin tone and style."
            testId="service-balayage"
          />
          <ServiceCard
            title="Keratin Treatment"
            description="Transform frizzy hair into smooth, manageable locks that last for months."
            icon={<Sparkles className="h-6 w-6" />}
            priceRange="$250-$400"
            duration="2-3 hours"
            details="Professional keratin smoothing treatment that reduces frizz, adds shine, and makes styling easier. Results last 3-5 months with proper care."
            testId="service-keratin"
          />
        </div>

        <div className="text-center mt-12">
          <Link href="/services">
            <a data-testid="link-view-all-services">
              <Button size="lg" variant="outline">View All Services</Button>
            </a>
          </Link>
        </div>
      </section>

      <section className="bg-gradient-to-br from-primary/5 via-background to-primary/5 py-20 lg:py-32">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="text-center mb-12 lg:mb-16 space-y-4">
            <h2 className="text-3xl lg:text-5xl font-bold tracking-tight">
              Why Choose HairWorks
            </h2>
            <p className="text-lg lg:text-xl text-muted-foreground max-w-2xl mx-auto">
              Experience the difference of true craftsmanship
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 lg:gap-12">
            <div className="text-center space-y-4 p-6 rounded-lg hover-elevate" data-testid="feature-expertise">
              <div className="inline-flex p-4 rounded-full bg-primary/10">
                <Award className="h-8 w-8 text-primary" />
              </div>
              <h3 className="text-xl lg:text-2xl font-bold">Expert Stylists</h3>
              <p className="text-muted-foreground leading-relaxed">
                Our team of certified professionals brings years of experience and ongoing education in the latest techniques.
              </p>
            </div>
            <div className="text-center space-y-4 p-6 rounded-lg hover-elevate" data-testid="feature-premium">
              <div className="inline-flex p-4 rounded-full bg-primary/10">
                <Sparkles className="h-8 w-8 text-primary" />
              </div>
              <h3 className="text-xl lg:text-2xl font-bold">Premium Products</h3>
              <p className="text-muted-foreground leading-relaxed">
                We use only the finest professional products to ensure exceptional results and hair health.
              </p>
            </div>
            <div className="text-center space-y-4 p-6 rounded-lg hover-elevate" data-testid="feature-personalized">
              <div className="inline-flex p-4 rounded-full bg-primary/10">
                <Users className="h-8 w-8 text-primary" />
              </div>
              <h3 className="text-xl lg:text-2xl font-bold">Personalized Service</h3>
              <p className="text-muted-foreground leading-relaxed">
                Every client receives individual attention and a customized approach to achieve their unique vision.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="container mx-auto px-4 lg:px-8 py-20 lg:py-32">
        <div className="text-center mb-12 lg:mb-16 space-y-4">
          <h2 className="text-3xl lg:text-5xl font-bold tracking-tight">
            Client Testimonials
          </h2>
          <p className="text-lg lg:text-xl text-muted-foreground max-w-2xl mx-auto">
            Hear what our clients have to say
          </p>
        </div>

        <MarqueeTestimonials testimonials={testimonials} />
      </section>

      <section className="container mx-auto px-4 lg:px-8 py-20 lg:py-32">
        <div className="text-center mb-12 lg:mb-16 space-y-4">
          <h2 className="text-3xl lg:text-5xl font-bold tracking-tight">
            Our Work
          </h2>
          <p className="text-lg lg:text-xl text-muted-foreground max-w-2xl mx-auto">
            Explore our portfolio of transformations
          </p>
        </div>

        <GalleryGrid images={galleryImages} onImageClick={handleImageClick} />

        <div className="text-center mt-12">
          <Link href="/gallery">
            <a data-testid="link-view-full-gallery">
              <Button size="lg" variant="outline">View Full Gallery</Button>
            </a>
          </Link>
        </div>
      </section>

      <section className="bg-gradient-to-br from-primary/10 via-background to-primary/5 py-20 lg:py-32">
        <div className="container mx-auto px-4 lg:px-8 text-center space-y-8">
          <h2 className="text-3xl lg:text-5xl font-bold tracking-tight">
            Ready to Transform Your Look?
          </h2>
          <p className="text-lg lg:text-xl text-muted-foreground max-w-2xl mx-auto">
            Book your appointment today and experience the HairWorks difference
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-4">
            <Link href="/book">
              <a data-testid="button-cta-book">
                <Button size="lg" className="px-8">Book Now</Button>
              </a>
            </Link>
            <Link href="/contact">
              <a data-testid="button-cta-contact">
                <Button size="lg" variant="outline" className="px-8">Contact Us</Button>
              </a>
            </Link>
          </div>
        </div>
      </section>

      {lightboxOpen && (
        <Lightbox
          images={galleryImages}
          currentIndex={lightboxIndex}
          onClose={() => setLightboxOpen(false)}
          onNext={() => setLightboxIndex((lightboxIndex + 1) % galleryImages.length)}
          onPrev={() => setLightboxIndex((lightboxIndex - 1 + galleryImages.length) % galleryImages.length)}
        />
      )}
    </div>
  );
}
