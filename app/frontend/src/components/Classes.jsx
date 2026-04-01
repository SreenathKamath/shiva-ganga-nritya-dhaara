import { Button } from "./ui/button";
import { academyInfo, classDetails } from "../data/mock";

function DetailIcon({ type }) {
  const common = "h-8 w-8";
  const icons = {
    calendar: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" className={common}>
        <rect x="3" y="5" width="18" height="16" rx="2" />
        <path d="M16 3v4M8 3v4M3 10h18" />
      </svg>
    ),
    clock: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" className={common}>
        <circle cx="12" cy="12" r="9" />
        <path d="M12 7v6l4 2" />
      </svg>
    ),
    pin: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" className={common}>
        <path d="M12 21s7-5.8 7-11a7 7 0 1 0-14 0c0 5.2 7 11 7 11Z" />
        <circle cx="12" cy="10" r="2.5" />
      </svg>
    ),
    monitor: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" className={common}>
        <rect x="3" y="4" width="18" height="12" rx="2" />
        <path d="M8 20h8M12 16v4" />
      </svg>
    ),
  };

  return icons[type] || icons.calendar;
}

export default function Classes() {
  return (
    <section id="classes" className="bg-gradient-to-b from-white to-[#FFF8F0] py-24">
      <div className="container mx-auto px-4">
        <div className="mb-16 text-center">
          <span className="rounded-full bg-[#8B1538]/10 px-5 py-2 text-sm font-semibold uppercase tracking-[0.22em] text-[#8B1538]">
            Class Details
          </span>
          <h2 className="mt-5 text-4xl font-bold text-gray-900 md:text-5xl">
            Flexible <span className="text-[#8B1538]">Learning Options</span>
          </h2>
          <div className="mx-auto mt-4 h-1 w-24 bg-[#D4AF37]" />
          <p className="mx-auto mt-6 max-w-3xl text-lg leading-relaxed text-slate-600">
            Choose the mode that suits your schedule and learning preference without losing
            structure, discipline, or personal guidance.
          </p>
        </div>

        <div className="mx-auto max-w-6xl space-y-12">
          <div className="grid gap-6 lg:grid-cols-2">
            <div className="rounded-[30px] bg-white p-9 shadow-[0_18px_50px_rgba(15,23,42,0.08)]">
              <div className="flex items-start gap-5">
                <div className="flex h-16 w-16 items-center justify-center rounded-2xl bg-[#8B1538]/10 text-[#8B1538]">
                  <DetailIcon type="calendar" />
                </div>
                <div>
                  <h3 className="text-[2rem] font-bold leading-tight text-slate-900">Class Days</h3>
                  <p className="text-lg text-slate-600">Weekend batches</p>
                </div>
              </div>
              <div className="mt-7 flex flex-wrap gap-3">
                {classDetails.schedule.days.map((day) => (
                  <span
                    key={day}
                    className="rounded-xl bg-[#8B1538] px-5 py-3 text-base font-semibold text-white shadow-[0_10px_20px_rgba(139,21,56,0.18)]"
                  >
                    {day}
                  </span>
                ))}
              </div>
            </div>
            <div className="rounded-[30px] bg-white p-9 shadow-[0_18px_50px_rgba(15,23,42,0.08)]">
              <div className="flex items-start gap-5">
                <div className="flex h-16 w-16 items-center justify-center rounded-2xl bg-[#8B1538]/10 text-[#8B1538]">
                  <DetailIcon type="clock" />
                </div>
                <div>
                  <h3 className="text-[2rem] font-bold leading-tight text-slate-900">Timing</h3>
                  <p className="text-lg text-slate-600">Convenient evening slots</p>
                </div>
              </div>
              <p className="mt-7 text-[1.08rem] text-slate-700">{classDetails.schedule.timing}</p>
            </div>
          </div>

          <div className="grid gap-6 lg:grid-cols-2">
            {classDetails.modes.map((mode) => (
              <article
                key={mode.type}
                className="relative overflow-hidden rounded-[30px] bg-white p-9 shadow-[0_18px_50px_rgba(15,23,42,0.08)]"
              >
                <div className="absolute -right-5 -top-5 h-28 w-28 rounded-full bg-[#8B1538]/7" />
                <div className="relative flex items-start gap-5">
                  <div className="flex h-16 w-16 items-center justify-center rounded-2xl bg-[#8B1538] text-white shadow-[0_14px_24px_rgba(139,21,56,0.24)]">
                    <DetailIcon type={mode.type === "Offline" ? "pin" : "monitor"} />
                  </div>
                  <div>
                    <h3 className="text-[2rem] font-bold leading-tight text-slate-900">
                      <span className={mode.type === "Online" ? "text-[#8B1538]" : ""}>
                        {mode.type}
                      </span>{" "}
                      Classes
                    </h3>
                    <p className="mt-5 max-w-[24ch] text-[1.08rem] leading-9 text-slate-700">
                      {mode.description}
                    </p>
                    <p className="mt-4 text-sm font-medium uppercase tracking-[0.12em] text-[#8B1538]/70">
                      {mode.accent}
                    </p>
                  </div>
                </div>
              </article>
            ))}
          </div>

          <div className="rounded-[34px] bg-gradient-to-br from-[#8B1538] to-[#7C1435] p-10 text-white shadow-[0_24px_60px_rgba(139,21,56,0.24)] md:p-12">
            <h3 className="mb-8 text-center text-3xl font-bold md:text-4xl">What You Get</h3>
            <div className="grid gap-4 md:grid-cols-2">
              {classDetails.features.map((feature) => (
                <div
                  key={feature}
                  className="rounded-2xl bg-white/8 px-5 py-4 text-lg font-medium leading-relaxed shadow-inner shadow-white/5"
                >
                  {feature}
                </div>
              ))}
            </div>
          </div>

          <div className="rounded-[30px] bg-white p-8 shadow-[0_18px_50px_rgba(15,23,42,0.08)]">
            <h3 className="mb-3 text-3xl font-bold text-slate-900">Our Location</h3>
            <p className="mb-6 text-lg text-slate-600">
              {academyInfo.contact.location.address}, {academyInfo.contact.location.city},{" "}
              {academyInfo.contact.location.state}
            </p>
            <div className="overflow-hidden rounded-[24px]">
              <iframe
                src={academyInfo.contact.location.mapUrl}
                width="100%"
                height="320"
                style={{ border: 0 }}
                allowFullScreen=""
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="Academy location"
              />
            </div>
          </div>

          <div className="text-center">
            <Button className="rounded-full px-9 py-4 text-base shadow-[0_14px_28px_rgba(139,21,56,0.18)]">
              Reserve Your Spot Today
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}
