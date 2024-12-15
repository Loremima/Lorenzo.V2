'use client';

import { motion } from 'framer-motion';
import { Send } from 'lucide-react';
import { useState, useRef } from 'react';
import { useToast } from '@/hooks/use-toast';
import emailjs from '@emailjs/browser';

export function ContactSection() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const formRef = useRef<HTMLFormElement>(null);
  const { toast } = useToast();

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (!formRef.current) return;

    try {
      setIsSubmitting(true);
      
      const result = await emailjs.sendForm(
        'service_lq9by28',
        'template_brotppc',
        formRef.current,
        '03SIuYUNtFSsT8Hgo'
      );

      if (result.status === 200) {
        toast({
          title: "Message sent 📧",
          description: "I'll get back to you soon.",
          className: "bg-white/80 dark:bg-gray-900/80 backdrop-blur-sm border-red-500/20 text-black dark:text-white",
          duration: 5000,
        });
        formRef.current.reset();
      }
    } catch (error) {
      console.error('EmailJS error:', error);
      toast({
        title: "Message not sent ❌",
        description: "Please try again or email me directly.",
        variant: "destructive",
        className: "bg-white/80 dark:bg-gray-900/80 backdrop-blur-sm border-red-500/20 text-black dark:text-white",
        duration: 5000,
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  const inputClasses = 
    "w-full px-4 py-3 rounded-xl border bg-white/50 dark:bg-white/10 backdrop-blur-sm " +
    "focus:outline-none focus:border-red-500/50 focus:ring-2 focus:ring-red-500/20 " +
    "text-black dark:text-white placeholder:text-gray-500 dark:placeholder:text-gray-400 " +
    "transition-all duration-300 border-gray-200 dark:border-gray-700";

  return (
    <section id="contact" className="scroll-section">
      <div className="section-container">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="section-header"
        >
          <h2 className="section-title">Get in Touch</h2>
          <p className="section-description">
            Have a project in mind? Let's discuss how we can work together.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="w-full max-w-xl mx-auto"
        >
          <form ref={formRef} onSubmit={handleSubmit} className="space-y-6">
            <div className="grid sm:grid-cols-2 gap-6">
              <div className="relative">
                <input
                  type="text"
                  name="from_name"
                  placeholder="Name"
                  required
                  minLength={2}
                  className={inputClasses}
                />
              </div>
              <div className="relative">
                <input
                  type="email"
                  name="from_email"
                  placeholder="Email"
                  required
                  pattern="[^\s@]+@[^\s@]+\.[^\s@]+"
                  className={inputClasses}
                />
              </div>
            </div>

            <div className="relative">
              <input
                type="text"
                name="subject"
                placeholder="Subject"
                required
                minLength={4}
                className={inputClasses}
              />
            </div>

            <div className="relative">
              <textarea
                name="message"
                placeholder="Message"
                required
                minLength={10}
                rows={6}
                className={`${inputClasses} resize-none`}
              />
            </div>

            <div className="flex justify-center">
              <motion.button
                type="submit"
                disabled={isSubmitting}
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className="relative group flex items-center justify-center gap-2 w-full sm:w-auto px-8 py-3 bg-red-500 text-white rounded-xl hover:bg-red-600 disabled:opacity-50 disabled:cursor-not-allowed transition-all duration-300 overflow-hidden"
              >
                <div className="relative flex items-center justify-center gap-2">
                  {isSubmitting ? "Sending..." : (
                    <>
                      Send Message
                      <Send className="h-4 w-4" />
                    </>
                  )}
                </div>
                <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 transform -skew-x-12" />
              </motion.button>
            </div>
          </form>
        </motion.div>
      </div>
    </section>
  );
}