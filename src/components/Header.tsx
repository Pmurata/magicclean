import { useState } from "react";
import { motion } from "framer-motion";
import { Menu, X } from "lucide-react";
import { useLocale } from "@/hooks/useLocale";
import { t, Locale } from "@/lib/i18n";
import logo from "@/assets/magic-clean-logo.png";

export default function Header() {
  const { locale, setLocale } = useLocale();
  const [open, setOpen] = useState(false);

  const localeLabels: Record<Locale, string> = { pt: "PT", en: "EN", es: "ES" };

  const navItems = [
    { key: "nav.services", href: "#services" },
    { key: "nav.differentials", href: "#differentials" },
    { key: "nav.contact", href: "#contact" },
  ];

  return (
    <motion.header
      initial={{ y: -80 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      className="sticky top-0 z-50 bg-background/80 backdrop-blur-lg border-b border-border/50"
    >
      <div className="container mx-auto flex items-center justify-between py-4 px-4">
        {/* Logo */}
        <a href="#" className="flex items-center gap-2">
          <img src={logo} alt="Magic Clean" className="h-10 w-auto" />
        </a>

        {/* Desktop Nav */}
        <nav className="hidden md:flex items-center gap-8">
          {navItems.map((item) => (
            <a
              key={item.key}
              href={item.href}
              className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors tracking-wide uppercase"
            >
              {t(item.key, locale)}
            </a>
          ))}
        </nav>

        {/* Right side */}
        <div className="hidden md:flex items-center gap-4">
          <div className="flex items-center gap-1 border border-border rounded-full px-1 py-0.5">
            {(Object.keys(localeLabels) as Locale[]).map((l) => (
              <button
                key={l}
                onClick={() => setLocale(l)}
                className={`text-xs px-3 py-1.5 rounded-full font-medium transition-all ${
                  locale === l
                    ? "bg-secondary text-secondary-foreground"
                    : "text-muted-foreground hover:text-foreground"
                }`}
              >
                {localeLabels[l]}
              </button>
            ))}
          </div>
          <a
            href={t("contact.whatsapp.link", locale)}
            target="_blank"
            rel="noopener noreferrer"
            className="bg-primary text-primary-foreground px-5 py-2.5 rounded-full text-sm font-semibold hover:opacity-90 transition-opacity"
          >
            {t("nav.cta", locale)}
          </a>
        </div>

        {/* Mobile toggle */}
        <button className="md:hidden text-foreground" onClick={() => setOpen(!open)}>
          {open ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile menu */}
      {open && (
        <motion.div
          initial={{ opacity: 0, height: 0 }}
          animate={{ opacity: 1, height: "auto" }}
          className="md:hidden bg-background border-t border-border px-4 pb-6"
        >
          <nav className="flex flex-col gap-4 pt-4">
            {navItems.map((item) => (
              <a
                key={item.key}
                href={item.href}
                onClick={() => setOpen(false)}
                className="text-sm font-medium text-muted-foreground hover:text-foreground uppercase tracking-wide"
              >
                {t(item.key, locale)}
              </a>
            ))}
          </nav>
          <div className="flex items-center gap-1 border border-border rounded-full px-1 py-0.5 mt-6 w-fit">
            {(Object.keys(localeLabels) as Locale[]).map((l) => (
              <button
                key={l}
                onClick={() => setLocale(l)}
                className={`text-xs px-3 py-1.5 rounded-full font-medium transition-all ${
                  locale === l
                    ? "bg-secondary text-secondary-foreground"
                    : "text-muted-foreground hover:text-foreground"
                }`}
              >
                {localeLabels[l]}
              </button>
            ))}
          </div>
          <a
            href={t("contact.whatsapp.link", locale)}
            target="_blank"
            rel="noopener noreferrer"
            className="mt-4 block text-center bg-primary text-primary-foreground px-5 py-2.5 rounded-full text-sm font-semibold"
          >
            {t("nav.cta", locale)}
          </a>
        </motion.div>
      )}
    </motion.header>
  );
}
