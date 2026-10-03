"use client";

import Reveal from "@/components/Reveal";
import { StaggerGrid, StaggerItem } from "@/components/Stagger";

const products = [
  { h: "3-Ply Corrugated Boxes", pts: ["Lightweight", "Cost-effective", "General packaging"], p: "Corrugated boxes for general packaging requirements." },
  { h: "5-Ply Corrugated Boxes", pts: ["Higher strength", "Better stacking", "Demanding loads"], p: "Stronger multi-layer boxes for demanding packaging needs." },
  { h: "7-Ply Corrugated Boxes", pts: ["Heavy-duty strength", "Superior protection", "Industrial loads"], p: "Heavy-duty corrugated packaging applications." },
  { h: "Printed Corrugated Boxes", pts: ["Custom branding", "Sharp print quality", "Retail-ready look"], p: "Corrugated boxes with printing and branding requirements." },
  { h: "Die-Cut Boxes", pts: ["Custom shapes", "Precise fit", "Easy assembly"], p: "Customized die-cut packaging formats." },
  { h: "Export Packaging Boxes", pts: ["Transit-ready strength", "Moisture resistance", "Export standards"], p: "Packaging solutions for export requirements." },
  { h: "Heavy-Duty Industrial Packaging", pts: ["Robust construction", "High load capacity", "Machinery & parts"], p: "Robust packaging solutions for industrial requirements." },
  { h: "E-Commerce Shipping Boxes", pts: ["Secure shipping", "Right-sized fit", "Damage protection"], p: "Shipping boxes for e-commerce applications." },
  { h: "Corrugated Sheets & Partitions", pts: ["Product separation", "Added cushioning", "Custom sizes"], p: "Sheets and partitions for product protection and separation." },
  { h: "Customized Packaging Solutions", pts: ["Made to your size", "Load-matched design", "Branding options"], p: "Boxes developed according to product dimensions, load and logistics requirements." },
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
              <ul className="product-points">
                {prod.pts.map((pt) => (
                  <li key={pt}>{pt}</li>
                ))}
              </ul>
            </StaggerItem>
          ))}
        </StaggerGrid>
      </div>
    </section>
  );
}
