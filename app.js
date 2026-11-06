/**
 * KRAKENS (UNIFEI) - MOTOR PRINCIPAL DE INTERAÇÃO, I18N, SCROLLSPY E ÁREA DE MEMBROS
 * Tecnologias: Vanilla JavaScript ES6+, IntersectionObserver, localStorage
 */

// ==========================================================================
// 1. DICIONÁRIO DE DADOS & INTERNACIONALIZAÇÃO (i18n)
// ==========================================================================
const translations = {
  pt: {
    // Navbar
    nav_home: "Início",
    nav_about: "Sobre",
    nav_areas: "Áreas",
    nav_sponsors: "Apoiadores",
    nav_contact: "Contato",
    nav_members_btn: "Área de Membros",
    nav_members_logged: "Portal do Membro",

    // Hero Section
    hero_title: "KRAKENS",
    hero_subtitle: "Tecnologia - Inovação - Desenvolvimento",

    // Seção Sobre (Texto Oficial Fornecido)
    about_tag: "Nossa Trajetória",
    about_title: "Sobre a Krakens",
    about_p1: "Fundada por estudantes da Universidade Federal de Itajubá (UNIFEI), a Krakens é uma iniciativa multidisciplinar de desenvolvimento tecnológico e competição náutica, aberta a alunos de todos os cursos da universidade.",
    about_p2: "Nosso foco principal está na concepção, modelagem e construção de embarcações e barcos rebocadores de alta performance para a competição nacional DUNA (Desafio Universitário de Naut-Design). Além do trabalho com engenharia náutica de superfície, a equipe mantém em seu DNA a pesquisa e o desenvolvimento de Veículos Subaquáticos Autônomos (AUVs), visando desafios de robótica marinha como a RoboSub, nos Estados Unidos.",
    about_p3: "Unindo inovação prática, trabalho em equipe e paixão pela tecnologia náutica, capacitamos nossos membros na resolução de problemas reais de engenharia, manufatura e gestão, impulsionando a formação de excelência dentro e fora da universidade.",

    // Seção Áreas
    areas_title: "Áreas & Subsistemas",
    areas_subtitle: "Nossa equipe opera através de subsistemas integrados de alta especialização técnica.",
    area_eletronica_title: "ELETRÔNICA",
    area_mecanica_title: "MECÂNICA",
    area_gestao_title: "GESTÃO E MARKETING",
    area_card_badge: "Clique para Detalhes",

    // Seção Apoiadores
    sponsors_tag: "Parcerias Estratégicas",
    sponsors_title: "Apoiadores & Parceiros",
    sponsors_banner_text: "Espaço reservado para apoiadores e parceiros estratégicos que impulsionam a engenharia náutica da Krakens. Entre em contato para apoiar.",
    sponsors_cta_btn: "Seja um Parceiro Oficial",

    // Seção Contato
    contact_tag: "Fale Conosco",
    contact_title: "Entre em Contato",
    contact_desc: "Interessado em patrocinar, realizar parcerias técnicas ou ingressar na equipe? Envie-nos uma mensagem.",
    contact_email_title: "E-mail Institucional",
    contact_loc_title: "Sede / Localização",
    contact_loc_value: "UNIFEI - Universidade Federal de Itajubá, Campus José Rodrigues Seabra, Itajubá - MG",
    contact_social_title: "Redes Oficiais",
    form_name_label: "Seu Nome Completo",
    form_email_label: "Seu E-mail",
    form_subject_label: "Assunto",
    form_message_label: "Mensagem",
    form_submit_btn: "Enviar Mensagem",

    // Login Modal
    auth_title: "Área de Membros",
    auth_subtitle: "Acesso restrito para membros da equipe Krakens UNIFEI",
    auth_email_label: "E-mail Institucional",
    auth_pass_label: "Código de Acesso",
    auth_demo_text: "Conta: krakens@unifei.edu.br / 2019",
    auth_btn_demo: "Preencher Teste",
    auth_submit_btn: "Acessar Portal do Membro",

    // Portal do Membro
    portal_welcome_role: "Membro Oficial Krakens - UNIFEI",
    portal_tab_boats: "BARCOS (Frota de Engenharia)",
    portal_tab_hub: "INFORMAÇÕES DA EQUIPE",
    portal_logout_btn: "Sair da Sessão",

    // Detalhes dos Barcos
    boat_2025_title: "Barco 2025 - DUNA Ativo (Rebocador)",
    boat_2025_desc: "Embarcação rebocadora de alto empuxo construída sob o regulamento do Desafio Universitário de Naut-Design. O projeto se destaca pela rigidez estrutural, geometria do casco otimizada para tração de estaca e motorização brushless com controle de velocidade vetorial.",
    boat_2026_title: "Barco 2026 - DUNA (Aposentado)",
    boat_2026_desc: "Embarcação que representou oficialmente a equipe Krakens na competição DUNA 2026. Projetada com foco em hidrodinâmica e eficiência propulsiva, a equipe conquistou posições de grande destaque técnico, com vitória na prova de Manobrabilidade e pódio na Tomada de Tempo.",
    boat_2027_title: "Barco 2027 - P&D Robótica Subaquática (AUV)",
    boat_2027_desc: "Veículo Subaquático Autônomo desenvolvido para inspeção e desafios internacionais de robótica marinha (RoboSub). Provido de 6 propulsores magnéticos vedados, câmeras subaquáticas estereoscópicas e navegação com IA embarcada.",

    // Pastas de Informações da Equipe (4 Pastas Oficiais)
    folder_1_tag: "Pasta 1",
    folder_1_title: "Regimento Interno",
    folder_1_desc: "Documento oficial de regras e diretrizes da equipe (espaço preparado para adicionar o documento PDF posteriormente).",
    folder_1_btn: "Regulamentos de Competição",
    folder_1_notice: "Espaço estruturado para inserção direta do PDF homologado pela diretoria.",
    doc_regimento_status: "PDF • Espaço Reservado / Em Breve",
    doc_btn_reserved: "Em Breve",

    folder_2_tag: "Pasta 2",
    folder_2_title: "Eletrônica",
    folder_2_desc: "Arquivos e documentações técnicas do subsistema de Eletrônica e Telemetria.",

    folder_3_tag: "Pasta 3",
    folder_3_title: "Mecânica",
    folder_3_desc: "Arquivos, projetos CAD, simulações e documentações do subsistema de Mecânica.",

    folder_4_tag: "Pasta 4",
    folder_4_title: "Gestão e Marketing",
    folder_4_desc: "Documentações administrativas, links e arquivos de marketing da equipe.",
    folder_4_btn: "Contatos Úteis",

    // Modais Específicos
    modal_reg_title: "Regulamentos Oficiais",
    modal_reg_subtitle: "Selecione o regulamento de competição para acessar a página oficial:",
    modal_reg_duna: "Regulamento Oficial DUNA",
    modal_reg_robosub: "Regulamento Oficial RoboSub",

    modal_contacts_title: "Contatos Internos da Equipe",
    modal_contacts_subtitle: "Diretoria e Liderança Krakens - Fale direto pelo WhatsApp:",
    contact_btn_wpp: "Falar no WhatsApp",

    // Footer
    footer_desc: "Equipe de competição e desenvolvimento de tecnologia náutica da Universidade Federal de Itajubá.",
    footer_nav_title: "Navegação",
    footer_subs_title: "Subsistemas",
    footer_rights: "© 2025 Krakens UNIFEI. Todos os direitos reservados. Feito com engenharia e paixão náutica."
  },

  en: {
    // Navbar
    nav_home: "Home",
    nav_about: "About",
    nav_areas: "Areas",
    nav_sponsors: "Sponsors",
    nav_contact: "Contact",
    nav_members_btn: "Members Area",
    nav_members_logged: "Member Portal",

    // Hero Section
    hero_title: "KRAKENS",
    hero_subtitle: "Technology - Innovation - Development",
    hero_cta_areas: "Explore Subsystems",
    hero_cta_support: "Support the Team",

    // About Section (Official Text Provided)
    about_tag: "Our Journey",
    about_title: "About Krakens",
    about_p1: "Founded by students at the Federal University of Itajubá (UNIFEI), Krakens is a multidisciplinary marine technology and engineering team, welcoming students from all academic courses across the university.",
    about_p2: "Our main focus is the design, modeling, and construction of high-performance vessels and tugboats for the national DUNA (Desafio Universitário de Naut-Design) competition. Alongside our surface marine engineering initiatives, the team also pursues the research and development of Autonomous Underwater Vehicles (AUVs) for international robotics challenges such as RoboSub in the United States.",
    about_p3: "Combining hands-on innovation, teamwork, and a passion for marine technology, we empower our members to solve real-world challenges in engineering, manufacturing, and project management, fostering technical excellence.",

    // Areas Section
    areas_tag: "Engineering & Subsystems",
    areas_title: "Areas & Subsystems",
    areas_subtitle: "Our team operates through highly specialized and collaborative technical divisions.",
    area_eletronica_title: "ELECTRONICS",
    area_mecanica_title: "MECHANICS",
    area_gestao_title: "MANAGEMENT & MARKETING",
    area_card_badge: "Click for Details",

    // Sponsors Section
    sponsors_tag: "Strategic Partnerships",
    sponsors_title: "Sponsors & Partners",
    sponsors_banner_text: "Reserved space for strategic sponsors and partners empowering Krakens marine engineering. Get in touch to partner with us.",
    sponsors_cta_btn: "Become an Official Partner",

    // Contact Section
    contact_tag: "Get in Touch",
    contact_title: "Contact Us",
    contact_desc: "Interested in sponsoring, technical collaboration, or joining the team? Send us a message.",
    contact_email_title: "Institutional Email",
    contact_loc_title: "Headquarters / Location",
    contact_loc_value: "UNIFEI - Federal University of Itajubá, Campus José Rodrigues Seabra, Itajubá - MG, Brazil",
    contact_social_title: "Official Channels",
    form_name_label: "Your Full Name",
    form_email_label: "Your Email",
    form_subject_label: "Subject",
    form_message_label: "Message",
    form_submit_btn: "Send Message",

    // Login Modal
    auth_title: "Members Area",
    auth_subtitle: "Restricted access for Krakens UNIFEI team members",
    auth_email_label: "Institutional Email",
    auth_pass_label: "Access Code",
    auth_demo_text: "Account: krakens@unifei.edu.br / 2019",
    auth_btn_demo: "Fill Demo",
    auth_submit_btn: "Enter Member Portal",

    // Member Portal
    portal_welcome_role: "Official Krakens UNIFEI Member",
    portal_tab_boats: "VESSELS (Engineering Fleet)",
    portal_tab_hub: "TEAM INFORMATION HUB",
    portal_logout_btn: "Log Out",

    // Boat Details
    boat_2025_title: "Boat 2025 - Active DUNA (Tugboat)",
    boat_2025_desc: "High-thrust competition tugboat built under the national DUNA (Desafio Universitário de Naut-Design) guidelines. Features high structural rigidity, an optimized hull for maximum bollard pull, and brushless powertrain with vector control.",
    boat_2026_title: "Boat 2026 - DUNA (Retired)",
    boat_2026_desc: "Official vessel representing team Krakens in the national DUNA 2026 event, crowned 1st Place in Maneuverability and 3rd Place in Time Trial.",
    boat_2027_title: "Boat 2027 - Underwater Robotics R&D (AUV)",
    boat_2027_desc: "Autonomous Underwater Vehicle under development for marine inspection and RoboSub international competitions. Equipped with 6 sealed magnetic thrusters, stereo underwater vision, and embedded neural networks.",

    // Pastas de Informações da Equipe (4 Official Folders)
    folder_1_tag: "Folder 1",
    folder_1_title: "Internal Bylaws",
    folder_1_desc: "Official document containing team rules and guidelines (slot prepared for PDF upload).",
    folder_1_btn: "Competition Rulebooks",
    folder_1_notice: "Structured space ready for direct insertion of the approved official bylaws PDF.",
    doc_regimento_status: "PDF • Reserved Space / Coming Soon",
    doc_btn_reserved: "Soon",

    folder_2_tag: "Folder 2",
    folder_2_title: "Electronics",
    folder_2_desc: "Technical files and documentation for the Electronics and Telemetry subsystem.",

    folder_3_tag: "Folder 3",
    folder_3_title: "Mechanics",
    folder_3_desc: "CAD projects, simulation files, and documentation for the Mechanical subsystem.",

    folder_4_tag: "Folder 4",
    folder_4_title: "Management & Marketing",
    folder_4_desc: "Administrative documents, links, and marketing files for the team.",
    folder_4_btn: "Useful Contacts",

    // Modais Específicos
    modal_reg_title: "Official Rulebooks",
    modal_reg_subtitle: "Select a competition rulebook to visit the official guidelines:",
    modal_reg_duna: "Official DUNA Rulebook",
    modal_reg_robosub: "Official RoboSub Rulebook",

    modal_contacts_title: "Internal Team Directory",
    modal_contacts_subtitle: "Krakens Leadership & Leads - Message directly on WhatsApp:",
    contact_btn_wpp: "Chat on WhatsApp",

    // Footer
    footer_desc: "Marine engineering and competition robotics team at the Federal University of Itajubá (UNIFEI).",
    footer_nav_title: "Navigation",
    footer_subs_title: "Subsystems",
    footer_rights: "© 2025 Krakens UNIFEI. All rights reserved. Built with marine engineering and dedication."
  }
};

