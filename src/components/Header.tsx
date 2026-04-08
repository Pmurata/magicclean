import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X } from "lucide-react";
import { useLocale } from "@/hooks/useLocale";
import { t, Locale } from "@/lib/i18n";
import logo from "@/assets/magic-clean-logo.png";

const FOCUS_RING = "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-secondary focus-visible:ring-offset-2";

export default function Header() {
  const { locale, setLocale } = useLocale();
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  const handleLogoClick = (e: React.MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault();
    window.scrollTo({ top: 0, behavior: "smooth" });
    setOpen(false);
  };

  const localeLabels: Record<Locale, string> = { pt: "PT", en: "EN", es: "ES" };
  const localeNames: Record<Locale, string> = { pt: "Português", en: "English", es: "Español" };

  const navItems = [
    { key: "nav.services", href: "#services" },
    { key: "nav.differentials", href: "#differentials" },
    { key: "nav.contact", href: "#contact" },
  ];

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    const onResize = () => { if (window.innerWidth >= 768) setOpen(false); };
    window.addEventListener("resize", onResize);
    return () => window.removeEventListener("resize", onResize);
  }, []);

  // Prevent body scroll when mobile menu is open
  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => { document.body.style.overflow = ""; };
  }, [open]);

  return (
    <>
      <motion.header
        initial={{ y: -80 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        className={`sticky top-0 z-50 transition-[background-color,box-shadow,border-color,padding] duration-300 ${
          scrolled
            ? "bg-background/98 backdrop-blur-xl shadow-md border-b border-border/60 py-2"
            : "bg-background/80 backdrop-blur-lg border-b border-border/30 py-4"
        }`}
      >
        <div className="container mx-auto flex items-center justify-between px-4">
          {/* Logo — maior quando não scrollado */}
          <a href="#" onClick={handleLogoClick} className={`flex items-center gap-2 rounded-md transition-all duration-300 ${FOCUS_RING}`}>
            <img src={logo} alt="Magic Clean" className={`w-auto transition-all duration-300 ${scrolled ? "h-10" : "h-16"}`} />
          </a>

          {/* Desktop Nav */}
          <nav className="hidden md:flex items-center gap-8" aria-label="Navegação principal">
            {navItems.map((item) => (
              <a
                key={item.key}
                href={item.href}
                className={`text-sm font-medium text-muted-foreground hover:text-foreground transition-colors tracking-wide uppercase rounded-sm ${FOCUS_RING}`}
              >
                {t(item.key, locale)}
              </a>
            ))}
          </nav>

          {/* Right side */}
          <div className="hidden md:flex items-center gap-3">
            {/* Language switcher */}
            <div
              className="flex items-center gap-0.5 border border-border rounded-full px-1 py-0.5"
              role="group"
              aria-label={t("aria.lang_select", locale)}
            >
              {(Object.keys(localeLabels) as Locale[]).map((l) => (
                <button
                  key={l}
                  onClick={() => setLocale(l)}
                  aria-pressed={locale === l}
                  aria-label={localeNames[l]}
                  className={`text-xs px-3 py-1.5 rounded-full font-semibold transition-colors rounded-full ${FOCUS_RING} ${
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
              className={`bg-primary text-primary-foreground px-5 py-2.5 rounded-full text-sm font-semibold hover:opacity-90 transition-opacity ${FOCUS_RING}`}
            >
              {t("nav.cta", locale)}
            </a>
          </div>

          {/* Mobile toggle */}
          <button
            className={`md:hidden text-foreground p-2 rounded-md hover:bg-muted transition-colors ${FOCUS_RING}`}
            onClick={() => setOpen(!open)}
            aria-label={open ? t("aria.close_menu", locale) : t("aria.open_menu", locale)}
            aria-expanded={open}
            aria-controls="mobile-menu"
          >
            {open ? <X size={22} aria-hidden="true" /> : <Menu size={22} aria-hidden="true" />}
          </button>
        </div>

        {/* Mobile menu */}
        <AnimatePresence>
          {open && (
            <motion.div
              id="mobile-menu"
              key="mobile-menu"
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: "auto" }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.25, ease: "easeInOut" }}
              className="md:hidden bg-background border-t border-border overflow-hidden"
            >
              <nav className="flex flex-col px-4 pt-2" aria-label="Navegação mobile">
                {navItems.map((item) => (
                  <a
                    key={item.key}
                    href={item.href}
                    onClick={(e) => {
                      e.currentTarget.blur();
                      setTimeout(() => setOpen(false), 50);
                    }}
                    className={`text-sm font-medium text-muted-foreground hover:text-foreground uppercase tracking-wide py-4 border-b border-border/50 last:border-0 transition-colors ${FOCUS_RING}`}
                  >
                    {t(item.key, locale)}
                  </a>
                ))}
              </nav>

              <div className="px-4 pt-4 pb-6 flex flex-col gap-4">
                <div
                  className="flex items-center gap-0.5 border border-border rounded-full px-1 py-0.5 w-fit"
                  role="group"
                  aria-label={t("aria.lang_select", locale)}
                >
                  {(Object.keys(localeLabels) as Locale[]).map((l) => (
                    <button
                      key={l}
                      onClick={() => setLocale(l)}
                      aria-pressed={locale === l}
                      aria-label={localeNames[l]}
                      className={`text-xs px-3 py-1.5 rounded-full font-semibold transition-colors ${FOCUS_RING} ${
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
                  className={`block text-center bg-primary text-primary-foreground px-5 py-3 rounded-full text-sm font-semibold hover:opacity-90 transition-opacity ${FOCUS_RING}`}
                  onClick={() => setTimeout(() => setOpen(false), 50)}
                >
                  {t("nav.cta", locale)}
                </a>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </motion.header>

      {/* Mobile backdrop */}
      <AnimatePresence>
        {open && (
          <motion.div
            key="backdrop"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
            className="fixed inset-0 z-40 bg-black/30 md:hidden"
            onClick={() => setOpen(false)}
            aria-hidden="true"
          />
        )}
      </AnimatePresence>
    </>
  );
}
