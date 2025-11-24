import ServiceCard from "../ServiceCard";
import { Scissors } from "lucide-react";

export default function ServiceCardExample() {
  return (
    <div className="p-8 max-w-md">
      <ServiceCard
        title="Precision Cut & Style"
        description="Expert cutting techniques tailored to your unique features and lifestyle."
        icon={<Scissors className="h-6 w-6" />}
        priceRange="$80-$120"
        duration="60 min"
        details="Our precision cutting service includes a thorough consultation, custom cut, and professional styling. We use advanced techniques to create shapes that enhance your natural features."
        testId="service-card-example"
      />
    </div>
  );
}