// ==========================================================================
// 2. DADOS TÉCNICOS DOS SUBSISTEMAS (DETALHES DO MODAL)
// ==========================================================================
const subsystemDetails = {
  eletronica: {
    title: { pt: "ELETRÔNICA", en: "ELECTRONICS" },
    paragraphs: {
      pt: [
        "O subsistema de Eletrônica é o sistema nervoso e cerebral das embarcações e robôs submarinos da Krakens, responsável pela alimentação de potência, telemetria em tempo real, sensoriamento e controle autônomo.",
        "Desenvolvemos placas de circuito impresso (PCBs) customizadas no KiCad, gerenciamento inteligente de baterias (BMS), sistemas de rádio controle de longa distância, além da integração de microcontroladores de alto desempenho (STM32/ESP32) e computadores de bordo para missões subaquáticas."
      ],
      en: [
        "The Electronics subsystem serves as the nervous system and intelligence of Krakens vessels and subsea vehicles, responsible for power distribution, real-time telemetry, sensor telemetry, and autonomous actuation.",
        "We design custom printed circuit boards (PCBs) using KiCad, smart Battery Management Systems (BMS), long-range RF telemetry, and integrate high-performance microcontrollers (STM32/ESP32) alongside embedded computers for autonomous operations."
      ]
    },
  },

  mecanica: {
    title: { pt: "MECÂNICA", en: "MECHANICS" },
    paragraphs: {
      pt: [
        "A Mecânica é responsável por dar forma, hidrodinâmica e resistência às embarcações da equipe, superando as exigências severas de arrasto e tração do Desafio Universitário de Naut-Design (DUNA).",
        "Nosso trabalho engloba a modelagem paramétrica em CAD 3D (SolidWorks), simulações numéricas de dinâmica de fluidos computacional (CFD) para otimização do casco, cálculos estruturais (FEA), manufatura prática por laminação em materiais compostos (fibra de vidro e carbono) e projeto de propulsores com dutos Kort Nozzle de alto empuxo estático."
      ],
      en: [
        "The Mechanics subsystem designs, validates, and manufactures the physical hulls and marine propulsion systems, overcoming extreme resistance and bollard pull requirements in the DUNA competition.",
        "Our scope encompasses 3D parametric CAD modeling (SolidWorks), Computational Fluid Dynamics (CFD) simulations for hull drag reduction, Finite Element Analysis (FEA), hands-on composite fabrication (fiberglass & carbon fiber), and custom Kort Nozzle thruster assemblies."
      ]
    },
  },

  gestao: {
    title: { pt: "GESTÃO E MARKETING", en: "MANAGEMENT & MARKETING" },
    paragraphs: {
      pt: [
        "A área de Gestão e Marketing cuida da imagem institucional dos Krakens, captação de patrocínios, eventos e organização interna.",
        "Atuamos no planejamento estratégico através de metodologias ágeis (Scrum e Kanban), gerenciamento de orçamento e editais, logística completa para as viagens de competição, além da presença digital e fortalecimento da marca da equipe perante a indústria náutica e a comunidade acadêmica da UNIFEI."
      ],
      en: [
        "The Management and Marketing division oversees institutional relations, sponsorship acquisition, event coordination, and internal team organization.",
        "We handle strategic planning via agile methodologies (Scrum and Kanban), financial governance, logistics for national and international competitions, alongside digital branding to elevate Krakens across academia and the marine engineering industry."
      ]
    },
  }
};

