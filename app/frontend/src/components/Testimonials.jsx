import { testimonials } from "../data/mock";

export default function Testimonials() {
  return (
    <section className="bg-gradient-to-b from-[#FFF8F0] to-white py-20">
      <div className="container mx-auto px-4">
        <div className="mb-16 text-center">
          <span className="rounded-full bg-[#8B1538]/10 px-4 py-2 text-sm font-semibold uppercase tracking-wider text-[#8B1538]">
            Student Stories
          </span>
          <h2 className="mt-5 text-4xl font-bold text-gray-900 md:text-5xl">
            What Our <span className="text-[#8B1538]">Students Say</span>
          </h2>
          <div className="mx-auto mt-4 h-1 w-24 bg-[#D4AF37]" />
        </div>

        <div className="grid gap-8 md:grid-cols-3">
          {testimonials.map((testimonial) => (
            <article
              key={testimonial.id}
              className="rounded-3xl bg-white p-8 shadow-lg transition-transform duration-300 hover:-translate-y-1 hover:shadow-2xl"
            >
              <div className="mb-4 flex gap-1 text-[#D4AF37]">
                {Array.from({ length: testimonial.rating }).map((_, index) => (
                  <span key={index}>*</span>
                ))}
              </div>
              <p className="mb-6 italic leading-relaxed text-gray-700">"{testimonial.text}"</p>
              <div className="border-t border-gray-100 pt-4">
                <div className="font-semibold text-gray-900">{testimonial.name}</div>
                <div className="text-sm text-gray-600">{testimonial.role}</div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
