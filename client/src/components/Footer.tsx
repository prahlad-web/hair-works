import { Link } from "wouter";
import { Phone, Mail, MapPin, Instagram, Facebook, Youtube } from "lucide-react";
import { SiWhatsapp } from "react-icons/si";
import { Button } from "@/components/ui/button";

export default function Footer() {
  return (
    <footer className="bg-card/50 border-t border-border mt-20">
      <div className="container mx-auto px-4 lg:px-8 py-12 lg:py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12">
          <div className="space-y-4">
            <h3 className="text-2xl font-bold">
              HairWorks<span className="text-primary">.</span>
            </h3>
            <p className="text-muted-foreground text-sm leading-relaxed">
              Precision styling, modern craft. Experience the art of bespoke hair design.
            </p>
            <div className="flex gap-2">
              <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" data-testid="link-instagram">
                <Button variant="ghost" size="icon" aria-label="Instagram">
                  <Instagram className="h-5 w-5" />
                </Button>
              </a>
              <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" data-testid="link-facebook">
                <Button variant="ghost" size="icon" aria-label="Facebook">
                  <Facebook className="h-5 w-5" />
                </Button>
              </a>
              <a href="https://youtube.com" target="_blank" rel="noopener noreferrer" data-testid="link-youtube">
                <Button variant="ghost" size="icon" aria-label="YouTube">
                  <Youtube className="h-5 w-5" />
                </Button>
              </a>
              <a href="https://wa.me/14165550199" target="_blank" rel="noopener noreferrer" data-testid="link-whatsapp">
                <Button variant="ghost" size="icon" aria-label="WhatsApp">
                  <SiWhatsapp className="h-5 w-5" />
                </Button>
              </a>
            </div>
          </div>

          <div className="space-y-4">
            <h4 className="font-semibold text-lg">Quick Links</h4>
            <nav className="flex flex-col gap-2">
              <Link href="/"><a className="text-muted-foreground hover:text-foreground transition-colors text-sm" data-testid="link-footer-home">Home</a></Link>
              <Link href="/services"><a className="text-muted-foreground hover:text-foreground transition-colors text-sm" data-testid="link-footer-services">Services</a></Link>
              <Link href="/about"><a className="text-muted-foreground hover:text-foreground transition-colors text-sm" data-testid="link-footer-about">About</a></Link>
              <Link href="/gallery"><a className="text-muted-foreground hover:text-foreground transition-colors text-sm" data-testid="link-footer-gallery">Gallery</a></Link>
              <Link href="/contact"><a className="text-muted-foreground hover:text-foreground transition-colors text-sm" data-testid="link-footer-contact">Contact</a></Link>
            </nav>
          </div>

          <div className="space-y-4">
            <h4 className="font-semibold text-lg">Contact</h4>
            <div className="space-y-3 text-sm text-muted-foreground">
              <a href="tel:+14165550199" className="flex items-center gap-2 hover:text-foreground transition-colors" data-testid="link-footer-phone">
                <Phone className="h-4 w-4 flex-shrink-0" />
                <span>+1 (416) 555-0199</span>
              </a>
              <a href="mailto:info@hairworkssalon.ca" className="flex items-center gap-2 hover:text-foreground transition-colors" data-testid="link-footer-email">
                <Mail className="h-4 w-4 flex-shrink-0" />
                <span>info@hairworkssalon.ca</span>
              </a>
              <div className="flex items-start gap-2">
                <MapPin className="h-4 w-4 flex-shrink-0 mt-0.5" />
                <span>123 Queen Street West<br />Toronto, ON M5H 2M9</span>
              </div>
            </div>
          </div>

          <div className="space-y-4">
            <h4 className="font-semibold text-lg">Hours</h4>
            <div className="space-y-2 text-sm text-muted-foreground">
              <div className="flex justify-between">
                <span>Mon - Fri</span>
                <span className="text-foreground">10AM - 8PM</span>
              </div>
              <div className="flex justify-between">
                <span>Saturday</span>
                <span className="text-foreground">9AM - 6PM</span>
              </div>
              <div className="flex justify-between">
                <span>Sunday</span>
                <span className="text-foreground">Closed</span>
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-border mt-12 pt-8 text-center text-sm text-muted-foreground">
          <p>&copy; {new Date().getFullYear()} HairWorks Salon. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}
