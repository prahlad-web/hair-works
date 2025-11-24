import { useEffect } from "react";
import { X, ChevronLeft, ChevronRight } from "lucide-react";
import { Button } from "@/components/ui/button";

interface LightboxProps {
  images: { src: string; alt: string }[];
  currentIndex: number;
  onClose: () => void;
  onNext: () => void;
  onPrev: () => void;
}

export default function Lightbox({ images, currentIndex, onClose, onNext, onPrev }: LightboxProps) {
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
      if (e.key === "ArrowLeft") onPrev();
      if (e.key === "ArrowRight") onNext();
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [onClose, onNext, onPrev]);

  const current = images[currentIndex];

  return (
    <div className="fixed inset-0 z-50 bg-background/95 backdrop-blur-sm flex items-center justify-center" data-testid="lightbox">
      <Button
        variant="ghost"
        size="icon"
        className="absolute top-4 right-4 z-10"
        onClick={onClose}
        data-testid="button-lightbox-close"
        aria-label="Close lightbox"
      >
        <X className="h-6 w-6" />
      </Button>

      <Button
        variant="ghost"
        size="icon"
        className="absolute left-4 top-1/2 -translate-y-1/2 z-10"
        onClick={onPrev}
        data-testid="button-lightbox-prev"
        aria-label="Previous image"
      >
        <ChevronLeft className="h-8 w-8" />
      </Button>

      <Button
        variant="ghost"
        size="icon"
        className="absolute right-4 top-1/2 -translate-y-1/2 z-10"
        onClick={onNext}
        data-testid="button-lightbox-next"
        aria-label="Next image"
      >
        <ChevronRight className="h-8 w-8" />
      </Button>

      <div className="max-w-6xl max-h-[90vh] w-full px-4">
        <img
          src={current.src}
          alt={current.alt}
          className="w-full h-full object-contain rounded-lg"
          data-testid="lightbox-image"
        />
        <div className="text-center mt-4">
          <p className="text-lg font-medium">{current.alt}</p>
          <p className="text-sm text-muted-foreground">
            {currentIndex + 1} / {images.length}
          </p>
        </div>
      </div>
    </div>
  );
}
