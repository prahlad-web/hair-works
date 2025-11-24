import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form";
import { Card } from "@/components/ui/card";
import { useToast } from "@/hooks/use-toast";
import { Calendar, Clock, User, Mail, Phone, MessageSquare, CheckCircle2, ArrowRight } from "lucide-react";

const bookingFormSchema = z.object({
  name: z.string().min(2, "Name is required"),
  email: z.string().email("Invalid email"),
  phone: z.string().min(10, "Phone is required"),
  service: z.string().min(1, "Please select a service"),
  date: z.string().min(1, "Date is required"),
  time: z.string().min(1, "Time is required"),
  notes: z.string().optional(),
});

type BookingFormData = z.infer<typeof bookingFormSchema>;

const services = [
  "Precision Cut & Style",
  "Balayage & Color",
  "Keratin Treatment",
  "Special Event Styling",
  "Men's Cut & Style",
  "Consultation"
];

const timeSlots = [
  "9:00 AM", "10:00 AM", "11:00 AM", "12:00 PM",
  "1:00 PM", "2:00 PM", "3:00 PM", "4:00 PM",
  "5:00 PM", "6:00 PM", "7:00 PM"
];

export default function BookingForm() {
  const [step, setStep] = useState(1);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const { toast } = useToast();

  const form = useForm<BookingFormData>({
    resolver: zodResolver(bookingFormSchema),
    defaultValues: {
      name: "",
      email: "",
      phone: "",
      service: "",
      date: "",
      time: "",
      notes: "",
    },
  });

  const onSubmit = async (data: BookingFormData) => {
    console.log("Booking submitted:", data);
    
    await new Promise(resolve => setTimeout(resolve, 1000));
    
    setIsSubmitted(true);
    toast({
      title: "Booking Request Received!",
      description: "We'll confirm your appointment shortly.",
    });
  };

  if (isSubmitted) {
    return (
      <Card className="p-8 lg:p-12 text-center space-y-6 max-w-2xl mx-auto" data-testid="booking-success">
        <div className="flex justify-center">
          <div className="p-4 rounded-full bg-primary/10">
            <CheckCircle2 className="h-16 w-16 text-primary" />
          </div>
        </div>
        <div className="space-y-2">
          <h2 className="text-3xl font-bold">Booking Confirmed!</h2>
          <p className="text-lg text-muted-foreground">
            We've received your request for <strong>{form.getValues("service")}</strong>
          </p>
          <p className="text-muted-foreground">
            {form.getValues("date")} at {form.getValues("time")}
          </p>
        </div>
        <p className="text-sm text-muted-foreground">
          A confirmation email has been sent to {form.getValues("email")}
        </p>
        <Button size="lg" onClick={() => window.location.href = "/"} data-testid="button-back-home">
          Back to Home
        </Button>
      </Card>
    );
  }

  return (
    <div className="max-w-3xl mx-auto">
      <div className="mb-8">
        <div className="flex items-center justify-center gap-4 mb-6">
          {[1, 2, 3].map((s) => (
            <div key={s} className="flex items-center gap-2">
              <div
                className={`w-10 h-10 rounded-full flex items-center justify-center font-semibold transition-colors ${
                  s === step
                    ? "bg-primary text-primary-foreground"
                    : s < step
                    ? "bg-primary/20 text-primary"
                    : "bg-muted text-muted-foreground"
                }`}
                data-testid={`step-indicator-${s}`}
              >
                {s}
              </div>
              {s < 3 && <div className="w-12 h-0.5 bg-border" />}
            </div>
          ))}
        </div>
      </div>

      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
          {step === 1 && (
            <Card className="p-6 lg:p-8 space-y-6" data-testid="booking-step-1">
              <div className="space-y-2">
                <h2 className="text-2xl font-bold flex items-center gap-2">
                  <User className="h-6 w-6 text-primary" />
                  Your Information
                </h2>
                <p className="text-muted-foreground">Let's start with your contact details</p>
              </div>

              <FormField
                control={form.control}
                name="name"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Full Name</FormLabel>
                    <FormControl>
                      <Input placeholder="John Doe" {...field} data-testid="input-booking-name" />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />

              <FormField
                control={form.control}
                name="email"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Email</FormLabel>
                    <FormControl>
                      <Input type="email" placeholder="john@example.com" {...field} data-testid="input-booking-email" />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />

              <FormField
                control={form.control}
                name="phone"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Phone</FormLabel>
                    <FormControl>
                      <Input type="tel" placeholder="(416) 555-0199" {...field} data-testid="input-booking-phone" />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />

              <Button
                type="button"
                className="w-full gap-2"
                size="lg"
                onClick={() => {
                  const fields = ["name", "email", "phone"] as const;
                  const isValid = fields.every(field => form.getValues(field));
                  if (isValid) setStep(2);
                }}
                data-testid="button-next-step-1"
              >
                Continue
                <ArrowRight className="h-4 w-4" />
              </Button>
            </Card>
          )}

          {step === 2 && (
            <Card className="p-6 lg:p-8 space-y-6" data-testid="booking-step-2">
              <div className="space-y-2">
                <h2 className="text-2xl font-bold flex items-center gap-2">
                  <Calendar className="h-6 w-6 text-primary" />
                  Service & Schedule
                </h2>
                <p className="text-muted-foreground">Choose your service and preferred time</p>
              </div>

              <FormField
                control={form.control}
                name="service"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Service</FormLabel>
                    <Select onValueChange={field.onChange} defaultValue={field.value}>
                      <FormControl>
                        <SelectTrigger data-testid="select-service">
                          <SelectValue placeholder="Select a service" />
                        </SelectTrigger>
                      </FormControl>
                      <SelectContent>
                        {services.map((service) => (
                          <SelectItem key={service} value={service}>
                            {service}
                          </SelectItem>
                        ))}
                      </SelectContent>
                    </Select>
                    <FormMessage />
                  </FormItem>
                )}
              />

              <FormField
                control={form.control}
                name="date"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Preferred Date</FormLabel>
                    <FormControl>
                      <Input type="date" {...field} data-testid="input-booking-date" />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />

              <FormField
                control={form.control}
                name="time"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Preferred Time</FormLabel>
                    <Select onValueChange={field.onChange} defaultValue={field.value}>
                      <FormControl>
                        <SelectTrigger data-testid="select-time">
                          <SelectValue placeholder="Select a time" />
                        </SelectTrigger>
                      </FormControl>
                      <SelectContent>
                        {timeSlots.map((time) => (
                          <SelectItem key={time} value={time}>
                            {time}
                          </SelectItem>
                        ))}
                      </SelectContent>
                    </Select>
                    <FormMessage />
                  </FormItem>
                )}
              />

              <div className="flex gap-3">
                <Button
                  type="button"
                  variant="outline"
                  className="flex-1"
                  onClick={() => setStep(1)}
                  data-testid="button-back-step-2"
                >
                  Back
                </Button>
                <Button
                  type="button"
                  className="flex-1 gap-2"
                  onClick={() => {
                    const fields = ["service", "date", "time"] as const;
                    const isValid = fields.every(field => form.getValues(field));
                    if (isValid) setStep(3);
                  }}
                  data-testid="button-next-step-2"
                >
                  Continue
                  <ArrowRight className="h-4 w-4" />
                </Button>
              </div>
            </Card>
          )}

          {step === 3 && (
            <Card className="p-6 lg:p-8 space-y-6" data-testid="booking-step-3">
              <div className="space-y-2">
                <h2 className="text-2xl font-bold flex items-center gap-2">
                  <MessageSquare className="h-6 w-6 text-primary" />
                  Additional Details
                </h2>
                <p className="text-muted-foreground">Any special requests or notes?</p>
              </div>

              <FormField
                control={form.control}
                name="notes"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Notes (Optional)</FormLabel>
                    <FormControl>
                      <Textarea
                        placeholder="Any specific requests or hair goals..."
                        className="min-h-[120px] resize-none"
                        {...field}
                        data-testid="input-booking-notes"
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />

              <div className="p-4 bg-accent/50 rounded-lg space-y-2">
                <h3 className="font-semibold">Booking Summary</h3>
                <div className="text-sm space-y-1 text-muted-foreground">
                  <p><strong>Name:</strong> {form.watch("name")}</p>
                  <p><strong>Service:</strong> {form.watch("service")}</p>
                  <p><strong>Date:</strong> {form.watch("date")}</p>
                  <p><strong>Time:</strong> {form.watch("time")}</p>
                </div>
              </div>

              <div className="flex gap-3">
                <Button
                  type="button"
                  variant="outline"
                  className="flex-1"
                  onClick={() => setStep(2)}
                  data-testid="button-back-step-3"
                >
                  Back
                </Button>
                <Button
                  type="submit"
                  className="flex-1 gap-2"
                  size="lg"
                  disabled={form.formState.isSubmitting}
                  data-testid="button-submit-booking"
                >
                  {form.formState.isSubmitting ? "Confirming..." : "Confirm Booking"}
                  <CheckCircle2 className="h-4 w-4" />
                </Button>
              </div>
            </Card>
          )}
        </form>
      </Form>
    </div>
  );
}
