import { danceStyles } from "../data/mock";

export default function DanceStyles() {
  return (
    <section id="styles" className="relative py-28">
      <div className="section-orbit left-[10%] top-[40px] bg-[#d2296d]" />
      <div className="container relative z-10 mx-auto px-4">
        <div className="mb-16 text-center">
          <span className="glass-panel section-heading rounded-full px-5 py-3 text-xs text-[#d7a8ff]">
            Our Offerings
          </span>
          <h2 className="mt-6 text-5xl font-semibold text-white md:text-6xl">
            Dance <span className="text-[#7b7cff]">Styles</span> We Teach
          </h2>
          <p className="mx-auto mt-6 max-w-3xl text-lg leading-8 text-white/64">
            Explore classical discipline, expressive training, and performance-oriented learning.
          </p>
        </div>

        <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-4">
          {danceStyles.map((style) => (
            <article
              key={style.id}
              className="group neo-card overflow-hidden rounded-[30px] transition-transform duration-500 hover:-translate-y-2"
            >
              <div className="relative h-[420px] overflow-hidden">
                <img
                  src={style.image}
                  alt={style.name}
                  className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#0a0711] via-[#0a0711]/10 to-transparent" />
                <div className="glass-panel absolute left-5 top-5 rounded-full px-4 py-2 text-xs font-semibold text-white/88">
                  {style.duration}
                </div>
                <div className="absolute inset-x-0 bottom-0 p-6">
                  <h3 className="text-4xl font-semibold leading-none text-white">{style.name}</h3>
                </div>
              </div>
              <div className="p-6">
                <p className="text-sm leading-7 text-white/62">{style.description}</p>
                <div className="mt-6 rounded-[22px] border border-white/8 bg-white/[0.03] p-4 text-sm italic leading-7 text-[#d4a6ff]">
                  {style.culturalMeaning}
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
