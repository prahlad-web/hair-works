import { useState } from "react";
import Lightbox from "../Lightbox";
import { Button } from "@/components/ui/button";
import image1 from "@assets/generated_images/gallery_image_elegant_waves.png";
import image2 from "@assets/generated_images/gallery_image_balayage_color.png";

export default function LightboxExample() {
  const [isOpen, setIsOpen] = useState(false);
  const [currentIndex, setCurrentIndex] = useState(0);

  const images = [
    { src: image1, alt: "Elegant Waves" },
    { src: image2, alt: "Balayage Highlights" }
  ];

  if (!isOpen) {
    return (
      <div className="p-8">
        <Button onClick={() => setIsOpen(true)} data-testid="button-open-lightbox">
          Open Lightbox
        </Button>
      </div>
    );
  }

  return (
    <Lightbox
      images={images}
      currentIndex={currentIndex}
      onClose={() => setIsOpen(false)}
      onNext={() => setCurrentIndex((currentIndex + 1) % images.length)}
      onPrev={() => setCurrentIndex((currentIndex - 1 + images.length) % images.length)}
    />
  );
}
