import Link from "next/link";

const NAV_LINKS = [
    { name: "home", href: "#home", key: "home" },
    { name: "education", href: "#education", key: "education" },
    { name: "tech", href: "#tech-stack", key: "tech" },
    { name: "experience", href: "#experience", key: "experience" },
];

const FooterSection = ({ title, children }) => (
    <div className="space-y-5">
        <h4 className="text-white text-xs font-bold uppercase tracking-[0.2em] opacity-90">
            {title}
        </h4>
        {children}
    </div>
);

export default function Footer({ t, socialLinks }) {
    const currentYear = new Date().getFullYear();

    // Mapping socialLinks ke format array untuk loop
    const footerSocials = [
        { name: "github", href: socialLinks.github },
        { name: "linkedin", href: socialLinks.linkedin },
        { name: "email", href: socialLinks.email },
    ];

    return (
        <footer className="mt-12 border-t border-white/10 bg-bg/50 backdrop-blur-md font-mono">
            <div className="max-w-7xl mx-auto px-6 md:px-12 py-10">
                <div className="grid grid-cols-1 md:grid-cols-12 gap-y-8 md:gap-x-12">

                    {/* Brand */}
                    <div className="md:col-span-5 flex flex-col space-y-4">
                        <Link href="/" className="text-xl font-bold tracking-tighter group flex items-center">
                            <span className="text-primary group-hover:mr-1 transition-all">~/</span>
                            <span className="text-white">rndyachmad</span>
                            <span className="animate-pulse text-primary ml-1">_</span>
                        </Link>
                        <p className="text-text-secondary text-sm leading-[1.7] max-w-[380px]">
                            {t.footer.description} <span className="text-white">Laravel</span> ecosystem.
                        </p>
                    </div>

                    {/* Navigation */}
                    <div className="md:col-span-4 grid grid-cols-2 gap-6">
                        <FooterSection title={t.footer.navTitle}>
                            <ul className="space-y-2 text-sm">
                                {NAV_LINKS.map((link) => (
                                    <li key={link.name}>
                                        <Link href={link.href} className="text-text-secondary hover:text-primary transition-all hover:translate-x-1 inline-block capitalize">
                                            {t.nav[link.key]}
                                        </Link>
                                    </li>
                                ))}
                            </ul>
                        </FooterSection>

                        <FooterSection title={t.footer.socialTitle}>
                            <ul className="space-y-2 text-sm">
                                {footerSocials.map((link) => (
                                    <li key={link.name}>
                                        <a href={link.href} target="_blank" rel="noopener noreferrer" className="text-text-secondary hover:text-primary transition-all hover:translate-x-1 inline-block capitalize">
                                            {link.name}
                                        </a>
                                    </li>
                                ))}
                            </ul>
                        </FooterSection>
                    </div>

                    {/* Mantra */}
                    <div className="md:col-span-3">
                        <div className="p-5 rounded-xl border border-white/5">
                            <p className="text-xs text-text-secondary italic leading-[1.6]">
                                "{t.footer.mantra}"
                            </p>
                        </div>
                    </div>
                </div>

                {/* Bottom Bar */}
                <div className="mt-12 pt-6 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-4 text-[10px] text-text-secondary uppercase tracking-[0.2em]">
                    <p className="opacity-60 text-center md:text-left">
                        © {currentYear} <span className="text-white/80">Rendy Achmad</span> • {t.footer.rights}
                    </p>
                    <div className="flex gap-4">
                        {t.footer.techStack.map(tech => <span key={tech}>{tech}</span>)}
                    </div>
                </div>
            </div>
        </footer>
    );
}