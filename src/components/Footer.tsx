import { useLocale } from "@/hooks/useLocale";
import { t } from "@/lib/i18n";
import { Instagram, MessageCircle, Mail } from "lucide-react";
import logo from "@/assets/magic-clean-logo.png";

export default function Footer() {
  const { locale } = useLocale();

  return (
    <footer id="contact" className="relative bg-background text-foreground py-16 border-t-2 border-secondary">
      {/* Gradient divider */}
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-secondary to-transparent" />
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-3 gap-12">
          {/* Brand */}
          <div>
            <img src={logo} alt="Magic Clean" className="h-14 w-auto mb-4" />
            <p className="text-sm text-muted-foreground leading-relaxed">{t("footer.tagline", locale)}</p>
            <p className="text-xs text-muted-foreground/60 mt-4">{t("footer.rights", locale)}</p>
          </div>

          {/* Connect */}
          <div>
            <h4 className="font-semibold text-sm uppercase tracking-widest mb-4 text-foreground">{t("footer.connect", locale)}</h4>
            <div className="flex flex-col gap-3">
              <a 
                href={t("contact.instagram.link", locale)} 
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-3 text-sm text-muted-foreground hover:text-foreground transition-colors"
              >
                <Instagram className="w-5 h-5 text-secondary" /> Instagram
              </a>
              <a
                href={t("contact.whatsapp.link", locale)}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-3 text-sm text-muted-foreground hover:text-foreground transition-colors"
              >
                <MessageCircle className="w-5 h-5 text-secondary" /> {t("contact.phone", locale)}
              </a>
              <a
                href={`mailto:${t("contact.email", locale)}`}
                className="flex items-center gap-3 text-sm text-muted-foreground hover:text-foreground transition-colors break-all"
              >
                <Mail className="w-5 h-5 text-secondary" /> {t("contact.email", locale)}
              </a>
            </div>
          </div>

          {/* Trust */}
          <div>
            <h4 className="font-semibold text-sm uppercase tracking-widest mb-4 text-foreground">{t("footer.trust", locale)}</h4>
            <div className="flex items-center gap-4">
              <div className="px-3 py-1.5 border border-border rounded-md text-xs font-medium text-muted-foreground">{t("trust.licensed", locale)}</div>
              <div className="px-3 py-1.5 border border-border rounded-md text-xs font-medium text-muted-foreground">{t("trust.bonded", locale)}</div>
              <div className="px-3 py-1.5 border border-border rounded-md text-xs font-medium text-muted-foreground">{t("trust.insured", locale)}</div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
