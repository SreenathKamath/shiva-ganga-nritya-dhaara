import { whyChooseUs } from "../data/mock";

function SectionIcon({ type }) {
  const common = "h-7 w-7";
  const icons = {
    award: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" className={common}>
        <path d="M12 15.5 8.5 17l.7-3.8-2.7-2.6 3.8-.5L12 6.7l1.7 3.4 3.8.5-2.7 2.6.7 3.8Z" />
        <path d="M7 3h10" />
      </svg>
    ),
    users: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" className={common}>
        <path d="M16 21v-1a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v1" />
        <circle cx="10" cy="8" r="3" />
        <path d="M20 21v-1a4 4 0 0 0-3-3.87" />
        <path d="M16 5.13a3 3 0 0 1 0 5.74" />
      </svg>
    ),
    globe: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" className={common}>
        <circle cx="12" cy="12" r="9" />
        <path d="M3 12h18M12 3a15 15 0 0 1 0 18M12 3a15 15 0 0 0 0 18" />
      </svg>
    ),
    book: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" className={common}>
        <path d="M4 5.5A2.5 2.5 0 0 1 6.5 3H20v15.5A2.5 2.5 0 0 0 17.5 16H4Z" />
        <path d="M6.5 3A2.5 2.5 0 0 0 4 5.5V21l2-1 2 1 2-1 2 1 2-1 2 1 2-1 2 1V16" />
      </svg>
    ),
    star: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" className={common}>
        <path d="m12 3 2.8 5.7 6.2.9-4.5 4.4 1.1 6.2L12 17.2 6.4 20.2l1.1-6.2L3 9.6l6.2-.9Z" />
      </svg>
    ),
    heart: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" className={common}>
        <path d="m12 20-1.4-1.3C5.4 14 2 10.9 2 7.1 2 4.4 4.2 2.3 6.9 2.3c1.5 0 3 .7 4.1 1.9 1.1-1.2 2.6-1.9 4.1-1.9 2.7 0 4.9 2.1 4.9 4.8 0 3.8-3.4 6.9-8.6 11.6Z" />
      </svg>
    ),
  };

  return icons[type] || icons.award;
}

export default function WhyChooseUs() {
  return (
    <section className="relative py-28">
      <div className="section-orbit right-[8%] top-[120px] bg-[#7b1df4]" />
      <div className="container relative z-10 mx-auto px-4">
        <div className="mb-16 text-center">
          <span className="glass-panel section-heading rounded-full px-5 py-3 text-xs text-[#d7a8ff]">
            Why Choose Us
          </span>
          <h2 className="mt-6 text-5xl font-semibold text-white md:text-6xl">
            Why <span className="text-[#ff76bf]">Shiva Ganga Nritya Dhaara</span>
          </h2>
          <p className="mx-auto mt-6 max-w-3xl text-lg leading-8 text-white/64">
            Experience the perfect balance of traditional depth, personal guidance, and a modern
            learning format that supports steady progress.
          </p>
        </div>

        <div className="mx-auto grid max-w-6xl gap-6 md:grid-cols-2 xl:grid-cols-3">
          {whyChooseUs.map((item, index) => (
            <article
              key={item.title}
              className={`group neo-card relative overflow-hidden rounded-[30px] p-8 transition-all duration-300 hover:-translate-y-1 ${
                index === 2 ? "ring-1 ring-[#d2296d]/45" : ""
              }`}
            >
              <div className="absolute right-6 top-6 h-4 w-4 rounded-full bg-[#ffd05c]" />
              <div className="mb-6 flex h-16 w-16 items-center justify-center rounded-[22px] bg-[linear-gradient(135deg,#d2296d,#7b1df4)] text-white shadow-[0_16px_34px_rgba(210,41,109,0.28)] transition-transform duration-300 group-hover:-rotate-6">
                <SectionIcon type={item.icon} />
              </div>
              <h3 className="text-4xl font-semibold text-white">{item.title}</h3>
              <p className="mt-5 text-base leading-8 text-white/62">{item.description}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
