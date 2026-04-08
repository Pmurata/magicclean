import { motion, useReducedMotion } from "framer-motion";
import { useLocale } from "@/hooks/useLocale";
import { t } from "@/lib/i18n";
import heroBg from "@/assets/hero-bg.jpg";
import { useMemo } from "react";
import { Star } from "lucide-react";

const ORB_CONFIGS = Array.from({ length: 6 }, (_, i) => ({
  id: i,
  left: `${i * 18}%`,
  delay: i * 2.1,
  duration: 14 + i * 2.5,
}));

const STATS = [
  { value: "500+", labelKey: "stats.cleanings" },
  { value: "5.0", labelKey: "stats.rating", star: true },
  { value: "200+", labelKey: "stats.clients" },
  { value: "3+", labelKey: "stats.years" },
];

const FOCUS_RING = "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-secondary focus-visible:ring-offset-2";

export default function HeroSection() {
  const { locale } = useLocale();
  const shouldReduceMotion = useReducedMotion();

  const orbAnimate = shouldReduceMotion
    ? { opacity: 0.15 }
    : { y: ["-5%", "105%"], opacity: [0, 0.35, 0], scale: [1, 1.15, 0.85] };

  const orbTransition = (orb: { duration: number; delay: number }) =>
    shouldReduceMotion
      ? { duration: 0 }
      : { duration: orb.duration, repeat: Infinity, delay: orb.delay, ease: "linear" as const };

  const orbs = useMemo(
    () =>
      ORB_CONFIGS.map((orb) => (
        <motion.div
          key={orb.id}
          initial={{ opacity: 0, y: "-5%" }}
          animate={orbAnimate}
          transition={orbTransition(orb)}
          className="absolute w-48 h-48 md:w-72 md:h-72 rounded-full bg-gradient-to-br from-secondary/15 to-cyan/5"
          style={{ left: orb.left, filter: "blur(64px)" }}
        />
      )),
    [shouldReduceMotion],
  );

  const entrance = (delay: number) => ({
    initial: shouldReduceMotion ? { opacity: 0 } : { opacity: 0, y: 30 },
    animate: shouldReduceMotion ? { opacity: 1 } : { opacity: 1, y: 0 },
    transition: { duration: shouldReduceMotion ? 0.3 : 0.8, delay },
  });

  return (
    <section
      id="hero"
      className="relative min-h-[92vh] flex items-center overflow-hidden"
      aria-label="Hero"
    >
      {/* Background image */}
      <div className="absolute inset-0" aria-hidden="true">
        <img
          src={heroBg}
          alt=""
          className="w-full h-full object-cover"
          width={1920}
          height={1080}
          fetchPriority="high"
          loading="eager"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-background via-background/92 to-background/40" />
      </div>

      {/* Floating orbs */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none" aria-hidden="true">
        {orbs}
      </div>

      <div className="container mx-auto px-4 relative z-10 py-24">
        <div className="max-w-2xl">
          {/* Badge */}
          <motion.div {...entrance(0.2)}>
            <div className="inline-flex items-center gap-2 bg-cyan-light text-secondary px-4 py-1.5 rounded-full text-xs font-semibold uppercase tracking-widest mb-8 border border-secondary/20">
              <span className="w-2 h-2 rounded-full bg-secondary animate-pulse" aria-hidden="true" />
              Orlando, FL
            </div>
          </motion.div>

          {/* Heading */}
          <motion.h1
            {...entrance(0.4)}
            className="text-4xl md:text-6xl font-bold leading-tight text-foreground whitespace-pre-line"
          >
            {t("hero.title", locale)}
          </motion.h1>

          {/* Subtitle */}
          <motion.p
            {...entrance(0.6)}
            className="mt-6 text-lg md:text-xl text-muted-foreground font-light leading-relaxed max-w-lg"
          >
            {t("hero.subtitle", locale)}
          </motion.p>

          {/* CTA */}
          <motion.div
            {...entrance(0.8)}
            className="mt-10 flex flex-col sm:flex-row gap-4"
          >
            <a
              href={t("contact.whatsapp.link", locale)}
              target="_blank"
              rel="noopener noreferrer"
              className={`inline-flex items-center justify-center bg-secondary text-secondary-foreground px-8 py-4 rounded-full text-sm font-semibold hover:opacity-90 active:scale-95 transition-opacity transition-transform shadow-lg shadow-secondary/25 ${FOCUS_RING}`}
            >
              {t("hero.cta", locale)}
            </a>
          </motion.div>

          {/* Trust badges */}
          <motion.div
            {...entrance(1.0)}
            className="mt-10 flex flex-wrap items-center gap-x-6 gap-y-3 text-xs text-muted-foreground font-medium uppercase tracking-widest"
          >
            {(["trust.licensed", "trust.bonded", "trust.insured"] as const).map((key) => (
              <span key={key} className="flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-success" aria-hidden="true" />
                {t(key, locale)}
              </span>
            ))}
          </motion.div>

          {/* Stats bar */}
          <motion.div
            {...entrance(1.2)}
            className="mt-12 grid grid-cols-2 sm:grid-cols-4 gap-4"
            aria-label="Números do negócio"
          >
            {STATS.map((stat) => (
              <div
                key={stat.labelKey}
                className="flex flex-col items-center sm:items-start gap-0.5 bg-background/60 backdrop-blur-sm border border-border/50 rounded-2xl px-4 py-3"
              >
                <span className="text-2xl font-bold text-foreground flex items-center gap-1">
                  {stat.value}
                  {stat.star && <Star className="w-4 h-4 fill-gold text-gold" aria-hidden="true" />}
                </span>
                <span className="text-xs text-muted-foreground font-medium">{t(stat.labelKey, locale)}</span>
              </div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
