import { useState } from "react";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogDescription } from "@/components/ui/dialog";
import { Clock, DollarSign, ArrowRight } from "lucide-react";
import { Link } from "wouter";

interface ServiceCardProps {
  title: string;
  description: string;
  icon: React.ReactNode;
  priceRange: string;
  duration: string;
  details: string;
  testId?: string;
}

export default function ServiceCard({
  title,
  description,
  icon,
  priceRange,
  duration,
  details,
  testId
}: ServiceCardProps) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <Card
        className="group relative overflow-hidden hover-elevate active-elevate-2 cursor-pointer transition-all duration-300 bg-card/50 backdrop-blur-sm border border-card-border"
        onClick={() => setIsOpen(true)}
        data-testid={testId}
      >
        <div className="p-6 lg:p-8 space-y-4">
          <div className="flex items-start justify-between gap-4">
            <div className="p-3 rounded-lg bg-primary/10 text-primary group-hover:bg-primary/20 transition-colors">
              {icon}
            </div>
          </div>

          <div className="space-y-2">
            <h3 className="text-xl lg:text-2xl font-bold tracking-tight">{title}</h3>
            <p className="text-muted-foreground text-sm lg:text-base leading-relaxed">
              {description}
            </p>
          </div>

          <div className="flex items-center gap-4 pt-2 text-sm text-muted-foreground">
            <div className="flex items-center gap-1.5">
              <DollarSign className="h-4 w-4" />
              <span>{priceRange}</span>
            </div>
            <div className="flex items-center gap-1.5">
              <Clock className="h-4 w-4" />
              <span>{duration}</span>
            </div>
          </div>

          <div className="flex items-center gap-2 text-primary font-medium text-sm group-hover:gap-3 transition-all">
            <span>Learn More</span>
            <ArrowRight className="h-4 w-4" />
          </div>
        </div>

        <div className="absolute top-0 right-0 w-32 h-32 bg-primary/5 rounded-full blur-3xl -translate-y-16 translate-x-16 group-hover:bg-primary/10 transition-colors" />
      </Card>

      <Dialog open={isOpen} onOpenChange={setIsOpen}>
        <DialogContent data-testid={`${testId}-modal`}>
          <DialogHeader>
            <DialogTitle className="text-2xl lg:text-3xl">{title}</DialogTitle>
            <DialogDescription className="text-base pt-2">
              {details}
            </DialogDescription>
          </DialogHeader>
          <div className="space-y-4 pt-4">
            <div className="flex items-center gap-6 text-sm">
              <div className="flex items-center gap-2">
                <DollarSign className="h-5 w-5 text-primary" />
                <span className="font-medium">{priceRange}</span>
              </div>
              <div className="flex items-center gap-2">
                <Clock className="h-5 w-5 text-primary" />
                <span className="font-medium">{duration}</span>
              </div>
            </div>
            <Link href="/book">
              <a onClick={() => setIsOpen(false)}>
                <Button className="w-full" size="lg" data-testid={`${testId}-book-button`}>
                  Book This Service
                </Button>
              </a>
            </Link>
          </div>
        </DialogContent>
      </Dialog>
    </>
  );
}
