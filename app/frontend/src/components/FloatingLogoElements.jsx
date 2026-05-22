import { academyInfo } from "../data/mock";

const floatingLogos = [
  { className: "top-[7%] left-[6%] h-20 w-20", delay: "0s", duration: "18s" },
  { className: "top-[14%] right-[8%] h-28 w-28", delay: "-6s", duration: "22s" },
  { className: "top-[26%] left-[18%] h-16 w-16", delay: "-7s", duration: "19s" },
  { className: "top-[35%] right-[18%] h-24 w-24", delay: "-9s", duration: "20s" },
  { className: "top-[48%] left-[4%] h-20 w-20", delay: "-2s", duration: "19s" },
  { className: "top-[59%] right-[7%] h-32 w-32", delay: "-10s", duration: "24s" },
  { className: "top-[74%] left-[10%] h-24 w-24", delay: "-6s", duration: "21s" },
  { className: "top-[86%] right-[20%] h-20 w-20", delay: "-11s", duration: "23s" },
];

export default function FloatingLogoElements() {
  return (
    <div className="floating-logo-layer" aria-hidden="true">
      {floatingLogos.map((logo, index) => (
        <div
          key={`${logo.className}-${index}`}
          className={`floating-logo-mark ${logo.className}`}
          style={{
            "--float-delay": logo.delay,
            "--float-duration": logo.duration,
          }}
        >
          <img src={academyInfo.logo} alt="" />
        </div>
      ))}
    </div>
  );
}
