/**
 * data.js
 * -----------------------------------------------------------------------
 * CONTEÚDO DO CARDÁPIO — carga inicial a partir de:
 *   - "card_v1_cozinha 2026_27.docx"
 *   - "Proposta cardápio bebidas 2026_27.docx"
 *
 * Ordem: cozinha primeiro, depois bebidas — exatamente a ordem dos
 * documentos originais, categoria por categoria, item por item.
 *
 * IMPORTANTE — SÓ TEM PORTUGUÊS POR ENQUANTO.
 * Nenhum campo "es"/"en" foi preenchido de propósito: traduzir cardápio
 * de forma apressada gera erros de gastronomia. Isso fica para uma fase
 * dedicada de tradução (Fase 4). Enquanto isso, o site já funciona
 * normalmente — a função t() em main.js cai automaticamente para o
 * português quando o idioma atual não tem a chave preenchida.
 *
 * NOTAS DESTA CARGA (revisar com calma depois):
 *   - "Prato individual" e "Prato compartilhado" no documento de cozinha
 *     não são categorias com itens diretos — são títulos que agrupam
 *     subcategorias (Massas e Risotos / Peixes e Frutos do Mar / Carnes
 *     e Aves). Como "Peixes e Frutos do Mar" e "Carnes e Aves" aparecem
 *     duas vezes (uma vez para prato individual, outra para
 *     compartilhado, com pratos diferentes), criei categorias
 *     separadas para não ter duas abas iguais na navegação:
 *     peixes-individual / peixes-compartilhar e carnes-individual /
 *     carnes-compartilhar. Os nomes exibidos (campo "nome") podem ser
 *     editados à vontade — é só texto.
 *   - "Cervejas artesanais" (Schornstein) ficou dentro da categoria
 *     "Cervejas", junto com as demais — não tinha preço no documento,
 *     deixei em branco (preco: "").
 *   - "Acompanhamentos" não tinha preços no documento (nenhum item) —
 *     todos ficaram com preco: "". O layout já sabe esconder o preço
 *     quando ele vem vazio (ver renderMenu em main.js).
 *   - Em "Açaí", "Opções" (banana, morango etc.) não tem preço — são
 *     escolhas inclusas. "Extras" tinha "R$ 6,00 ??" no documento
 *     (com interrogação); Diego confirmou R$ 6,00.
 *   - Itens marcados "(Tem versão 0%)" no documento de bebidas ganharam
 *     semAlcool: true, o que faz aparecer o selo "0%" ao lado do nome
 *     (ver .badge-zero em style.css). A legenda explicando o selo fica
 *     no campo "nota" das categorias Coquetéis Praianos e Clássicos e
 *     Autorais (as únicas com itens 0% nesta carga).
 * -----------------------------------------------------------------------
 */

const categories = [
  // ---------- COZINHA ----------
  { id: "petiscos", nome: { pt: "Petiscos" } },
  { id: "entradas", nome: { pt: "Entradas" } },
  { id: "saladas", nome: { pt: "Saladas" } },
  { id: "kids", nome: { pt: "Kids" } },
  { id: "massas-risotos", nome: { pt: "Massas e Risotos" } },
  { id: "peixes-individual", nome: { pt: "Peixes e Frutos do Mar" } },
  { id: "carnes-individual", nome: { pt: "Carnes e Aves" } },
  { id: "peixes-compartilhar", nome: { pt: "Peixes e Frutos do Mar · Para 2" } },
  { id: "carnes-compartilhar", nome: { pt: "Carnes e Aves · Para 2" } },
  { id: "sanduiches", nome: { pt: "Sanduíches" } },
  { id: "hamburgueres", nome: { pt: "Hambúrgueres" } },
  { id: "sobremesas", nome: { pt: "Sobremesas" } },
  { id: "acompanhamentos", nome: { pt: "Acompanhamentos" } },

  // ---------- BEBIDAS ----------
  { id: "soft-drink", nome: { pt: "Soft Drink" } },
  { id: "cervejas", nome: { pt: "Cervejas" } },
  { id: "vitaminas-shakes", nome: { pt: "Vitaminas e Shakes" } },
  { id: "sucos", nome: { pt: "Sucos" } },
  { id: "limonadas", nome: { pt: "Limonadas" } },
  { id: "artesanais-detox", nome: { pt: "Artesanais & Detox" } },
  {
    id: "coqueteis-praianos",
    nome: { pt: "Coquetéis Praianos" },
    nota: { pt: "O selo 0% indica que o drink também tem versão sem álcool." }
  },
  { id: "caipirinhas", nome: { pt: "Caipirinhas" } },
  {
    id: "classicos-autorais",
    nome: { pt: "Clássicos e Autorais" },
    nota: { pt: "O selo 0% indica que o drink também tem versão sem álcool." }
  },
  { id: "acais", nome: { pt: "Açaís" } }
];

