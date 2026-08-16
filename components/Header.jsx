"use client";

import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import ThemeToggle from "@/components/ThemeToggle";

const LINKS = [
  { href: "#home", label: "Home" },
  { href: "#about", label: "About" },
  { href: "#products", label: "Products" },
  { href: "#facility", label: "Facility" },
  { href: "#quality", label: "Quality" },
];

export default function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const closeMenu = () => setOpen(false);

  return (
    <motion.header
      animate={{
        boxShadow: scrolled
          ? "0 8px 24px rgba(0,0,0,0.06)"
          : "0 0px 0px rgba(0,0,0,0)",
      }}
      transition={{ duration: 0.35, ease: "easeOut" }}
      style={{ position: "sticky", top: 0, zIndex: 99 }}
    >
      <div className="container nav" style={{ position: "relative" }}>
        <motion.a
          className="brand"
          href="#home"
          onClick={closeMenu}
          initial={{ opacity: 0, y: -12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
        >
          <motion.img
            src="/images/logo.png"
            alt="Yashashree Packaging Logo"
            whileHover={{ rotate: -6, scale: 1.06 }}
            transition={{ type: "spring", stiffness: 300, damping: 15 }}
          />
          <span>YASHASHREE PACKAGING</span>
        </motion.a>

        <nav>
          <ul>
            {LINKS.map((l, i) => (
              <motion.li
                key={l.href}
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.15 + i * 0.06 }}
              >
                <a href={l.href}>{l.label}</a>
              </motion.li>
            ))}
            <motion.li
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.15 + LINKS.length * 0.06 }}
              style={{ display: "flex", alignItems: "center", gap: "16px" }}
            >
              <motion.a
                className="quote"
                href="#contact"
                whileHover={{ scale: 1.06, y: -2 }}
                whileTap={{ scale: 0.96 }}
              >
                Get Quote
              </motion.a>
              <ThemeToggle />
            </motion.li>
          </ul>
        </nav>

        <motion.button
          className="menu"
          aria-label="Toggle menu"
          onClick={() => setOpen((v) => !v)}
          whileTap={{ scale: 0.85 }}
        >
          <motion.span
            animate={{ rotate: open ? 90 : 0 }}
            transition={{ duration: 0.25 }}
            style={{ display: "inline-block" }}
          >
            {open ? "✕" : "☰"}
          </motion.span>
        </motion.button>

        <AnimatePresence>
          {open && (
            <motion.nav
              className="nav-open"
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: "auto" }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
            >
              <ul>
                {LINKS.map((l, i) => (
                  <motion.li
                    key={l.href}
                    initial={{ opacity: 0, x: -16 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.3, delay: i * 0.05 }}
                  >
                    <a href={l.href} onClick={closeMenu}>
                      {l.label}
                    </a>
                  </motion.li>
                ))}
                <motion.li
                  initial={{ opacity: 0, x: -16 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.3, delay: LINKS.length * 0.05 }}
                >
                  <div style={{ display: "flex", alignItems: "center", gap: "12px", marginTop: "12px" }}>
                    <a href="#contact" className="quote" onClick={closeMenu}>
                      Get Quote
                    </a>
                    <ThemeToggle />
                  </div>
                </motion.li>
              </ul>
            </motion.nav>
          )}
        </AnimatePresence>
      </div>
    </motion.header>
  );
}