// ==========================================================================
// 3. CONTATOS ÚTEIS DA EQUIPE (MODULAR JSON)
// ==========================================================================
const teamContactsData = [
  {
    name: "Lucas Fernandes",
    role: "Capitão Geral & Gestão Integrada",
    roleEn: "Team Captain & General Management",
    initial: "L",
    phone: "5535999990001"
  },
  {
    name: "Mariana Costa",
    role: "Diretora de Mecânica & Hidrodinâmica",
    roleEn: "Director of Mechanics & Hydrodynamics",
    initial: "M",
    phone: "5535999990002"
  },
  {
    name: "Rodrigo Almeida",
    role: "Diretor de Eletrônica & Sistemas Embarcados",
    roleEn: "Director of Electronics & Embedded Systems",
    initial: "R",
    phone: "5535999990003"
  },
  {
    name: "Beatriz Lima",
    role: "Diretora de Gestão & Marketing",
    roleEn: "Director of Management & Marketing",
    initial: "B",
    phone: "5535999990004"
  }
];

// ==========================================================================
// 4. ARRAY MODULAR DE APOIADORES & PARCEIROS
// ==========================================================================
const sponsorsData = [
  {
    name: "UNIFEI - Universidade Federal de Itajubá",
    tier: "Apoio Institucional",
    tierEn: "Institutional Support",
    category: "Universidade",
    url: "https://unifei.edu.br"
  },
  {
    name: "PRPPG & PROEX UNIFEI",
    tier: "Fomento Acadêmico",
    tierEn: "Academic Grant",
    category: "Pesquisa & Extensão",
    url: "https://unifei.edu.br"
  },
  {
    name: "Espaço Parceiro Náutico Ouro",
    tier: "Patrocinador Master",
    tierEn: "Master Sponsor",
    category: "Indústria Náutica",
    url: "#contato"
  },
  {
    name: "Espaço Parceiro Tecnologia & Software",
    tier: "Patrocinador Prata",
    tierEn: "Silver Sponsor",
    category: "Engenharia & Simulação",
    url: "#contato"
  }
];

