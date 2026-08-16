"use client";

import { motion } from "framer-motion";

const easeOut = [0.22, 1, 0.36, 1];

export const staggerContainer = {
  hidden: {},
  show: {
    transition: { staggerChildren: 0.09, delayChildren: 0.04 },
  },
};

export const staggerItem = {
  hidden: { opacity: 0, y: 28, scale: 0.96 },
  show: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: { duration: 0.55, ease: easeOut },
  },
};

export function StaggerGrid({
  children,
  className,
  amount = 0.15,
  as = "div",
  ...props
}) {
  const MotionTag = motion[as] || motion.div;
  return (
    <MotionTag
      className={className}
      variants={staggerContainer}
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, amount }}
      {...props}
    >
      {children}
    </MotionTag>
  );
}

export function StaggerItem({
  children,
  className,
  whileHover,
  as = "div",
  ...props
}) {
  const MotionTag = motion[as] || motion.div;
  return (
    <MotionTag
      className={className}
      variants={staggerItem}
      whileHover={whileHover}
      {...props}
    >
      {children}
    </MotionTag>
  );
}
