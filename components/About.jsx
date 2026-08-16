"use client";

import { motion } from "framer-motion";
import Reveal from "@/components/Reveal";
import { StaggerGrid, StaggerItem } from "@/components/Stagger";

const checks = [
  "Quality & consistency",
  "Customized packaging solutions",
  "Competitive pricing",
  "Timely delivery",
  "Long-term customer relationships",
];

const commit = [
  {
    b: "Our Vision",
    t: "To become a trusted and preferred corrugated packaging partner for businesses across industries.",
  },
  { b: "Our Mission", t: "Deliver consistent and reliable packaging quality." },
  {
    b: "Continuous Improvement",
    t: "Continuously improve our manufacturing processes.",
  },
  {
    b: "Customer Focus",
    t: "Build long-term customer relationships through service and reliability.",
  },
];

export default function About() {
  return (
    <section id="about">
      <div className="container">
        <Reveal className="head" as="div">
          <div className="tag">About Us</div>
          <h2>A dependable packaging partner</h2>
          <p>
            Packaging solutions designed around customer product and
            logistics requirements.
          </p>
        </Reveal>

        <div className="about-grid">
          <Reveal className="about-card" x={-30} y={0}>
            <h3>Yashashree Packaging</h3>
            <p>
              We are a newly established manufacturer of quality corrugated
              boxes and customized packaging solutions.
            </p>
            <p>
              We are committed to providing strong, reliable and
              cost-effective packaging solutions designed according to our
              customers&apos; product and logistics requirements.
            </p>
            <motion.ul
              className="checks"
              initial="hidden"
              whileInView="show"
              viewport={{ once: true, amount: 0.4 }}
              variants={{ show: { transition: { staggerChildren: 0.08 } } }}
            >
              {checks.map((c) => (
                <motion.li
                  key={c}
                  variants={{
                    hidden: { opacity: 0, x: -14 },
                    show: { opacity: 1, x: 0, transition: { duration: 0.4 } },
                  }}
                >
                  {c}
                </motion.li>
              ))}
            </motion.ul>
          </Reveal>

          <StaggerGrid className="commit">
            {commit.map((m) => (
              <StaggerItem
                key={m.b}
                className="mini"
                whileHover={{ y: -6, boxShadow: "0 14px 30px rgba(0,0,0,0.08)" }}
              >
                <b>{m.b}</b>
                {m.t}
              </StaggerItem>
            ))}
          </StaggerGrid>
        </div>
      </div>
    </section>
  );
}
