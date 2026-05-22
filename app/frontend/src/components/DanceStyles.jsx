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
              tabIndex={0}
              aria-label={`${style.name}: ${style.flipDescription}`}
              className="group h-[500px] rounded-[30px] [perspective:1400px] focus:outline-none"
            >
              <div className="relative h-full rounded-[30px] transition-transform duration-700 [transform-style:preserve-3d] group-hover:[transform:rotateY(180deg)] group-focus:[transform:rotateY(180deg)]">
                <div className="neo-card absolute inset-0 overflow-hidden rounded-[30px] [backface-visibility:hidden]">
                  <img
                    src={style.image}
                    alt={style.name}
                    className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-110 group-focus:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#0a0711] via-[#0a0711]/18 to-transparent" />
                  <div className="glass-panel absolute left-5 top-5 rounded-full px-4 py-2 text-xs font-semibold text-white/88">
                    {style.duration}
                  </div>
                  <div className="absolute inset-x-0 bottom-0 p-6">
                    <div className="section-heading text-[0.65rem] text-[#d4a6ff]">
                      {style.culturalMeaning}
                    </div>
                    <h3 className="mt-4 text-4xl font-semibold leading-none text-white">
                      {style.name}
                    </h3>
                  </div>
                </div>

                <div className="neo-card absolute inset-0 flex items-center rounded-[30px] p-7 [backface-visibility:hidden] [transform:rotateY(180deg)]">
                  <div className="absolute inset-0 rounded-[30px] bg-[radial-gradient(circle_at_20%_15%,rgba(255,118,191,0.18),transparent_34%),linear-gradient(145deg,rgba(13,9,23,0.98),rgba(36,13,48,0.96)_55%,rgba(11,9,20,0.98))]" />
                  <div className="relative">
                    <div className="mb-6 h-1 w-16 rounded-full bg-[linear-gradient(90deg,#ff76bf,#7b7cff)]" />
                    <p className="text-xl leading-9 text-white/82 md:text-[1.05rem]">
                      {style.flipDescription}
                    </p>
                  </div>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
