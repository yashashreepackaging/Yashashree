"use client";

import { motion } from "framer-motion";

const easeOut = [0.22, 1, 0.36, 1];

export default function Reveal({
  children,
  className,
  delay = 0,
  y = 36,
  x = 0,
  duration = 0.7,
  once = true,
  amount = 0.2,
  as = "div",
  ...props
}) {
  const MotionTag = motion[as] || motion.div;
  return (
    <MotionTag
      className={className}
      initial={{ opacity: 0, y, x }}
      whileInView={{ opacity: 1, y: 0, x: 0 }}
      viewport={{ once, amount }}
      transition={{ duration, delay, ease: easeOut }}
      {...props}
    >
      {children}
    </MotionTag>
  );
}
