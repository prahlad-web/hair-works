import { useState } from "react";
import { Link, useLocation } from "wouter";
import { Menu, X, Phone } from "lucide-react";
import { Button } from "@/components/ui/button";

export default function Navigation() {
  const [isOpen, setIsOpen] = useState(false);
  const [location] = useLocation();

  const navLinks = [
    { href: "/", label: "Home" },
    { href: "/services", label: "Services" },
    { href: "/about", label: "About" },
    { href: "/gallery", label: "Gallery" },
    { href: "/contact", label: "Contact" },
  ];

  return (
    <>
      <nav className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-md border-b border-border">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="flex items-center justify-between h-16 lg:h-20">
            <Link href="/">
              <a
                data-testid="link-home-logo"
                className="text-xl lg:text-2xl font-bold tracking-tight hover-elevate active-elevate-2 px-3 py-2 rounded-md transition-colors"
              >
                HairWorks<span className="text-primary">.</span>
              </a>
            </Link>

            <div className="hidden lg:flex items-center gap-1">
              {navLinks.map((link) => (
                <Link key={link.href} href={link.href}>
                  <a
                    data-testid={`link-nav-${link.label.toLowerCase()}`}
                    className={`px-4 py-2 rounded-md text-sm font-medium transition-colors hover-elevate active-elevate-2 ${
                      location === link.href
                        ? "text-foreground"
                        : "text-muted-foreground"
                    }`}
                  >
                    {link.label}
                  </a>
                </Link>
              ))}
            </div>

            <div className="hidden lg:flex items-center gap-3">
              <a href="tel:+14165550199" data-testid="button-call-desktop">
                <Button variant="ghost" size="icon">
                  <Phone className="h-4 w-4" />
                </Button>
              </a>
              <Link href="/book">
                <a data-testid="button-book-nav">
                  <Button>Book Now</Button>
                </a>
              </Link>
            </div>

            <Button
              variant="ghost"
              size="icon"
              className="lg:hidden"
              onClick={() => setIsOpen(!isOpen)}
              data-testid="button-menu-toggle"
              aria-label="Toggle menu"
            >
              {isOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
            </Button>
          </div>
        </div>
      </nav>

      {isOpen && (
        <div className="fixed inset-0 z-40 lg:hidden bg-background pt-16">
          <div className="flex flex-col items-center gap-2 p-6">
            {navLinks.map((link) => (
              <Link key={link.href} href={link.href}>
                <a
                  data-testid={`link-mobile-${link.label.toLowerCase()}`}
                  onClick={() => setIsOpen(false)}
                  className={`w-full text-center px-6 py-4 rounded-md text-lg font-medium transition-colors hover-elevate active-elevate-2 ${
                    location === link.href
                      ? "text-foreground bg-accent"
                      : "text-muted-foreground"
                  }`}
                >
                  {link.label}
                </a>
              </Link>
            ))}
            <Link href="/book">
              <a
                onClick={() => setIsOpen(false)}
                className="w-full mt-4"
                data-testid="button-book-mobile"
              >
                <Button className="w-full" size="lg">
                  Book Now
                </Button>
              </a>
            </Link>
          </div>
        </div>
      )}
    </>
  );
}
