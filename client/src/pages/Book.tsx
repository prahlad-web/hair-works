import BookingForm from "@/components/BookingForm";

export default function Book() {
  return (
    <div className="min-h-screen pt-24 pb-20">
      <section className="container mx-auto px-4 lg:px-8 py-12 lg:py-20">
        <div className="text-center mb-12 lg:mb-16 space-y-4">
          <h1 className="text-4xl lg:text-6xl font-bold tracking-tight">
            Book Your Appointment
          </h1>
          <p className="text-lg lg:text-xl text-muted-foreground max-w-2xl mx-auto">
            Transform your look with HairWorks. Select your service and preferred time below.
          </p>
        </div>

        <BookingForm />
      </section>
    </div>
  );
}
