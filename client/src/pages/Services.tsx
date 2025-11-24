import ServiceCard from "@/components/ServiceCard";
import { Scissors, Palette, Sparkles, Heart, Zap, User } from "lucide-react";

export default function Services() {
  return (
    <div className="min-h-screen pt-24 pb-20">
      <section className="container mx-auto px-4 lg:px-8 py-12 lg:py-20">
        <div className="text-center mb-12 lg:mb-16 space-y-4">
          <h1 className="text-4xl lg:text-6xl font-bold tracking-tight">
            Our Services
          </h1>
          <p className="text-lg lg:text-xl text-muted-foreground max-w-2xl mx-auto">
            Comprehensive hair services tailored to your unique style and needs
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          <ServiceCard
            title="Precision Cut & Style"
            description="Expert cutting techniques tailored to your unique features and lifestyle."
            icon={<Scissors className="h-6 w-6" />}
            priceRange="$80-$120"
            duration="60 min"
            details="Our precision cutting service includes a thorough consultation to understand your lifestyle and preferences, a custom cut designed specifically for your face shape and hair type, professional styling, and personalized tips for at-home maintenance. We use advanced cutting techniques to create shapes that enhance your natural features and are easy to maintain."
            testId="service-precision-cut"
          />
          
          <ServiceCard
            title="Balayage & Color"
            description="Hand-painted highlights and custom color for natural, luminous results."
            icon={<Palette className="h-6 w-6" />}
            priceRange="$180-$350"
            duration="2-3 hours"
            details="Our color specialists are trained in the latest balayage and color techniques. Using premium, salon-grade products, we create stunning, natural-looking color that complements your skin tone and personal style. Each color service includes a detailed consultation, strand testing when needed, custom color formulation, and aftercare instructions to keep your color looking vibrant."
            testId="service-balayage"
          />
          
          <ServiceCard
            title="Keratin Treatment"
            description="Transform frizzy hair into smooth, manageable locks that last for months."
            icon={<Sparkles className="h-6 w-6" />}
            priceRange="$250-$400"
            duration="2-3 hours"
            details="Our professional keratin smoothing treatment reduces frizz by up to 95%, adds incredible shine, and makes daily styling easier. The treatment penetrates deep into the hair shaft to rebuild and strengthen from within. Results typically last 3-5 months with proper care, and we provide detailed maintenance instructions to help you get the most from your treatment."
            testId="service-keratin"
          />
          
          <ServiceCard
            title="Special Event Styling"
            description="Elegant updos and styling for weddings, proms, and special occasions."
            icon={<Heart className="h-6 w-6" />}
            priceRange="$120-$200"
            duration="90 min"
            details="Make your special day even more memorable with our expert event styling services. We offer trial sessions to perfect your look, on-location services for weddings, and a wide range of styles from classic elegance to modern trends. Our stylists are experienced in creating long-lasting styles that photograph beautifully and stay perfect throughout your event."
            testId="service-event-styling"
          />
          
          <ServiceCard
            title="Men's Cut & Style"
            description="Contemporary cuts and grooming for the modern gentleman."
            icon={<User className="h-6 w-6" />}
            priceRange="$60-$90"
            duration="45 min"
            details="Our men's services combine traditional barbering techniques with modern styling. Each service includes a consultation, precision cutting, hot towel treatment, and styling instruction. We specialize in fades, textured cuts, classic styles, and beard grooming to help you look sharp and feel confident."
            testId="service-mens-cut"
          />
          
          <ServiceCard
            title="Hair Treatments"
            description="Deep conditioning, repair, and specialty treatments for optimal hair health."
            icon={<Zap className="h-6 w-6" />}
            priceRange="$50-$150"
            duration="30-60 min"
            details="Revitalize your hair with our range of professional treatments. From deep conditioning masks to protein treatments and bond-building services, we offer solutions for every hair concern. Our treatments use high-quality products that penetrate deeply to repair damage, add moisture, and restore your hair's natural strength and shine."
            testId="service-treatments"
          />
        </div>
      </section>

      <section className="bg-gradient-to-br from-primary/5 via-background to-primary/5 py-20 lg:py-32 mt-12">
        <div className="container mx-auto px-4 lg:px-8 text-center space-y-8">
          <h2 className="text-3xl lg:text-5xl font-bold tracking-tight">
            Not Sure Which Service?
          </h2>
          <p className="text-lg lg:text-xl text-muted-foreground max-w-2xl mx-auto">
            Book a complimentary consultation and let our experts guide you
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-4">
            <a href="/book" data-testid="button-book-consultation">
              <button className="inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0 bg-primary text-primary-foreground hover-elevate active-elevate-2 h-10 px-8 min-h-10">
                Book Consultation
              </button>
            </a>
            <a href="tel:+14165550199" data-testid="button-call-services">
              <button className="inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0 border border-input bg-background hover-elevate active-elevate-2 h-10 px-8 min-h-10">
                Call Us
              </button>
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}
