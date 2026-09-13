/**
 * main.js
 * -----------------------------------------------------------------------
 * LÓGICA DO SITE. Não deve conter texto nem preço — isso vive em
 * i18n.js (textos fixos), data.js (cardápio) e config.js (institucional).
 *
 * Responsabilidades deste arquivo:
 *   - trocar idioma (currentLang) e re-renderizar tudo que depende dele;
 *   - aplicar o siteConfig nos blocos institucionais / hero / footer;
 *   - renderizar a navegação de categorias a partir de `categories`;
 *   - renderizar o cardápio a partir de `menuData`, agrupado por categoria;
 *   - controlar a transição visual entre o hero e o fundo do cardápio.
 * -----------------------------------------------------------------------
 */

let currentLang = siteConfig.defaultLang;

// Idioma → texto traduzido de um objeto { pt, es, en }
function t(obj) {
  if (!obj) return "";
  return obj[currentLang] || obj.pt || "";
}

// Acessa um caminho tipo "roomService.title" dentro de um objeto
function getPath(obj, path) {
  return path.split(".").reduce((acc, key) => (acc ? acc[key] : undefined), obj);
}

// -----------------------------------------------------------------------
// IDIOMA
// -----------------------------------------------------------------------

function setLang(lang) {
  if (!UI[lang]) return;
  currentLang = lang;
  document.documentElement.setAttribute("lang", lang);
  renderAll();
}

function initLangSwitch() {
  // "Ancoragens": pode haver mais de um seletor de idioma no site (o do
  // topo do hero e o da barra fixa que aparece ao rolar). Todos os
  // elementos com [data-lang-mount] recebem os mesmos botões, e o clique
  // em qualquer um deles atualiza o idioma nos dois lugares ao mesmo tempo
  // (ver updateLangSwitchState, que já busca por TODOS os [data-lang-option]
  // do documento, não só de um container).
  const mounts = document.querySelectorAll("[data-lang-mount]");
  if (!mounts.length) return;

  // Gera os botões de idioma a partir de siteConfig.enabledLangs.
  // Para reativar o inglês no futuro, basta adicionar "en" nesse array
  // em config.js — nada aqui precisa ser tocado.
  const labels = { pt: "PT", es: "ES", en: "EN" };
  const buttonsHtml = siteConfig.enabledLangs
    .map((lang, i) => `
      ${i > 0 ? '<span class="divider" aria-hidden="true">·</span>' : ""}
      <button type="button" data-lang-option="${lang}">${labels[lang]}</button>
    `)
    .join("");

  mounts.forEach((mount) => {
    mount.innerHTML = buttonsHtml;
  });

  document.querySelectorAll("[data-lang-option]").forEach((btn) => {
    btn.addEventListener("click", () => setLang(btn.getAttribute("data-lang-option")));
  });
}

function updateLangSwitchState() {
  document.querySelectorAll("[data-lang-option]").forEach((btn) => {
    const isActive = btn.getAttribute("data-lang-option") === currentLang;
    btn.classList.toggle("is-active", isActive);
    btn.setAttribute("aria-pressed", String(isActive));
  });
}

// -----------------------------------------------------------------------
// TEXTOS ESTÁTICOS (data-i18n)
// -----------------------------------------------------------------------

function renderStaticText() {
  document.querySelectorAll("[data-i18n]").forEach((el) => {
    const path = el.getAttribute("data-i18n");
    let text = getPath(UI[currentLang], path);
    if (text === undefined) return;
    text = text.replace("{phone}", siteConfig.roomServicePhone);
    el.textContent = text;
  });

  // Botão "voltar ao topo" só tem ícone — o texto vai no aria-label,
  // não no textContent, por isso é tratado à parte aqui.
  const backToTop = document.getElementById("backToTop");
  if (backToTop) {
    backToTop.setAttribute("aria-label", getPath(UI[currentLang], "backToTop.label") || "");
  }
}

// -----------------------------------------------------------------------
// BLOCOS INSTITUCIONAIS (config.js)
// -----------------------------------------------------------------------

