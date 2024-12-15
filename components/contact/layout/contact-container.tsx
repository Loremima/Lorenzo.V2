'use client';

import { ContactHeader } from './contact-header';
import { ContactForm } from '../content/contact-form';

export function ContactContainer() {
  return (
    <div className="container mx-auto px-4 min-h-screen flex flex-col items-center pt-10">
      <div className="w-full max-w-[800px] mx-auto">
        <ContactHeader />
        <ContactForm />
      </div>
    </div>
  );
}
