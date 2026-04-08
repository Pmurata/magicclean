import { motion, useReducedMotion } from "framer-motion";
import { useLocale } from "@/hooks/useLocale";
import { t } from "@/lib/i18n";
import { MessageCircle } from "lucide-react";

const FOCUS_RING = "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-offset-2 focus-visible:ring-offset-secondary";

export default function CTASection() {
  const { locale } = useLocale();
  const shouldReduceMotion = useReducedMotion();

  return (
    <section
      className="py-20 bg-secondary relative overflow-hidden"
      aria-labelledby="cta-heading"
    >
      {/* Decorative blobs */}
      <div className="absolute -top-20 -left-20 w-72 h-72 rounded-full bg-white/5 pointer-events-none" aria-hidden="true" />
      <div className="absolute -bottom-16 -right-16 w-96 h-96 rounded-full bg-white/5 pointer-events-none" aria-hidden="true" />

      <div className="container mx-auto px-4 relative z-10">
        <motion.div
          initial={shouldReduceMotion ? { opacity: 0 } : { opacity: 0, y: 24 }}
          whileInView={shouldReduceMotion ? { opacity: 1 } : { opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: shouldReduceMotion ? 0.3 : 0.6 }}
          className="text-center text-secondary-foreground max-w-2xl mx-auto"
        >
          <h2 id="cta-heading" className="text-3xl md:text-4xl font-bold">
            {t("cta.title", locale)}
          </h2>
          <p className="mt-4 text-base opacity-85 leading-relaxed">
            {t("cta.subtitle", locale)}
          </p>

          <div className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-4">
            <a
              href={t("contact.whatsapp.link", locale)}
              target="_blank"
              rel="noopener noreferrer"
              className={`inline-flex items-center justify-center gap-2.5 bg-white text-secondary px-8 py-4 rounded-full text-sm font-bold hover:bg-white/90 active:scale-95 transition-opacity transition-transform shadow-xl ${FOCUS_RING}`}
            >
              <MessageCircle className="w-5 h-5" aria-hidden="true" />
              {t("cta.button", locale)}
            </a>

            <a
              href={`mailto:${t("contact.email", locale)}`}
              className={`inline-flex items-center justify-center gap-2 border-2 border-white/40 text-secondary-foreground px-8 py-4 rounded-full text-sm font-semibold hover:border-white/80 hover:bg-white/10 transition-colors ${FOCUS_RING}`}
            >
              {t("contact.email", locale)}
            </a>
          </div>

          {/* Trust row */}
          <div className="mt-10 flex flex-wrap items-center justify-center gap-x-8 gap-y-3 text-xs font-semibold uppercase tracking-widest opacity-70">
            {(["trust.licensed", "trust.bonded", "trust.insured"] as const).map((key) => (
              <span key={key} className="flex items-center gap-2">
                <span className="w-1.5 h-1.5 rounded-full bg-white" aria-hidden="true" />
                {t(key, locale)}
              </span>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
