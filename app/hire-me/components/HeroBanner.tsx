const HeroBanner = () => {
  return (
    <section className="px-5 pb-8 pt-12 md:px-8 md:pt-16">
      <div className="mx-auto max-w-6xl text-left">
        <p className="font-mono text-xs uppercase tracking-[0.28em] text-signal">
          Available for new projects
        </p>
        <h1 className="mt-4 max-w-3xl font-display text-4xl font-bold leading-[1.05] text-ink md:text-6xl">
          Let&apos;s build something that ships — and stays shipped.
        </h1>
        <p className="mt-5 max-w-2xl text-lg text-muted-ink">
          Full-stack product work, ops platforms, and AI-ready features with
          clear scope and direct communication.
        </p>
      </div>
    </section>
  );
};

export default HeroBanner;
