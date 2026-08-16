"use client";

import Reveal from "@/components/Reveal";
import { StaggerGrid, StaggerItem } from "@/components/Stagger";

const steps = [
  "Paper Roll",
  "Glue",
  "Corrugation Machine",
  "Corrugation Board",
  "Slitter Machine",
  "Cutting Machine",
  "Die Cutting",
  "Flex Print",
  "Stitching",
  "Bundling",
  "Finished Goods",
];

export default function Flow() {
  return (
    <section className="flow">
      <div className="container">
        <Reveal className="head">
          <div className="tag">Material Process Flow</div>
          <h2>From raw material to finished goods</h2>
          <p>Our profile presents the following material process flow.</p>
        </Reveal>

        <StaggerGrid className="flow-list" amount={0.3}>
          {steps.map((s) => (
            <StaggerItem
              key={s}
              className="flow-step"
              whileHover={{ scale: 1.08, backgroundColor: "#232323" }}
            >
              {s}
            </StaggerItem>
          ))}
        </StaggerGrid>
      </div>
    </section>
  );
}