function renderConfigBlocks() {
  // Nome / localização
  document.querySelectorAll("[data-config='hotelName']").forEach((el) => {
    el.textContent = siteConfig.hotelName;
  });

  // Logo
  const logoImg = document.getElementById("siteLogo");
  if (logoImg) {
    logoImg.src = siteConfig.logoImage;
    logoImg.alt = siteConfig.hotelName;
  }
  document.querySelectorAll("[data-config='location']").forEach((el) => {
    el.textContent = t(siteConfig.location);
  });

  // Bloco institucional (opcional)
  const hotelInfoBlock = document.getElementById("hotelInfoBlock");
  if (hotelInfoBlock) {
    hotelInfoBlock.hidden = !siteConfig.showHotelInfo;
    const textEl = hotelInfoBlock.querySelector("[data-config='hotelInfoText']");
    if (textEl) textEl.textContent = t(siteConfig.hotelInfo);
  }

  // Selos / prêmios (opcional)
  const awardsBlock = document.getElementById("awardsBlock");
  if (awardsBlock) {
    awardsBlock.hidden = !siteConfig.showAwards || siteConfig.awards.length === 0;
    if (siteConfig.showAwards && siteConfig.awards.length > 0) {
      awardsBlock.innerHTML = siteConfig.awards
        .map(
          (a) =>
            `<a class="award" href="${a.url || "#"}" target="_blank" rel="noopener">
               <img src="${a.icon}" alt="${a.name}" loading="lazy">
             </a>`
        )
        .join("");
    }
  }

  // Serviço de quarto (opcional)
  const roomServiceBlock = document.getElementById("roomServiceBlock");
  if (roomServiceBlock) {
    roomServiceBlock.hidden = !siteConfig.showRoomService;
  }

  // Chip da barra fixa — só liga/desliga junto com o Serviço de Quarto
  // (o texto dela vem sozinho via data-i18n, já que usa as mesmas
  // chaves "roomService.title" / "roomService.action").
  const stickyCall = document.getElementById("stickyBarCall");
  if (stickyCall) stickyCall.hidden = !siteConfig.showRoomService;

  // Hero
  const heroImg = document.getElementById("heroImage");
  if (heroImg) {
    heroImg.src = siteConfig.heroImage;
    heroImg.alt = t(siteConfig.heroImageAlt);
  }

  // Rodapé / links externos (aparecem duas vezes: dentro do hero, antes
  // da navegação de categorias, e no rodapé — ambos usam os mesmos links
  // de siteConfig, então basta atualizar a URL aqui uma vez).
  const igLink = document.getElementById("footerInstagram");
  if (igLink) igLink.href = siteConfig.instagramUrl || "#";
  const siteLink = document.getElementById("footerWebsite");
  if (siteLink) siteLink.href = siteConfig.websiteUrl || "#";

  const igLinkTop = document.getElementById("footerInstagramTop");
  if (igLinkTop) igLinkTop.href = siteConfig.instagramUrl || "#";
  const siteLinkTop = document.getElementById("footerWebsiteTop");
  if (siteLinkTop) siteLinkTop.href = siteConfig.websiteUrl || "#";

  document.querySelectorAll("[data-config='hotelNameFooter']").forEach((el) => {
    el.textContent = siteConfig.hotelName;
  });
}

// -----------------------------------------------------------------------
// NAVEGAÇÃO DE CATEGORIAS
// -----------------------------------------------------------------------

function renderCategoryNav() {
  const nav = document.getElementById("categoryNav");
  if (!nav) return;

  nav.innerHTML = categories
    .map(
      (cat, i) => `
      <button class="cat-pill${i === 0 ? " is-active" : ""}"
              data-cat="${cat.id}"
              role="tab"
              aria-selected="${i === 0}">
        ${t(cat.nome)}
      </button>`
    )
    .join("");

  nav.querySelectorAll(".cat-pill").forEach((btn) => {
    btn.addEventListener("click", () => {
      const target = document.getElementById(`cat-${btn.getAttribute("data-cat")}`);
      if (target) {
        // Desconta a altura de TUDO que fica fixo no topo ao rolar
        // (barra de idioma/ligação + nav de categorias), senão o título
        // da categoria fica escondido atrás deles.
        const stickyBar = document.getElementById("stickyBar");
        const stickyOffset = (stickyBar ? stickyBar.getBoundingClientRect().height : 0)
          + nav.getBoundingClientRect().height;
        const top = target.getBoundingClientRect().top + window.scrollY - stickyOffset - 12;
        window.scrollTo({ top, behavior: "smooth" });
      }
    });
  });
}

function setActiveCategoryPill(catId) {
  document.querySelectorAll(".cat-pill").forEach((btn) => {
    const isActive = btn.getAttribute("data-cat") === catId;
    btn.classList.toggle("is-active", isActive);
    btn.setAttribute("aria-selected", String(isActive));
    if (isActive) {
      btn.scrollIntoView({ behavior: "smooth", inline: "center", block: "nearest" });
    }
  });
}

// -----------------------------------------------------------------------
// CARDÁPIO
// -----------------------------------------------------------------------

