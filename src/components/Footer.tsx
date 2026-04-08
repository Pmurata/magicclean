import { useLocale } from "@/hooks/useLocale";
import { t } from "@/lib/i18n";
import { Camera, MessageCircle, Mail } from "lucide-react";
import logo from "@/assets/magic-clean-logo.png";

const FOCUS_RING = "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-secondary focus-visible:ring-offset-2";

export default function Footer() {
  const { locale } = useLocale();

  return (
    <footer id="contact" className="relative bg-background text-foreground pt-16 pb-8 border-t border-border">
      {/* Gradient top line */}
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-secondary to-transparent" aria-hidden="true" />

      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-3 gap-12 pb-12 border-b border-border">
          {/* Brand */}
          <div>
            <img src={logo} alt="Magic Clean" className="h-12 w-auto mb-4" />
            <p className="text-sm text-muted-foreground leading-relaxed max-w-xs">
              {t("footer.tagline", locale)}
            </p>
          </div>

          {/* Connect */}
          <div>
            <h3 className="font-semibold text-xs uppercase tracking-widest mb-5 text-foreground">
              {t("footer.connect", locale)}
            </h3>
            <ul className="flex flex-col gap-3" role="list">
              <li>
                <a
                  href={t("contact.instagram.link", locale)}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`flex items-center gap-3 text-sm text-muted-foreground hover:text-foreground transition-colors rounded-sm ${FOCUS_RING}`}
                >
                  <Camera className="w-4 h-4 text-secondary flex-shrink-0" aria-hidden="true" />
                  Instagram
                </a>
              </li>
              <li>
                <a
                  href={t("contact.whatsapp.link", locale)}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`flex items-center gap-3 text-sm text-muted-foreground hover:text-foreground transition-colors rounded-sm ${FOCUS_RING}`}
                >
                  <MessageCircle className="w-4 h-4 text-secondary flex-shrink-0" aria-hidden="true" />
                  {t("contact.phone", locale)}
                </a>
              </li>
              <li>
                <a
                  href={`mailto:${t("contact.email", locale)}`}
                  className={`flex items-center gap-3 text-sm text-muted-foreground hover:text-foreground transition-colors break-all rounded-sm ${FOCUS_RING}`}
                >
                  <Mail className="w-4 h-4 text-secondary flex-shrink-0" aria-hidden="true" />
                  {t("contact.email", locale)}
                </a>
              </li>
            </ul>
          </div>

          {/* Trust */}
          <div>
            <h3 className="font-semibold text-xs uppercase tracking-widest mb-5 text-foreground">
              {t("footer.trust", locale)}
            </h3>
            <div className="flex flex-wrap gap-2">
              {(["trust.licensed", "trust.bonded", "trust.insured"] as const).map((key) => (
                <span
                  key={key}
                  className="px-3 py-1.5 border border-secondary/30 bg-cyan-light rounded-full text-xs font-semibold text-secondary"
                >
                  {t(key, locale)}
                </span>
              ))}
            </div>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="pt-6 flex flex-col sm:flex-row items-center justify-between gap-3">
          <p className="text-xs text-muted-foreground/70">{t("footer.rights", locale)}</p>
          <p className="text-xs text-muted-foreground/50">Orlando, FL · USA</p>
        </div>
      </div>
    </footer>
  );
}
