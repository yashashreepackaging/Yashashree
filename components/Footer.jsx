"use client";

import Reveal from "@/components/Reveal";

export default function Footer() {
  const year = new Date().getFullYear();
  return (
    <footer>
      <Reveal className="container foot" y={16} duration={0.5}>
        <div>
          <strong>Yashashree Packaging</strong>
          <br />
          Quality Packaging • Reliable Protection • Trusted Partnership
        </div>
        <div>© {year} Yashashree Packaging</div>
      </Reveal>
    </footer>
  );
}
