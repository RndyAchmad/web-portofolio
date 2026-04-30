import Link from "next/link";

const NAV_LINKS = [
    { name: "home", href: "#home", key: "home" },
    { name: "education", href: "#education", key: "education" },
    { name: "tech", href: "#tech-stack", key: "tech" },
    { name: "experience", href: "#experience", key: "experience" },
];

const FooterSection = ({ title, children }) => (
    <div className="space-y-3">
        <h4 className="text-white text-[11px] font-bold uppercase tracking-widest opacity-90">
            {title}
        </h4>
        {children}
    </div>
);

export default function Footer({ t, socialLinks }) {
    const currentYear = new Date().getFullYear();

    const footerSocials = [
        { name: "github", href: socialLinks.github },
        { name: "linkedin", href: socialLinks.linkedin },
        { name: "email", href: socialLinks.email },
    ];

    return (
        <footer className="mt-auto border-t border-white/10 bg-[#0a0a0a] font-mono">
            <div className="max-w-7xl mx-auto px-5 md:px-10 py-10 md:py-12">
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-12 gap-10 lg:gap-6">

                    {/* Brand */}
                    <div className="lg:col-span-5 flex flex-col space-y-3">
                        <Link href="/" className="text-lg font-bold tracking-tighter group flex items-center w-fit">
                            <span className="text-orange-500 group-hover:mr-1 transition-all">~/</span>
                            <span className="text-white">rndyachmad</span>
                            <span className="animate-pulse text-orange-500 ml-1">_</span>
                        </Link>
                        <p className="text-gray-400 text-[13px] leading-relaxed max-w-[320px]">
                            {t.footer.description} <span className="text-white font-semibold">Laravel</span> ecosystem.
                        </p>
                    </div>

                    {/* Navigation */}
                    <div className="lg:col-span-4 grid grid-cols-2 gap-4">
                        <FooterSection title={t.footer.navTitle}>
                            <ul className="space-y-2.5 text-[13px]">
                                {NAV_LINKS.map((link) => (
                                    <li key={link.name}>
                                        <Link href={link.href} className="text-gray-400 hover:text-orange-500 transition-all hover:translate-x-1 inline-block capitalize">
                                            {t.nav[link.key]}
                                        </Link>
                                    </li>
                                ))}
                            </ul>
                        </FooterSection>

                        <FooterSection title={t.footer.socialTitle}>
                            <ul className="space-y-2.5 text-[13px]">
                                {footerSocials.map((link) => (
                                    <li key={link.name}>
                                        <a href={link.href} target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-orange-500 transition-all hover:translate-x-1 inline-block capitalize">
                                            {link.name}
                                        </a>
                                    </li>
                                ))}
                            </ul>
                        </FooterSection>
                    </div>

                    {/* Mantra */}
                    <div className="sm:col-span-2 lg:col-span-3">
                        <div className="bg-[#161616] p-5 rounded-xl border border-white/5 hover:border-orange-500/30 transition-colors h-full flex items-center">
                            <p className="text-[13px] text-gray-400 italic leading-relaxed text-center lg:text-left w-full">
                                "{t.footer.mantra}"
                            </p>
                        </div>
                    </div>
                </div>

                {/* Bottom Bar */}
                <div className="mt-10 pt-6 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-4 text-[10px] text-gray-500 uppercase tracking-widest">
                    <p className="text-center md:text-left">
                        © {currentYear} <span className="text-white">Rendy Achmad</span> • {t.footer.rights}
                    </p>
                    <div className="flex flex-wrap justify-center gap-4 font-bold text-gray-400">
                        {t.footer.techStack.map(tech => <span key={tech} className="hover:text-orange-500 transition-colors cursor-default">{tech}</span>)}
                    </div>
                </div>
            </div>
        </footer>
    );
}