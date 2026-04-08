import { motion, useReducedMotion } from "framer-motion";
import { useLocale } from "@/hooks/useLocale";
import { t, Locale } from "@/lib/i18n";
import { Star, Quote } from "lucide-react";
import { useRef } from "react";

const TESTIMONIALS: { name: string; location: string; rating: number; text: Record<Locale, string> }[] = [
  {
    name: "Ana Paula M.",
    location: "Orlando, FL",
    rating: 5,
    text: {
      pt: "Serviço impecável! A equipe chegou no horário e deixou minha casa brilhando. Os panos codificados por cor me impressionaram — é um nível de higiene que nunca vi em outro serviço.",
      en: "Impeccable service! The team arrived on time and left my house sparkling. The color-coded cloths really impressed me — a level of hygiene I've never seen elsewhere.",
      es: "¡Servicio impecable! El equipo llegó puntual y dejó mi casa brillando. Los paños codificados por color me impresionaron — un nivel de higiene que nunca había visto.",
    },
  },
  {
    name: "Carlos R.",
    location: "Kissimmee, FL",
    rating: 5,
    text: {
      pt: "Uso a Magic Clean para meu Airbnb há 6 meses. Nunca recebi uma avaliação de hóspede abaixo de 5 estrelas desde então. A verificação fotográfica me dá total tranquilidade.",
      en: "I've been using Magic Clean for my Airbnb for 6 months. I haven't received a guest review below 5 stars since. The photo verification gives me total peace of mind.",
      es: "Llevo 6 meses usando Magic Clean para mi Airbnb. No he tenido reseña de huéspedes por debajo de 5 estrellas desde entonces. La verificación fotográfica me da total tranquilidad.",
    },
  },
  {
    name: "Fernanda S.",
    location: "Winter Park, FL",
    rating: 5,
    text: {
      pt: "Contratei para limpeza pós-construção e fiquei impressionada. Usaram filtros HEPA e removeram toda a poeira de obra. Casa ficou impecável. Recomendo demais!",
      en: "I hired them for post-construction cleaning and was blown away. They used HEPA filters and removed all construction dust. The house was immaculate. Highly recommend!",
      es: "Los contraté para limpieza post-construcción y quedé impresionada. Usaron filtros HEPA y eliminaron todo el polvo. La casa quedó impecable. ¡Muy recomendado!",
    },
  },
];

function TestimonialCard({
  review,
  delay,
}: {
  review: (typeof TESTIMONIALS)[number];
  delay: number;
}) {
  const shouldReduceMotion = useReducedMotion();
  const cardRef = useRef<HTMLElement>(null);

  const handleMouseMove = (e: React.MouseEvent<HTMLElement>) => {
    if (!cardRef.current) return;
    const rect = cardRef.current.getBoundingClientRect();
    cardRef.current.style.setProperty("--mx", `${((e.clientX - rect.left) / rect.width) * 100}%`);
    cardRef.current.style.setProperty("--my", `${((e.clientY - rect.top) / rect.height) * 100}%`);
  };

  const { locale } = useLocale();

  return (
    <motion.article
      ref={cardRef}
      initial={shouldReduceMotion ? { opacity: 0 } : { opacity: 0, y: 24 }}
      whileInView={shouldReduceMotion ? { opacity: 1 } : { opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: shouldReduceMotion ? 0.3 : 0.5, delay: shouldReduceMotion ? 0 : delay }}
      whileHover={shouldReduceMotion ? undefined : { y: -6, transition: { duration: 0.25 } }}
      onMouseMove={handleMouseMove}
      className="spotlight glow-hover glass group relative rounded-3xl p-8 flex flex-col gap-5 transition-shadow duration-300"
      aria-label={`Avaliação de ${review.name}`}
    >
      {/* Top shine */}
      <div
        className="absolute top-0 left-8 right-8 h-px bg-gradient-to-r from-transparent via-white/60 to-transparent pointer-events-none"
        aria-hidden="true"
      />

      {/* Quote icon */}
      <Quote
        className="w-8 h-8 text-secondary/25 group-hover:text-secondary/45 transition-colors duration-200 flex-shrink-0"
        aria-hidden="true"
      />

      {/* Review text */}
      <p className="text-sm text-muted-foreground leading-relaxed flex-1 italic">
        "{review.text[locale]}"
      </p>

      {/* Stars */}
      <div className="flex items-center gap-1" aria-label={`${review.rating} de 5 estrelas`} role="img">
        {Array.from({ length: review.rating }).map((_, j) => (
          <Star key={j} className="w-4 h-4 fill-gold text-gold" aria-hidden="true" />
        ))}
      </div>

      {/* Reviewer */}
      <div className="flex items-center gap-3 pt-2 border-t border-border/60">
        <div
          className="w-10 h-10 rounded-full bg-secondary/15 text-secondary flex items-center justify-center text-sm font-bold flex-shrink-0"
          aria-hidden="true"
        >
          {review.name.charAt(0)}
        </div>
        <div>
          <p className="text-sm font-semibold text-foreground">{review.name}</p>
          <p className="text-xs text-muted-foreground">{review.location}</p>
        </div>
      </div>
    </motion.article>
  );
}

export default function TestimonialsSection() {
  const { locale } = useLocale();
  const shouldReduceMotion = useReducedMotion();

  const entrance = (delay: number) => ({
    initial: shouldReduceMotion ? { opacity: 0 } : { opacity: 0, y: 24 },
    whileInView: shouldReduceMotion ? { opacity: 1 } : { opacity: 1, y: 0 },
    viewport: { once: true },
    transition: { duration: shouldReduceMotion ? 0.3 : 0.5, delay: shouldReduceMotion ? 0 : delay },
  });

  return (
    <section className="py-24 bg-background" aria-labelledby="testimonials-heading">
      <div className="container mx-auto px-4">
        <motion.div {...entrance(0)} className="text-center mb-16">
          <h2 id="testimonials-heading" className="text-3xl md:text-4xl font-bold text-foreground">
            {t("testimonials.title", locale)}
          </h2>
          <p className="mt-4 text-muted-foreground text-base max-w-md mx-auto">
            {t("testimonials.subtitle", locale)}
          </p>
          <div className="mt-4 mx-auto w-16 h-1 rounded-full bg-secondary" aria-hidden="true" />
        </motion.div>

        <div className="grid md:grid-cols-3 gap-6 max-w-5xl mx-auto">
          {TESTIMONIALS.map((review, i) => (
            <TestimonialCard key={review.name} review={review} delay={i * 0.12} />
          ))}
        </div>
      </div>
    </section>
  );
}
