import { danceStyles } from "../data/mock";

export default function DanceStyles() {
  return (
    <section id="styles" className="bg-gradient-to-b from-[#FFF8F0] to-white py-20">
      <div className="container mx-auto px-4">
        <div className="mb-16 text-center">
          <span className="rounded-full bg-[#8B1538]/10 px-4 py-2 text-sm font-semibold uppercase tracking-wider text-[#8B1538]">
            Our Offerings
          </span>
          <h2 className="mt-5 text-4xl font-bold text-gray-900 md:text-5xl">
            Dance <span className="text-[#8B1538]">Styles</span> We Teach
          </h2>
          <div className="mx-auto mt-4 h-1 w-24 bg-[#D4AF37]" />
          <p className="mx-auto mt-6 max-w-2xl text-lg text-gray-600">
            Explore classical discipline, expressive training, and performance-oriented learning.
          </p>
        </div>

        <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-4">
          {danceStyles.map((style) => (
            <article
              key={style.id}
              className="overflow-hidden rounded-3xl bg-white shadow-lg transition-transform duration-300 hover:-translate-y-1 hover:shadow-2xl"
            >
              <div className="relative h-80 overflow-hidden">
                <img src={style.image} alt={style.name} className="h-full w-full object-cover" />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />
                <div className="absolute right-4 top-4 rounded-full bg-[#D4AF37] px-3 py-1 text-xs font-semibold text-white">
                  {style.duration}
                </div>
                <div className="absolute bottom-0 left-0 right-0 p-6">
                  <h3 className="text-2xl font-bold text-white">{style.name}</h3>
                </div>
              </div>
              <div className="space-y-4 p-6">
                <p className="text-sm leading-relaxed text-gray-600">{style.description}</p>
                <p className="text-sm italic text-[#8B1538]">{style.culturalMeaning}</p>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
