"use client";

import { useState } from "react";
import Link from "next/link";
import { NAV_LINKS, SITE_NAME } from "@/lib/constants";

export default function Header() {
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 bg-black backdrop-blur-sm shadow-[0_1px_0_0_#E8E8F0]">
      <div className="container-site">
        <div className="flex items-center justify-between h-[60px] md:h-[72px]">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-2 shrink-0">
            {/* Globe icon */}
            <span className="w-7 h-7 rounded-full gradient-main flex items-center justify-center">
              <svg viewBox="0 0 24 24" className="w-4 h-4 text-white" fill="none" stroke="currentColor" strokeWidth="1.8">
                <circle cx="12" cy="12" r="10"/><path d="M2 12h20M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z"/>
              </svg>
            </span>
            <span className="text-[16px] md:text-[18px] font-serif font-bold tracking-tight text-[#1A1A2E]">
              {SITE_NAME}
            </span>
          </Link>

          {/* Desktop Nav */}
          <nav className="hidden md:flex items-center gap-7 lg:gap-9">
            {NAV_LINKS.map((link) => (
              <Link
                key={link.label}
                href={link.href}
                className="text-[13px] font-medium text-[#4B4B6A] hover:text-[#1A1A2E] transition-colors duration-150 relative group"
              >
                {link.label}
                <span className="absolute -bottom-0.5 left-0 w-0 h-[1.5px] gradient-accent group-hover:w-full transition-all duration-200" />
              </Link>
            ))}
          </nav>

          {/* Mobile hamburger */}
          <button
            onClick={() => setOpen(!open)}
            aria-label="Toggle menu"
            className="md:hidden w-9 h-9 flex flex-col justify-center items-center gap-[5px]"
          >
            <span className={`w-5 h-[1.5px] bg-[#1A1A2E] transition-all duration-300 ${open ? "rotate-45 translate-y-[6.5px]" : ""}`} />
            <span className={`w-5 h-[1.5px] bg-[#1A1A2E] transition-all duration-300 ${open ? "opacity-0" : ""}`} />
            <span className={`w-5 h-[1.5px] bg-[#1A1A2E] transition-all duration-300 ${open ? "-rotate-45 -translate-y-[6.5px]" : ""}`} />
          </button>
        </div>

        {/* Mobile Nav */}
        <div className={`md:hidden overflow-hidden transition-all duration-300 ${open ? "max-h-64 pb-5" : "max-h-0"}`}>
          <nav className="flex flex-col gap-4 pt-3 border-t border-gray-100">
            {NAV_LINKS.map((link) => (
              <Link
                key={link.label}
                href={link.href}
                onClick={() => setOpen(false)}
                className="text-[13px] font-medium text-[#4B4B6A] hover:text-[#1A1A2E] transition-colors duration-150"
              >
                {link.label}
              </Link>
            ))}
          </nav>
        </div>
      </div>
    </header>
  );
}
