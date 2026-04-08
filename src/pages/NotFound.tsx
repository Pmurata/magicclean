import { useLocation } from "react-router-dom";
import { useEffect } from "react";
import { useLocale } from "@/hooks/useLocale";
import { t } from "@/lib/i18n";

export default function NotFound() {
  const location = useLocation();
  const { locale } = useLocale();

  useEffect(() => {
    console.error("404 - Route not found:", location.pathname);
  }, [location.pathname]);

  return (
    <div className="flex min-h-screen items-center justify-center bg-background">
      <div className="text-center px-4">
        <div className="text-8xl font-bold text-secondary mb-4">404</div>
        <h1 className="text-2xl font-bold text-foreground mb-2">
          {locale === "pt" ? "Página não encontrada" : locale === "es" ? "Página no encontrada" : "Page not found"}
        </h1>
        <p className="text-muted-foreground mb-8 max-w-md">
          {locale === "pt"
            ? "A página que você procura não existe."
            : locale === "es"
              ? "La página que busca no existe."
              : "The page you're looking for doesn't exist."}
        </p>
        <a
          href={t("contact.whatsapp.link", locale)}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center justify-center bg-secondary text-secondary-foreground px-6 py-3 rounded-full text-sm font-semibold hover:opacity-90 transition-opacity"
        >
          {locale === "pt" ? "Fale Conosco" : locale === "es" ? "Contáctenos" : "Contact Us"}
        </a>
      </div>
    </div>
  );
}
