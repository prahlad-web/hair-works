import GalleryGrid from "../GalleryGrid";
import image1 from "@assets/generated_images/gallery_image_elegant_waves.png";
import image2 from "@assets/generated_images/gallery_image_balayage_color.png";
import image3 from "@assets/generated_images/gallery_image_formal_updo.png";

export default function GalleryGridExample() {
  const images = [
    { src: image1, alt: "Elegant Waves", category: "Styling" },
    { src: image2, alt: "Balayage Highlights", category: "Color" },
    { src: image3, alt: "Formal Updo", category: "Special Events" }
  ];

  return (
    <div className="p-8">
      <GalleryGrid 
        images={images} 
        onImageClick={(index) => console.log("Image clicked:", index)} 
      />
    </div>
  );
}
