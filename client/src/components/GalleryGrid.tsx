import { useState } from "react";

interface GalleryImage {
  src: string;
  alt: string;
  category?: string;
}

interface GalleryGridProps {
  images: GalleryImage[];
  onImageClick: (index: number) => void;
}

export default function GalleryGrid({ images, onImageClick }: GalleryGridProps) {
  return (
    <div className="grid grid-cols-2 lg:grid-cols-3 gap-4 lg:gap-6">
      {images.map((image, index) => (
        <div
          key={index}
          className="group relative aspect-[3/4] overflow-hidden rounded-lg cursor-pointer hover-elevate active-elevate-2"
          onClick={() => onImageClick(index)}
          data-testid={`gallery-image-${index}`}
        >
          <img
            src={image.src}
            alt={image.alt}
            className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
            loading="lazy"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-background/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
            <div className="absolute bottom-0 left-0 right-0 p-4">
              <p className="text-sm font-medium text-foreground">{image.alt}</p>
              {image.category && (
                <p className="text-xs text-muted-foreground">{image.category}</p>
              )}
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}
