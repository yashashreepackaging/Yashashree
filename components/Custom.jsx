"use client";

import Reveal from "@/components/Reveal";
import { StaggerGrid, StaggerItem } from "@/components/Stagger";

const points = [
  "Product dimensions",
  "Weight & load requirements",
  "Transportation conditions",
  "Storage requirements",
  "Stacking strength",
  "Printing & branding requirements",
];

export default function Custom() {
  return (
    <section className="custom">
      <div className="container custom-grid">
        <Reveal x={-30} y={0}>
          <div className="tag">Customized Packaging</div>
          <h2>Packaging designed around your product</h2>
          <p>
            Every product has different packaging requirements. Yashashree
            Packaging offers customized boxes based on the requirements
            listed in the company profile.
          </p>
        </Reveal>

        <Reveal className="custom-card" x={30} y={0} delay={0.1}>
          <h3>Customization Considerations</h3>
          <StaggerGrid as="ul" amount={0.4}>
            {points.map((p) => (
              <StaggerItem key={p} as="li">
                {p}
              </StaggerItem>
            ))}
          </StaggerGrid>
        </Reveal>
      </div>
    </section>
  );
}