// ==========================================================================
// 5. ESTADO DA APLICAÇÃO & INICIALIZAÇÃO
// ==========================================================================
let currentLang = localStorage.getItem("krakens_lang") || "pt";
let currentMemberUser = localStorage.getItem("krakens_auth_user") || null;

document.addEventListener("DOMContentLoaded", () => {
  initI18n();
  initStickyHeaderAndScrollspy();
  initSubsystemCards();
  initSubsystemModal();
  initTeamHubModals();
  renderSponsors();
  initContactForm();
  initAuthSystem();
  initPortalTabs();
  renderTeamContacts();

  // Verifica se já estava logado previamente
  if (currentMemberUser) {
    applyLoggedInState(currentMemberUser);
  }
});

// ==========================================================================
// 6. MOTOR DE INTERNACIONALIZAÇÃO (i18n)
// ==========================================================================
function initI18n() {
  const langDropdown = document.querySelector(".lang-dropdown");
  const langToggleBtn = document.getElementById("langToggleBtn");
  const langMenu = document.getElementById("langMenu");
  const langOptions = document.querySelectorAll(".lang-option");

  if (langToggleBtn && langDropdown) {
    langToggleBtn.addEventListener("click", (e) => {
      e.stopPropagation();
      langDropdown.classList.toggle("open");
    });

    document.addEventListener("click", () => {
      langDropdown.classList.remove("open");
    });
  }

  langOptions.forEach(option => {
    option.addEventListener("click", () => {
      const selectedLang = option.getAttribute("data-lang");
      if (selectedLang) {
        setLanguage(selectedLang);
        if (langDropdown) langDropdown.classList.remove("open");
      }
    });
  });

  applyTranslations(currentLang);
}

