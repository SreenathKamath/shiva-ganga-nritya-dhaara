import { academyInfo } from "../data/mock";

const links = [
  { id: "home", label: "Home" },
  { id: "about", label: "About" },
  { id: "styles", label: "Dance Styles" },
  { id: "classes", label: "Classes" },
  { id: "gallery", label: "Gallery" },
  { id: "contact", label: "Contact" },
];

function scrollToSection(sectionId) {
  const element = document.getElementById(sectionId);
  if (element) {
    element.scrollIntoView({ behavior: "smooth", block: "start" });
  }
}

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="relative px-4 pb-8 pt-14">
      <div className="glass-panel mx-auto max-w-7xl rounded-[36px] px-8 py-12">
        <div className="grid gap-12 md:grid-cols-[1.2fr_0.8fr_0.8fr]">
          <div>
            <div className="flex items-center gap-4">
              <span className="flex h-16 w-16 shrink-0 items-center justify-center overflow-hidden rounded-3xl border border-white/12 bg-white/95 p-2 shadow-[0_16px_36px_rgba(0,0,0,0.28)]">
                <img src={academyInfo.logo} alt="" className="h-full w-full object-contain" />
              </span>
              <span>
                <span className="section-heading block text-xs text-[#d7a8ff]">Classical Dance</span>
                <span className="mt-2 block text-4xl font-semibold leading-none text-white">
                  {academyInfo.name}
                </span>
              </span>
            </div>
            <p className="mt-5 max-w-xl text-lg leading-8 text-white/62">
              Preserving the divine art of classical Indian dance through disciplined teaching,
              cultural depth, and a warm learning environment.
            </p>
          </div>

          <div>
            <h3 className="text-3xl font-semibold text-white">Quick Links</h3>
            <ul className="mt-5 space-y-4 text-white/65">
              {links.map((link) => (
                <li key={link.id}>
                  <button type="button" onClick={() => scrollToSection(link.id)} className="hover:text-white">
                    {link.label}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="text-3xl font-semibold text-white">Contact</h3>
            <div className="mt-5 space-y-4 text-white/65">
              <p>{academyInfo.contact.displayPhone}</p>
              <p>{academyInfo.contact.email}</p>
              <p>
                {academyInfo.contact.location.address}, {academyInfo.contact.location.city}
              </p>
            </div>
          </div>
        </div>

        <div className="mt-10 border-t border-white/10 pt-6 text-sm text-white/45">
          Copyright {currentYear} {academyInfo.name}. All rights reserved.
        </div>
      </div>
    </footer>
  );
}
