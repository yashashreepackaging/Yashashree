"use client";

import Reveal from "@/components/Reveal";
import { StaggerGrid, StaggerItem } from "@/components/Stagger";

const products = [
  { h: "3-Ply Corrugated Boxes", p: "Corrugated boxes for general packaging requirements." },
  { h: "5-Ply Corrugated Boxes", p: "Stronger multi-layer boxes for demanding packaging needs." },
  { h: "7-Ply Corrugated Boxes", p: "Heavy-duty corrugated packaging applications." },
  { h: "Printed Corrugated Boxes", p: "Corrugated boxes with printing and branding requirements." },
  { h: "Die-Cut Boxes", p: "Customized die-cut packaging formats." },
  { h: "Export Packaging Boxes", p: "Packaging solutions for export requirements." },
  { h: "Heavy-Duty Industrial Packaging", p: "Robust packaging solutions for industrial requirements." },
  { h: "E-Commerce Shipping Boxes", p: "Shipping boxes for e-commerce applications." },
  { h: "Corrugated Sheets & Partitions", p: "Sheets and partitions for product protection and separation." },
  { h: "Customized Packaging Solutions", p: "Boxes developed according to product dimensions, load and logistics requirements." },
];

export default function Products() {
  return (
    <section className="products" id="products">
      <div className="container">
        <Reveal className="head">
          <div className="tag">Our Products</div>
          <h2>Corrugated &amp; Customized Packaging</h2>
          <p>We manufacture and supply the following packaging products.</p>
        </Reveal>

        <StaggerGrid className="product-grid">
          {products.map((prod) => (
            <StaggerItem
              key={prod.h}
              className="product"
              whileHover={{
                y: -8,
                boxShadow: "0 16px 34px rgba(0,0,0,0.09)",
                borderColor: "#c58a19",
              }}
            >
              <h3>{prod.h}</h3>
              <p>{prod.p}</p>
            </StaggerItem>
          ))}
        </StaggerGrid>
      </div>
    </section>
  );
}
