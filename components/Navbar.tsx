"use client";

import { useState } from "react";
import Link from "next/link";
import { Menu, X, Github, Linkedin, FileText } from "lucide-react";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="fixed top-0 z-50 w-full px-4 pt-6 sm:px-6 lg:px-8">
      <div className="mx-auto flex max-w-fit items-center justify-between gap-12 rounded-full border border-white/20 bg-white/5 px-6 py-3 backdrop-blur-xl">
        {/* Brand/Logo */}
        <div className="flex items-center gap-2">
          <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-gradient-to-br from-purple-500 to-blue-500">
            <span className="text-lg font-bold text-white">R</span>
          </div>
          <span className="text-sm font-semibold text-white">Roberto Sanchez</span>
        </div>

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
          {isOpen ? <X size={20} /> : <Menu size={20} />}
        </button>
      </div>

      {/* Mobile Navigation */}
      {isOpen && (
        <div className="mt-4 rounded-3xl border border-white/20 bg-white/5 px-6 py-4 backdrop-blur-xl md:hidden">
          <div className="flex flex-col gap-4">
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
      )}
    </nav>
  );
}
