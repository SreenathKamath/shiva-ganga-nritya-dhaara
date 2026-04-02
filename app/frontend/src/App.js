import { useEffect, useMemo, useRef, useState } from "react";
import "./App.css";
import { Toaster } from "./components/ui/sonner";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import Instructor from "./components/Instructor";
import DanceStyles from "./components/DanceStyles";
import WhyChooseUs from "./components/WhyChooseUs";
import Classes from "./components/Classes";
import Gallery from "./components/Gallery";
import Testimonials from "./components/Testimonials";
import CTA from "./components/CTA";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import { academyInfo } from "./data/mock";

function Icon({ path, className = "h-5 w-5", filled = false }) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill={filled ? "currentColor" : "none"}
      stroke="currentColor"
      strokeWidth="1.8"
      strokeLinecap="round"
      strokeLinejoin="round"
      className={className}
      aria-hidden="true"
    >
      <path d={path} />
    </svg>
  );
}

function App() {
  const [isMusicPlaying, setIsMusicPlaying] = useState(false);
  const audioRef = useRef(null);

  const whatsAppLink = useMemo(
    () =>
      `https://wa.me/${academyInfo.contact.whatsapp}?text=${encodeURIComponent(
        "Hello! I'm interested in learning classical dance at Shiva Ganga Nritya Dhaara."
      )}`,
    []
  );

  useEffect(() => {
    const audio = new Audio(
      "https://www.soundhelix.com/examples/mp3/SoundHelix-Song-1.mp3"
    );
    audio.loop = true;
    audio.volume = 0.15;
    audioRef.current = audio;

    return () => {
      audio.pause();
      audioRef.current = null;
    };
  }, []);

  const toggleMusic = async () => {
    const audio = audioRef.current;
    if (!audio) return;

    try {
      if (isMusicPlaying) {
        audio.pause();
        setIsMusicPlaying(false);
      } else {
        await audio.play();
        setIsMusicPlaying(true);
      }
    } catch (_error) {
      setIsMusicPlaying(false);
    }
  };

  return (
    <div className="app-shell text-white">
      <Navbar />
      <main>
        <Hero />
        <About />
        <Instructor />
        <DanceStyles />
        <WhyChooseUs />
        <Classes />
        <Gallery />
        <Testimonials />
        <CTA />
        <Contact />
      </main>
      <Footer />

      <button
        type="button"
        onClick={toggleMusic}
        className="fixed bottom-8 right-8 z-50 flex h-14 w-14 items-center justify-center rounded-full bg-[#8B1538] text-white shadow-2xl transition-transform duration-300 hover:scale-105 hover:bg-[#6B0F2A]"
        aria-label="Toggle background music"
      >
        {isMusicPlaying ? (
          <Icon path="M11 5 6 9H3v6h3l5 4V5Zm4.5 3.5a6 6 0 0 1 0 7m2.5-9.5a9.5 9.5 0 0 1 0 12" className="h-6 w-6" />
        ) : (
          <Icon path="M11 5 6 9H3v6h3l5 4V5Zm5 5 5 5m0-5-5 5" className="h-6 w-6" />
        )}
      </button>

      <a
        href={whatsAppLink}
        target="_blank"
        rel="noreferrer"
        className="fixed bottom-8 left-8 z-50 flex h-14 w-14 items-center justify-center rounded-full bg-[linear-gradient(135deg,#1ae081_0%,#08a365_100%)] text-white shadow-[0_18px_40px_rgba(26,224,129,0.28)] transition-transform duration-300 hover:scale-105"
        aria-label="Chat on WhatsApp"
      >
        <svg viewBox="0 0 24 24" fill="currentColor" className="h-8 w-8" aria-hidden="true">
          <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51a10.8 10.8 0 0 0-.57-.01c-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479s1.065 2.875 1.213 3.074c.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347Z" />
          <path d="M12.004 21.794h-.004a9.87 9.87 0 0 1-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 0 1-1.51-5.26C2.121 6.452 6.556 2.018 12.008 2.018c2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 0 1 2.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884Z" />
        </svg>
      </a>

      <Toaster richColors position="top-right" />
    </div>
  );
}

export default App;
