import { useEffect, useState } from "react";
import { Button } from "./ui/button";
import { academyInfo } from "../data/mock";

const navItems = [
  { id: "about", label: "About" },
  { id: "styles", label: "Styles" },
  { id: "classes", label: "Classes" },
  { id: "gallery", label: "Gallery" },
  { id: "contact", label: "Contact" },
];

function scrollToSection(sectionId) {
  const element = document.getElementById(sectionId);
  if (element) {
    element.scrollIntoView({ behavior: "smooth", block: "start" });
  }
}

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setIsScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header className="fixed inset-x-0 top-0 z-50 px-4 pt-4">
      <div
        className={`mx-auto max-w-7xl rounded-[28px] border transition-all duration-300 ${
          isScrolled
            ? "glass-panel border-white/12 bg-[#120d1e]/82"
            : "border-white/8 bg-[#120d1e]/45 backdrop-blur-xl"
        }`}
      >
        <div className="flex items-center justify-between px-5 py-4 md:px-7">
          <button
            type="button"
            onClick={() => scrollToSection("home")}
            className="flex min-w-0 items-center gap-3 text-left"
          >
            <span className="flex h-12 w-12 shrink-0 items-center justify-center overflow-hidden rounded-2xl border border-white/12 bg-white/95 p-1.5 shadow-[0_12px_30px_rgba(0,0,0,0.28)]">
              <img src={academyInfo.logo} alt="" className="h-full w-full object-contain" />
            </span>
            <span className="min-w-0">
              <span className="section-heading block text-[0.65rem] text-[#d9a7ff]">Classical Dance</span>
              <span className="mt-1 block truncate text-base font-semibold text-white md:text-xl">
                {academyInfo.name}
              </span>
            </span>
          </button>

          <nav className="hidden items-center gap-7 md:flex">
            {navItems.map((item) => (
              <button
                key={item.id}
                type="button"
                onClick={() => scrollToSection(item.id)}
                className="text-sm font-medium text-white/70 transition-colors hover:text-white"
              >
                {item.label}
              </button>
            ))}
            <Button className="px-6 py-3" onClick={() => scrollToSection("contact")}>
              Enroll Now
            </Button>
          </nav>

          <button
            type="button"
            className="inline-flex h-11 w-11 items-center justify-center rounded-full border border-white/10 bg-white/5 text-white md:hidden"
            onClick={() => setIsOpen((value) => !value)}
            aria-label="Toggle menu"
          >
            <span className="font-semibold">{isOpen ? "x" : "="}</span>
          </button>
        </div>

        {isOpen && (
          <div className="border-t border-white/10 px-5 pb-5 md:hidden">
            <div className="flex flex-col gap-2 pt-4">
              {navItems.map((item) => (
                <button
                  key={item.id}
                  type="button"
                  onClick={() => {
                    setIsOpen(false);
                    scrollToSection(item.id);
                  }}
                  className="rounded-2xl px-4 py-3 text-left text-white/80 transition-colors hover:bg-white/5 hover:text-white"
                >
                  {item.label}
                </button>
              ))}
              <Button
                className="mt-2"
                onClick={() => {
                  setIsOpen(false);
                  scrollToSection("contact");
                }}
              >
                Enroll Now
              </Button>
            </div>
          </div>
        )}
      </div>
    </header>
  );
}
