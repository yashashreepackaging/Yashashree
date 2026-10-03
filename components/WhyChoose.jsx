"use client";

import Reveal from "@/components/Reveal";
import { StaggerGrid, StaggerItem } from "@/components/Stagger";

const reasons = [
  "Consistent Quality",
  "Customized Packaging Solutions",
  "Competitive Pricing",
  "Timely Delivery",
  "Modern Manufacturing Facilities",
  "Reliable Customer Support",
];

export default function WhyChoose() {
  return (
    <section className="why" id="why">
      <div className="container">
        <Reveal className="head">
          <div className="tag">Why Choose Us</div>
          <h2>Why Choose YASHASHREE PACKAGING?</h2>
        </Reveal>

        <StaggerGrid className="why-grid">
          {reasons.map((r) => (
            <StaggerItem
              key={r}
              className="why-item"
              whileHover={{ y: -6, boxShadow: "0 14px 30px rgba(0,0,0,0.08)" }}
            >
              <span className="why-check">✓</span>
              {r}
            </StaggerItem>
          ))}
        </StaggerGrid>
      </div>
    </section>
  );
}
