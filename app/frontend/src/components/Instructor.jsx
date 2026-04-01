import { instructor } from "../data/mock";

export default function Instructor() {
  return (
    <section className="bg-white py-20">
      <div className="container mx-auto px-4">
        <div className="mb-16 text-center">
          <span className="rounded-full bg-[#8B1538]/10 px-4 py-2 text-sm font-semibold uppercase tracking-wider text-[#8B1538]">
            Meet Your Guru
          </span>
          <h2 className="mt-5 text-4xl font-bold text-gray-900 md:text-5xl">
            About the <span className="text-[#8B1538]">Instructor</span>
          </h2>
          <div className="mx-auto mt-4 h-1 w-24 bg-[#D4AF37]" />
        </div>

        <div className="mx-auto grid max-w-6xl items-center gap-12 lg:grid-cols-5">
          <div className="lg:col-span-2">
            <div className="overflow-hidden rounded-3xl shadow-2xl">
              <img
                src={instructor.image}
                alt={instructor.name}
                className="h-[460px] w-full object-cover"
              />
            </div>
          </div>

          <div className="lg:col-span-3">
            <h3 className="mb-3 text-4xl font-bold text-gray-900">{instructor.name}</h3>
            <div className="mb-6 flex flex-wrap gap-3">
              {instructor.qualifications.map((qualification) => (
                <span
                  key={qualification}
                  className="rounded-full bg-[#8B1538]/10 px-4 py-2 text-sm font-medium text-[#8B1538]"
                >
                  {qualification}
                </span>
              ))}
            </div>

            <p className="mb-8 text-lg leading-relaxed text-gray-700">{instructor.bio}</p>

            <div className="grid gap-4 sm:grid-cols-2">
              <div className="rounded-2xl bg-[#FFF8F0] p-5">
                <h4 className="mb-2 font-semibold text-gray-900">Certified training</h4>
                <p className="text-sm leading-relaxed text-gray-600">
                  Formal Bharatanatyam education supported by structured teaching practice.
                </p>
              </div>
              <div className="rounded-2xl bg-[#FFF8F0] p-5">
                <h4 className="mb-2 font-semibold text-gray-900">Student-focused guidance</h4>
                <p className="text-sm leading-relaxed text-gray-600">
                  Patient correction, personal attention, and encouraging mentorship.
                </p>
              </div>
            </div>

            <blockquote className="mt-8 border-l-4 border-[#D4AF37] pl-6 text-lg italic text-gray-700">
              Dance is a disciplined art, but it should also feel alive, meaningful, and deeply
              personal to the student.
            </blockquote>
          </div>
        </div>
      </div>
    </section>
  );
}
