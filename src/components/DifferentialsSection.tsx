import { motion, useReducedMotion } from "framer-motion";
import { useLocale } from "@/hooks/useLocale";
import { t } from "@/lib/i18n";
import { Palette, Leaf } from "lucide-react";
import { ReactNode } from "react";

const DIFFS: { icon: ReactNode; titleKey: string; descKey: string }[] = [
  { icon: <Palette className="w-8 h-8" />, titleKey: "diff.color.title", descKey: "diff.color.desc" },
  { icon: <Leaf className="w-8 h-8" />, titleKey: "diff.eco.title", descKey: "diff.eco.desc" },
];

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
            <motion.div
              key={d.titleKey}
              {...entrance(i * 0.15)}
              className="group text-center bg-white/5 hover:bg-white/10 border border-white/10 hover:border-secondary/30 rounded-3xl p-8 transition-colors duration-300"
            >
              <div className="w-16 h-16 rounded-2xl bg-secondary/15 text-secondary flex items-center justify-center mx-auto mb-6 group-hover:bg-secondary group-hover:text-secondary-foreground transition-colors duration-300">
                {d.icon}
              </div>
              <h3 className="text-lg font-bold mb-3">{t(d.titleKey, locale)}</h3>
              <p className="text-sm opacity-70 leading-relaxed group-hover:opacity-90 transition-opacity duration-200">
                {t(d.descKey, locale)}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
