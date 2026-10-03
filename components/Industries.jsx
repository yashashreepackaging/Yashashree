"use client";

import Reveal from "@/components/Reveal";
import { StaggerGrid, StaggerItem } from "@/components/Stagger";

const industries = [
  "Automotive",
  "Engineering",
  "FMCG",
  "Electronics",
  "E-Commerce",
  "Industrial Products",
  "Consumer Goods",
  "General Manufacturing",
];

export default function Industries() {
  return (
    <section className="industries" id="industries">
      <div className="container">
        <Reveal className="head">
          <div className="tag">Industries We Serve</div>
          <h2>Packaging for every kind of business</h2>
        </Reveal>

        <StaggerGrid className="industry-grid">
          {industries.map((i) => (
            <StaggerItem
              key={i}
              className="industry"
              whileHover={{ y: -6, borderColor: "#c58a19" }}
            >
              {i}
            </StaggerItem>
          ))}
        </StaggerGrid>
      </div>
    </section>
  );
}