const menuData = [

  // ============ PETISCOS ============
  { id: "petiscos-01", categoria: "petiscos",
    nome: { pt: "Bolinho de Bacalhau (6 unid.)" },
    descricao: { pt: "Bolinhos de bacalhau crocantes servidos com molho tártaro." },
    preco: "55,90", imagem: null },
  { id: "petiscos-02", categoria: "petiscos",
    nome: { pt: "Batata Frita (450g)" },
    descricao: { pt: "Batatas douradas e crocantes acompanhadas de molho da casa." },
    preco: "48,00", imagem: null },
  { id: "petiscos-03", categoria: "petiscos",
    nome: { pt: "Aipim Frito (450g)" },
    descricao: { pt: "Aipim crocante por fora e macio por dentro com molho da casa." },
    preco: "39,90", imagem: null },
  { id: "petiscos-04", categoria: "petiscos",
    nome: { pt: "Isca de Peixe (450g)" },
    descricao: { pt: "Tirinhas de peixe empanadas servidas com molho tártaro e limão." },
    preco: "99,90", imagem: null },
  { id: "petiscos-05", categoria: "petiscos",
    nome: { pt: "Frango Acebolado (450g)" },
    descricao: { pt: "Tiras de frango salteadas com cebola acompanhadas de farofa crocante." },
    preco: "69,00", imagem: null },
  { id: "petiscos-06", categoria: "petiscos",
    nome: { pt: "Isca de Mignon com Fritas (400g / 200g)" },
    descricao: { pt: "Tiras de filé mignon grelhado acompanhadas de batatas fritas douradas e nossa farofa de tomilho." },
    preco: "129,90", imagem: null },
  { id: "petiscos-07", categoria: "petiscos",
    nome: { pt: "Nuggets de Frango (450g)" },
    descricao: { pt: "Clássicos empanados, crocantes e dourados servidos com molho da casa." },
    preco: "46,00", imagem: null },
  { id: "petiscos-08", categoria: "petiscos",
    nome: { pt: "Camarão à Milanesa (450g)" },
    descricao: { pt: "Camarões empanados na farinha panko servidos com molho tártaro e limão." },
    preco: "189,00", imagem: null },
  { id: "petiscos-09", categoria: "petiscos",
    nome: { pt: "Camarão ao Alho e Óleo (450g)" },
    descricao: { pt: "Camarões descascados salteados com alho e finalizados com salsinha e limão." },
    preco: "189,00", imagem: null },
  { id: "petiscos-10", categoria: "petiscos",
    nome: { pt: "Porção Verão (1800g)" },
    descricao: { pt: "Mix de camarão a milanesa, isca de peixe, lula a dorê e batata frita servido com molho tártaro e limão." },
    preco: "399,00", imagem: null },
  { id: "petiscos-11", categoria: "petiscos",
    nome: { pt: "Lula à Dorê (450g)" },
    descricao: { pt: "Lula nacional com leve empanado a dorê acompanhada de molho tártaro e limão." },
    preco: "129,00", imagem: null },
  { id: "petiscos-12", categoria: "petiscos",
    nome: { pt: "Fish and Chips (900g)" },
    descricao: { pt: "Clássica combinação de iscas de peixe e batata frita servidas com molho da casa." },
    preco: "119,90", imagem: null },

  // ============ ENTRADAS ============
  { id: "entradas-01", categoria: "entradas",
    nome: { pt: "Búfala e Pesto" },
    descricao: { pt: "Clássica mussarela de búfala com molho pesto e tomate-cereja assado, acompanhada de torradas de pão italiano." },
    preco: "66,00", imagem: null },
  { id: "entradas-02", categoria: "entradas",
    nome: { pt: "Tartar de Salmão" },
    descricao: { pt: "Salmão cru picado e temperado com ervas finas, acompanhado com torradas de pão italiano." },
    preco: "69,00", imagem: null },
  { id: "entradas-03", categoria: "entradas",
    nome: { pt: "Bruschetta de Cogumelos" },
    descricao: { pt: "Crocante pão italiano com cogumelos shiitake e creme azedo, finalizado com lâminas de amêndoas." },
    preco: "62,00", imagem: null },

  // ============ SALADAS ============
  { id: "saladas-01", categoria: "saladas",
    nome: { pt: "Salada Caesar" },
    descricao: { pt: "Mix de folhas frescas, frango grelhado, tomate cereja, parmesão e croutons, servido com molho cremoso de iogurte." },
    preco: "55,90", imagem: null },
  { id: "saladas-02", categoria: "saladas",
    nome: { pt: "Salada Crispy" },
    descricao: { pt: "Mix de folhas verdes com bacon crocante, queijo parmesão e nossa redução especial de balsâmico." },
    preco: "45,90", imagem: null },
  { id: "saladas-03", categoria: "saladas",
    nome: { pt: "Salada de Folhas com Salmão" },
    descricao: { pt: "Mix de folhas com lascas de salmão grelhado, tomate-cereja, manga fresca e creme azedo." },
    preco: "69,00", imagem: null },

  // ============ KIDS ============
  { id: "kids-01", categoria: "kids",
    nome: { pt: "Mignonzinho Grelhado" },
    descricao: { pt: "Iscas de mignon grelhado acompanhadas de arroz e batata frita." },
    preco: "59,00", imagem: null },
  { id: "kids-02", categoria: "kids",
    nome: { pt: "Franguinho Grelhado" },
    descricao: { pt: "Iscas de frango grelhado acompanhadas de arroz e batata frita." },
    preco: "46,00", imagem: null },
  { id: "kids-03", categoria: "kids",
    nome: { pt: "Mini Bolonhesa" },
    descricao: { pt: "Espaguete com molho bolonhesa especial da casa." },
    preco: "39,00", imagem: null },

  // ============ MASSAS E RISOTOS (Prato individual) ============
  { id: "massas-01", categoria: "massas-risotos",
    nome: { pt: "Fettuccine al Mare" },
    descricao: { pt: "Fettuccine ao molho sugo com camarões, lula e mariscos, finalizado com ervas frescas." },
    preco: "89,90", imagem: null },
  { id: "massas-02", categoria: "massas-risotos",
    nome: { pt: "Fettuccine Alfredo com Filé Mignon" },
    descricao: { pt: "Fettuccine ao molho cremoso de queijo parmesão acompanhado de filé mignon grelhado." },
    preco: "89,90", imagem: null },
  { id: "massas-03", categoria: "massas-risotos",
    nome: { pt: "Risoto Salmão Siciliano" },
    descricao: { pt: "Risoto cremoso aromatizado com limão-siciliano, acompanhado de posta de salmão grelhado." },
    preco: "99,90", imagem: null },
  { id: "massas-04", categoria: "massas-risotos",
    nome: { pt: "Risoto de Camarão e Alho-poró" },
    descricao: { pt: "Risoto cremoso preparado com camarões e alho-poró, finalizado com tomate cereja e ervas frescas." },
    preco: "99,90", imagem: null },
  { id: "massas-05", categoria: "massas-risotos",
    nome: { pt: "Risoto de Cogumelos e Alho-poró (vegano)" },
    descricao: { pt: "Risoto cremoso de cogumelos shiitake e alho-poró preparado com leite de coco." },
    preco: "79,00", imagem: null },

  // ============ PEIXES E FRUTOS DO MAR — individual ============
  { id: "peixes-ind-01", categoria: "peixes-individual",
    nome: { pt: "Pescada-amarela Grelhada" },
    descricao: { pt: "Filé de pescada-amarela grelhado, servido com purê de abóbora e legumes da estação, finalizado com ervas frescas." },
    preco: "72,00", imagem: null },
  { id: "peixes-ind-02", categoria: "peixes-individual",
    nome: { pt: "Salmão ao Chutney de Maracujá" },
    descricao: { pt: "Salmão grelhado acompanhado de purê de mandioquinha cremoso, finalizado com nosso chutney de maracujá." },
    preco: "89,90", imagem: null },

  // ============ CARNES E AVES — individual ============
  { id: "carnes-ind-01", categoria: "carnes-individual",
    nome: { pt: "Filé Mignon ao Roti" },
    descricao: { pt: "Filé mignon grelhado ao molho roti, acompanhado de purê de batata com queijo e crispy de alho-poró." },
    preco: "89,90", imagem: null },
  { id: "carnes-ind-02", categoria: "carnes-individual",
    nome: { pt: "Filé Mignon Grelhado" },
    descricao: { pt: "Filé mignon grelhado ao molho demi-glace, acompanhado de purê de abóbora e farofa cítrica." },
    preco: "89,90", imagem: null },
  { id: "carnes-ind-03", categoria: "carnes-individual",
    nome: { pt: "Frango Grelhado" },
    descricao: { pt: "Filé de frango grelhado, acompanhado de arroz, farofa e batata frita." },
    preco: "59,00", imagem: null },

  // ============ PEIXES E FRUTOS DO MAR — para compartilhar ============
  { id: "peixes-comp-01", categoria: "peixes-compartilhar",
    nome: { pt: "Pescada-amarela ao Vinho Branco" },
    descricao: { pt: "Filé de pescada-amarela grelhado com camarões e mariscos ao molho de vinho branco, acompanhado de purê de abóbora, arroz de castanhas, batata frita, salada e farofa." },
    preco: "209,00", imagem: null },
  { id: "peixes-comp-02", categoria: "peixes-compartilhar",
    nome: { pt: "Pescada-amarela à Pescador" },
    descricao: { pt: "Filé de pescada-amarela grelhado com camarões e lula ao molho sugo, finalizado com salsinha e azeite de ervas, acompanhado de arroz de castanhas, batata frita, salada e farofa." },
    preco: "199,00", imagem: null },
  { id: "peixes-comp-03", categoria: "peixes-compartilhar",
    nome: { pt: "Linguado à Belle Meunière" },
    descricao: { pt: "Filé de linguado grelhado ao molho camarões, alcaparras e champignon, acompanhado de arroz de castanhas, batata frita, salada e farofa." },
    preco: "199,00", imagem: null },
  { id: "peixes-comp-04", categoria: "peixes-compartilhar",
    nome: { pt: "Moqueca de Peixe" },
    descricao: { pt: "Tradicional moqueca de peixe com leite de coco, azeite de dendê e pimentões, acompanhada de arroz de castanhas, batata frita, salada e farofa." },
    preco: "159,00", imagem: null },
  { id: "peixes-comp-05", categoria: "peixes-compartilhar",
    nome: { pt: "Salmão Grelhado" },
    descricao: { pt: "Filé de salmão grelhado ao pesto, servido com legumes, arroz de castanhas, batata frita, salada e farofa." },
    preco: "209,00", imagem: null },

  // ============ CARNES E AVES — para compartilhar ============
  { id: "carnes-comp-01", categoria: "carnes-compartilhar",
    nome: { pt: "Filé Mignon ao Molho Poivre" },
    descricao: { pt: "Filé mignon grelhado ao molho poivre, servido com arroz, salada e batata frita." },
    preco: "189,00", imagem: null },
  { id: "carnes-comp-02", categoria: "carnes-compartilhar",
    nome: { pt: "Filé à la Minuta" },
    descricao: { pt: "Filé mignon grelhado, acompanhado de arroz, feijão, batata frita, salada e farofa." },
    preco: "189,00", imagem: null },
  { id: "carnes-comp-03", categoria: "carnes-compartilhar",
    nome: { pt: "Bife à Parmegiana" },
    descricao: { pt: "Filé de alcatra empanado, coberto com molho de tomate e queijo mussarela, acompanhado de arroz, salada e batata frita." },
    preco: "162,00", imagem: null },
  { id: "carnes-comp-04", categoria: "carnes-compartilhar",
    nome: { pt: "Frango à Parmegiana" },
    descricao: { pt: "Filé de frango empanado, coberto com molho de tomate e queijo mussarela, acompanhado de arroz, salada e batata frita." },
    preco: "129,00", imagem: null },

  // ============ SANDUÍCHES ============
  { id: "sanduiches-01", categoria: "sanduiches",
    nome: { pt: "Baguete de Salmão" },
    descricao: { pt: "Creme de salmão com ricota, molho pesto, folhas de alface e tomate-cereja." },
    preco: "54,00", imagem: null },
  { id: "sanduiches-02", categoria: "sanduiches",
    nome: { pt: "Baguete de Frango" },
    descricao: { pt: "Frango grelhado, molho especial da casa, chimichurri, alface e tomate seco." },
    preco: "39,00", imagem: null },
  { id: "sanduiches-03", categoria: "sanduiches",
    nome: { pt: "Baguete Campestre" },
    descricao: { pt: "Abobrinha grelhada, pesto de manjericão, folhas de rúcula e tomate seco." },
    preco: "37,00", imagem: null },
  { id: "sanduiches-04", categoria: "sanduiches",
    nome: { pt: "Misto Quente" },
    descricao: { pt: "Clássico sanduíche de pão de forma com presunto e queijo mussarela derretido." },
    preco: "26,00", imagem: null },

  // ============ HAMBÚRGUERES ============
  { id: "hamburgueres-01", categoria: "hamburgueres",
    nome: { pt: "Mini Burguer (4 unid.)" },
    descricao: { pt: "Mini hambúrgueres artesanais com cheddar, alface e tomate, acompanhados de batata frita e molho da casa." },
    preco: "74,00", imagem: null },
  { id: "hamburgueres-02", categoria: "hamburgueres",
    nome: { pt: "Cheese Burguer" },
    descricao: { pt: "Hambúrguer artesanal com queijo mussarela derretido, acompanhado de batata frita e molho da casa." },
    preco: "55,00", imagem: null },
  { id: "hamburgueres-03", categoria: "hamburgueres",
    nome: { pt: "Cheese Salada" },
    descricao: { pt: "Hambúrguer artesanal com queijo mussarela, alface e tomate, acompanhado de batata frita e molho da casa." },
    preco: "55,00", imagem: null },
  { id: "hamburgueres-04", categoria: "hamburgueres",
    nome: { pt: "Cheese Bacon" },
    descricao: { pt: "Hambúrguer artesanal com queijo mussarela, bacon crocante e cebola caramelizada, acompanhado de batata frita e molho da casa." },
    preco: "59,00", imagem: null },
  { id: "hamburgueres-05", categoria: "hamburgueres",
    nome: { pt: "Cheese Cheddar" },
    descricao: { pt: "Hambúrguer artesanal com queijo cheddar cremoso, acompanhado de batata frita e molho da casa." },
    preco: "55,00", imagem: null },

  // ============ SOBREMESAS ============
  { id: "sobremesas-01", categoria: "sobremesas",
    nome: { pt: "Petit Gateau" },
    descricao: { pt: "Bolinho de chocolate servido quente, com recheio cremoso de chocolate, acompanhado de sorvete de creme e finalizado com calda de chocolate." },
    preco: "39,00", imagem: null },
  { id: "sobremesas-02", categoria: "sobremesas",
    nome: { pt: "Brownie de Chocolate" },
    descricao: { pt: "Brownie de chocolate intenso, com textura macia por dentro e leve crocância por fora, servido com sorvete de creme e calda de chocolate." },
    preco: "39,00", imagem: null },

  // ============ ACOMPANHAMENTOS (sem preço no documento) ============
  { id: "acomp-01", categoria: "acompanhamentos", nome: { pt: "Arroz (300g)" }, descricao: { pt: "" }, preco: "", imagem: null },
  { id: "acomp-02", categoria: "acompanhamentos", nome: { pt: "Feijão (300g)" }, descricao: { pt: "" }, preco: "", imagem: null },
  { id: "acomp-03", categoria: "acompanhamentos", nome: { pt: "Massa na Manteiga (300g)" }, descricao: { pt: "" }, preco: "", imagem: null },
  { id: "acomp-04", categoria: "acompanhamentos", nome: { pt: "Mix de Folhas" }, descricao: { pt: "" }, preco: "", imagem: null },
  { id: "acomp-05", categoria: "acompanhamentos", nome: { pt: "Farofa (150g)" }, descricao: { pt: "" }, preco: "", imagem: null },
  { id: "acomp-06", categoria: "acompanhamentos", nome: { pt: "Purê de Batata (300g)" }, descricao: { pt: "" }, preco: "", imagem: null },
  { id: "acomp-07", categoria: "acompanhamentos", nome: { pt: "Purê de Abóbora (300g)" }, descricao: { pt: "" }, preco: "", imagem: null },
  { id: "acomp-08", categoria: "acompanhamentos", nome: { pt: "Legumes Grelhados na Manteiga (300g)" }, descricao: { pt: "" }, preco: "", imagem: null },

  // ============ SOFT DRINK ============
  { id: "soft-01", categoria: "soft-drink", nome: { pt: "Água sem Gás (500 ml)" }, descricao: { pt: "" }, preco: "8,00", imagem: null },
  { id: "soft-02", categoria: "soft-drink", nome: { pt: "Água com Gás (500 ml)" }, descricao: { pt: "" }, preco: "8,00", imagem: null },
  { id: "soft-03", categoria: "soft-drink", nome: { pt: "Água Tônica (350 ml)" }, descricao: { pt: "" }, preco: "10,00", imagem: null },
  { id: "soft-04", categoria: "soft-drink", nome: { pt: "Água de Coco (330 ml)" }, descricao: { pt: "" }, preco: "12,00", imagem: null },
  { id: "soft-05", categoria: "soft-drink", nome: { pt: "Coca-Cola (350 ml)" }, descricao: { pt: "" }, preco: "10,00", imagem: null },
  { id: "soft-06", categoria: "soft-drink", nome: { pt: "Coca-Cola Zero (350 ml)" }, descricao: { pt: "" }, preco: "10,00", imagem: null },
  { id: "soft-07", categoria: "soft-drink", nome: { pt: "Sprite (350 ml)" }, descricao: { pt: "" }, preco: "10,00", imagem: null },
  { id: "soft-08", categoria: "soft-drink", nome: { pt: "Fanta Laranja (350 ml)" }, descricao: { pt: "" }, preco: "10,00", imagem: null },
  { id: "soft-09", categoria: "soft-drink", nome: { pt: "Guaraná (350 ml)" }, descricao: { pt: "" }, preco: "10,00", imagem: null },
  { id: "soft-10", categoria: "soft-drink", nome: { pt: "Guaraná Zero (350 ml)" }, descricao: { pt: "" }, preco: "10,00", imagem: null },
  { id: "soft-11", categoria: "soft-drink", nome: { pt: "Red Bull (250 ml)" }, descricao: { pt: "" }, preco: "25,00", imagem: null },

  // ============ CERVEJAS (inclui artesanais Schornstein, sem preço no doc) ============
  { id: "cervejas-01", categoria: "cervejas", nome: { pt: "Corona Long Neck (330 ml)" }, descricao: { pt: "" }, preco: "19,00", imagem: null },
  { id: "cervejas-02", categoria: "cervejas", nome: { pt: "Heineken Long Neck (330 ml)" }, descricao: { pt: "" }, preco: "17,00", imagem: null },
  { id: "cervejas-03", categoria: "cervejas", nome: { pt: "Stella Artois Pure Gold (330 ml)" }, descricao: { pt: "" }, preco: "17,00", imagem: null },
  { id: "cervejas-04", categoria: "cervejas", nome: { pt: "Heineken Lata (350 ml)" }, descricao: { pt: "" }, preco: "15,00", imagem: null },
  { id: "cervejas-05", categoria: "cervejas", nome: { pt: "Skol Lata (350 ml)" }, descricao: { pt: "" }, preco: "11,00", imagem: null },
  { id: "cervejas-06", categoria: "cervejas", nome: { pt: "Schornstein Pilsen (500 ml)" }, descricao: { pt: "Cerveja artesanal." }, preco: "", imagem: null },
  { id: "cervejas-07", categoria: "cervejas", nome: { pt: "Schornstein IPA (500 ml)" }, descricao: { pt: "Cerveja artesanal." }, preco: "", imagem: null },
  { id: "cervejas-08", categoria: "cervejas", nome: { pt: "Schornstein APA (500 ml)" }, descricao: { pt: "Cerveja artesanal." }, preco: "", imagem: null },

  // ============ VITAMINAS E SHAKES ============
  { id: "vitaminas-01", categoria: "vitaminas-shakes", nome: { pt: "Vitamina de Banana" }, descricao: { pt: "" }, preco: "21,00", imagem: null },
  { id: "vitaminas-02", categoria: "vitaminas-shakes", nome: { pt: "Vitamina de Morango" }, descricao: { pt: "" }, preco: "21,00", imagem: null },
  { id: "vitaminas-03", categoria: "vitaminas-shakes",
    nome: { pt: "Milk Shake Cookies & Cream" },
    descricao: { pt: "Clássico com pedacinhos de bolacha Oreo." },
    preco: "39,00", imagem: null },
  { id: "vitaminas-04", categoria: "vitaminas-shakes",
    nome: { pt: "Milk Shake Chocolate Crocante" },
    descricao: { pt: "Todo o sabor e a crocância de Ovomaltine." },
    preco: "39,00", imagem: null },

  // ============ SUCOS ============
  { id: "sucos-01", categoria: "sucos",
    nome: { pt: "Natural de Laranja" },
    descricao: { pt: "Suco natural de laranjas frescas." },
    preco: "19,00", imagem: null },
  { id: "sucos-02", categoria: "sucos",
    nome: { pt: "Laranja & Morangos" },
    descricao: { pt: "Suco natural de laranja com morangos frescos." },
    preco: "21,00", imagem: null },
  { id: "sucos-03", categoria: "sucos",
    nome: { pt: "Sucos de Fruta" },
    descricao: { pt: "Morango • Abacaxi • Abacaxi com hortelã • Maracujá." },
    preco: "16,00", imagem: null },

  // ============ LIMONADAS ============
  { id: "limonadas-01", categoria: "limonadas",
    nome: { pt: "Clássica" },
    descricao: { pt: "A tradicional limonada feita na hora." },
    preco: "16,00", imagem: null },
  { id: "limonadas-02", categoria: "limonadas",
    nome: { pt: "Pink Lemonade" },
    descricao: { pt: "A clássica limonada com um delicado toque de frutas vermelhas." },
    preco: "18,00", imagem: null },
  { id: "limonadas-03", categoria: "limonadas",
    nome: { pt: "Limonada Fresh" },
    descricao: { pt: "Refrescante limonada com gengibre e hortelã." },
    preco: "18,00", imagem: null },
  { id: "limonadas-04", categoria: "limonadas",
    nome: { pt: "Limonada Suíça" },
    descricao: { pt: "Versão cremosa com leite condensado e raspas de limão." },
    preco: "19,00", imagem: null },

  // ============ ARTESANAIS & DETOX ============
  { id: "detox-01", categoria: "artesanais-detox",
    nome: { pt: "Doce Morada" },
    descricao: { pt: "A energia do açaí combinada com morangos e sucos naturais de laranja e beterraba." },
    preco: "23,00", imagem: null },
  { id: "detox-02", categoria: "artesanais-detox",
    nome: { pt: "Amazônia" },
    descricao: { pt: "A intensidade do cupuaçu equilibrada com abacaxi, água de coco e um toque de maçã verde." },
    preco: "26,00", imagem: null },
  { id: "detox-03", categoria: "artesanais-detox",
    nome: { pt: "Toque de Sol" },
    descricao: { pt: "Sucos naturais de cenoura e laranja combinados com abacaxi, hortelã e cúrcuma." },
    preco: "23,00", imagem: null },
  { id: "detox-04", categoria: "artesanais-detox",
    nome: { pt: "Energia" },
    descricao: { pt: "Refrescante água de coco com pepino e kiwi, com toques de limão, gengibre e hortelã." },
    preco: "23,00", imagem: null },

  // ============ COQUETÉIS PRAIANOS ============
  { id: "praianos-01", categoria: "coqueteis-praianos",
    nome: { pt: "Clericot 250ml" },
    descricao: { pt: "Espumante com frutas da estação congeladas e notas de romã." },
    preco: "29,00", imagem: null },
  { id: "praianos-02", categoria: "coqueteis-praianos",
    nome: { pt: "Aperol Spritz 300ml" },
    descricao: { pt: "Espumante, Aperol e água com gás finalizado com uma fatia de laranja." },
    preco: "39,00", imagem: null },
  { id: "praianos-03", categoria: "coqueteis-praianos",
    nome: { pt: "Gin Tônica 450ml" },
    descricao: { pt: "Gin, água tônica e rodelas de limão." },
    preco: "39,00", imagem: null },
  { id: "praianos-04", categoria: "coqueteis-praianos",
    nome: { pt: "Batida de Frutas 300ml" },
    descricao: { pt: "Maracujá • Coco • Morango • Limão • Abacaxi." },
    preco: "29,00", imagem: null, semAlcool: true },
  { id: "praianos-05", categoria: "coqueteis-praianos",
    nome: { pt: "Sex on the Beach" },
    descricao: { pt: "Vodka e licor de pêssego combinados com suco de laranja e um delicado toque de romã." },
    preco: "31,00", imagem: null, semAlcool: true },
  { id: "praianos-06", categoria: "coqueteis-praianos",
    nome: { pt: "Mojito" },
    descricao: { pt: "O clássico cubano de rum, limão, hortelã e um toque de água com gás." },
    preco: "31,00", imagem: null, semAlcool: true },
  { id: "praianos-07", categoria: "coqueteis-praianos",
    nome: { pt: "Piña Colada" },
    descricao: { pt: "Rum, abacaxi, leite de coco e leite condensado em uma combinação cremosa." },
    preco: "37,00", imagem: null, semAlcool: true },

  // ============ CAIPIRINHAS ============
  { id: "caipirinhas-01", categoria: "caipirinhas",
    nome: { pt: "Caipiras de Limão" },
    descricao: { pt: "Cachaça • Vodka • Rum • Saquê." },
    preco: "29,00", imagem: null },
  { id: "caipirinhas-02", categoria: "caipirinhas",
    nome: { pt: "Caipiras de Fruta" },
    descricao: { pt: "Morango • Abacaxi • Maracujá • Kiwi." },
    preco: "32,00", imagem: null },
  { id: "caipirinhas-03", categoria: "caipirinhas",
    nome: { pt: "Caipiras Premium" },
    descricao: { pt: "Absolut • Cachaça envelhecida." },
    preco: "42,00", imagem: null },

  // ============ CLÁSSICOS E AUTORAIS ============
  { id: "classicos-01", categoria: "classicos-autorais",
    nome: { pt: "Negroni" },
    descricao: { pt: "Gin, Campari e vermute rosso finalizado com zest de laranja." },
    preco: "39,00", imagem: null },
  { id: "classicos-02", categoria: "classicos-autorais",
    nome: { pt: "Margarita" },
    descricao: { pt: "Tequila, licor de laranja e limão finalizados com borda de sal." },
    preco: "42,00", imagem: null },
  { id: "classicos-03", categoria: "classicos-autorais",
    nome: { pt: "Çáçá" },
    descricao: { pt: "Cachaça, suco natural de laranja e Blue Curaçao finalizado com mirtilos e zest de laranja." },
    preco: "31,00", imagem: null, semAlcool: true },
  { id: "classicos-04", categoria: "classicos-autorais",
    nome: { pt: "G&T Alquimia" },
    descricao: { pt: "Gin Tônica infusionada à escolha: Limão & Framboesa • Laranja, Manga & Canela • Frutas Silvestres." },
    preco: "39,00", imagem: null },
  { id: "classicos-05", categoria: "classicos-autorais",
    nome: { pt: "Verão Guaruçá" },
    descricao: { pt: "Vodka, suco natural de laranja e morangos com toques de frutos vermelhos e hortelã." },
    preco: "39,00", imagem: null, semAlcool: true },

  // ============ AÇAÍS ============
  { id: "acais-01", categoria: "acais",
    nome: { pt: "Individual 250ml (2 adicionais)" },
    descricao: { pt: "" }, preco: "38,00", imagem: null },
  { id: "acais-02", categoria: "acais",
    nome: { pt: "Compartilhar 400ml (4 adicionais)" },
    descricao: { pt: "" }, preco: "48,00", imagem: null },
  { id: "acais-03", categoria: "acais",
    nome: { pt: "Opções" },
    descricao: { pt: "Banana • Morango • Leite em pó • Leite condensado." },
    preco: "", imagem: null },
  { id: "acais-04", categoria: "acais",
    nome: { pt: "Extras" },
    descricao: { pt: "Abacaxi • Kiwi • Mirtilo • Ovomaltine • Oreo • Granola • Mel • Paçoca." },
    preco: "6,00", imagem: null }
];
