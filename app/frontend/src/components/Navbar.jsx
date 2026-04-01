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
    const onScroll = () => setIsScrolled(window.scrollY > 20);
    onScroll();
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`fixed inset-x-0 top-0 z-40 transition-all duration-300 ${
        isScrolled ? "bg-[#fff8f0]/95 shadow-lg backdrop-blur" : "bg-transparent"
      }`}
    >
      <div className="container mx-auto flex items-center justify-between px-4 py-4">
        <button
          type="button"
          onClick={() => scrollToSection("home")}
          className="text-left"
        >
          <div className="text-sm font-semibold uppercase tracking-[0.3em] text-[#8B1538]">
            Classical Dance
          </div>
          <div className="text-lg font-bold text-gray-900">{academyInfo.name}</div>
        </button>

        <nav className="hidden items-center gap-6 md:flex">
          {navItems.map((item) => (
            <button
              key={item.id}
              type="button"
              onClick={() => scrollToSection(item.id)}
              className="text-sm font-medium text-gray-700 transition-colors hover:text-[#8B1538]"
            >
              {item.label}
            </button>
          ))}
          <Button className="rounded-full px-5" onClick={() => scrollToSection("contact")}>
            Enroll Now
          </Button>
        </nav>

        <button
          type="button"
          className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-[#8B1538]/20 text-[#8B1538] md:hidden"
          onClick={() => setIsOpen((open) => !open)}
          aria-label="Toggle menu"
        >
          <span className="text-xl leading-none">{isOpen ? "x" : "="}</span>
        </button>
      </div>

      {isOpen && (
        <div className="border-t border-[#8B1538]/10 bg-[#fff8f0] md:hidden">
          <div className="container mx-auto flex flex-col gap-2 px-4 py-4">
            {navItems.map((item) => (
              <button
                key={item.id}
                type="button"
                onClick={() => {
                  setIsOpen(false);
                  scrollToSection(item.id);
                }}
                className="rounded-lg px-3 py-2 text-left text-sm font-medium text-gray-700 transition-colors hover:bg-white hover:text-[#8B1538]"
              >
                {item.label}
              </button>
            ))}
            <Button
              className="mt-2 rounded-full"
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
    </header>
  );
}
