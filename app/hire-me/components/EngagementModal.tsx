"use client";

import { motion } from "framer-motion";
import {
  Calendar,
  Clock,
  CreditCard,
  DollarSign,
  Headphones,
  Infinity as InfinityIcon,
  RefreshCw,
  Star,
} from "lucide-react";

const models = [
  {
    title: "Project based",
    description: "Defined scope with clear deliverables and a fixed path to launch.",
    features: [
      { text: "Fixed price guarantee", icon: DollarSign },
      { text: "Clear timeline", icon: Calendar },
      { text: "Dedicated support", icon: Headphones },
    ],
    button: "Get a quote",
  },
  {
    title: "Monthly retainer",
    description: "Ongoing product work with reserved capacity each month.",
    features: [
      { text: "Reserved monthly hours", icon: Clock },
      { text: "Priority support", icon: Star },
      { text: "Regular updates", icon: RefreshCw },
    ],
    button: "Start monthly",
  },
  {
    title: "Hourly",
    description: "Flexible help when the scope is still moving.",
    features: [
      { text: "Pay as you go", icon: CreditCard },
      { text: "No long commitment", icon: InfinityIcon },
      { text: "Regular updates", icon: RefreshCw },
    ],
    button: "Get started",
  },
];

const EngagementModels = () => {
  const scrollToContact = () => {
    document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section className="px-5 py-16 md:px-8 md:py-20">
      <div className="mx-auto max-w-6xl">
        <div className="max-w-2xl">
          <p className="font-mono text-xs uppercase tracking-[0.28em] text-muted-ink">
            Engagement
          </p>
          <h2 className="mt-3 font-display text-3xl font-bold text-ink md:text-4xl">
            Pick a way to work together
          </h2>
          <p className="mt-3 text-muted-ink">
            Same quality of delivery — different shapes of commitment.
          </p>
        </div>

        <div className="mt-12 grid gap-px overflow-hidden rounded-[1.75rem] border border-line bg-line md:grid-cols-3">
          {models.map((model, index) => (
            <motion.div
              key={model.title}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: index * 0.08 }}
              className="flex flex-col bg-mist/90 p-7 backdrop-blur-sm md:p-8"
            >
              <span className="font-mono text-xs text-signal">0{index + 1}</span>
              <h3 className="mt-3 font-display text-2xl font-semibold text-ink">
                {model.title}
              </h3>
              <p className="mt-2 text-sm leading-relaxed text-muted-ink">
                {model.description}
              </p>
              <ul className="mt-6 flex-1 space-y-3">
                {model.features.map(({ text, icon: Icon }) => (
                  <li key={text} className="flex items-center gap-3 text-sm text-ink">
                    <Icon className="h-4 w-4 text-signal" />
                    {text}
                  </li>
                ))}
              </ul>
              <button
                type="button"
                onClick={scrollToContact}
                className="mt-8 w-full rounded-full bg-ink py-3 text-sm font-semibold text-white transition hover:bg-signal"
              >
                {model.button}
              </button>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default EngagementModels;
