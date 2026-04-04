import { motion } from "framer-motion";
import { useLocale } from "@/hooks/useLocale";
import { t } from "@/lib/i18n";
import { Palette, PawPrint, Leaf } from "lucide-react";
import { ReactNode } from "react";

export default function DifferentialsSection() {
  const { locale } = useLocale();

  const diffs: { icon: ReactNode; titleKey: string; descKey: string }[] = [
    { icon: <Palette className="w-8 h-8" />, titleKey: "diff.color.title", descKey: "diff.color.desc" },
    { icon: <PawPrint className="w-8 h-8" />, titleKey: "diff.pet.title", descKey: "diff.pet.desc" },
    { icon: <Leaf className="w-8 h-8" />, titleKey: "diff.eco.title", descKey: "diff.eco.desc" },
  ];

  return (
    <section id="differentials" className="py-24 bg-primary text-primary-foreground">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          
          <h2 className="text-3xl md:text-4xl font-bold">{t("diff.title", locale)}</h2>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-8 max-w-4xl mx-auto">
          {diffs.map((d, i) => (
            <motion.div
              key={d.titleKey}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.15 }}
              className="text-center"
            >
              <div className="w-16 h-16 rounded-2xl bg-secondary/15 text-secondary flex items-center justify-center mx-auto mb-6">
                {d.icon}
              </div>
              <h3 className="text-lg font-bold mb-3">{t(d.titleKey, locale)}</h3>
              <p className="text-sm opacity-75 leading-relaxed">{t(d.descKey, locale)}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
