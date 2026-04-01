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
    <footer className="bg-gradient-to-b from-[#8B1538] to-[#6B0F2A] text-white">
      <div className="container mx-auto px-4 py-16">
        <div className="mb-12 grid gap-12 md:grid-cols-4">
          <div className="md:col-span-2">
            <div className="text-sm font-semibold uppercase tracking-[0.3em] text-[#D4AF37]">
              Classical Dance
            </div>
            <div className="mt-2 text-2xl font-bold">{academyInfo.name}</div>
            <p className="mt-4 max-w-md leading-relaxed text-white/80">
              Preserving the divine art of classical Indian dance through disciplined teaching,
              cultural depth, and a warm learning environment.
            </p>
          </div>

          <div>
            <h3 className="mb-4 text-lg font-bold">Quick Links</h3>
            <ul className="space-y-3 text-white/75">
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
            <h3 className="mb-4 text-lg font-bold">Contact Us</h3>
            <div className="space-y-3 text-white/75">
              <p>{academyInfo.contact.displayPhone}</p>
              <p>{academyInfo.contact.email}</p>
              <p>
                {academyInfo.contact.location.address}, {academyInfo.contact.location.city}
              </p>
            </div>
          </div>
        </div>

        <div className="border-t border-white/10 pt-8 text-sm text-white/60">
          Copyright {currentYear} {academyInfo.name}. All rights reserved.
        </div>
      </div>
    </footer>
  );
}
