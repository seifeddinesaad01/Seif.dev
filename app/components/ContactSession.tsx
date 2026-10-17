"use client";

import { motion } from "framer-motion";
import { ArrowUpRight, Clock, MessageSquare, Shield } from "lucide-react";
import { SiUpwork } from "react-icons/si";
import ContactForm from "./ContactForm";

const points = [
  {
    icon: Clock,
    title: "Reply within a day",
    desc: "Clear next steps after your first note.",
  },
  {
    icon: Shield,
    title: "Scoped & transparent",
    desc: "Milestones, ownership, and no mystery invoices.",
  },
  {
    icon: MessageSquare,
    title: "Direct collaboration",
    desc: "You work with me — not a relayed ticket queue.",
  },
];

const ease = [0.22, 1, 0.36, 1] as const;

const ContactSection = () => {
  return (
    <section id="contact" className="px-5 py-20 md:px-8 md:py-28">
      <div className="mx-auto grid max-w-6xl gap-12 lg:grid-cols-[0.95fr_1.05fr] lg:gap-16">
        <motion.div
          initial={{ opacity: 0, x: -24 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, margin: "-60px" }}
          transition={{ duration: 0.55, ease }}
        >
          <p className="font-mono text-xs uppercase tracking-[0.28em] text-muted-ink">
            Contact
          </p>
          <h2 className="mt-3 font-display text-4xl font-bold text-ink md:text-5xl">
            Tell me what you&apos;re building
          </h2>
          <p className="mt-4 max-w-md text-lg text-muted-ink">
            Share the problem, the timeline, and where things stand. I&apos;ll
            come back with a practical path.
          </p>

          <ul className="mt-10 space-y-6">
            {points.map(({ icon: Icon, title, desc }, index) => (
              <motion.li
                key={title}
                className="flex gap-4"
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.1 + index * 0.08, duration: 0.45, ease }}
              >
                <motion.div
                  whileHover={{ scale: 1.08, rotate: -3 }}
                  className="flex h-11 w-11 shrink-0 items-center justify-center rounded-2xl border border-line bg-white/60 text-signal"
                >
                  <Icon className="h-5 w-5" />
                </motion.div>
                <div>
                  <h3 className="font-semibold text-ink">{title}</h3>
                  <p className="mt-1 text-sm text-muted-ink">{desc}</p>
                </div>
              </motion.li>
            ))}
          </ul>

          <motion.button
            type="button"
            whileHover={{ scale: 1.03, x: 2 }}
            whileTap={{ scale: 0.98 }}
            onClick={() =>
              window.open(
                "https://www.upwork.com/freelancers/seifeddines01",
                "_blank"
              )
            }
            className="mt-10 inline-flex items-center gap-2 rounded-full border border-line bg-white/50 px-5 py-3 text-sm font-semibold text-ink transition hover:border-signal hover:text-signal"
          >
            <SiUpwork className="h-4 w-4 text-emerald-600" />
            Also on Upwork
            <ArrowUpRight className="h-4 w-4" />
          </motion.button>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 32, scale: 0.98 }}
          whileInView={{ opacity: 1, y: 0, scale: 1 }}
          viewport={{ once: true, margin: "-60px" }}
          transition={{ duration: 0.6, delay: 0.1, ease }}
          className="rounded-[1.75rem] border border-line bg-white/70 p-6 shadow-xl shadow-ink/5 backdrop-blur-md md:p-8"
        >
          <ContactForm />
        </motion.div>
      </div>
    </section>
  );
};

export default ContactSection;
