import { MessageCircle } from "lucide-react";
import { useLocale } from "@/hooks/useLocale";
import { t } from "@/lib/i18n";

const FOCUS_RING = "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-offset-2 focus-visible:ring-offset-[#25d366]";

export default function WhatsAppFloat() {
  const { locale } = useLocale();

  return (
    <div className="fixed bottom-8 right-8 z-50 flex flex-col items-end gap-2">
      {/* Tooltip */}
      <span
        className="hidden sm:block px-3 py-1.5 bg-foreground text-background text-xs font-medium rounded-lg shadow-lg opacity-0 translate-y-1 pointer-events-none transition-all duration-200 group-hover:opacity-100 group-hover:translate-y-0 whitespace-nowrap"
        aria-hidden="true"
      >
        {locale === "pt" ? "Fale conosco" : locale === "en" ? "Chat with us" : "Chatea con nosotros"}
      </span>

      {/* Button with pulse ring */}
      <div className="relative group">
        {/* Pulse ring */}
        <span
          className="absolute inset-0 rounded-full bg-[#25d366] animate-ping opacity-30"
          aria-hidden="true"
        />

        <a
          href={t("contact.whatsapp.link", locale)}
          target="_blank"
          rel="noopener noreferrer"
          aria-label={t("aria.whatsapp", locale)}
          className={`relative flex w-14 h-14 rounded-full bg-[#25d366] text-white items-center justify-center shadow-lg shadow-[#25d366]/30 hover:scale-110 hover:shadow-xl hover:shadow-[#25d366]/40 active:scale-95 transition-transform duration-200 ${FOCUS_RING}`}
        >
          <MessageCircle className="w-7 h-7" aria-hidden="true" />
        </a>
      </div>
    </div>
  );
}
