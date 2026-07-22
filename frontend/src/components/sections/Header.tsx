"use client";

import { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { navLinks } from "@/data/content";
import Button from "@/components/ui/Button";
import { useAuth } from "@/lib/auth";

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [activeTheme, setActiveTheme] = useState("dark");
  const [isMobileOpen, setIsMobileOpen] = useState(false);
  const rafRef = useRef(0);
  const { user, logout } = useAuth();

  // Unified scroll handler — detect active section theme
  useEffect(() => {
    const handleScroll = () => {
      if (rafRef.current) return;
      rafRef.current = requestAnimationFrame(() => {
        const scrollY = window.scrollY;
        setIsScrolled(scrollY > 20);

        // Walk data-theme sections to find which one is behind the header
        const sections = document.querySelectorAll("[data-theme]");
        let currentTheme = "dark"; // default to dark (hero covers the top)
        for (let i = 0; i < sections.length; i++) {
          const el = sections[i];
          const rect = el.getBoundingClientRect();
          // Section is covering the header zone (top 150px of viewport)
          if (rect.top < 150 && rect.bottom > 0) {
            currentTheme = el.getAttribute("data-theme") || "dark";
          }
        }
        setActiveTheme(currentTheme);
        rafRef.current = 0;
      });
    };

    // Run once immediately on mount
    handleScroll();
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => {
      window.removeEventListener("scroll", handleScroll);
      cancelAnimationFrame(rafRef.current);
    };
  }, []);

  // Lock body scroll when mobile menu is open
  useEffect(() => {
    document.body.style.overflow = isMobileOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [isMobileOpen]);

  /* ─── Derived visual state ─── */
  // When at the very top OR on a dark section, use light text on dark bg
  const isOnDark = !isScrolled || activeTheme === "dark";
  const textIsLight = isOnDark;

  const handleLogout = async () => {
    await logout();
  };

  return (
    <header className="fixed top-0 left-0 right-0 z-50">
      {/* ── Dark gradient layer (hero/stats) ── */}
      <div
        className="absolute inset-0 transition-opacity duration-700 ease-in-out pointer-events-none"
        style={{
          background:
            "linear-gradient(180deg, rgba(13,27,42,1) 0%, rgba(13,27,42,0.98) 60%, rgba(13,27,42,0.92) 100%)",
          opacity: textIsLight ? 1 : 0,
        }}
      />

      {/* ── Light gradient layer (exam/courses/faculty/results/resources/enquiry) ── */}
      <div
        className="absolute inset-0 transition-opacity duration-700 ease-in-out pointer-events-none"
        style={{
          background:
            "linear-gradient(180deg, rgba(255,255,255,1) 0%, rgba(255,255,255,0.97) 50%, rgba(255,255,255,0.9) 100%)",
          opacity: textIsLight ? 0 : 1,
        }}
      />

      {/* ── Bottom border accent ── */}
      <div
        className="absolute bottom-0 left-0 right-0 h-[1px] transition-opacity duration-700 ease-in-out"
        style={{
          background: textIsLight
            ? "linear-gradient(90deg, transparent, rgba(255,255,255,0.08), transparent)"
            : "linear-gradient(90deg, transparent, rgba(0,0,0,0.06), transparent)",
          opacity: isScrolled ? 1 : 0,
        }}
      />

      {/* ── Content (above the layers) ── */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <a href="/" className="flex items-center gap-2 group">
            <div className="w-10 h-10 rounded-lg gradient-electric flex items-center justify-center font-heading font-bold text-deep-blue text-lg transition-transform duration-300 group-hover:scale-105">
              P
            </div>
            <div className="hidden sm:block">
              <span
                className={`font-heading font-bold text-xl transition-colors duration-500 ${
                  textIsLight ? "text-white" : "text-deep-blue"
                }`}
              >
                Premium
              </span>
              <span
                className={`font-heading font-bold text-xl transition-colors duration-500 ${
                  textIsLight ? "text-electric-light" : "text-electric"
                }`}
              >
                {" "}Coaching
              </span>
            </div>
          </a>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center gap-8">
            {navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                className={`relative transition-all duration-300 font-bold text-sm after:absolute after:bottom-[-4px] after:left-0 after:w-0 after:h-[2px] after:bg-electric after:transition-all after:duration-300 hover:after:w-full ${
                  textIsLight
                    ? "text-white/80 hover:text-white"
                    : "text-deep-blue/80 hover:text-deep-blue"
                }`}
              >
                {link.label}
              </a>
            ))}
          </nav>

          {/* User actions (login/logout) */}
          <div className="hidden lg:flex items-center gap-4">
            {user ? (
              <>
                <span className={`text-sm font-medium ${
                  textIsLight ? "text-white" : "text-deep-blue"
                }`}>
                  {user.name?.split(" ")[0] || "User"}
                </span>
                <button
                  onClick={handleLogout}
                  className={`text-sm font-medium hover:underline ${
                    textIsLight ? "text-white" : "text-deep-blue"
                  }`}
                >
                  Logout
                </button>
              </>
            ) : (
              <>
                <a
                  href="/login"
                  className={`text-sm font-medium hover:underline ${
                    textIsLight ? "text-white" : "text-deep-blue"
                  }`}
                >
                  Login
                </a>
                <a
                  href="/register"
                  className={`ml-4 text-sm font-medium bg-transparent hover:bg-white/10 rounded-md px-3 py-1.5 ${
                    textIsLight ? "text-white" : "text-deep-blue"
                  } border border-white/20`}
                >
                  Register
                </a>
              </>
            )}
          </div>

          {/* CTA */}
          <div className="hidden lg:block">
            <Button
              variant={textIsLight ? "outline" : "primary"}
              size="sm"
              href="#enquire"
            >
              Enquire Now
            </Button>
          </div>

          {/* Hamburger */}
          <button
            onClick={() => setIsMobileOpen(!isMobileOpen)}
            className="lg:hidden relative w-10 h-10 flex items-center justify-center cursor-pointer"
            aria-label={isMobileOpen ? "Close menu" : "Open menu"}
          >
            <div className="w-6 flex flex-col gap-1.5">
              <motion.span
                animate={
                  isMobileOpen ? { rotate: 45, y: 7 } : { rotate: 0, y: 0 }
                }
                className={`block h-[2px] rounded-full transition-colors duration-500 ${
                  textIsLight && !isMobileOpen ? "bg-white" : "bg-deep-blue"
                }`}
              />
              <motion.span
                animate={isMobileOpen ? { opacity: 0 } : { opacity: 1 }}
                className={`block h-[2px] rounded-full transition-colors duration-500 ${
                  textIsLight && !isMobileOpen ? "bg-white" : "bg-deep-blue"
                }`}
              />
              <motion.span
                animate={
                  isMobileOpen ? { rotate: -45, y: -7 } : { rotate: 0, y: 0 }
                }
                className={`block h-[2px] rounded-full transition-colors duration-500 ${
                  textIsLight && !isMobileOpen ? "bg-white" : "bg-deep-blue"
                }`}
              />
            </div>
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMobileOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3, ease: "easeInOut" }}
            className="lg:hidden overflow-hidden bg-white border-t border-gray-100"
          >
            <nav className="px-4 py-6 space-y-4">
              {navLinks.map((link) => (
                <a
                  key={link.label}
                  href={link.href}
                  onClick={() => setIsMobileOpen(false)}
                  className="block text-deep-blue/80 hover:text-deep-blue font-medium text-lg py-2 transition-colors"
                >
                  {link.label}
                </a>
              ))}
              <div className="pt-4">
                <Button
                  variant="primary"
                  size="md"
                  href="#enquire"
                  className="w-full"
                >
                  Enquire Now
                </Button>
              </div>
              {/* Mobile user actions */}
              {user ? (
                <>
                  <div className="mb-4">
                    <span className="block text-sm font-medium text-deep-blue">
                      {user.name?.split(" ")[0] || "User"}
                    </span>
                    <button
                      onClick={handleLogout}
                      className="mt-2 text-sm font-medium underline text-deep-blue hover:no-underline"
                    >
                      Logout
                    </button>
                  </div>
                </>
              ) : (
                <>
                  <a
                    href="/login"
                    className="block mb-2 text-sm font-medium text-deep-blue hover:no-underline"
                  >
                    Login
                  </a>
                  <a
                    href="/register"
                    className="block text-sm font-medium bg-deep-blue hover:bg-deep-blue/80 text-white px-4 py-2 rounded"
                  >
                    Register
                  </a>
                </>
              )}
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}