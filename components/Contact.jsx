"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import Reveal from "@/components/Reveal";
import { StaggerGrid, StaggerItem } from "@/components/Stagger";

export default function Contact() {
  const [name, setName] = useState("");
  const [company, setCompany] = useState("");
  const [phone, setPhone] = useState("");
  const [message, setMessage] = useState("");

  function sendWA(e) {
    e.preventDefault();
    const t = `Hello Yashashree Packaging,%0A%0AName: ${encodeURIComponent(
      name
    )}%0ACompany: ${encodeURIComponent(company)}%0AMobile: ${encodeURIComponent(
      phone
    )}%0ARequirement: ${encodeURIComponent(message)}`;
    window.open("https://wa.me/919921199007?text=" + t, "_blank");
  }

  return (
    <section id="contact">
      <div className="container">
        <Reveal className="head">
          <div className="tag">Contact Us</div>
          <h2>Let&apos;s discuss your packaging requirement</h2>
          <p>Share your box size, quantity, ply, printing or other requirement.</p>
        </Reveal>

        <div className="contact-grid">
          <Reveal className="contact-card" x={-30} y={0}>
            <div className="contact-item">
              <small>Contact Person</small>
              <strong>
                Haridas Bhogale: <a href="tel:+918275306950">+91 8275306950</a>
              </strong>
              <br />
              <strong>
                Tushar Mane: <a href="tel:+919921199007">+91 9921199007</a>
              </strong>
            </div>
            <div className="contact-item">
              <small>Email</small>
              <a href="mailto:yashashreepackaging@outlook.com">
                <strong>yashashreepackaging@outlook.com</strong>
              </a>
            </div>
            <div className="contact-item">
              <small>GST No.</small>
              <strong>27AAEFY0509L1ZZ</strong>
            </div>
            <div className="contact-item">
              <small>Office Address</small>
              <strong>
                Gat No. 152, Near by Takshi Auto Company,
                <br />
                Ambethan-Mahalunge Road, Davane Mala,
                <br />
                Ambethan, Khed, Pune - 410501,
                <br />
                Maharashtra, India
              </strong>
            </div>
          </Reveal>

          <Reveal className="contact-card" x={30} y={0} delay={0.1}>
            <h3 style={{ fontSize: 24, marginBottom: 6 }}>Request a Quote</h3>
            <p className="quote-sub" style={{ marginBottom: 16 }}>
              Send your requirement directly on WhatsApp.
            </p>
            <StaggerGrid as="form" className="form" onSubmit={sendWA} amount={0.5}>
              <StaggerItem
                as="input"
                required
                placeholder="Your Name"
                value={name}
                onChange={(e) => setName(e.target.value)}
                whileFocus={{ scale: 1.01, borderColor: "#c58a19" }}
              />
              <StaggerItem
                as="input"
                placeholder="Company Name"
                value={company}
                onChange={(e) => setCompany(e.target.value)}
                whileFocus={{ scale: 1.01, borderColor: "#c58a19" }}
              />
              <StaggerItem
                as="input"
                required
                placeholder="Mobile Number"
                value={phone}
                onChange={(e) => setPhone(e.target.value)}
                whileFocus={{ scale: 1.01, borderColor: "#c58a19" }}
              />
              <StaggerItem
                as="textarea"
                required
                placeholder="Your packaging requirement..."
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                whileFocus={{ scale: 1.01, borderColor: "#c58a19" }}
              />
              <motion.button
                className="submit"
                type="submit"
                variants={{
                  hidden: { opacity: 0, y: 20 },
                  show: { opacity: 1, y: 0, transition: { duration: 0.5 } },
                }}
                whileHover={{ scale: 1.03, y: -2 }}
                whileTap={{ scale: 0.97 }}
              >
                Send Enquiry on WhatsApp
              </motion.button>
            </StaggerGrid>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