function setLanguage(lang) {
  if (!translations[lang]) return;
  currentLang = lang;
  localStorage.setItem("krakens_lang", lang);
  applyTranslations(lang);

  document.querySelectorAll(".lang-option").forEach(opt => {
    opt.classList.toggle("active", opt.getAttribute("data-lang") === lang);
  });

  const langLabel = document.getElementById("currentLangLabel");
  if (langLabel) {
    langLabel.textContent = lang === "pt" ? "PT-BR" : "EN-US";
  }

  // Se mudar para qualquer idioma diferente de pt, fecha modais de login e recolhe o portal
  if (lang !== "pt") {
    const authModal = document.getElementById("authModal");
    const portalSection = document.getElementById("portalSection");
    if (authModal) authModal.classList.remove("active");
    if (portalSection) portalSection.classList.remove("active");
    document.body.style.overflow = "";
  } else if (currentMemberUser) {
    // Se voltar para pt e o usuário estava logado, reativa a visualização
    const portalSection = document.getElementById("portalSection");
    if (portalSection) portalSection.classList.add("active");
  }

  renderSponsors();
  renderTeamContacts();
}

function applyTranslations(lang) {
  const dict = translations[lang];
  if (!dict) return;

  document.querySelectorAll("[data-i18n]").forEach(element => {
    const key = element.getAttribute("data-i18n");
    if (dict[key]) {
      element.textContent = dict[key];
    }
  });

  document.querySelectorAll("[data-i18n-placeholder]").forEach(element => {
    const key = element.getAttribute("data-i18n-placeholder");
    if (dict[key]) {
      element.setAttribute("placeholder", dict[key]);
    }
  });

  document.documentElement.lang = lang === "pt" ? "pt-BR" : "en";
}

// ==========================================================================
// 7. STICKY HEADER & SCROLLSPY (NAVEGAÇÃO ATIVA AUTOMÁTICA)
// ==========================================================================
function initStickyHeaderAndScrollspy() {
  const navbar = document.getElementById("navbar");
  const mobileToggle = document.getElementById("mobileToggle");
  const navMenu = document.getElementById("navMenu");
  const navLinks = document.querySelectorAll(".nav-menu .nav-link");
  const sections = document.querySelectorAll("section[id]");

  // Scroll event para sombra do header
  window.addEventListener("scroll", () => {
    if (window.scrollY > 40) {
      navbar.classList.add("scrolled");
    } else {
      navbar.classList.remove("scrolled");
    }
  });

  // Scrollspy: detecta seção visível e ativa o link correspondente
  const observerOptions = {
    root: null,
    rootMargin: "-20% 0px -60% 0px",
    threshold: 0
  };

  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        const currentId = entry.target.getAttribute("id");
        navLinks.forEach(link => {
          const href = link.getAttribute("href");
          if (href === `#${currentId}`) {
            navLinks.forEach(l => l.classList.remove("active"));
            link.classList.add("active");
          }
        });
      }
    });
  }, observerOptions);

  sections.forEach(section => observer.observe(section));

  // Mobile menu toggle
  if (mobileToggle && navMenu) {
    mobileToggle.addEventListener("click", () => {
      navMenu.classList.toggle("open");
    });

    navLinks.forEach(link => {
      link.addEventListener("click", () => {
        navMenu.classList.remove("open");
      });
    });
  }
}

