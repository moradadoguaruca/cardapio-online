/**
 * config.js
 * -----------------------------------------------------------------------
 * CONFIGURAÇÃO CENTRAL DO SITE.
 *
 * Tudo que é institucional (nome, localização, textos, flags de exibição,
 * links, imagem de hero) fica aqui. Nada disso deve estar espalhado no
 * HTML. Para ligar/desligar um bloco, mude apenas os valores abaixo.
 * -----------------------------------------------------------------------
 */

const siteConfig = {

  // Identidade
  hotelName: "Morada do Guaruçá",
  location: {
    pt: "Praia de Mariscal · Bombinhas",
    es: "Playa de Mariscal · Bombinhas",
    en: "Mariscal Beach · Bombinhas"
  },

  // Logo — substituir pelo arquivo definitivo quando disponível.
  // Formato recomendado: PNG ou SVG, fundo transparente.
  // IMPORTANTE: o logo agora é exibido sempre sobre a foto de fundo do
  // hero (ver item Hero abaixo), por isso o CSS aplica um filtro para
  // forçá-lo a aparecer em tom claro (brightness(0) invert(1)), o que
  // funciona bem para um logo de traço único. Se o logo definitivo tiver
  // cores próprias que devem ser preservadas, crie uma versão clara
  // separada (ex.: "logo-claro.svg") e me avise para eu trocar o filtro
  // por essa imagem em vez de aplicar o filtro CSS.
  logoImage: "images/logo-placeholder.svg",

  // Bloco institucional (texto curto sobre a pousada, logo abaixo da localização)
  showHotelInfo: true,
  hotelInfo: {
    pt: "Uma pousada pé na areia em Mariscal, Bombinhas.",
    es: "Una posada con acceso directo a la playa en Mariscal, Bombinhas.",
    en: "A beachfront pousada in Mariscal, Bombinhas."
  },

  // Selos / prêmios (TripAdvisor, Booking, medalhas etc.)
  // Ainda não temos selos reais — a estrutura já existe, mas fica
  // desligada até termos algo confirmado para exibir.
  showAwards: false,
  awards: [
    // Exemplo de formato para quando houver selos reais:
    // { name: "TripAdvisor", icon: "images/awards/tripadvisor.svg", url: "" },
    // { name: "Booking.com", icon: "images/awards/booking.svg", url: "" },
  ],

  // Serviço de quarto
  showRoomService: true,
  roomServicePhone: "245",

  // Hero (imagem de fundo de abertura do cardápio)
  // Esta imagem funciona como FUNDO — fica atrás do logo, do seletor de
  // idioma, do bloco institucional e do Serviço de Quarto, todos
  // sobrepostos a ela. Ela termina exatamente onde começa a navegação
  // de categorias (ver .hero-zone no CSS). Recomenda-se uma foto ESCURA
  // ou com boa área escura, para manter o texto claro legível por cima.
  // PLACEHOLDER — este é um gráfico provisório, não uma foto real.
  // Substituir por uma fotografia real de um prato/ambiente da casa
  // (recomendado: .jpg otimizado, tons escuros, mínimo 1200px de largura).
  heroImage: "images/hero_salmao_prato.jpg",
  heroImageAlt: {
    pt: "",
    es: "",
    en: ""
  },

  // Rodapé / links externos
  instagramUrl: "https://www.instagram.com/moradadoguaruca/",
  websiteUrl: "https://oferta.moradadoguaruca.com.br/nossos-links",

  // Idioma padrão do site
  defaultLang: "pt",

  // Idiomas disponíveis no seletor. O inglês já está todo traduzido em
  // i18n.js e data.js, mas fica OCULTO no site até você pedir para
  // ativar — nesse momento, basta adicionar "en" neste array.
  // Nenhum outro arquivo precisa mudar para reativar o inglês.
  enabledLangs: ["pt", "es"]
};
