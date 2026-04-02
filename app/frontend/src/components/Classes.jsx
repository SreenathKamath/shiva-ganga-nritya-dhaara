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
    <section id="classes" className="relative py-28">
      <div className="section-orbit left-[-80px] top-[160px] bg-[#4f6bff]" />
      <div className="container relative z-10 mx-auto px-4">
        <div className="mb-16 text-center">
          <span className="glass-panel section-heading rounded-full px-5 py-3 text-xs text-[#d7a8ff]">
            Class Details
          </span>
          <h2 className="mt-6 text-5xl font-semibold text-white md:text-6xl">
            Flexible <span className="text-[#7b7cff]">Learning Options</span>
          </h2>
          <p className="mx-auto mt-6 max-w-3xl text-lg leading-8 text-white/64">
            Choose the mode that suits your schedule and learning preference without losing
            structure, discipline, or personal guidance.
          </p>
        </div>

        <div className="mx-auto max-w-6xl space-y-8">
          <div className="grid gap-6 lg:grid-cols-2">
            <div className="neo-card rounded-[30px] p-8">
              <div className="flex items-start gap-5">
                <div className="glass-panel flex h-16 w-16 items-center justify-center rounded-[22px] text-[#ff76bf]">
                  <DetailIcon type="calendar" />
                </div>
                <div>
                  <h3 className="text-4xl font-semibold text-white">Class Days</h3>
                  <p className="mt-2 text-white/56">Weekend batches</p>
                </div>
              </div>
              <div className="mt-7 flex flex-wrap gap-3">
                {classDetails.schedule.days.map((day) => (
                  <span
                    key={day}
                    className="rounded-2xl bg-[linear-gradient(135deg,#d2296d,#8b1538)] px-5 py-3 text-sm font-semibold text-white"
                  >
                    {day}
                  </span>
                ))}
              </div>
            </div>

            <div className="neo-card rounded-[30px] p-8">
              <div className="flex items-start gap-5">
                <div className="glass-panel flex h-16 w-16 items-center justify-center rounded-[22px] text-[#7b7cff]">
                  <DetailIcon type="clock" />
                </div>
                <div>
                  <h3 className="text-4xl font-semibold text-white">Timing</h3>
                  <p className="mt-2 text-white/56">Convenient evening slots</p>
                </div>
              </div>
              <p className="mt-7 text-lg leading-8 text-white/72">{classDetails.schedule.timing}</p>
            </div>
          </div>

          <div className="grid gap-6 lg:grid-cols-2">
            {classDetails.modes.map((mode) => (
              <article key={mode.type} className="neo-card relative overflow-hidden rounded-[30px] p-8">
                <div className="absolute -right-8 -top-8 h-28 w-28 rounded-full bg-white/[0.04]" />
                <div className="relative flex items-start gap-5">
                  <div className="flex h-16 w-16 items-center justify-center rounded-[22px] bg-[linear-gradient(135deg,#d2296d,#7b1df4)] text-white">
                    <DetailIcon type={mode.type === "Offline" ? "pin" : "monitor"} />
                  </div>
                  <div>
                    <h3 className="text-4xl font-semibold text-white">
                      {mode.type} <span className="text-white/65">Classes</span>
                    </h3>
                    <p className="mt-5 text-lg leading-8 text-white/68">{mode.description}</p>
                    <p className="mt-4 section-heading text-[0.68rem] text-[#d7a8ff]">
                      {mode.accent}
                    </p>
                  </div>
                </div>
              </article>
            ))}
          </div>

          <div className="rounded-[34px] bg-[linear-gradient(135deg,#30081f_0%,#5b0e3d_40%,#421080_100%)] p-10 shadow-[0_30px_60px_rgba(0,0,0,0.32)]">
            <h3 className="text-center text-5xl font-semibold text-white">What You Get</h3>
            <div className="mt-8 grid gap-4 md:grid-cols-2">
              {classDetails.features.map((feature) => (
                <div
                  key={feature}
                  className="rounded-[22px] border border-white/8 bg-white/[0.08] px-5 py-4 text-base leading-8 text-white/85"
                >
                  {feature}
                </div>
              ))}
            </div>
          </div>

          <div className="neo-card rounded-[30px] p-8">
            <h3 className="text-4xl font-semibold text-white">Our Location</h3>
            <p className="mt-4 text-lg text-white/62">
              {academyInfo.contact.location.address}, {academyInfo.contact.location.city},{" "}
              {academyInfo.contact.location.state}
            </p>
            <div className="mt-8 overflow-hidden rounded-[26px] border border-white/8">
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
            <Button className="px-9 py-4 text-base">Reserve Your Spot Today</Button>
          </div>
        </div>
      </div>
    </section>
  );
}
