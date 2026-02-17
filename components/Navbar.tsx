"use client";

import { useState } from "react";
import Link from "next/link";
import { Menu, Github, Linkedin, FileText } from "lucide-react";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 w-full px-3 pt-4 pb-2 sm:px-6 sm:pt-6 lg:px-8 lg:pt-6 [padding-top:max(1rem,env(safe-area-inset-top))]">
      <div className="mx-auto flex w-full max-w-full min-w-0 items-center justify-between gap-4 overflow-hidden rounded-full border border-white/20 bg-white/5 px-4 py-2.5 backdrop-blur-xl sm:max-w-fit sm:gap-12 sm:px-6 sm:py-3 sm:overflow-visible">
        {/* Brand/Logo */}
        <Link href="/" className="flex min-w-0 shrink-0 items-center gap-2 focus:outline-none">
          <div className="flex h-7 w-7 shrink-0 items-center justify-center rounded-lg bg-gradient-to-br from-purple-500 to-blue-500 sm:h-8 sm:w-8">
            <span className="text-base font-bold text-white sm:text-lg">R</span>
          </div>
          <span className="truncate text-xs font-semibold text-white sm:text-sm">Roberto Sanchez</span>
        </Link>

        {/* Desktop Navigation */}
        <div className="hidden items-center gap-6 md:flex">
          <Link
            href="https://github.com/yourusername"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 text-sm font-medium text-white/90 transition-colors hover:text-white"
          >
            <Github size={18} />
            <span>GitHub</span>
          </Link>
          <Link
            href="/resume.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 text-sm font-medium text-white/90 transition-colors hover:text-white"
          >
            <FileText size={18} />
            <span>Resume</span>
          </Link>
          <Link
            href="https://linkedin.com/in/yourusername"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 text-sm font-medium text-white/90 transition-colors hover:text-white"
          >
            <Linkedin size={18} />
            <span>LinkedIn</span>
          </Link>
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
        className={`relative z-50 mx-3 mt-3 rounded-3xl border border-white/20 bg-white/5 backdrop-blur-xl transition-all duration-200 ease-out md:hidden sm:mx-0 ${
          isOpen
            ? "max-h-60 opacity-100 visible translate-y-0"
            : "max-h-0 opacity-0 invisible -translate-y-2 border-transparent"
        }`}
      >
        <div className="flex flex-col gap-4 px-6 py-4">
          <Link
            href="https://github.com/yourusername"
            target="_blank"
            rel="noopener noreferrer"
            onClick={() => setIsOpen(false)}
            className="flex items-center gap-2 text-sm font-medium text-white/90 transition-colors hover:text-white"
          >
            <Github size={18} />
            <span>GitHub</span>
          </Link>
          <Link
            href="/resume.pdf"
            target="_blank"
            rel="noopener noreferrer"
            onClick={() => setIsOpen(false)}
            className="flex items-center gap-2 text-sm font-medium text-white/90 transition-colors hover:text-white"
          >
            <FileText size={18} />
            <span>Resume</span>
          </Link>
          <Link
            href="https://linkedin.com/in/yourusername"
            target="_blank"
            rel="noopener noreferrer"
            onClick={() => setIsOpen(false)}
            className="flex items-center gap-2 text-sm font-medium text-white/90 transition-colors hover:text-white"
          >
            <Linkedin size={18} />
            <span>LinkedIn</span>
          </Link>
        </div>
      </div>
    </nav>
  );
}
