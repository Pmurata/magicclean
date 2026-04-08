import { motion, useReducedMotion } from "framer-motion";
import { useLocale } from "@/hooks/useLocale";
import { t } from "@/lib/i18n";
import heroBg from "@/assets/hero-bg.jpg";
import { useMemo, useRef, useCallback } from "react";
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
  const sectionRef = useRef<HTMLElement>(null);

  /* Parallax suave: o container de orbs desloca levemente com o mouse */
  const orbsContainerRef = useRef<HTMLDivElement>(null);
  const handleMouseMove = useCallback((e: React.MouseEvent<HTMLElement>) => {
    if (shouldReduceMotion || !orbsContainerRef.current) return;
    const { clientX, clientY, currentTarget } = e;
    const { width, height } = currentTarget.getBoundingClientRect();
    const dx = (clientX / width - 0.5) * 18;   // ±9 px
    const dy = (clientY / height - 0.5) * 12;  // ±6 px
    orbsContainerRef.current.style.transform = `translate(${dx}px, ${dy}px)`;
  }, [shouldReduceMotion]);

  const handleMouseLeave = useCallback(() => {
    if (!orbsContainerRef.current) return;
    orbsContainerRef.current.style.transform = "translate(0px, 0px)";
  }, []);

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
      ref={sectionRef}
      className="relative min-h-[92vh] flex items-center overflow-hidden"
      aria-label="Hero"
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
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

      {/* Floating orbs — movem suavemente com o mouse */}
      <div
        ref={orbsContainerRef}
        className="absolute inset-0 overflow-hidden pointer-events-none transition-transform duration-700 ease-out"
        aria-hidden="true"
      >
        {orbs}
      </div>

      <div className="container mx-auto px-4 relative z-10 py-32">
        <div className="max-w-3xl">
          {/* Heading */}
          <motion.h1
            {...entrance(0.2)}
            className="text-5xl md:text-7xl lg:text-8xl font-bold leading-tight text-foreground tracking-tight"
          >
            {t("hero.title", locale)}
          </motion.h1>

          {/* Subtitle */}
          <motion.p
            {...entrance(0.4)}
            className="mt-8 text-lg md:text-xl text-muted-foreground font-light leading-relaxed max-w-xl"
          >
            {t("hero.subtitle", locale)}
          </motion.p>

          {/* CTA Button */}
          <motion.div {...entrance(0.6)} className="mt-12">
            <a
              href={t("contact.whatsapp.link", locale)}
              target="_blank"
              rel="noopener noreferrer"
              className={`inline-flex items-center justify-center bg-secondary text-secondary-foreground px-10 py-5 rounded-full text-base font-semibold hover:shadow-xl hover:shadow-secondary/30 active:scale-95 transition-shadow transition-transform duration-200 ${FOCUS_RING}`}
            >
              {t("hero.cta", locale)}
            </a>
          </motion.div>

          {/* Trust badges */}
          <motion.div
            {...entrance(0.8)}
            className="mt-12 flex flex-wrap items-center gap-x-4 gap-y-2 text-xs text-muted-foreground font-medium uppercase tracking-widest"
          >
            {(["trust.licensed", "trust.bonded", "trust.insured"] as const).map((key) => (
              <span key={key} className="flex items-center gap-2">
                <span className="w-1.5 h-1.5 rounded-full bg-secondary/50" aria-hidden="true" />
                {t(key, locale)}
              </span>
            ))}
          </motion.div>

          {/* Stats bar — glass cards com spotlight */}
          <motion.div
            {...entrance(1.0)}
            className="mt-16 grid grid-cols-2 sm:grid-cols-4 gap-3"
            aria-label="Números do negócio"
          >
            {STATS.map((stat) => (
              <div key={stat.labelKey} className="flex flex-col gap-1">
                <span className="text-3xl md:text-4xl font-bold text-foreground flex items-center gap-1.5">
                  {stat.value}
                  {stat.star && <Star className="w-5 h-5 md:w-6 md:h-6 fill-gold text-gold" aria-hidden="true" />}
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