// ==========================================================================
// 8. CARDS DE SUBSISTEMAS & OVERLAY (Fiel às Referências)
// ==========================================================================
function initSubsystemCards() {
  const cards = document.querySelectorAll(".subsystem-card");

  cards.forEach(card => {
    card.addEventListener("touchstart", () => {
      cards.forEach(c => { if (c !== card) c.classList.remove("touch-active"); });
      card.classList.toggle("touch-active");
    }, { passive: true });

    card.addEventListener("click", () => {
      const areaKey = card.getAttribute("data-area");
      if (areaKey && subsystemDetails[areaKey]) {
        openSubsystemModal(areaKey);
      }
    });
  });
}

// ==========================================================================
// 9. MODAL DE SUBSISTEMA (Fiel a Referencia_texto_site.jpeg)
// ==========================================================================
function initSubsystemModal() {
  const modal = document.getElementById("subsystemModal");
  const closeBtn = document.getElementById("modalCloseBtn");

  if (!modal) return;
  if (closeBtn) closeBtn.addEventListener("click", closeSubsystemModal);

  modal.addEventListener("click", (e) => {
    if (e.target === modal) closeSubsystemModal();
  });

  document.addEventListener("keydown", (e) => {
    if (e.key === "Escape" && modal.classList.contains("active")) {
      closeSubsystemModal();
    }
  });
}

function openSubsystemModal(areaKey) {
  const modal = document.getElementById("subsystemModal");
  const modalTitle = document.getElementById("modalTitle");
  const modalBody = document.getElementById("modalBody");
  const modalSpecs = document.getElementById("modalSpecs");

  const data = subsystemDetails[areaKey];
  if (!data || !modal) return;

  modalTitle.textContent = data.title[currentLang] || data.title.pt;

  modalBody.innerHTML = "";
  const paragraphs = data.paragraphs[currentLang] || data.paragraphs.pt;
  paragraphs.forEach(pText => {
    const p = document.createElement("p");
    p.textContent = pText;
    modalBody.appendChild(p);
  });

  modalSpecs.innerHTML = "";
  if (data.specs) {
    data.specs.forEach(spec => {
      const chip = document.createElement("span");
      chip.className = "modal-spec-chip";
      chip.innerHTML = `⚙️ ${spec}`;
      modalSpecs.appendChild(chip);
    });
  }

  modal.classList.add("active");
  document.body.style.overflow = "hidden";
}

function closeSubsystemModal() {
  const modal = document.getElementById("subsystemModal");
  if (modal) {
    modal.classList.remove("active");
    document.body.style.overflow = "";
  }
}

// ==========================================================================
// 10. MODAIS DA ABA "INFORMAÇÕES DA EQUIPE" (REGULAMENTOS & CONTATOS)
// ==========================================================================
function initTeamHubModals() {
  // Modal de Regulamentos (Pasta 1)
  const btnOpenReg = document.getElementById("btnOpenRegModal");
  const regModal = document.getElementById("regulationsModal");
  const regCloseBtn = document.getElementById("regCloseBtn");

  if (btnOpenReg && regModal) {
    btnOpenReg.addEventListener("click", () => {
      regModal.classList.add("active");
      document.body.style.overflow = "hidden";
    });
  }

  if (regCloseBtn && regModal) {
    regCloseBtn.addEventListener("click", () => {
      regModal.classList.remove("active");
      document.body.style.overflow = "";
    });
  }

  if (regModal) {
    regModal.addEventListener("click", (e) => {
      if (e.target === regModal) {
        regModal.classList.remove("active");
        document.body.style.overflow = "";
      }
    });
  }

  // Modal de Contatos Úteis (Pasta 4)
  const btnOpenContacts = document.getElementById("btnOpenContactsModal");
  const contactsModal = document.getElementById("contactsModal");
  const contactsCloseBtn = document.getElementById("contactsCloseBtn");

  if (btnOpenContacts && contactsModal) {
    btnOpenContacts.addEventListener("click", () => {
      contactsModal.classList.add("active");
      document.body.style.overflow = "hidden";
    });
  }

  if (contactsCloseBtn && contactsModal) {
    contactsCloseBtn.addEventListener("click", () => {
      contactsModal.classList.remove("active");
      document.body.style.overflow = "";
    });
  }

  if (contactsModal) {
    contactsModal.addEventListener("click", (e) => {
      if (e.target === contactsModal) {
        contactsModal.classList.remove("active");
        document.body.style.overflow = "";
      }
    });
  }

  // Tecla ESC para todos os modais
  document.addEventListener("keydown", (e) => {
    if (e.key === "Escape") {
      if (regModal && regModal.classList.contains("active")) {
        regModal.classList.remove("active");
        document.body.style.overflow = "";
      }
      if (contactsModal && contactsModal.classList.contains("active")) {
        contactsModal.classList.remove("active");
        document.body.style.overflow = "";
      }
    }
  });
}

