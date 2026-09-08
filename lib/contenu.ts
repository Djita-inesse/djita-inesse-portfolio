/**
 * Contenu éditorial du site.
 *
 * Tout le texte vit ici : les composants ne font que le mettre en forme.
 * Les valeurs `null` sont les éléments que la maquette laisse en attente —
 * chaque composant sait les masquer ou afficher un encadré légendé à la place.
 * Voir la section « Informations manquantes » de REFONTE.md.
 */

export type Lien = { libelle: string; href: string }

/**
 * Zone cliquable d'un visuel : `libelle` est le domaine affiché au survol.
 * Plusieurs zones découpent l'image en colonnes égales — utile pour les
 * captures qui montrent plusieurs sites côte à côte.
 */
export type LienVisuel = { href: string; libelle: string }

/** Visuel d'un projet. `src` à null => encadré légendé, comme dans la maquette. */
export type Visuel = { src: string | null; legende: string; liens?: LienVisuel[] }

/** Une puce de projet : soit une ligne simple, soit un intitulé + son détail. */
export type Puce = { intitule?: string; texte: string }

export type Projet = {
  numero: string
  titre: string
  periode: string
  chapeau: string
  puces: Puce[]
  technologies: string[]
  visuel: Visuel
}

export type Depot = { nom: string; description: string }

export type GroupeStack = { titre: string; entrees: { code: string; nom: string }[] }

export type EntreeParcours = {
  intitule: string
  structure: string
  dates: string
}

// —————————————————————————————————————————————— Identité

export const identite = {
  /** Forme courte : marque de navigation et pied de page. */
  nom: "Inesse Djita",
  /** Nom complet, tel qu'il figure sur le CV : titre du hero et titre de page. */
  nomComplet: "Inesse Carelle Djita Fokong",
  role: "Développeuse full stack",
  accroche:
    "Profil hybride technique et produit : je conçois des interfaces React/Next.js et " +
    "des sites WordPress sur mesure, et je pilote des applications mobiles jusqu'à leur " +
    "publication sur Google Play et l'App Store. Quatre ans de pratique, en agence puis " +
    "en indépendante.",
  recherche: "Recherche un stage full stack — Master 1, Ynov Campus Nantes.",
  email: "inesdjita@gmail.com",

  telephone: "+33 7 80 89 39 89" as string | null,

  portrait: "/portrait.webp" as string | null,

  github: "https://github.com/Djita-inesse",

  linkedin: "https://www.linkedin.com/in/inesse-carelle-djita" as string | null,

  cv: "/cv-inesse-djita.pdf",
}

export const navigation: Lien[] = [
  { libelle: "Projets", href: "#projets" },
  { libelle: "Code", href: "#code" },
  { libelle: "Stack", href: "#stack" },
  { libelle: "Parcours", href: "#parcours" },
  { libelle: "Contact", href: "#contact" },
]

// —————————————————————————————————————————————— Projets

