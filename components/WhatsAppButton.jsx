"use client";

import { motion } from "framer-motion";
import { WA_QUOTE_URL } from "@/components/constants";

export default function WhatsAppButton() {
  return (
    <motion.a
      className="wa"
      aria-label="Get a Quote on WhatsApp"
      href={WA_QUOTE_URL}
      target="_blank"
      rel="noopener noreferrer"
      initial={{ opacity: 0, scale: 0, rotate: -30 }}
      animate={{
        opacity: 1,
        scale: 1,
        rotate: 0,
        boxShadow: [
          "0 10px 25px rgba(0,0,0,0.2), 0 0 0 0 rgba(37,211,102,0.5)",
          "0 10px 25px rgba(0,0,0,0.2), 0 0 0 14px rgba(37,211,102,0)",
        ],
      }}
      transition={{
        opacity: { duration: 0.5, delay: 1.1 },
        scale: { type: "spring", stiffness: 260, damping: 16, delay: 1.1 },
        rotate: { type: "spring", stiffness: 260, damping: 16, delay: 1.1 },
        boxShadow: {
          duration: 1.8,
          repeat: Infinity,
          repeatDelay: 1.2,
          ease: "easeOut",
        },
      }}
      whileHover={{ scale: 1.12 }}
      whileTap={{ scale: 0.92 }}
    >
      ✆
    </motion.a>
  );
}
