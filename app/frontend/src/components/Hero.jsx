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
    }, 4500);
    return () => window.clearInterval(timer);
  }, []);

  return (
    <section id="home" className="relative min-h-screen overflow-hidden px-4 pb-10 pt-28 md:px-6">
      <div className="absolute inset-0">
        {heroImages.map((image, index) => (
          <div
            key={image}
            className={`absolute inset-0 transition-opacity duration-[1400ms] ${
              index === currentImageIndex ? "opacity-100" : "opacity-0"
            }`}
          >
            <img src={image} alt="" className="h-full w-full object-cover object-center" />
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_20%,rgba(150,0,255,0.18),transparent_26%),linear-gradient(115deg,rgba(4,2,11,0.94)_12%,rgba(8,5,17,0.7)_46%,rgba(7,5,15,0.88)_100%)]" />
          </div>
        ))}
      </div>

      <div className="relative mx-auto grid min-h-[calc(100vh-7rem)] max-w-7xl items-center gap-10 lg:grid-cols-[1.2fr_0.8fr]">
        <div className="max-w-4xl">
          <div className="glass-panel mb-8 inline-flex items-center gap-3 rounded-full px-5 py-3 text-sm font-semibold text-white">
            <span className="h-2.5 w-2.5 rounded-full bg-[#7b7cff]" />
            Free trial class available
          </div>

          <div className="mb-5 section-heading text-xs text-[#d59fff]">Future-ready classical training</div>
          <h1 className="animate-fadeInUp max-w-4xl text-6xl font-semibold leading-[0.92] text-white sm:text-7xl xl:text-[7.5rem]">
            {academyInfo.tagline}
          </h1>
          <p className="animate-fadeInUp animation-delay-200 mt-8 max-w-3xl text-2xl font-light text-white/80 md:text-[2rem]">
            {academyInfo.subtitle}
          </p>
          <p className="animate-fadeInUp animation-delay-300 mt-8 max-w-3xl text-lg leading-9 text-white/72 md:text-[1.18rem]">
            Learn Bharatanatyam, Mohiniyattam, and performance-focused variations in an
            immersive dance environment shaped for discipline, expression, and stage confidence.
          </p>

          <div className="animate-fadeInUp animation-delay-400 mt-10 flex flex-col gap-4 sm:flex-row">
            <Button className="px-8 py-4 text-base" onClick={() => scrollToSection("contact")}>
              Join Now
            </Button>
            <Button
              variant="outline"
              className="px-8 py-4 text-base"
              onClick={() => scrollToSection("classes")}
            >
              Explore Classes
            </Button>
          </div>
        </div>

        <div className="hidden lg:block">
          <div className="glass-panel rounded-[34px] p-6">
            <div className="section-heading text-xs text-[#d59fff]">Performance matrix</div>
            <div className="mt-5 grid gap-4">
              <div className="neo-card light-streak rounded-[28px] p-6">
                <div className="text-5xl font-semibold text-white">100+</div>
                <div className="mt-2 text-sm uppercase tracking-[0.24em] text-white/45">
                  Students Guided
                </div>
              </div>
              <div className="grid grid-cols-2 gap-4">
                <div className="neo-card rounded-[26px] p-5">
                  <div className="text-4xl font-semibold text-[#7b7cff]">4</div>
                  <div className="mt-2 text-sm text-white/65">Dance pathways</div>
                </div>
                <div className="neo-card rounded-[26px] p-5">
                  <div className="text-4xl font-semibold text-[#ff78c7]">Live</div>
                  <div className="mt-2 text-sm text-white/65">Online + offline</div>
                </div>
              </div>
              <div className="neo-card animate-floatPulse rounded-[28px] p-6">
                <div className="text-lg font-semibold text-white">Training Signal</div>
                <div className="mt-3 h-2 rounded-full bg-white/10">
                  <div className="h-2 w-[82%] rounded-full bg-[linear-gradient(90deg,#7b7cff,#d2296d)]" />
                </div>
                <div className="mt-4 text-sm leading-7 text-white/60">
                  Classical depth, stage confidence, and guided mentorship in one learning track.
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
