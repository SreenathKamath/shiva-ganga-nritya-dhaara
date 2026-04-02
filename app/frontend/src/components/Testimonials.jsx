import { testimonials } from "../data/mock";

export default function Testimonials() {
  return (
    <section className="relative py-28">
      <div className="section-orbit right-[12%] top-[60px] bg-[#d2296d]" />
      <div className="container relative z-10 mx-auto px-4">
        <div className="mb-16 text-center">
          <span className="glass-panel section-heading rounded-full px-5 py-3 text-xs text-[#d7a8ff]">
            Student Stories
          </span>
          <h2 className="mt-6 text-5xl font-semibold text-white md:text-6xl">
            What Our <span className="text-[#7b7cff]">Students Say</span>
          </h2>
        </div>

        <div className="grid gap-6 lg:grid-cols-3">
          {testimonials.map((testimonial, index) => (
            <article
              key={testimonial.id}
              className={`neo-card rounded-[30px] p-8 transition-transform duration-300 hover:-translate-y-1 ${
                index === 1 ? "ring-1 ring-[#7b7cff]/35" : ""
              }`}
            >
              <div className="mb-5 flex gap-1 text-[#ffd05c]">
                {Array.from({ length: testimonial.rating }).map((_, starIndex) => (
                  <span key={starIndex}>*</span>
                ))}
              </div>
              <p className="text-lg italic leading-9 text-white/72">"{testimonial.text}"</p>
              <div className="mt-8 border-t border-white/8 pt-5">
                <div className="text-3xl font-semibold text-white">{testimonial.name}</div>
                <div className="mt-2 text-sm text-white/45">{testimonial.role}</div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