function renderMenu() {
  const menuRoot = document.getElementById("menuSections");
  if (!menuRoot) return;

  // Monta cada categoria com produtos; categorias sem produtos não geram
  // seção nenhuma. Entre duas seções consecutivas (só entre elas, nunca
  // antes da primeira nem depois da última), entra o divisor ondulado
  // decorativo (.cat-divider, estilizado em style.css).
  const sectionsHtml = categories
    .map((cat) => {
      const items = menuData.filter((item) => item.categoria === cat.id);
      if (items.length === 0) return null;

      const itemsHtml = items
        .map((item) => {
          // Selo "0%" — só aparece quando o item tem semAlcool: true no
          // data.js. Texto explícito (não é só um ícone abstrato) para
          // não deixar dúvida do que significa.
          const zeroBadge = item.semAlcool
            ? '<span class="badge-zero" title="Disponível em versão sem álcool">0%</span>'
            : "";

          // Preço é opcional: alguns itens (ex.: Acompanhamentos,
          // "Opções" do Açaí) não têm preço no documento de origem —
          // nesse caso o <span> de preço simplesmente não é criado.
          const priceHtml = item.preco
            ? `<span class="menu-item__price">R$ ${item.preco}</span>`
            : "";

          // Descrição também é opcional (alguns itens de bebida não têm).
          const descHtml = t(item.descricao)
            ? `<p class="menu-item__desc">${t(item.descricao)}</p>`
            : "";

          return `
          <li class="menu-item">
            <div class="menu-item__head">
              <h3 class="menu-item__name">${t(item.nome)}${zeroBadge}</h3>
              ${priceHtml}
            </div>
            ${descHtml}
          </li>`;
        })
        .join("");

      // Nota opcional da categoria (ex.: legenda explicando o selo 0%).
      const noteHtml = cat.nota
        ? `<p class="cat-section__note">${t(cat.nota)}</p>`
        : "";

      return `
        <section class="cat-section" id="cat-${cat.id}" data-cat-section="${cat.id}">
          <h2 class="cat-section__title">${t(cat.nome)}</h2>
          ${noteHtml}
          <ul class="menu-list">${itemsHtml}</ul>
        </section>`;
    })
    .filter(Boolean);

  menuRoot.innerHTML = sectionsHtml.join('<div class="cat-divider" aria-hidden="true"></div>');

  observeCategorySections();
}

// Ativa o pill correto conforme a seção visível durante o scroll
function observeCategorySections() {
  const sections = document.querySelectorAll("[data-cat-section]");
  if (!sections.length) return;

  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          setActiveCategoryPill(entry.target.getAttribute("data-cat-section"));
        }
      });
    },
    { rootMargin: "-45% 0px -50% 0px", threshold: 0 }
  );

  sections.forEach((s) => observer.observe(s));
}

// -----------------------------------------------------------------------
// TRANSIÇÃO HERO → FUNDO DO CARDÁPIO
// -----------------------------------------------------------------------

function initHeroTransition() {
  // Observa a hero-zone inteira (imagem + logo + institucional + serviço
  // de quarto). Quando ela sai da tela, a navegação de categorias ganha
  // uma borda inferior sutil — a foto em si já "some" sozinha, por ser
  // parte do fluxo normal da página (não é fixa), então não precisamos
  // de mais lógica além dessa marcação visual.
  const heroZone = document.getElementById("heroZone");
  if (!heroZone) return;

  const observer = new IntersectionObserver(
    ([entry]) => {
      document.body.classList.toggle("is-past-hero", !entry.isIntersecting);
    },
    { threshold: 0, rootMargin: "-52px 0px 0px 0px" } // -52px == --sticky-bar-h no CSS
  );

  observer.observe(heroZone);
}

// -----------------------------------------------------------------------
// BOTÃO VOLTAR AO TOPO
// Some/aparece via CSS (regra body.is-past-hero .back-to-top em
// style.css), reaproveitando a mesma classe que já controla a borda do
// nav — aqui só precisamos do clique.
// -----------------------------------------------------------------------

function initBackToTop() {
  const btn = document.getElementById("backToTop");
  if (!btn) return;
  btn.addEventListener("click", () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  });
}

// -----------------------------------------------------------------------
// FRANJA FIXA DA TAXA DE SERVIÇO
// Mesmo princípio do back-to-top: some/aparece com body.is-past-hero.
// Além disso, tem um segundo gatilho próprio (is-footer-visible): quando
// o rodapé de verdade (site-footer, lá embaixo da página) entra na tela,
// a franja se esconde, pra não ficar sobrepondo o rodapé real.
// -----------------------------------------------------------------------

function initTaxNoteBar() {
  const footer = document.querySelector(".site-footer");
  if (!footer) return;

  const observer = new IntersectionObserver(
    ([entry]) => {
      document.body.classList.toggle("is-footer-visible", entry.isIntersecting);
    },
    { threshold: 0 }
  );

  observer.observe(footer);
}

// -----------------------------------------------------------------------
// BOOT
// -----------------------------------------------------------------------

function renderAll() {
  renderStaticText();
  renderConfigBlocks();
  renderCategoryNav();
  renderMenu();
  updateLangSwitchState();
}

document.addEventListener("DOMContentLoaded", () => {
  initLangSwitch();
  initHeroTransition();
  initBackToTop();
  initTaxNoteBar();
  renderAll();
});
