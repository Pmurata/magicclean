import { motion, useReducedMotion } from "framer-motion";
import { useLocale } from "@/hooks/useLocale";
import { t } from "@/lib/i18n";
import { Palette, Leaf } from "lucide-react";
import { ReactNode, useRef } from "react";

const DIFFS: { icon: ReactNode; titleKey: string; descKey: string }[] = [
  { icon: <Palette className="w-8 h-8" />, titleKey: "diff.color.title", descKey: "diff.color.desc" },
  { icon: <Leaf className="w-8 h-8" />, titleKey: "diff.eco.title", descKey: "diff.eco.desc" },
];

function DiffCard({
  d,
  delay,
}: {
  d: (typeof DIFFS)[number];
  delay: number;
}) {
  const shouldReduceMotion = useReducedMotion();
  const { locale } = useLocale();
  const cardRef = useRef<HTMLDivElement>(null);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!cardRef.current) return;
    const rect = cardRef.current.getBoundingClientRect();
    cardRef.current.style.setProperty("--mx", `${((e.clientX - rect.left) / rect.width) * 100}%`);
    cardRef.current.style.setProperty("--my", `${((e.clientY - rect.top) / rect.height) * 100}%`);
  };

  return (
    <motion.div
      ref={cardRef}
      initial={shouldReduceMotion ? { opacity: 0 } : { opacity: 0, y: 30 }}
      whileInView={shouldReduceMotion ? { opacity: 1 } : { opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: shouldReduceMotion ? 0.3 : 0.5, delay: shouldReduceMotion ? 0 : delay }}
      whileHover={shouldReduceMotion ? undefined : { y: -8, transition: { duration: 0.25 } }}
      onMouseMove={handleMouseMove}
      className="spotlight-white spotlight glass-dark group text-center rounded-3xl p-8 transition-colors duration-300"
    >
      {/* Top shine */}
      <div
        className="absolute top-0 left-8 right-8 h-px bg-gradient-to-r from-transparent via-white/20 to-transparent pointer-events-none"
        aria-hidden="true"
      />

      <div className="relative z-10 w-16 h-16 rounded-2xl bg-secondary/15 text-secondary flex items-center justify-center mx-auto mb-6 group-hover:bg-secondary group-hover:text-secondary-foreground transition-colors duration-300 group-hover:scale-110 transform">
        {d.icon}
      </div>
      <h3 className="relative z-10 text-lg font-bold mb-3">{t(d.titleKey, locale)}</h3>
      <p className="relative z-10 text-sm opacity-70 leading-relaxed group-hover:opacity-90 transition-opacity duration-200">
        {t(d.descKey, locale)}
      </p>
    </motion.div>
  );
}

export default function DifferentialsSection() {
  const { locale } = useLocale();
  const shouldReduceMotion = useReducedMotion();

  const entrance = (delay: number) => ({
    initial: shouldReduceMotion ? { opacity: 0 } : { opacity: 0, y: 30 },
    whileInView: shouldReduceMotion ? { opacity: 1 } : { opacity: 1, y: 0 },
    viewport: { once: true },
    transition: { duration: shouldReduceMotion ? 0.3 : 0.5, delay: shouldReduceMotion ? 0 : delay },
  });

  return (
    <section id="differentials" className="py-24 bg-primary text-primary-foreground relative overflow-hidden" aria-labelledby="differentials-heading">
      {/* Decorative background circles */}
      <div className="absolute top-0 right-0 w-96 h-96 rounded-full bg-secondary/5 -translate-y-1/2 translate-x-1/3 pointer-events-none" aria-hidden="true" />
      <div className="absolute bottom-0 left-0 w-64 h-64 rounded-full bg-secondary/5 translate-y-1/2 -translate-x-1/3 pointer-events-none" aria-hidden="true" />

      <div className="container mx-auto px-4 relative z-10">
        <motion.div
          {...entrance(0)}
          className="text-center mb-16"
        >
          <h2 id="differentials-heading" className="text-3xl md:text-4xl font-bold">
            {t("diff.title", locale)}
          </h2>
          <div className="mt-4 mx-auto w-16 h-1 rounded-full bg-secondary" aria-hidden="true" />
        </motion.div>

        <div className="grid md:grid-cols-2 gap-8 max-w-2xl mx-auto">
          {DIFFS.map((d, i) => (
            <DiffCard key={d.titleKey} d={d} delay={i * 0.15} />
          ))}
        </div>
      </div>
    </section>
  );
}
