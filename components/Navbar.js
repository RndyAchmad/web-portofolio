"use client";

import Link from "next/link";
import { useState } from "react";

const NAV_ITEMS = [
  { href: "#home", key: "home" },
  { href: "#education", key: "education" },
  { href: "#tech-stack", key: "tech" },
  { href: "#experience", key: "experience" },
  { href: "#connect", key: "connect" },
];

export default function Navbar({ lang, setLang, t }) {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => setMenuOpen((prev) => !prev);
  const closeMenu = () => setMenuOpen(false);

  return (
    <nav className="sticky top-0 z-50 border-b border-white/10 bg-bg/90 backdrop-blur-md text-white">
      <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-5 md:px-10">
        <Link
          href="/"
          className="group flex items-center font-mono text-lg font-bold tracking-tighter"
        >
          <span className="text-orange-500 transition-all group-hover:mr-1">~/</span>
          <span className="text-white">rndyachmad</span>
          <span className="ml-1 animate-pulse text-orange-500">_</span>
        </Link>

        <div className="flex items-center gap-4 md:gap-8">
          <div className="hidden items-center gap-6 font-mono text-sm text-gray-400 md:flex">
            {NAV_ITEMS.map((item) => (
              <Link
                key={item.key}
                href={item.href}
                className="transition hover:text-orange-500"
              >
                {t.nav[item.key]}
              </Link>
            ))}
          </div>

          <div className="flex items-center gap-2 rounded-md border border-white/10 bg-surface px-2 py-1 font-mono text-[10px]">
            <button
              onClick={() => setLang("en")}
              className={`px-1 transition hover:text-orange-500 ${lang === "en"
                  ? "font-bold text-orange-500"
                  : "text-gray-500"
                }`}
            >
              EN
            </button>
            <span className="text-white opacity-20">|</span>
            <button
              onClick={() => setLang("id")}
              className={`px-1 transition hover:text-orange-500 ${lang === "id"
                  ? "font-bold text-orange-500"
                  : "text-gray-500"
                }`}
            >
              ID
            </button>
          </div>

          <button
            className="flex flex-col gap-1.5 p-2 md:hidden"
            onClick={toggleMenu}
            aria-label="Toggle Menu"
          >
            <span
              className={`h-0.5 w-5 bg-orange-500 transition-all ${menuOpen ? "translate-y-2 rotate-45" : ""
                }`}
            />
            <span
              className={`h-0.5 w-5 bg-orange-500 transition-all ${menuOpen ? "opacity-0" : ""
                }`}
            />
            <span
              className={`h-0.5 w-5 bg-orange-500 transition-all ${menuOpen ? "-translate-y-2 -rotate-45" : ""
                }`}
            />
          </button>
        </div>
      </div>

      <div
        className={`absolute w-full overflow-hidden border-b border-white/10 bg-bg/95 backdrop-blur-xl transition-all duration-300 md:hidden ${menuOpen ? "max-h-64 py-3" : "max-h-0 border-transparent py-0"
          }`}
      >
        <div className="flex flex-col space-y-3 px-5 font-mono text-sm">
          {NAV_ITEMS.map((item) => (
            <Link
              key={item.key}
              href={item.href}
              onClick={closeMenu}
              className="block text-gray-400 transition-all hover:pl-2 hover:text-orange-500"
            >
              {`> ${t.nav[item.key]}`}
            </Link>
          ))}
        </div>
      </div>
    </nav>
  );
}
