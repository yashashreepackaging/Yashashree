"use client";

import Reveal from "@/components/Reveal";
import { StaggerGrid, StaggerItem } from "@/components/Stagger";

const features = [
  "Advanced Corrugation Plant",
  "Automatic & Semi-Automatic Production Lines",
  "Printing & Die-Cutting Facilities",
  "Quality Testing Equipment",
  "Efficient Warehousing & Logistics Support",
  "Quality Assurance",
];

const checks = [
  "Compression Strength",
  "Bursting Strength",
  "Dimensional Accuracy",
  "Moisture Resistance",
  "Print Quality",
];

export default function Quality() {
  return (
    <section id="quality">
      <div className="container">
        <Reveal className="head">
          <div className="tag">Key Features &amp; Quality</div>
          <h2>Quality is our top priority</h2>
          <p>
            The company profile describes quality checks and facility
            capabilities supporting dependable packaging.
          </p>
        </Reveal>

        <div className="quality-grid">
          <Reveal className="quality-card" x={-24} y={0}>
            <h3>Key Features</h3>
            <StaggerGrid className="quality-list" amount={0.4}>
              {features.map((f) => (
                <StaggerItem key={f} whileHover={{ scale: 1.04 }}>
                  {f}
                </StaggerItem>
              ))}
            </StaggerGrid>
          </Reveal>

          <Reveal className="quality-card" x={24} y={0} delay={0.1}>
            <h3>Quality Checks</h3>
            <StaggerGrid className="quality-list" amount={0.4}>
              {checks.map((c) => (
                <StaggerItem key={c} whileHover={{ scale: 1.04 }}>
                  {c}
                </StaggerItem>
              ))}
            </StaggerGrid>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
