"use client";

import { motion } from "framer-motion";

const pillars = [
  {
    title: "Product systems",
    copy: "Versioned instruments, entitlements, workspaces, and staff consoles — not throwaway landing pages.",
  },
  {
    title: "Ops & routing",
    copy: "Role-aware portals with escalation, compliance, and audit trails that replace spreadsheet handoffs.",
  },
  {
    title: "Ship discipline",
    copy: "Typed stacks, RLS-backed data, parity-tested scoring, and deploy paths clients can trust.",
  },
];

const ease = [0.22, 1, 0.36, 1] as const;

export default function Focus() {
  return (
    <section className="px-5 py-20 md:px-8 md:py-24">
      <div className="mx-auto max-w-6xl">
        <motion.div
          className="max-w-2xl"
          initial={{ opacity: 0, y: 28 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-60px" }}
          transition={{ duration: 0.55, ease }}
        >
          <p className="font-mono text-xs uppercase tracking-[0.28em] text-muted-ink">
            How I work
          </p>
          <h2 className="mt-3 font-display text-4xl font-bold text-ink md:text-5xl">
            Built for production, not demos
          </h2>
          <p className="mt-4 text-lg text-muted-ink">
            Five-plus years turning briefs into live systems — Next.js, React,
            Supabase, and the glue that makes payments, auth, and ops stick.
          </p>
        </motion.div>

        <motion.div
          className="mt-14 grid gap-px overflow-hidden rounded-[1.75rem] border border-line bg-line md:grid-cols-3"
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-40px" }}
          variants={{
            hidden: {},
            show: { transition: { staggerChildren: 0.12 } },
          }}
        >
          {pillars.map((item, index) => (
            <motion.div
              key={item.title}
              variants={{
                hidden: { opacity: 0, y: 28 },
                show: { opacity: 1, y: 0, transition: { duration: 0.5, ease } },
              }}
              whileHover={{ backgroundColor: "rgba(255,255,255,0.72)" }}
              className="bg-mist/90 p-8 backdrop-blur-sm md:p-10"
            >
              <motion.span
                className="inline-block font-mono text-xs text-signal"
                initial={{ opacity: 0, x: -8 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.15 + index * 0.1 }}
              >
                0{index + 1}
              </motion.span>
              <h3 className="mt-4 font-display text-2xl font-semibold text-ink">
                {item.title}
              </h3>
              <p className="mt-3 leading-relaxed text-muted-ink">{item.copy}</p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
