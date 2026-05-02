import Link from "next/link";

const NAV_LINKS = [
  { href: "#home", key: "home" },
  { href: "#education", key: "education" },
  { href: "#tech-stack", key: "tech" },
  { href: "#experience", key: "experience" },
  { href: "#connect", key: "connect" },
];

function FooterSection({ title, children }) {
  return (
    <div className="space-y-3">
      <h4 className="text-white text-xs font-bold uppercase tracking-widest opacity-90">
        {title}
      </h4>
      {children}
    </div>
  );
}

export default function Footer({ t, socialLinks }) {
  const currentYear = new Date().getFullYear();

  const footerSocials = [
    { name: "github", href: socialLinks.github },
    { name: "linkedin", href: socialLinks.linkedin },
    { name: "email", href: socialLinks.email },
  ];

  return (
    <footer className="mt-auto border-t border-white/10 bg-bg font-mono">
      <div className="mx-auto max-w-7xl px-5 py-10 md:px-10 md:py-12">
        <div className="grid grid-cols-1 gap-10 sm:grid-cols-2 lg:grid-cols-12 lg:gap-6">
          {/* Brand */}
          <div className="flex flex-col space-y-3 lg:col-span-5">
            <Link
              href="/"
              className="group flex w-fit items-center text-lg font-bold tracking-tighter"
            >
              <span className="text-orange-500 transition-all group-hover:mr-1">
                ~/
              </span>
              <span className="text-white">rndyachmad</span>
              <span className="ml-1 animate-pulse text-orange-500">_</span>
            </Link>

            <p className="max-w-[320px] text-sm leading-relaxed text-gray-400">
              {t.footer.description}{" "}
              <span className="font-semibold text-white">Laravel</span>{" "}
              ecosystem.
            </p>
          </div>

          {/* Navigation */}
          <div className="grid grid-cols-2 gap-4 lg:col-span-4">
            <FooterSection title={t.footer.navTitle}>
              <ul className="space-y-2.5 text-sm">
                {NAV_LINKS.map((link) => (
                  <li key={link.key}>
                    <Link
                      href={link.href}
                      className="inline-block capitalize text-gray-400 transition-all hover:translate-x-1 hover:text-orange-500"
                    >
                      {t.nav[link.key]}
                    </Link>
                  </li>
                ))}
              </ul>
            </FooterSection>

            <FooterSection title={t.footer.socialTitle}>
              <ul className="space-y-2.5 text-sm">
                {footerSocials.map((link) => (
                  <li key={link.name}>
                    <a
                      href={link.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-block capitalize text-gray-400 transition-all hover:translate-x-1 hover:text-orange-500"
                    >
                      {link.name}
                    </a>
                  </li>
                ))}
              </ul>
            </FooterSection>
          </div>

          {/* Mantra */}
          <div className="sm:col-span-2 lg:col-span-3">
            <div className="flex h-full items-center rounded-xl border border-white/5 bg-surface p-5 transition-colors hover:border-orange-500/30">
              <p className="w-full text-center text-sm italic leading-relaxed text-gray-400 lg:text-left">
                "{t.footer.mantra}"
              </p>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-10 flex flex-col items-center justify-between gap-4 border-t border-white/5 pt-6 text-[10px] uppercase tracking-widest text-gray-500 md:flex-row">
          <p className="text-center md:text-left">
            © {currentYear} <span className="text-white">Rendy Achmad</span> •{" "}
            {t.footer.rights}
          </p>

          <div className="flex flex-wrap justify-center gap-4 font-bold text-gray-400">
            {t.footer.techStack.map((tech) => (
              <span
                key={tech}
                className="cursor-default transition-colors hover:text-orange-500"
              >
                {tech}
              </span>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}