"use client";

import { motion } from "framer-motion";
import Reveal from "@/components/Reveal";
import { StaggerGrid, StaggerItem } from "@/components/Stagger";

const machines = [
  { n: 1, img: "corrugation-machine.jpg", label: "Corrugation Machine" },
  { n: 2, img: "sheet-cutting-machine.jpg", label: "Paper Sheet Cutting Machine" },
  { n: 3, img: "gum-pasting-machine.jpg", label: "Sheet Gum Pasting Machine" },
  { n: 4, img: "slotting-machine.jpg", label: "Slotting Machine" },
  { n: 5, img: "rotary-cutting-machine.jpg", label: "Rotary Cutting Machine" },
  { n: 6, img: "die-cutting-machine.jpg", label: "Die Cutting Machine" },
  { n: 7, img: "stitching-machine.jpg", label: "Stapler & Stitching Machine" },
  { n: 8, img: "flex-printing-machine.jpg", label: "Box Flex Printing Machine" },
  { n: 9, img: "bundling-machine.jpg", label: "Bundling Machine" },
];

export default function Facility() {
  return (
    <section id="facility">
      <div className="container">
        <Reveal className="head">
          <div className="tag">Our Manufacturing Facility</div>
          <h2>Manufacturing capabilities</h2>
          <p>
            The supplied company profile highlights the following machines
            and production facilities.
          </p>
        </Reveal>

        <StaggerGrid className="facility-grid">
          {machines.map((m) => (
            <StaggerItem
              key={m.img}
              className="machine"
              whileHover={{ y: -6, boxShadow: "0 16px 34px rgba(0,0,0,0.1)" }}
            >
              <motion.img
                src={`/images/${m.img}`}
                alt={m.label}
                whileHover={{ scale: 1.08 }}
                transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
              />
              <div>
                {m.n}. {m.label}
              </div>
            </StaggerItem>
          ))}
        </StaggerGrid>
      </div>
    </section>
  );
}