function renderTeamContacts() {
  const container = document.getElementById("teamContactsGrid");
  if (!container) return;

  container.innerHTML = "";
  teamContactsData.forEach(member => {
    const card = document.createElement("div");
    card.className = "contact-member-card";

    const role = currentLang === "en" ? member.roleEn : member.role;
    const wppBtnText = currentLang === "en" ? "Chat on WhatsApp" : "Falar no WhatsApp";

    card.innerHTML = `
      <div class="contact-member-info">
        <div class="contact-member-avatar">${member.initial}</div>
        <div>
          <h4 class="contact-member-name">${member.name}</h4>
          <span class="contact-member-role">${role}</span>
        </div>
      </div>
      <a href="https://wa.me/${member.phone}" target="_blank" rel="noopener noreferrer" class="btn-contact-whatsapp">
        <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor"><path d="M12.04 2C6.58 2 2.13 6.45 2.13 11.91C2.13 13.66 2.59 15.36 3.45 16.86L2.05 22L7.3 20.62C8.75 21.41 10.38 21.83 12.04 21.83C17.5 21.83 21.95 17.38 21.95 11.92C21.95 9.27 20.92 6.78 19.05 4.91C17.18 3.03 14.69 2 12.04 2M12.05 3.67C14.25 3.67 16.31 4.53 17.87 6.09C19.42 7.65 20.28 9.72 20.28 11.92C20.28 16.46 16.58 20.15 12.04 20.15C10.56 20.15 9.11 19.76 7.85 19L7.55 18.83L4.43 19.65L5.26 16.61L5.06 16.29C4.24 15 3.8 13.47 3.8 11.91C3.81 7.37 7.5 3.67 12.05 3.67Z"/></svg>
        <span>${wppBtnText}</span>
      </a>
    `;

    container.appendChild(card);
  });
}

// ==========================================================================
// 11. RENDERIZAÇÃO MODULAR DE APOIADORES
// ==========================================================================
function renderSponsors() {
  const container = document.getElementById("sponsorsGrid");
  if (!container) return;

  container.innerHTML = "";
  sponsorsData.forEach(sponsor => {
    const card = document.createElement("a");
    card.href = sponsor.url;
    card.className = "sponsor-card";
    if (sponsor.url.startsWith("http")) {
      card.target = "_blank";
      card.rel = "noopener noreferrer";
    }

    const tier = currentLang === "en" ? sponsor.tierEn : sponsor.tier;

    card.innerHTML = `
      <span class="sponsor-tier-tag">${tier}</span>
      <h4 class="sponsor-name">${sponsor.name}</h4>
      <span style="font-size:0.8rem; color:var(--text-muted); margin-top:0.4rem;">${sponsor.category}</span>
    `;

    container.appendChild(card);
  });
}

// ==========================================================================
// 12. FORMULÁRIO DE CONTATO
// ==========================================================================
function initContactForm() {
  const form = document.getElementById("contactForm");
  if (!form) return;

  form.addEventListener("submit", (e) => {
    e.preventDefault();
    const btn = form.querySelector(".form-submit-btn");
    const originalText = btn.textContent;
    btn.textContent = currentLang === "pt" ? "Mensagem Enviada com Sucesso!" : "Message Sent Successfully!";
    btn.style.background = "#10B981";

    setTimeout(() => {
      form.reset();
      btn.textContent = originalText;
      btn.style.background = "";
    }, 3000);
  });
}

