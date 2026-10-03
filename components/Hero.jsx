"use client";

import { motion, useMotionValue, useSpring, useTransform } from "framer-motion";

import { COMPANY_PROFILE_URL } from "@/components/constants";

const easeOut = [0.22, 1, 0.36, 1];

const container = {
  hidden: {},
  show: {
    transition: { staggerChildren: 0.14, delayChildren: 0.1 },
  },
};

const item = {
  hidden: { opacity: 0, y: 26 },
  show: { opacity: 1, y: 0, transition: { duration: 0.7, ease: easeOut } },
};

function TiltLogoCard() {
  const x = useMotionValue(0);
  const y = useMotionValue(0);
  const rotateX = useSpring(useTransform(y, [-0.5, 0.5], [8, -8]), {
    stiffness: 200,
    damping: 20,
  });
  const rotateY = useSpring(useTransform(x, [-0.5, 0.5], [-8, 8]), {
    stiffness: 200,
    damping: 20,
  });

  function handleMouseMove(e) {
    const rect = e.currentTarget.getBoundingClientRect();
    x.set((e.clientX - rect.left) / rect.width - 0.5);
    y.set((e.clientY - rect.top) / rect.height - 0.5);
  }

  function handleMouseLeave() {
    x.set(0);
    y.set(0);
  }

  return (
    <motion.div
      className="hero-logo"
      initial={{ opacity: 0, x: 60, scale: 0.92 }}
      animate={{ opacity: 1, x: 0, scale: 1 }}
      transition={{ duration: 0.9, delay: 0.3, ease: easeOut }}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      style={{ rotateX, rotateY, transformPerspective: 800 }}
    >
      <motion.img
        src="/images/logo.png"
        alt="Yashashree Packaging"
        animate={{ y: [0, -8, 0] }}
        transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
      />
    </motion.div>
  );
}

export default function Hero() {
  return (
    <section className="hero" id="home">
      <div className="container hero-grid">
        <motion.div variants={container} initial="hidden" animate="show">
          <motion.div className="tag" variants={item}>
            Corrugated Box Manufacturer &amp; Packaging Solutions Provider
          </motion.div>
          <motion.h1 variants={item}>
            Reliable packaging.
            <br />
            <span>Trusted protection.</span>
          </motion.h1>
          <motion.p variants={item}>
            YASHASHREE PACKAGING is a specialized manufacturer of quality
            corrugated boxes and customized packaging solutions, focused on
            consistent quality, reliable service and timely delivery.
          </motion.p>
          <motion.div className="btns" variants={item}>
            <motion.a
              className="btn gold"
              href="#contact"
              whileHover={{ scale: 1.05, y: -3 }}
              whileTap={{ scale: 0.96 }}
            >
              Request a Quote
            </motion.a>
            <motion.a
              className="btn primary"
              href="tel:+919921199007"
              whileHover={{ scale: 1.05, y: -3 }}
              whileTap={{ scale: 0.96 }}
            >
              Call Tushar
            </motion.a>
            <motion.a
              className="btn btn-profile"
              href={COMPANY_PROFILE_URL}
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.05, y: -3 }}
              whileTap={{ scale: 0.96 }}
            >
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"></path><polyline points="14 2 14 8 20 8"></polyline><line x1="16" y1="13" x2="8" y2="13"></line><line x1="16" y1="17" x2="8" y2="17"></line><polyline points="10 9 9 9 8 9"></polyline></svg>
              View Profile
            </motion.a>
            <motion.a
              className="btn btn-profile"
              href={COMPANY_PROFILE_URL}
              download="Yashashree_Company_Profile.pdf"
              whileHover={{ scale: 1.05, y: -3 }}
              whileTap={{ scale: 0.96 }}
            >
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"></path><polyline points="7 10 12 15 17 10"></polyline><line x1="12" y1="15" x2="12" y2="3"></line></svg>
              Download
            </motion.a>
          </motion.div>
        </motion.div>
        <TiltLogoCard />
      </div>
    </section>
  );
}
