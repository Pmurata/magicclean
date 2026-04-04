import { motion } from "framer-motion";
import { useLocale } from "@/hooks/useLocale";
import { t } from "@/lib/i18n";
import { Sparkles, Home, HardHat, Building2 } from "lucide-react";
import { ReactNode } from "react";

export default function ServicesSection() {
  const { locale } = useLocale();

  const services: { icon: ReactNode; titleKey: string; descKey: string }[] = [
    { icon: <Home className="w-7 h-7" />, titleKey: "services.routine.title", descKey: "services.routine.desc" },
    { icon: <Sparkles className="w-7 h-7" />, titleKey: "services.deep.title", descKey: "services.deep.desc" },
    { icon: <HardHat className="w-7 h-7" />, titleKey: "services.postconstruction.title", descKey: "services.postconstruction.desc" },
    { icon: <Building2 className="w-7 h-7" />, titleKey: "services.airbnb.title", descKey: "services.airbnb.desc" },
  ];

  return (
    <section id="services" className="py-24 bg-surface-warm">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >

          <h2 className="text-3xl md:text-4xl font-bold text-foreground">
            {t("services.title", locale)}
          </h2>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {services.map((s, i) => (
            <motion.div
              key={s.titleKey}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              whileHover={{ 
                y: -15, 
                scale: 1.04,
                transition: { duration: 0.4, ease: [0.22, 1, 0.36, 1] }
              }}
              className="group relative bg-card/50 backdrop-blur-sm rounded-3xl p-8 border border-white/20 hover:border-secondary/40 shadow-sm hover:shadow-2xl hover:shadow-secondary/10 transition-all duration-500 cursor-default overflow-hidden"
            >
              <div className="absolute inset-0 bg-gradient-to-br from-secondary/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              <div className="relative z-10">
                <div className="w-16 h-16 rounded-2xl bg-cyan-light text-secondary flex items-center justify-center mb-8 group-hover:bg-secondary group-hover:text-secondary-foreground shadow-inner transition-all duration-500 transform group-hover:rotate-6">
                  {s.icon}
                </div>
                <h3 className="text-xl font-bold text-foreground mb-4 group-hover:text-secondary transition-colors duration-300">{t(s.titleKey, locale)}</h3>
                <p className="text-sm text-muted-foreground leading-relaxed group-hover:text-foreground/80 transition-colors duration-300">{t(s.descKey, locale)}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