// ==========================================================================
// 13. SISTEMA DE AUTENTICAÇÃO (krakens@unifei.edu.br / 2019)
// ==========================================================================
function initAuthSystem() {
  const authModal = document.getElementById("authModal");
  const authCloseBtn = document.getElementById("authCloseBtn");
  const navMembersBtn = document.getElementById("navMembersBtn");
  const heroMembersBtn = document.getElementById("heroMembersBtn");
  const authForm = document.getElementById("authForm");
  const btnDemoAutofill = document.getElementById("btnDemoAutofill");
  const authErrorMsg = document.getElementById("authErrorMsg");
  const emailInput = document.getElementById("authEmail");
  const passInput = document.getElementById("authPass");

  const openAuth = () => {
    if (currentMemberUser) {
      const portal = document.getElementById("portalSection");
      if (portal) portal.scrollIntoView({ behavior: "smooth" });
      return;
    }
    if (authModal) {
      authModal.classList.add("active");
      document.body.style.overflow = "hidden";
      if (authErrorMsg) authErrorMsg.classList.remove("show");
    }
  };

  if (navMembersBtn) navMembersBtn.addEventListener("click", openAuth);
  if (heroMembersBtn) heroMembersBtn.addEventListener("click", openAuth);

  const closeAuth = () => {
    if (authModal) {
      authModal.classList.remove("active");
      document.body.style.overflow = "";
    }
  };

  if (authCloseBtn) authCloseBtn.addEventListener("click", closeAuth);

  if (authModal) {
    authModal.addEventListener("click", (e) => {
      if (e.target === authModal) closeAuth();
    });
  }

  // Preenchimento de Teste com as Credenciais Exatas Solicitadas
  if (btnDemoAutofill) {
    btnDemoAutofill.addEventListener("click", () => {
      if (emailInput) emailInput.value = "krakens@unifei.edu.br";
      if (passInput) passInput.value = "2019";
      if (authErrorMsg) authErrorMsg.classList.remove("show");
    });
  }

  // Submissão do Formulário de Login
  if (authForm) {
    authForm.addEventListener("submit", (e) => {
      e.preventDefault();
      const email = emailInput.value.trim().toLowerCase();
      const pass = passInput.value.trim();

      // Validação Exata Conforme Especificação
      if (email !== "krakens@unifei.edu.br" || pass !== "2019") {
        showAuthError(currentLang === "pt"
          ? "Credenciais inválidas. Use o e-mail krakens@unifei.edu.br e senha 2019."
          : "Invalid credentials. Use email krakens@unifei.edu.br and password 2019.");
        return;
      }

      // Login Bem-sucedido
      currentMemberUser = email;
      localStorage.setItem("krakens_auth_user", email);
      closeAuth();
      applyLoggedInState(email);

      const portal = document.getElementById("portalSection");
      if (portal) portal.scrollIntoView({ behavior: "smooth" });
    });
  }

  function showAuthError(msg) {
    if (authErrorMsg) {
      authErrorMsg.textContent = msg;
      authErrorMsg.classList.add("show");
    }
  }

  // Logout
  const logoutBtn = document.getElementById("portalLogoutBtn");
  if (logoutBtn) {
    logoutBtn.addEventListener("click", () => {
      currentMemberUser = null;
      localStorage.removeItem("krakens_auth_user");
      applyLoggedOutState();
    });
  }
}

function applyLoggedInState(email) {
  const portalSection = document.getElementById("portalSection");
  const navMembersBtn = document.getElementById("navMembersBtn");
  const portalUserEmail = document.getElementById("portalUserEmail");
  const portalUserAvatar = document.getElementById("portalUserAvatar");

  if (portalSection) portalSection.classList.add("active");

  if (portalUserEmail) {
    portalUserEmail.textContent = email;
  }

  if (portalUserAvatar) {
    portalUserAvatar.textContent = "K";
  }

  if (navMembersBtn) {
    navMembersBtn.innerHTML = `
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"/><circle cx="12" cy="7" r="4"/></svg>
      <span>${currentLang === "pt" ? "Portal do Membro" : "Member Portal"}</span>
    `;
    navMembersBtn.style.borderColor = "#10B981";
  }
}

function applyLoggedOutState() {
  const portalSection = document.getElementById("portalSection");
  const navMembersBtn = document.getElementById("navMembersBtn");

  if (portalSection) portalSection.classList.remove("active");

  if (navMembersBtn) {
    navMembersBtn.innerHTML = `
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><rect x="3" y="11" width="18" height="11" rx="2" ry="2"/><path d="M7 11V7a5 5 0 0 1 10 0v4"/></svg>
      <span>${currentLang === "pt" ? "Área de Membros" : "Members Area"}</span>
    `;
    navMembersBtn.style.borderColor = "";
  }

  window.scrollTo({ top: 0, behavior: "smooth" });
}

// ==========================================================================
// 14. ABAS DO PORTAL DO MEMBRO (BARCOS & PASTAS DA EQUIPE)
// ==========================================================================
function initPortalTabs() {
  const mainTabBtns = document.querySelectorAll(".portal-main-tab-btn");
  const mainTabPanels = document.querySelectorAll(".portal-tab-content");

  mainTabBtns.forEach(btn => {
    btn.addEventListener("click", () => {
      const targetId = btn.getAttribute("data-tab");
      mainTabBtns.forEach(b => b.classList.remove("active"));
      mainTabPanels.forEach(p => p.classList.remove("active"));

      btn.classList.add("active");
      const targetPanel = document.getElementById(targetId);
      if (targetPanel) targetPanel.classList.add("active");
    });
  });

  // Sub-abas de Barcos (2025, 2026, 2027)
  const boatTabBtns = document.querySelectorAll(".boat-tab-btn");
  const boatPanels = document.querySelectorAll(".boat-detail-panel");

  boatTabBtns.forEach(btn => {
    btn.addEventListener("click", () => {
      const targetBoat = btn.getAttribute("data-boat");
      boatTabBtns.forEach(b => b.classList.remove("active"));
      boatPanels.forEach(p => p.classList.remove("active"));

      btn.classList.add("active");
      const panel = document.getElementById(`boat-${targetBoat}`);
      if (panel) panel.classList.add("active");
    });
  });
}
