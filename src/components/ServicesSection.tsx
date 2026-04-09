import { motion, useReducedMotion } from "framer-motion";
import { useLocale } from "@/hooks/useLocale";
import { t } from "@/lib/i18n";
import { Sparkles, Home, HardHat, Building2 } from "lucide-react";
import { ReactNode, useRef } from "react";

type ServiceConfig = {
  icon: ReactNode;
  titleKey: string;
  number: string;
  descKey?: string;
  itemKeys?: string[];
  scheduleKey?: string;
  scheduleItemKeys?: string[];
};

const SERVICES_CONFIG: ServiceConfig[] = [
  {
    icon: <Home className="w-6 h-6" />,
    titleKey: "services.routine.title",
    number: "01",
    itemKeys: ["services.routine.item1", "services.routine.item2", "services.routine.item3", "services.routine.item4"],
    scheduleKey: "services.routine.schedule",
    scheduleItemKeys: ["services.routine.weekly", "services.routine.biweekly", "services.routine.monthly"],
  },
  { icon: <Sparkles className="w-6 h-6" />, titleKey: "services.deep.title", descKey: "services.deep.desc", number: "02" },
  { icon: <HardHat className="w-6 h-6" />, titleKey: "services.postconstruction.title", descKey: "services.postconstruction.desc", number: "03" },
  { icon: <Building2 className="w-6 h-6" />, titleKey: "services.airbnb.title", descKey: "services.airbnb.desc", number: "04" },
];

const FOCUS_RING = "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-secondary focus-visible:ring-offset-2";

function ServiceCard({ s, i, locale, shouldReduceMotion, entrance }: {
  s: ServiceConfig;
  i: number;
  locale: string;
  shouldReduceMotion: boolean | null;
  entrance: (d: number) => object;
}) {
  const cardRef = useRef<HTMLDivElement>(null);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!cardRef.current) return;
    const rect = cardRef.current.getBoundingClientRect();
    const x = ((e.clientX - rect.left) / rect.width) * 100;
    const y = ((e.clientY - rect.top) / rect.height) * 100;
    cardRef.current.style.setProperty("--mx", `${x}%`);
    cardRef.current.style.setProperty("--my", `${y}%`);
  };

  return (
    <motion.div
      key={s.titleKey}
      {...entrance(i * 0.1)}
      whileHover={shouldReduceMotion ? undefined : {
        y: -10,
        transition: { duration: 0.28, ease: [0.22, 1, 0.36, 1] as const },
      }}
      ref={cardRef}
      onMouseMove={handleMouseMove}
      className="spotlight glow-hover glass group relative rounded-3xl p-8 flex flex-col min-h-[300px] overflow-hidden transition-shadow duration-300"
    >
      {/* Subtle top shine line */}
      <div
        className="absolute top-0 left-8 right-8 h-px bg-gradient-to-r from-transparent via-white/60 to-transparent pointer-events-none"
        aria-hidden="true"
      />

      {/* Number badge */}
      <span
        className="absolute top-6 right-6 text-4xl font-black text-border/50 group-hover:text-secondary/20 transition-colors duration-300 select-none"
        aria-hidden="true"
      >
        {s.number}
      </span>

      <div className="relative z-10 flex flex-col flex-1">
        {/* Icon */}
        <div className="w-14 h-14 rounded-2xl bg-cyan-light text-secondary flex items-center justify-center mb-6 group-hover:bg-secondary group-hover:text-secondary-foreground transition-colors duration-300 group-hover:scale-110 transform flex-shrink-0 shadow-sm">
          {s.icon}
        </div>

        <h3 className="text-lg font-bold text-foreground mb-3 group-hover:text-secondary transition-colors duration-200">
          {t(s.titleKey, locale as "pt" | "en" | "es")}
        </h3>

        {s.itemKeys ? (
          <div className="flex-1 flex flex-col gap-3">
            <ul className="flex flex-col gap-2" role="list">
              {s.itemKeys.map((key) => (
                <li key={key} className="flex items-center gap-2 text-sm text-muted-foreground">
                  <span className="w-4 h-4 rounded-full bg-secondary/15 text-secondary flex items-center justify-center flex-shrink-0 text-[10px] font-bold" aria-hidden="true">✓</span>
                  {t(key, locale as "pt" | "en" | "es")}
                </li>
              ))}
            </ul>
            {s.scheduleKey && s.scheduleItemKeys && (
              <div className="mt-3 pt-3 border-t border-border/60">
                <p className="text-[10px] font-bold tracking-widest text-secondary/70 mb-2">{t(s.scheduleKey, locale as "pt" | "en" | "es")}</p>
                <ul className="flex flex-col gap-1.5" role="list">
                  {s.scheduleItemKeys.map((key) => (
                    <li key={key} className="flex items-center gap-2 text-sm text-muted-foreground">
                      <span className="w-4 h-4 rounded-full bg-secondary/15 text-secondary flex items-center justify-center flex-shrink-0 text-[10px] font-bold" aria-hidden="true">✓</span>
                      {t(key, locale as "pt" | "en" | "es")}
                    </li>
                  ))}
                </ul>
              </div>
            )}
          </div>
        ) : (
          <p className="text-sm text-muted-foreground leading-relaxed flex-1">
            {t(s.descKey!, locale as "pt" | "en" | "es")}
          </p>
        )}

        {/* CTA link */}
        <a
          href={t("contact.whatsapp.link", locale as "pt" | "en" | "es")}
          target="_blank"
          rel="noopener noreferrer"
          className={`mt-6 inline-flex items-center gap-1 text-xs font-semibold text-secondary opacity-0 group-hover:opacity-100 transition-opacity duration-200 rounded-sm ${FOCUS_RING}`}
          tabIndex={0}
        >
          {locale === "pt" ? "Saiba mais" : locale === "en" ? "Learn more" : "Saber más"}
          <span aria-hidden="true">→</span>
        </a>
      </div>
    </motion.div>
  );
}

export default function ServicesSection() {
  const { locale } = useLocale();
  const shouldReduceMotion = useReducedMotion();

  const entrance = (delay: number) => ({
    initial: shouldReduceMotion ? { opacity: 0 } : { opacity: 0, y: 30 },
    whileInView: shouldReduceMotion ? { opacity: 1 } : { opacity: 1, y: 0 },
    viewport: { once: true },
    transition: { duration: shouldReduceMotion ? 0.3 : 0.5, delay: shouldReduceMotion ? 0 : delay },
  });

  return (
    <section id="services" className="py-24 bg-surface-warm" aria-labelledby="services-heading">
      <div className="container mx-auto px-4">
        <motion.div
          {...entrance(0)}
          className="text-center mb-16"
        >
          <h2 id="services-heading" className="text-3xl md:text-4xl font-bold text-foreground">
            {t("services.title", locale)}
          </h2>
          <div className="mt-4 mx-auto w-16 h-1 rounded-full bg-secondary" aria-hidden="true" />
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {SERVICES_CONFIG.map((s, i) => (
            <ServiceCard
              key={s.titleKey}
              s={s}
              i={i}
              locale={locale}
              shouldReduceMotion={shouldReduceMotion}
              entrance={entrance}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
