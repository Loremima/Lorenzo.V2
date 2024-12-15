'use client';

import { ContactContainer } from './contact/layout/contact-container';

export function ContactSection() {
  return (
    <section id="contact" className="scroll-section">
      <div className="scroll-content">
        <ContactContainer />
      </div>
    </section>
  );
}