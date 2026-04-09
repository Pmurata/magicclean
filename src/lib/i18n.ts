export type Locale = "pt" | "en" | "es";

export const translations: Record<string, Record<Locale, string>> = {
  // Nav
  "nav.services": { pt: "Serviços", en: "Services", es: "Servicios" },
  "nav.differentials": { pt: "Diferenciais", en: "Differentials", es: "Diferenciales" },
  "nav.contact": { pt: "Contato", en: "Contact", es: "Contacto" },
  "nav.cta": { pt: "Agende Agora", en: "Book Now", es: "Reserve Ahora" },

  // Hero
  "hero.title": {
    pt: "Limpeza que Brilha",
    en: "Clean Living Starts Here",
    es: "Limpieza que Brilla",
  },
  "hero.subtitle": {
    pt: "5 estrelas em cada detalhe. Licensed, Bonded & Insured.",
    en: "5-star service in every detail. Licensed, Bonded & Insured.",
    es: "Servicio 5 estrellas en cada detalle. Licensed, Bonded & Insured.",
  },
  "hero.cta": {
    pt: "Solicite um Orçamento Grátis",
    en: "Request a Free Quote",
    es: "Solicite un Presupuesto Gratis",
  },

  // Services
  "services.title": { pt: "Nossos Serviços Especializados", en: "Our Specialized Services", es: "Nuestros Servicios Especializados" },
  "services.routine.title": { pt: "Limpeza Regular", en: "Regular Cleaning", es: "Limpieza Regular" },
  "services.routine.desc": {
    pt: "Mantenha seu espaço impecável com nosso serviço de manutenção regular, garantindo paz de espírito e um ambiente sempre acolhedor.",
    en: "Keep your space spotless with our regular maintenance service, ensuring peace of mind and a welcoming environment.",
    es: "Mantenga su espacio impecable con nuestro servicio de mantenimiento regular, garantizando tranquilidad y un ambiente acogedor.",
  },
  "services.routine.item1": { pt: "Limpeza Residencial", en: "Residential Cleaning", es: "Limpieza Residencial" },
  "services.routine.item2": { pt: "Limpeza de Escritórios", en: "Office Cleaning", es: "Limpieza de Oficinas" },
  "services.routine.item3": { pt: "Mudanças (Entrada e Saída)", en: "Move-In / Move-Out", es: "Mudanzas (Entrada y Salida)" },
  "services.routine.item4": { pt: "Janelas", en: "Windows", es: "Ventanas" },
  "services.routine.schedule": { pt: "HORÁRIOS FLEXÍVEIS", en: "FLEXIBLE SCHEDULES", es: "HORARIOS FLEXIBLES" },
  "services.routine.weekly": { pt: "Semanal", en: "Weekly", es: "Semanal" },
  "services.routine.biweekly": { pt: "Quinzenal", en: "Bi-Weekly", es: "Quincenal" },
  "services.routine.monthly": { pt: "Mensal", en: "Monthly", es: "Mensual" },
  "services.deep.title": { pt: "Limpeza Profunda", en: "Deep Cleaning", es: "Limpieza Profunda" },
  "services.deep.desc": {
    pt: "Uma limpeza meticulosa que alcança cada canto, restaurando a vivacidade e o frescor do seu ambiente com atenção aos detalhes invisíveis.",
    en: "A meticulous clean that reaches every corner, restoring vibrancy and freshness with attention to invisible details.",
    es: "Una limpieza meticulosa que alcanza cada rincón, restaurando la vivacidad y frescura de su ambiente con atención a los detalles invisibles.",
  },
  "services.postconstruction.title": { pt: "Pós-Construção", en: "Post-Construction", es: "Post-Construcción" },
  "services.postconstruction.desc": {
    pt: "Remoção completa de poeira de obra, utilizando filtros HEPA e técnicas especializadas para um ambiente imaculado após reformas.",
    en: "Complete removal of construction dust using HEPA filters and specialized techniques for an immaculate post-renovation environment.",
    es: "Eliminación completa del polvo de obra, utilizando filtros HEPA y técnicas especializadas para un ambiente inmaculado después de reformas.",
  },
  "services.airbnb.title": { pt: "Manutenção Airbnb", en: "Airbnb Turnover", es: "Mantenimiento Airbnb" },
  "services.airbnb.desc": {
    pt: "Agilidade e eficiência para preparar seu Airbnb para novos hóspedes, incluindo verificação fotográfica para sua total tranquilidade.",
    en: "Speed and efficiency to prepare your Airbnb for new guests, including photo verification for your total peace of mind.",
    es: "Agilidad y eficiencia para preparar su Airbnb para nuevos huéspedes, incluyendo verificación fotográfica para su total tranquilidad.",
  },

  // Differentials
  "diff.title": { pt: "Nossos Diferenciais Técnicos", en: "Our Technical Differentials", es: "Nuestros Diferenciales Técnicos" },
  "diff.color.title": { pt: "Panos Codificados por Cor", en: "Color-Coded Cloths", es: "Paños Codificados por Color" },
  "diff.color.desc": {
    pt: "Prevenção de contaminação cruzada, garantindo a máxima higiene para cada área.",
    en: "Cross-contamination prevention, ensuring maximum hygiene for each area.",
    es: "Prevención de contaminación cruzada, garantizando la máxima higiene para cada área.",
  },
  "diff.pet.title": { pt: "Produtos Pet-Friendly", en: "Pet-Friendly Products", es: "Productos Pet-Friendly" },
  "diff.pet.desc": {
    pt: "Soluções de limpeza seguras e não tóxicas, protegendo a saúde de seus animais.",
    en: "Safe, non-toxic cleaning solutions, protecting the health of your pets.",
    es: "Soluciones de limpieza seguras y no tóxicas, protegiendo la salud de sus mascotas.",
  },
  "diff.eco.title": { pt: "Eco-Ciência em Limpeza", en: "Eco-Science Cleaning", es: "Eco-Ciencia en Limpieza" },
  "diff.eco.desc": {
    pt: "Inovação e sustentabilidade com fórmulas biodegradáveis e de alta performance.",
    en: "Innovation and sustainability with biodegradable, high-performance formulas.",
    es: "Innovación y sostenibilidad con fórmulas biodegradables y de alto rendimiento.",
  },

  // Footer
  "footer.tagline": {
    pt: "A Ciência da Limpeza, a Magia da Hospitalidade.",
    en: "The Science of Cleaning, the Magic of Hospitality.",
    es: "La Ciencia de la Limpieza, la Magia de la Hospitalidad.",
  },
  "footer.rights": {
    pt: "© 2026 Magic Clean. Todos os direitos reservados.",
    en: "© 2026 Magic Clean. All rights reserved.",
    es: "© 2026 Magic Clean. Todos los derechos reservados.",
  },
  "footer.connect": { pt: "Conecte-se Conosco", en: "Connect With Us", es: "Conéctese Con Nosotros" },
  "footer.trust": { pt: "Selos de Confiança", en: "Trust Badges", es: "Sellos de Confianza" },
  "contact.phone": { pt: "+1 (407) 984-2888", en: "+1 (407) 984-2888", es: "+1 (407) 984-2888" },
  "contact.email": { pt: "magicclean416@gmail.com", en: "magicclean416@gmail.com", es: "magicclean416@gmail.com" },
  "contact.whatsapp.link": { pt: "https://wa.me/14079842888", en: "https://wa.me/14079842888", es: "https://wa.me/14079842888" },
  "contact.instagram.link": { pt: "https://www.instagram.com/magicclean.orlando/", en: "https://www.instagram.com/magicclean.orlando/", es: "https://www.instagram.com/magicclean.orlando/" },
  
  // Trust
  "trust.licensed": { pt: "Licenciado", en: "Licensed", es: "Licenciado" },
  "trust.bonded": { pt: "Garantido", en: "Bonded", es: "Garantizado" },
  "trust.insured": { pt: "Segurado", en: "Insured", es: "Asegurado" },

  // Aria labels
  "aria.open_menu": { pt: "Abrir menu", en: "Open menu", es: "Abrir menú" },
  "aria.close_menu": { pt: "Fechar menu", en: "Close menu", es: "Cerrar menú" },
  "aria.whatsapp": { pt: "Fale conosco pelo WhatsApp", en: "Chat with us on WhatsApp", es: "Chatea con nosotros por WhatsApp" },
  "aria.lang_select": { pt: "Selecionar idioma", en: "Select language", es: "Seleccionar idioma" },

  // Stats
  "stats.cleanings": { pt: "Limpezas", en: "Cleanings", es: "Limpiezas" },
  "stats.rating": { pt: "Avaliação", en: "Rating", es: "Calificación" },
  "stats.clients": { pt: "Clientes", en: "Clients", es: "Clientes" },
  "stats.years": { pt: "Anos de Exp.", en: "Yrs Experience", es: "Años de Exp." },

  // Testimonials
  "testimonials.title": { pt: "O Que Dizem Nossos Clientes", en: "What Our Clients Say", es: "Lo Que Dicen Nuestros Clientes" },
  "testimonials.subtitle": {
    pt: "Avaliações reais de clientes reais em Orlando.",
    en: "Real reviews from real clients in Orlando.",
    es: "Reseñas reales de clientes reales en Orlando.",
  },

  // CTA Section
  "cta.title": {
    pt: "Pronto Para Uma Limpeza Impecável?",
    en: "Ready for a Spotless Clean?",
    es: "¿Listo para una Limpieza Impecable?",
  },
  "cta.subtitle": {
    pt: "Solicite seu orçamento gratuito e sem compromisso agora.",
    en: "Request your free, no-obligation quote now.",
    es: "Solicite su presupuesto gratuito y sin compromiso ahora.",
  },
  "cta.button": {
    pt: "Solicite um Orçamento Grátis",
    en: "Request a Free Quote",
    es: "Solicite un Presupuesto Gratis",
  },
};

export function t(key: string, locale: Locale): string {
  return translations[key]?.[locale] ?? key;
}
