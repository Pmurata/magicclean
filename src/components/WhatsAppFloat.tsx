import { MessageCircle } from "lucide-react";
import { useLocale } from "@/hooks/useLocale";
import { t } from "@/lib/i18n";

export default function WhatsAppFloat() {
  const { locale } = useLocale();

  return (
    <a
      href={t("contact.whatsapp.link", locale)}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="WhatsApp"
      className="fixed bottom-8 right-8 z-50 w-14 h-14 rounded-full bg-[#25d366] text-white flex items-center justify-center shadow-lg shadow-[#25d366]/30 hover:scale-110 transition-transform"
    >
      <MessageCircle className="w-7 h-7" />
    </a>
  );
}
