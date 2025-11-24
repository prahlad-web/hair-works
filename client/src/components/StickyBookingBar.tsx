import { Link } from "wouter";
import { Sparkles } from "lucide-react";
import { Button } from "@/components/ui/button";

export default function StickyBookingBar() {
  return (
    <div className="fixed bottom-0 left-0 right-0 z-40 lg:hidden bg-background/95 backdrop-blur-md border-t border-border p-3 shadow-lg">
      <Link href="/book">
        <a data-testid="button-sticky-book">
          <Button className="w-full gap-2 font-semibold" size="lg">
            <Sparkles className="h-4 w-4" />
            Book Now — 10% off first visit
          </Button>
        </a>
      </Link>
    </div>
  );
}
