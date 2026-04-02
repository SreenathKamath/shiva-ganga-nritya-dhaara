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
    <section id="about" className="relative py-28">
      <div className="section-orbit left-[-120px] top-[160px] bg-[#6e29ff]" />
      <div className="container relative z-10 mx-auto px-4">
        <div className="mb-16 text-center">
          <span className="glass-panel section-heading rounded-full px-5 py-3 text-xs text-[#d7a8ff]">
            Our Story
          </span>
          <h2 className="mt-6 text-5xl font-semibold text-white md:text-6xl">
            About <span className="text-[#ff76bf]">Shiva Ganga Nritya Dhaara</span>
          </h2>
          <p className="mx-auto mt-6 max-w-3xl text-lg leading-8 text-white/65">
            A classical dance school designed for heritage, expression, and disciplined growth in a
            more immersive learning environment.
          </p>
        </div>

        <div className="grid items-center gap-12 lg:grid-cols-[1.05fr_0.95fr]">
          <div className="relative">
            <div className="absolute -inset-4 rounded-[34px] bg-[linear-gradient(135deg,rgba(123,29,244,0.25),rgba(210,41,109,0.18))] blur-3xl" />
            <div className="neo-card relative overflow-hidden rounded-[34px] p-3">
              <img
                src="https://images.unsplash.com/photo-1746983047239-cb817eba7d05?auto=format&fit=crop&w=1200&q=80"
                alt="Classical dance performance"
                className="h-[620px] w-full rounded-[28px] object-cover"
              />
              <div className="absolute inset-0 rounded-[34px] bg-gradient-to-t from-[#08060e] via-transparent to-transparent" />
              <div className="glass-panel absolute bottom-10 left-10 rounded-[24px] px-6 py-5">
                <div className="section-heading text-[0.68rem] text-[#d7a8ff]">Established</div>
                <div className="mt-2 text-4xl font-semibold text-white">2020</div>
              </div>
            </div>
          </div>

          <div>
            <div className="section-heading text-xs text-[#7b7cff]">Dance philosophy</div>
            <h3 className="mt-5 text-4xl font-semibold leading-tight text-white md:text-5xl">
              A sacred art form reframed for a more advanced generation of learners.
            </h3>
            <p className="mt-8 text-lg leading-9 text-white/68">
              Founded in 2020, the academy was built to create a serious yet welcoming home for
              classical dance learning in Kerala. The focus is not only on choreography, but on
              posture, rhythm, expression, discipline, and cultural understanding.
            </p>
            <p className="mt-6 text-lg leading-9 text-white/60">
              Students are guided with a balance of tradition and accessibility, helping children,
              young adults, and working learners grow steadily within a structured training path.
            </p>

            <div className="mt-10 grid gap-4 sm:grid-cols-2">
              {features.map((feature, index) => (
                <article key={feature.title} className="neo-card rounded-[26px] p-6">
                  <div className="mb-4 flex items-center gap-3">
                    <div className="flex h-11 w-11 items-center justify-center rounded-2xl bg-[linear-gradient(135deg,#d2296d,#7b1df4)] text-sm font-semibold text-white">
                      0{index + 1}
                    </div>
                    <h4 className="text-2xl font-semibold text-white">{feature.title}</h4>
                  </div>
                  <p className="text-sm leading-7 text-white/62">{feature.description}</p>
                </article>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
