import { Button } from "./ui/button";

function scrollToContact() {
  const element = document.getElementById("contact");
  if (element) {
    element.scrollIntoView({ behavior: "smooth", block: "start" });
  }
}

export default function CTA() {
  return (
    <section className="relative overflow-hidden py-20">
      <div className="absolute inset-0">
        <img
          src="https://images.unsplash.com/photo-1746983047239-cb817eba7d05?auto=format&fit=crop&w=1600&q=80"
          alt=""
          className="h-full w-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-[#8B1538]/95 via-[#8B1538]/88 to-[#6B0F2A]/95" />
      </div>

      <div className="container relative z-10 mx-auto px-4">
        <div className="mx-auto max-w-4xl text-center text-white">
          <span className="inline-flex rounded-full bg-[#D4AF37] px-4 py-2 text-sm font-medium">
            Limited seats available
          </span>
          <h2 className="mt-6 text-4xl font-bold leading-tight md:text-6xl">
            Begin your dance journey today
          </h2>
          <p className="mx-auto mt-6 max-w-2xl text-xl text-white/90">
            Experience the grace, discipline, and beauty of classical Indian dance with guided,
            structured training.
          </p>
          <div className="mt-10 flex flex-col justify-center gap-4 sm:flex-row">
            <Button
              className="rounded-full bg-white px-8 py-4 text-base text-[#8B1538] hover:bg-gray-100"
              onClick={scrollToContact}
            >
              Enroll Now
            </Button>
            <Button
              variant="outline"
              className="rounded-full border-white px-8 py-4 text-base text-white hover:bg-white hover:text-[#8B1538]"
              onClick={scrollToContact}
            >
              Book Free Trial
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}
