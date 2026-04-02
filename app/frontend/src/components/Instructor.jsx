import { instructor } from "../data/mock";

export default function Instructor() {
  return (
    <section className="relative py-28">
      <div className="section-orbit right-[-100px] top-[80px] bg-[#d2296d]" />
      <div className="container relative z-10 mx-auto px-4">
        <div className="mb-16 text-center">
          <span className="glass-panel section-heading rounded-full px-5 py-3 text-xs text-[#d7a8ff]">
            Meet Your Guru
          </span>
          <h2 className="mt-6 text-5xl font-semibold text-white md:text-6xl">
            About the <span className="text-[#7b7cff]">Instructor</span>
          </h2>
        </div>

        <div className="mx-auto grid max-w-7xl items-center gap-12 lg:grid-cols-[0.95fr_1.05fr]">
          <div className="relative">
            <div className="neo-card overflow-hidden rounded-[36px] p-3">
              <img
                src={instructor.image}
                alt={instructor.name}
                className="h-[680px] w-full rounded-[30px] object-cover"
              />
            </div>
            <div className="glass-panel absolute bottom-8 left-8 rounded-[24px] px-6 py-5">
              <div className="section-heading text-[0.68rem] text-[#d7a8ff]">Experience</div>
              <div className="mt-2 text-3xl font-semibold text-white">{instructor.experience}</div>
            </div>
          </div>

          <div>
            <div className="section-heading text-xs text-[#ff76bf]">Master profile</div>
            <h3 className="mt-5 text-5xl font-semibold text-white">{instructor.name}</h3>
            <div className="mt-6 flex flex-wrap gap-3">
              {instructor.qualifications.map((qualification) => (
                <span
                  key={qualification}
                  className="rounded-full border border-white/10 bg-white/6 px-4 py-2 text-sm font-medium text-white/82"
                >
                  {qualification}
                </span>
              ))}
            </div>

            <p className="mt-8 text-lg leading-9 text-white/68">{instructor.bio}</p>

            <div className="mt-10 grid gap-4 sm:grid-cols-2">
              <article className="neo-card rounded-[28px] p-6">
                <div className="section-heading text-[0.68rem] text-[#7b7cff]">Teaching System</div>
                <h4 className="mt-4 text-3xl font-semibold text-white">Certified Training</h4>
                <p className="mt-4 text-sm leading-7 text-white/62">
                  Formal Bharatanatyam education supported by structured teaching practice.
                </p>
              </article>
              <article className="neo-card rounded-[28px] p-6">
                <div className="section-heading text-[0.68rem] text-[#ff76bf]">Guidance Model</div>
                <h4 className="mt-4 text-3xl font-semibold text-white">Student Focused</h4>
                <p className="mt-4 text-sm leading-7 text-white/62">
                  Patient correction, personal attention, and encouraging mentorship.
                </p>
              </article>
            </div>

            <blockquote className="glass-panel mt-8 rounded-[28px] border-l-4 border-l-[#d2296d] px-6 py-6 text-lg italic leading-8 text-white/78">
              Dance is a disciplined art, but it should also feel alive, meaningful, and deeply
              personal to the student.
            </blockquote>
          </div>
        </div>
      </div>
    </section>
  );
}
