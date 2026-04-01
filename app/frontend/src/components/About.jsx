const features = [
  {
    title: "Cultural Heritage",
    description: "Preserving classical movement traditions rooted in the Natya Shastra.",
  },
  {
    title: "Personal Growth",
    description: "Building confidence, discipline, and expressive presence through dance.",
  },
  {
    title: "Performance Readiness",
    description: "Structured progression from basics to stage-worthy performance practice.",
  },
  {
    title: "Holistic Learning",
    description: "Encouraging physical strength, emotional expression, and artistic maturity.",
  },
];

export default function About() {
  return (
    <section id="about" className="bg-gradient-to-b from-white to-[#FFF8F0] py-20">
      <div className="container mx-auto px-4">
        <div className="mb-16 text-center">
          <span className="rounded-full bg-[#8B1538]/10 px-4 py-2 text-sm font-semibold uppercase tracking-wider text-[#8B1538]">
            Our Story
          </span>
          <h2 className="mt-5 text-4xl font-bold text-gray-900 md:text-5xl">
            About <span className="text-[#8B1538]">Shiva Ganga Nritya Dhaara</span>
          </h2>
          <div className="mx-auto mt-4 h-1 w-24 bg-[#D4AF37]" />
        </div>

        <div className="grid items-center gap-12 lg:grid-cols-2">
          <div className="relative">
            <div className="absolute -inset-4 rounded-3xl bg-gradient-to-r from-[#8B1538]/20 to-[#D4AF37]/20 blur-2xl" />
            <div className="relative overflow-hidden rounded-3xl shadow-2xl">
              <img
                src="https://images.unsplash.com/photo-1746983047239-cb817eba7d05?auto=format&fit=crop&w=1200&q=80"
                alt="Classical dance performance"
                className="h-[520px] w-full object-cover"
              />
            </div>
          </div>

          <div>
            <h3 className="mb-6 text-3xl font-bold text-gray-900">A journey through sacred dance</h3>
            <p className="mb-5 text-lg leading-relaxed text-gray-700">
              Founded in 2020, the academy was built to create a serious yet welcoming home for
              classical dance learning in Kerala. The focus is not only on choreography, but on
              posture, rhythm, expression, discipline, and cultural understanding.
            </p>
            <p className="mb-8 text-lg leading-relaxed text-gray-700">
              Students are guided with a balance of tradition and accessibility, helping children,
              young adults, and working learners grow steadily within a structured training path.
            </p>

            <div className="grid gap-4 sm:grid-cols-2">
              {features.map((feature) => (
                <div
                  key={feature.title}
                  className="rounded-2xl bg-white p-5 shadow-sm transition-shadow duration-300 hover:shadow-md"
                >
                  <h4 className="mb-2 font-semibold text-gray-900">{feature.title}</h4>
                  <p className="text-sm leading-relaxed text-gray-600">{feature.description}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
