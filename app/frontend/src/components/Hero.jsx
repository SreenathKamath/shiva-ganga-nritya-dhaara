import { useEffect, useState } from "react";
import { Button } from "./ui/button";
import { academyInfo, heroImages } from "../data/mock";

function scrollToSection(sectionId) {
  const element = document.getElementById(sectionId);
  if (element) {
    element.scrollIntoView({ behavior: "smooth", block: "start" });
  }
}

export default function Hero() {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  useEffect(() => {
    const timer = window.setInterval(() => {
      setCurrentImageIndex((prev) => (prev + 1) % heroImages.length);
    }, 5000);
    return () => window.clearInterval(timer);
  }, []);

  return (
    <section id="home" className="relative min-h-screen overflow-hidden">
      <div className="absolute inset-0">
        {heroImages.map((image, index) => (
          <div
            key={image}
            className={`absolute inset-0 transition-opacity duration-1000 ${
              index === currentImageIndex ? "opacity-100" : "opacity-0"
            }`}
          >
            <img src={image} alt="" className="h-full w-full object-cover" />
            <div className="absolute inset-0 bg-gradient-to-r from-black/75 via-black/55 to-black/20" />
          </div>
        ))}
      </div>

      <div className="relative container mx-auto flex min-h-screen items-center px-4 pb-16 pt-32">
        <div className="max-w-3xl">
          <div className="mb-6 inline-flex items-center gap-2 rounded-full bg-[#8B1538]/90 px-4 py-2 text-sm font-medium text-white">
            <span className="h-2 w-2 rounded-full bg-[#D4AF37]" />
            Free trial class available
          </div>

          <h1 className="animate-fadeInUp mb-6 text-5xl font-bold leading-tight text-white md:text-7xl">
            {academyInfo.tagline}
          </h1>
          <p className="animate-fadeInUp animation-delay-200 mb-6 text-xl text-white/90 md:text-2xl">
            {academyInfo.subtitle}
          </p>
          <p className="animate-fadeInUp animation-delay-300 mb-10 max-w-2xl text-lg leading-relaxed text-white/80">
            Learn Bharatanatyam, Mohiniyattam, and performance-focused variations in a calm,
            disciplined environment designed to nurture artistry and confidence.
          </p>

          <div className="animate-fadeInUp animation-delay-400 flex flex-col gap-4 sm:flex-row">
            <Button
              className="rounded-full px-8 py-4 text-base"
              onClick={() => scrollToSection("contact")}
            >
              Join Now
            </Button>
            <Button
              variant="outline"
              className="rounded-full border-white bg-white/10 px-8 py-4 text-base text-white hover:bg-white hover:text-[#8B1538]"
              onClick={() => scrollToSection("classes")}
            >
              View Classes
            </Button>
          </div>

          <div className="animate-fadeInUp animation-delay-500 mt-12 flex flex-wrap gap-8 text-white">
            <div>
              <div className="text-3xl font-bold text-[#D4AF37]">100+</div>
              <div className="text-sm text-white/75">Students guided</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-[#D4AF37]">4</div>
              <div className="text-sm text-white/75">Dance pathways</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-[#D4AF37]">Online</div>
              <div className="text-sm text-white/75">And offline options</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
