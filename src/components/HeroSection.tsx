import { motion } from "framer-motion";
import { useLocale } from "@/hooks/useLocale";
import { t } from "@/lib/i18n";
import heroBg from "@/assets/hero-bg.jpg";

export default function HeroSection() {
  const { locale } = useLocale();

  return (
    <section className="relative min-h-[90vh] flex items-center overflow-hidden">
      {/* Background image */}
      <div className="absolute inset-0">
        <img src={heroBg} alt="" className="w-full h-full object-cover" width={1920} height={1080} />
        <div className="absolute inset-0 bg-gradient-to-r from-background via-background/90 to-background/30" />
      </div>

      {/* Floating Magic Orbs */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {[...Array(6)].map((_, i) => (
          <motion.div
            key={i}
            initial={{ 
              x: Math.random() * 100 + "%", 
              y: Math.random() * 100 + "%",
              opacity: 0 
            }}
            animate={{ 
              y: ["-10%", "110%"],
              opacity: [0, 0.4, 0],
              scale: [1, 1.2, 0.8],
            }}
            transition={{ 
              duration: 15 + Math.random() * 10, 
              repeat: Infinity,
              delay: Math.random() * 10,
              ease: "linear"
            }}
            className="absolute w-40 h-40 md:w-64 md:h-64 rounded-full bg-gradient-to-br from-secondary/10 to-cyan/5 blur-3xl"
            style={{ 
              left: (i * 20) + "%",
              filter: "blur(60px)"
            }}
          />
        ))}
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-2xl">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <div className="inline-flex items-center gap-2 bg-cyan-light text-secondary px-4 py-1.5 rounded-full text-xs font-semibold uppercase tracking-widest mb-8">
              <span className="w-2 h-2 rounded-full bg-secondary" />
              Orlando, FL
            </div>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="text-4xl md:text-6xl font-bold leading-tight text-foreground whitespace-pre-line"
          >
            {t("hero.title", locale)}
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="mt-6 text-lg md:text-xl text-muted-foreground font-light leading-relaxed max-w-lg"
          >
            {t("hero.subtitle", locale)}
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.8 }}
            className="mt-10 flex flex-col sm:flex-row gap-4"
          >
            <a
              href={t("contact.whatsapp.link", locale)}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center bg-secondary text-secondary-foreground px-8 py-4 rounded-full text-sm font-semibold hover:opacity-90 transition-opacity shadow-lg shadow-secondary/25"
            >
              {t("hero.cta", locale)}
            </a>
          </motion.div>

          {/* Trust badges */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 1.2 }}
            className="mt-12 flex items-center gap-6 text-xs text-muted-foreground font-medium uppercase tracking-widest"
          >
            <span className="flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-success" />
              {t("trust.licensed", locale)}
            </span>
            <span className="flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-success" />
              {t("trust.bonded", locale)}
            </span>
            <span className="flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-success" />
              {t("trust.insured", locale)}
            </span>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