export const projets: Projet[] = [
  {
    numero: "01",
    titre: "2LN Learning Institute",
    periode: "2026",
    chapeau: "Plateforme de formation RH — refonte complète, en production.",
    puces: [
      { texte: "Front Next.js 16 / React 19 / TypeScript / Tailwind adossé à une API Django REST." },
      { texte: "Cinq parcours de diagnostic en formulaires multi-étapes avec restitution des résultats." },
      { texte: "Accès conditionné au paiement : contrôle côté serveur, intégration WooCommerce et PHP sur mesure." },
      { texte: "Plus de 50 utilisateurs en production." },
    ],
    technologies: ["Next.js", "React", "TypeScript", "Tailwind", "Django REST", "WooCommerce", "PHP"],
    visuel: {
      src: "/projet-2ln.webp",
      legende: "Les familles de diagnostic et leurs formules",
      liens: [{ href: "https://2lnlearninginstitute.com", libelle: "2lnlearninginstitute.com" }],
    },
  },
  {
    numero: "02",
    titre: "G-Buy",
    periode: "2026",
    chapeau: "Plateforme d'achat groupé — gbuy-cm.com — projet personnel, en production.",
    puces: [
      { texte: "Conception du produit, développement et exploitation commerciale de bout en bout." },
      { texte: "Tunnel d'acquisition : campagnes Facebook, redirection WhatsApp, calendrier éditorial." },
      { texte: "Itérations de conversion pilotées par les retours réels des utilisateurs." },
    ],
    technologies: ["Développement", "e-commerce", "acquisition"],
    visuel: {
      src: "/projet-gbuy.webp",
      legende: "Page d'accueil et catalogue produits",
      liens: [{ href: "https://gbuy-cm.com", libelle: "gbuy-cm.com" }],
    },
  },
  {
    numero: "03",
    titre: "Publication d'applications mobiles",
    periode: "2024 – 2026",
    chapeau: "Missions de mise en production sur Google Play et l'App Store.",
    puces: [
      {
        intitule: "Sendo",
        texte:
          "Product Owner : cadrage fonctionnel, priorisation du backlog et suivi des " +
          "développements jusqu'à la publication sur les deux stores.",
      },
      {
        intitule: "LuvNote",
        texte:
          "Mise en conformité d'une application de rencontre avec les politiques Google Play : " +
          "classification du contenu, cohérence de marque, réécriture de la fiche store. " +
          "Publication débloquée.",
      },
      {
        intitule: "MadBeauty",
        texte:
          "Production automatisée des visuels stores, dont les captures iPhone au " +
          "format 6,9″ aux spécifications App Store Connect.",
      },
    ],
    technologies: ["Google Play", "App Store", "Product ownership", "Recette & tests"],
    visuel: { src: "/projet-stores.webp", legende: "Fiches store — Google Play et App Store" },
  },
  {
    numero: "04",
    titre: "Sites clients livrés",
    periode: "2025 – 2026",
    chapeau: "Intégration et mise en ligne de sites clients, du maquettage à la production.",
    puces: [
      {
        intitule: "Sinequanone Engineering — sinequanone-engineering.fr",
        texte:
          "Bureau d'études en planification. Une trentaine de pages sous WordPress/Elementor : " +
          "11 activités, 9 fiches de formation, FAQ, carrière, formulaires avec validation " +
          "sans rechargement, version anglaise.",
      },
      {
        intitule: "ADEPA Santé — adepasante.org",
        texte:
          "Association loi 1901 (France, Cameroun, Luxembourg). Parcours d'entrée par besoin, " +
          "ressources, agenda, dons, blog, conformité RGPD.",
      },
      {
        intitule: "Dayness Cosmetics — dayness-cosmetics.fr",
        texte:
          "Boutique Shopify : deux gammes, routines groupées, module de diagnostic, " +
          "programme d'affiliation, checkout multi-pays et boutique bilingue.",
      },
    ],
    technologies: ["WordPress", "Elementor", "Shopify", "PHP", "JavaScript", "SEO technique"],
    visuel: {
      src: "/projet-sites-clients.webp",
      legende: "Sinequanone Engineering, ADEPA Santé et Dayness Cosmetics",
      // La capture montre les trois sites côte à côte : une zone cliquable par tiers,
      // dans l'ordre de gauche à droite.
      liens: [
        { href: "https://sinequanone-engineering.fr", libelle: "sinequanone-engineering.fr" },
        { href: "https://adepasante.org", libelle: "adepasante.org" },
        { href: "https://dayness-cosmetics.fr", libelle: "dayness-cosmetics.fr" },
      ],
    },
  },
]

// —————————————————————————————————————————————— Code

export const code = {
  intitule: "github.com/Djita-inesse",
  chapeau:
    "Dépôts épinglés, chacun avec un README décrivant le projet, la stack et la " +
    "procédure de lancement.",
  depots: [
    { nom: "portfolio", description: "Ce site — Next.js, TypeScript, rendu statique" },
    { nom: "gbuy-platform", description: "Plateforme d'achat groupé — front et back" },
    { nom: "2ln-diagnostics", description: "Formulaires multi-étapes et restitution de résultats" },
  ] satisfies Depot[],
}

// —————————————————————————————————————————————— Stack

export const stack: GroupeStack[] = [
  {
    titre: "Front & mobile",
    entrees: [
      { code: "RE", nom: "React.js" },
      { code: "NX", nom: "Next.js (App Router)" },
      { code: "TS", nom: "TypeScript" },
      { code: "H5", nom: "HTML5" },
      { code: "C3", nom: "CSS3" },
      { code: "TW", nom: "Tailwind CSS" },
      { code: "FL", nom: "Flutter" },
      { code: "RD", nom: "Responsive design" },
    ],
  },
  {
    titre: "Back-end & données",
    entrees: [
      { code: "ND", nom: "Node.js" },
      { code: "SQ", nom: "SQL" },
      { code: "FB", nom: "Firebase (Firestore, Auth)" },
      { code: "AP", nom: "API REST" },
      { code: "PH", nom: "PHP" },
      { code: "WP", nom: "WordPress" },
      { code: "WC", nom: "WooCommerce" },
      { code: "SH", nom: "Shopify" },
    ],
  },
  {
    titre: "Design, qualité & outils",
    entrees: [
      { code: "FG", nom: "Figma" },
      { code: "IL", nom: "Adobe Illustrator" },
      { code: "GH", nom: "Git & GitHub" },
      { code: "VI", nom: "Vitest" },
      { code: "PW", nom: "Playwright" },
      { code: "AG", nom: "Agile / Scrum" },
      { code: "SE", nom: "SEO technique" },
      { code: "GP", nom: "Google Play" },
      { code: "AS", nom: "App Store" },
    ],
  },
]

