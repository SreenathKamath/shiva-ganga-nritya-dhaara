import { Button } from "./ui/button";

function scrollToContact() {
  const element = document.getElementById("contact");
  if (element) {
    element.scrollIntoView({ behavior: "smooth", block: "start" });
  }
}

export default function CTA() {
  return (
    <section className="relative overflow-hidden px-4 py-28">
      <div className="absolute inset-0">
        <img
          src="https://images.unsplash.com/photo-1746983047239-cb817eba7d05?auto=format&fit=crop&w=1600&q=80"
          alt=""
          className="h-full w-full object-cover"
        />
        <div className="absolute inset-0 bg-[linear-gradient(120deg,rgba(7,5,14,0.92),rgba(61,5,53,0.8),rgba(28,14,82,0.84))]" />
      </div>

      <div className="container relative z-10 mx-auto">
        <div className="glass-panel mx-auto max-w-5xl rounded-[36px] px-8 py-14 text-center md:px-14">
          <span className="section-heading rounded-full bg-white/8 px-5 py-3 text-xs text-[#d7a8ff]">
            Enrollment Signal Open
          </span>
          <h2 className="mt-8 text-5xl font-semibold leading-tight text-white md:text-7xl">
            Begin your dance journey today
          </h2>
          <p className="mx-auto mt-8 max-w-3xl text-xl leading-9 text-white/72">
            Experience the grace, discipline, and beauty of classical Indian dance with guided,
            structured training in a more immersive academy experience.
          </p>
          <div className="mt-10 flex flex-col justify-center gap-4 sm:flex-row">
            <Button className="px-8 py-4 text-base" onClick={scrollToContact}>
              Enroll Now
            </Button>
            <Button variant="outline" className="px-8 py-4 text-base" onClick={scrollToContact}>
              Book Free Trial
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}
