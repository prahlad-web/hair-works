import ContactForm from "@/components/ContactForm";
import { Card } from "@/components/ui/card";
import { Phone, Mail, MapPin, Clock } from "lucide-react";
import { SiWhatsapp, SiInstagram, SiFacebook } from "react-icons/si";
import { Button } from "@/components/ui/button";

export default function Contact() {
  return (
    <div className="min-h-screen pt-24 pb-20">
      <section className="container mx-auto px-4 lg:px-8 py-12 lg:py-20">
        <div className="text-center mb-12 lg:mb-16 space-y-4">
          <h1 className="text-4xl lg:text-6xl font-bold tracking-tight">
            Get In Touch
          </h1>
          <p className="text-lg lg:text-xl text-muted-foreground max-w-2xl mx-auto">
            We'd love to hear from you. Reach out and let's create something beautiful together.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 max-w-6xl mx-auto">
          <div className="space-y-8">
            <Card className="p-6 lg:p-8">
              <ContactForm />
            </Card>
          </div>

          <div className="space-y-6">
            <Card className="p-6 space-y-4" data-testid="contact-info-phone">
              <div className="flex items-center gap-3">
                <div className="p-3 rounded-lg bg-primary/10">
                  <Phone className="h-6 w-6 text-primary" />
                </div>
                <div>
                  <h3 className="font-semibold text-lg">Phone</h3>
                  <a
                    href="tel:+14165550199"
                    className="text-muted-foreground hover:text-primary transition-colors"
                    data-testid="link-phone"
                  >
                    +1 (416) 555-0199
                  </a>
                </div>
              </div>
            </Card>

            <Card className="p-6 space-y-4" data-testid="contact-info-email">
              <div className="flex items-center gap-3">
                <div className="p-3 rounded-lg bg-primary/10">
                  <Mail className="h-6 w-6 text-primary" />
                </div>
                <div>
                  <h3 className="font-semibold text-lg">Email</h3>
                  <a
                    href="mailto:info@hairworkssalon.ca"
                    className="text-muted-foreground hover:text-primary transition-colors"
                    data-testid="link-email"
                  >
                    info@hairworkssalon.ca
                  </a>
                </div>
              </div>
            </Card>

            <Card className="p-6 space-y-4" data-testid="contact-info-address">
              <div className="flex items-start gap-3">
                <div className="p-3 rounded-lg bg-primary/10">
                  <MapPin className="h-6 w-6 text-primary" />
                </div>
                <div>
                  <h3 className="font-semibold text-lg">Location</h3>
                  <p className="text-muted-foreground">
                    123 Queen Street West<br />
                    Toronto, ON M5H 2M9<br />
                    Canada
                  </p>
                </div>
              </div>
            </Card>

            <Card className="p-6 space-y-4" data-testid="contact-info-hours">
              <div className="flex items-start gap-3">
                <div className="p-3 rounded-lg bg-primary/10">
                  <Clock className="h-6 w-6 text-primary" />
                </div>
                <div className="flex-1">
                  <h3 className="font-semibold text-lg mb-3">Hours</h3>
                  <div className="space-y-2 text-sm">
                    <div className="flex justify-between">
                      <span className="text-muted-foreground">Monday - Friday</span>
                      <span className="font-medium">10:00 AM - 8:00 PM</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-muted-foreground">Saturday</span>
                      <span className="font-medium">9:00 AM - 6:00 PM</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-muted-foreground">Sunday</span>
                      <span className="font-medium">Closed</span>
                    </div>
                  </div>
                </div>
              </div>
            </Card>

            <Card className="p-6 space-y-4" data-testid="contact-info-social">
              <h3 className="font-semibold text-lg">Follow Us</h3>
              <div className="flex gap-2">
                <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" data-testid="link-contact-instagram">
                  <Button variant="outline" size="icon">
                    <SiInstagram className="h-5 w-5" />
                  </Button>
                </a>
                <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" data-testid="link-contact-facebook">
                  <Button variant="outline" size="icon">
                    <SiFacebook className="h-5 w-5" />
                  </Button>
                </a>
                <a href="https://wa.me/14165550199" target="_blank" rel="noopener noreferrer" data-testid="link-contact-whatsapp">
                  <Button variant="outline" size="icon">
                    <SiWhatsapp className="h-5 w-5" />
                  </Button>
                </a>
              </div>
            </Card>
          </div>
        </div>
      </section>

      <section className="container mx-auto px-4 lg:px-8 py-12 lg:py-20">
        <Card className="overflow-hidden">
          <div className="aspect-video bg-muted flex items-center justify-center">
            <div className="text-center space-y-2">
              <MapPin className="h-12 w-12 text-muted-foreground mx-auto" />
              <p className="text-muted-foreground">123 Queen Street West, Toronto</p>
              <p className="text-sm text-muted-foreground">Map integration placeholder</p>
            </div>
          </div>
        </Card>
      </section>
    </div>
  );
}