// —————————————————————————————————————————————— Parcours

export const experience: EntreeParcours[] = [
  {
    intitule: "Développeuse web — freelance",
    structure: "À mon compte — Douala, Cameroun",
    dates: "depuis mars 2025",
  },
  {
    intitule: "Développeuse web junior",
    structure: "Franchise IT — Douala, Cameroun",
    dates: "janv. 2024 – févr. 2025",
  },
  {
    intitule: "Développeuse web — stage académique",
    structure: "JSC-Market — Douala, Cameroun",
    dates: "juin 2022 – févr. 2023",
  },
]

export const formation: EntreeParcours[] = [
  {
    intitule: "Master 1 — Développement Full Stack",
    structure: "Ynov Campus — Nantes",
    dates: "depuis sept. 2026",
  },
  {
    intitule: "Master 1 — Systèmes d'information & Génie logiciel",
    structure: "Institut Universitaire de la Côte — Douala",
    dates: "2025 – juin 2026",
  },
  {
    intitule: "Licence professionnelle — Génie logiciel",
    structure: "Institut Universitaire de la Côte — Douala",
    dates: "2024 – 2025",
  },
  {
    intitule: "BTS — Développement d'applications web",
    structure: "Institut Universitaire de la Côte — Douala",
    dates: "sept. 2021 – mai 2023",
  },
]

export const langues =
  "Français — langue de travail, DALF C1 · Anglais — professionnel · " +
  "Certification Coursera : UX, Figma et agilité"

// —————————————————————————————————————————————— Aussi

export const aussi: string[] = [
  "SFT Construction CM — site vitrine et portfolio en React, galerie filtrable de douze projets.",
  "PEMBO — refonte du site e-commerce d'un distributeur de fournitures (Douala).",
  "TALENTIIS — cahier des charges d'une plateforme LMS : cinq rôles, parcours de paiement, planning.",
  "Maquettage et prototypage sous Figma — conception des interfaces en amont du développement, sur mes projets clients.",
]

// —————————————————————————————————————————————— Graphic designer

/**
 * Une maquette Figma présentée en vignette.
 *
 * `apercu` est la planche exportée en WebP, `lien` la destination du bouton
 * « Consulter » : le fichier Figma, qui doit rester partagé en « Toute personne
 * disposant du lien » pour être consultable par un recruteur.
 */
export type Maquette = {
  nom: string
  description: string
  apercu: string
  lien: string
}

export const design = {
  chapeau:
    "Maquettes et prototypes interactifs conçus sous Figma, en amont du " +
    "développement — architecture des écrans, système de composants et parcours " +
    "complets.",
  bouton: "Consulter",
}

export const maquettes: Maquette[] = [
  {
    nom: "GECAF",
    description:
      "Application mobile de mise en relation professionnelle : connexion, fil " +
      "d'actualités, forum, messagerie, espace entreprise, appels d'offres et " +
      "paiement de l'adhésion.",
    apercu: "/maquette-gecaf.webp",
    lien: "https://www.figma.com/design/JzePxN8ECkdPf52zxhpqTp/GECAF_maquette",
  },
  {
    nom: "SmartBuild",
    description:
      "Plateforme BTP à trois rôles — fournisseur, acheteur et transporteur — " +
      "avec ses parcours d'inscription, son suivi de commandes et sa messagerie.",
    apercu: "/maquette-smartbuild.webp",
    lien: "https://www.figma.com/design/jC6echsHspdD0bszyUnbuA/smartbuild",
  },
  {
    nom: "Diveez",
    description:
      "Back-office de gestion : tableau de bord, groupes, demandes, fiches " +
      "clients, paiements et paramètres.",
    apercu: "/maquette-diveez.webp",
    lien: "https://www.figma.com/design/8pous9ZnUbd4cXd5sujyCW/diveez",
  },
]

// —————————————————————————————————————————————— Contact

export const contact = {
  titre: "Disponible pour un stage full stack à Nantes ou en Île-de-France.",
  bouton: "Me contacter",
}

export const annee = 2026
