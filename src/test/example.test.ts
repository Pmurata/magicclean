import { describe, it, expect } from "vitest";
import { t, translations, type Locale } from "@/lib/i18n";

const LOCALES: Locale[] = ["pt", "en", "es"];

describe("i18n", () => {
  it("returns the correct Portuguese translation for hero.title", () => {
    expect(t("hero.title", "pt")).toBe("A Ciência da Limpeza,\na Magia da Hospitalidade.");
  });

  it("returns the correct English translation for hero.title", () => {
    expect(t("hero.title", "en")).toBe("The Science of Cleaning,\nthe Magic of Hospitality.");
  });

  it("returns the key when translation is missing", () => {
    expect(t("nonexistent.key", "pt")).toBe("nonexistent.key");
  });

  it("all keys have translations for all 3 locales", () => {
    for (const key of Object.keys(translations)) {
      for (const locale of LOCALES) {
        const value = t(key, locale);
        expect(value, `Missing translation: ${key} [${locale}]`).not.toBe(key);
        expect(value.length, `Empty translation: ${key} [${locale}]`).toBeGreaterThan(0);
      }
    }
  });

  it("contact.whatsapp.link is a valid WhatsApp URL", () => {
    for (const locale of LOCALES) {
      const link = t("contact.whatsapp.link", locale);
      expect(link).toMatch(/^https:\/\/wa\.me\//);
    }
  });

  it("contact.email is a valid email", () => {
    for (const locale of LOCALES) {
      const email = t("contact.email", locale);
      expect(email).toMatch(/^[^\s@]+@[^\s@]+\.[^\s@]+$/);
    }
  });

  it("contact.phone matches expected format", () => {
    const phone = t("contact.phone", "en");
    expect(phone).toBe("+1 (407) 984-2888");
  });

  it("nav.cta is defined in all locales", () => {
    expect(t("nav.cta", "pt")).toBe("Agende Agora");
    expect(t("nav.cta", "en")).toBe("Book Now");
    expect(t("nav.cta", "es")).toBe("Reserve Ahora");
  });
});
