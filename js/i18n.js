/**
 * i18n.js
 * -----------------------------------------------------------------------
 * TEXTOS ESTÁTICOS DA INTERFACE (não são produtos do cardápio — isso
 * está em data.js). Qualquer texto fixo do site (botões, títulos de
 * seção, avisos) deve entrar aqui, nunca direto no HTML.
 *
 * Uso no HTML:   <span data-i18n="roomService.title"></span>
 * Uso no JS:     UI.pt.roomService.title
 * -----------------------------------------------------------------------
 */

const UI = {
  pt: {
    backToTop: {
      label: "Voltar ao topo"
    },
    footerNote: {
      tax: "Uma taxa de 10% será adicionada à conta."
    },
    
    roomService: {
      title: "Serviço de quarto",
      action: "Ligue para {phone}"
    },
    menu: {
      sectionTitle: "Cardápio",
      empty: "Em breve, novidades por aqui."
    },
    footer: {
      instagram: "Instagram",
      website: "Links da Morada"
    },
    langSwitch: {
      label: "Idioma"
    }
  },

  es: {
    backToTop: {
      label: "Volver al inicio"
    },
    footerNote: {
      tax: "Se adicionará un 10% de cargo por servicio a la cuenta."
    },
    
    roomService: {
      title: "Servicio a la habitación",
      action: "Llame al {phone}"
    },
    menu: {
      sectionTitle: "Menú",
      empty: "Pronto, novedades por aquí."
    },
    footer: {
      instagram: "Instagram",
      website: "Links de Morada"
    },
    langSwitch: {
      label: "Idioma"
    }
  },

  en: {
    backToTop: {
      label: "Back to top"
    },
    footerNote: {
      tax: "A 10% service charge will be added to the bill."
    },
    hero: {
      placeholderBadge: "placeholder image"
    },
    roomService: {
      title: "Room service",
      action: "Call {phone}"
    },
    menu: {
      sectionTitle: "Menu",
      empty: "New items coming soon."
    },
    footer: {
      instagram: "Instagram",
      website: "Morada's links"
    },
    langSwitch: {
      label: "Language"
    }
  }
};
