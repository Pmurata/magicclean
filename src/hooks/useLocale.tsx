import { createContext, useContext, useState, ReactNode } from "react";
import { Locale } from "@/lib/i18n";

interface LocaleContextType {
  locale: Locale;
  setLocale: (l: Locale) => void;
}

const LocaleContext = createContext<LocaleContextType>({ locale: "pt", setLocale: () => {} });

export function LocaleProvider({ children }: { children: ReactNode }) {
  const [locale, setLocale] = useState<Locale>(() => {
    const saved = localStorage.getItem("mc-locale");
    return (saved as Locale) || "pt";
  });

  const handleSet = (l: Locale) => {
    setLocale(l);
    localStorage.setItem("mc-locale", l);
  };

  return (
    <LocaleContext.Provider value={{ locale, setLocale: handleSet }}>
      {children}
    </LocaleContext.Provider>
  );
}

export function useLocale() {
  return useContext(LocaleContext);
}
