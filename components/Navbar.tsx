"use client";

import { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Menu, Github, Linkedin, FileText, Home, FolderKanban, Mail } from "lucide-react";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const pathname = usePathname();
  const isAboutPage = pathname === "/about";

  const navLinks = isAboutPage
    ? [
        { href: "/", label: "Home", icon: Home },
        { href: "/projects", label: "Projects", icon: FolderKanban },
        { href: "/resume.pdf", label: "Resume", icon: FileText, external: true },
        { href: "/contact", label: "Contact Me", icon: Mail },
      ]
    : [
        { href: "/", label: "Home", icon: Home },
        { href: "https://github.com/Robersan2212", label: "GitHub", icon: Github, external: true },
        { href: "/resume.pdf", label: "Resume", icon: FileText, external: true },
        { href: "https://www.linkedin.com/in/roberto-sanchez-6b0955209", label: "LinkedIn", icon: Linkedin, external: true },
      ];

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 w-full px-3 pt-4 pb-2 sm:px-6 sm:pt-6 lg:px-8 lg:pt-6 [padding-top:max(1rem,env(safe-area-inset-top))]">
      <div className="mx-auto flex w-full max-w-full min-w-0 items-center justify-between gap-4 overflow-hidden rounded-full border border-white/20 bg-white/5 px-4 py-2.5 backdrop-blur-xl sm:max-w-fit sm:gap-8 sm:px-6 sm:py-3 sm:overflow-visible">
        {/* Brand/Logo */}
        <Link href="/about" className="flex min-w-0 shrink-0 items-center gap-2 focus:outline-none">
          <div className="flex h-7 w-9 shrink-0 items-center justify-center rounded-lg bg-black sm:h-8 sm:w-10">
            <span className="text-base font-bold text-white sm:text-lg">RS</span>
          </div>
          <span className="truncate text-xs font-semibold text-white sm:text-sm">Roberto Sanchez</span>
        </Link>

        {/* Desktop Navigation */}
        <div className="hidden items-center gap-8 md:flex">
          {navLinks.map(({ href, label, icon: Icon, external }) => (
            <Link
              key={href}
              href={href}
              target={external ? "_blank" : undefined}
              rel={external ? "noopener noreferrer" : undefined}
              className="flex items-center gap-2 text-sm font-medium text-white/90 transition-colors hover:text-white"
            >
              <Icon size={18} />
              <span>{label}</span>
            </Link>
          ))}
        </div>

        {/* Mobile Menu Button */}
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="text-white/90 transition-colors hover:text-white md:hidden"
          aria-label="Toggle menu"
        >
          <Menu
            size={20}
            className={`transition-transform duration-200 ease-out ${
              isOpen ? "rotate-90" : "rotate-0"
            }`}
          />
        </button>
      </div>

      {/* Mobile Navigation */}
      <div
        className={`relative z-50 mx-4 mt-3 rounded-3xl border border-white/20 bg-white/5 backdrop-blur-xl transition-all duration-200 ease-out md:hidden sm:mx-6 md:mx-8 lg:mx-12 ${
          isOpen
            ? "max-h-60 opacity-100 visible translate-y-0"
            : "max-h-0 opacity-0 invisible -translate-y-2 border-transparent"
        }`}
      >
        <div className="flex flex-col gap-4 px-6 py-4">
          {navLinks.map(({ href, label, icon: Icon, external }) => (
            <Link
              key={href}
              href={href}
              target={external ? "_blank" : undefined}
              rel={external ? "noopener noreferrer" : undefined}
              onClick={() => setIsOpen(false)}
              className="flex items-center gap-2 text-sm font-medium text-white/90 transition-colors hover:text-white"
            >
              <Icon size={18} />
              <span>{label}</span>
            </Link>
          ))}
        </div>
      </div>
    </nav>
  );
}
