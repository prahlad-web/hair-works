import { useState } from "react";
import GalleryGrid from "@/components/GalleryGrid";
import Lightbox from "@/components/Lightbox";
import { Button } from "@/components/ui/button";
import gallery1 from "@assets/generated_images/gallery_image_elegant_waves.png";
import gallery2 from "@assets/generated_images/gallery_image_balayage_color.png";
import gallery3 from "@assets/generated_images/gallery_image_formal_updo.png";
import gallery4 from "@assets/generated_images/gallery_image_mens_styling.png";

export default function Gallery() {
  const [lightboxOpen, setLightboxOpen] = useState(false);
  const [lightboxIndex, setLightboxIndex] = useState(0);
  const [filter, setFilter] = useState("all");

  const allImages = [
    { src: gallery1, alt: "Elegant Wavy Style", category: "styling" },
    { src: gallery2, alt: "Balayage Highlights", category: "color" },
    { src: gallery3, alt: "Formal Updo", category: "events" },
    { src: gallery4, alt: "Modern Men's Cut", category: "mens" },
    { src: gallery1, alt: "Beach Waves", category: "styling" },
    { src: gallery2, alt: "Blonde Transformation", category: "color" },
    { src: gallery3, alt: "Bridal Upstyle", category: "events" },
    { src: gallery4, alt: "Textured Quiff", category: "mens" },
    { src: gallery1, alt: "Sleek Straight", category: "styling" },
  ];

  const filteredImages = filter === "all" 
    ? allImages 
    : allImages.filter(img => img.category === filter);

  const handleImageClick = (index: number) => {
    setLightboxIndex(index);
    setLightboxOpen(true);
  };

  const categories = [
    { id: "all", label: "All Work" },
    { id: "styling", label: "Styling" },
    { id: "color", label: "Color" },
    { id: "events", label: "Special Events" },
    { id: "mens", label: "Men's Cuts" },
  ];

  return (
    <div className="min-h-screen pt-24 pb-20">
      <section className="container mx-auto px-4 lg:px-8 py-12 lg:py-20">
        <div className="text-center mb-12 lg:mb-16 space-y-4">
          <h1 className="text-4xl lg:text-6xl font-bold tracking-tight">
            Our Gallery
          </h1>
          <p className="text-lg lg:text-xl text-muted-foreground max-w-2xl mx-auto">
            Explore our portfolio of transformations and artistic excellence
          </p>
        </div>

        <div className="flex flex-wrap items-center justify-center gap-3 mb-12">
          {categories.map((category) => (
            <Button
              key={category.id}
              variant={filter === category.id ? "default" : "outline"}
              onClick={() => setFilter(category.id)}
              data-testid={`filter-${category.id}`}
              className="min-w-[100px]"
            >
              {category.label}
            </Button>
          ))}
        </div>

        <GalleryGrid images={filteredImages} onImageClick={handleImageClick} />
      </section>

      {lightboxOpen && (
        <Lightbox
          images={filteredImages}
          currentIndex={lightboxIndex}
          onClose={() => setLightboxOpen(false)}
          onNext={() => setLightboxIndex((lightboxIndex + 1) % filteredImages.length)}
          onPrev={() => setLightboxIndex((lightboxIndex - 1 + filteredImages.length) % filteredImages.length)}
        />
      )}
    </div>
  );
}
