/**
 * Contenu éditorial du site.
 *
 * Tout le texte vit ici : les composants ne font que le mettre en forme.
 * Les valeurs `null` sont les éléments que la maquette laisse en attente —
 * chaque composant sait les masquer ou afficher un encadré légendé à la place.
 * Voir la section « Informations manquantes » de REFONTE.md.
 */

export type Lien = { libelle: string; href: string }

/** Visuel d'un projet. `src` à null => encadré légendé, comme dans la maquette. */
export type Visuel = { src: string | null; legende: string }

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

export type Depot = { nom: string; description: string; enAttente?: boolean }

export type GroupeStack = { titre: string; entrees: { code: string; nom: string }[] }

export type EntreeParcours = {
  intitule: string
  structure: string
  dates: string
}

// —————————————————————————————————————————————— Identité

export const identite = {
  nom: "Inesse Djita",
  role: "Développeuse full stack",
  accroche:
    "Je construis des interfaces React/Next.js sur des API back-end, et j'accompagne " +
    "les produits jusqu'à leur mise en production — y compris la publication sur " +
    "Google Play et l'App Store. Quatre ans de pratique, en agence puis à mon compte.",
  recherche: "Recherche un stage full stack — Master 1, Ynov Campus Nantes.",
  email: "inesdjita@gmail.com",

  /** MANQUANT — la maquette porte littéralement « [numéro à confirmer] ». */
  telephone: null as string | null,

  portrait: "/portrait.webp" as string | null,

  github: "https://github.com/Djita-inesse",

  /** MANQUANT — le site actuel avait href="#". */
  linkedin: null as string | null,

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
    visuel: { src: "/projet-2ln.webp", legende: "Les familles de diagnostic et leurs formules" },
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
    visuel: { src: "/projet-gbuy.webp", legende: "Page d'accueil et catalogue produits" },
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
          "Production automatisée des visuels stores en Python/Pillow, dont les captures " +
          "iPhone au format 6,9″ aux spécifications App Store Connect.",
      },
    ],
    technologies: ["Google Play", "App Store", "Product ownership", "Python"],
    visuel: { src: null, legende: "Fiches store — Google Play et App Store" },
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
    visuel: { src: "/projet-sites-clients.webp", legende: "Sinequanone Engineering, ADEPA Santé et Dayness Cosmetics" },
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
    // MANQUANT — la maquette porte « [projet API] ».
    { nom: "[projet API]", description: "API REST, base de données, authentification, tests Vitest", enAttente: true },
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
      { code: "SH", nom: "Shopify" },
    ],
  },
  {
    titre: "Qualité & outils",
    entrees: [
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
    intitule: "Développeuse web junior — stage professionnel (13 mois)",
    structure: "Franchise IT — Douala, Cameroun",
    dates: "janv. 2024 – févr. 2025",
  },
  {
    intitule: "Développeuse web",
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
    structure: "Douala",
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

// —————————————————————————————————————————————— Contact

export const contact = {
  titre: "Disponible pour un stage full stack à Nantes ou en Île-de-France.",
  bouton: "Me contacter",
}

export const annee = 2026
