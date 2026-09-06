# Refonte portfolio — spécification d'après maquettes

Source : `Portfolio — Desktop 1440 (Sombre).pdf` et `(Clair).pdf`
Format : 1440 × 6042 px, page unique, deux thèmes.

## Direction artistique

Éditoriale / typographique. Aucune carte, aucune ombre, aucun dégradé.
Structure en deux colonnes : libellé de section en petites capitales espacées
dans la colonne de gauche (~250 px), contenu dans la colonne de droite (~535 px
de marge gauche). Séparateurs : filets 1 px pleine largeur entre sections.

C'est une rupture totale avec le site actuel (fond bleu nuit `#0a0f1c`, accents
turquoise, cartes, animations Framer Motion).

### Palette

| Rôle | Sombre | Clair |
|---|---|---|
| Fond | `#14110f` | `#faf9f7` |
| Surface (encadrés image, portrait) | `#1e1a18` | `#efebe4` |
| Texte principal | `#f2eee8` | `#1a1a1a` |
| Texte secondaire | `#a39c93` | `#5a544e` |
| Bordures / filets | `#332e29` | `#dcd6ce` |
| Accent | `#d9663f` | `#b4482e` |

L'accent change entre les deux thèmes pour tenir le contraste.

### Typographie

Polices vectorisées dans le PDF (non extractibles). Équivalents Google Fonts :

- **Sans** (nav, titres, libellés, tags) : Inter — ou Helvetica Neue en système
- **Serif** (corps de texte, sous-titres en italique) : Source Serif 4

Usages :
- `h1` « Inesse Djita » : sans, ~64 px, bold
- Sous-titre « Développeuse full stack » : sans, ~26 px, accent
- Corps : serif, ~18 px, interligne large
- Sous-titres projet : serif italique, secondaire
- Libellés de section (`PROJETS`, `CODE`, `STACK`, `PARCOURS`, `AUSSI`, `CONTACT`) :
  sans, ~11 px, majuscules, letter-spacing ~0.12em, couleur secondaire
- Numéros de projet (`01`…`04`) : sans, accent
- Listes de technos : sans, ~13 px, secondaire, séparées par `·`
- Puces : petits carrés pleins couleur accent (pas de rond)

## Structure

### Navigation
`Inesse Djita` à gauche · `Projets` `Code` `Stack` `Parcours` `Contact` à droite
· bouton `Thème` encadré en accent (bascule sombre/clair).

### Hero
- Titre `Inesse Djita`, précédé d'un court trait accent
- Sous-titre `Développeuse full stack`
- Paragraphe : « Je construis des interfaces React/Next.js sur des API back-end,
  et j'accompagne les produits jusqu'à leur mise en production — y compris la
  publication sur Google Play et l'App Store. Quatre ans de pratique, en agence
  puis à mon compte. »
- Ligne : « Recherche un stage full stack — Master 1, Ynov Campus Nantes. »
- Liens accent : `GitHub` `LinkedIn` `Télécharger le CV (PDF)`
- À droite : encadré portrait (~360 × 445)

### PROJETS

**01 — 2LN Learning Institute** — 2026
*Plateforme de formation RH — refonte complète, en production.*
- Front Next.js 16 / React 19 / TypeScript / Tailwind adossé à une API Django REST.
- Cinq parcours de diagnostic en formulaires multi-étapes avec restitution des résultats.
- Accès conditionné au paiement : contrôle côté serveur, intégration WooCommerce et PHP sur mesure.
- Plus de 50 utilisateurs en production.

`Next.js · React · TypeScript · Tailwind · Django REST · WooCommerce · PHP`
Image : *Parcours de diagnostic — écran de restitution*

**02 — G-Buy** — 2026
*Plateforme d'achat groupé — gbuy-cm.com — projet personnel, en production.*
- Conception du produit, développement et exploitation commerciale de bout en bout.
- Tunnel d'acquisition : campagnes Facebook, redirection WhatsApp, calendrier éditorial.
- Itérations de conversion pilotées par les retours réels des utilisateurs.

`Développement · e-commerce · acquisition`
Image : *Page d'accueil et tunnel de commande*

**03 — Publication d'applications mobiles** — 2024–2026
*Missions de mise en production sur Google Play et l'App Store.*
- **Sendo** — Product Owner : cadrage fonctionnel, priorisation du backlog et suivi
  des développements jusqu'à la publication sur les deux stores.
- **LuvNote** — Mise en conformité d'une application de rencontre avec les politiques
  Google Play : classification du contenu, cohérence de marque, réécriture de la fiche
  store. Publication débloquée.
- **MadBeauty** — Production automatisée des visuels stores en Python/Pillow, dont les
  captures iPhone au format 6,9″ aux spécifications App Store Connect.

`Google Play · App Store · Product ownership · Python`
Image : *Fiches store — Google Play et App Store*

**04 — Sites clients livrés** — 2025–2026
*Intégration et mise en ligne de sites clients, du maquettage à la production.*
- **Sinequanone Engineering** — sinequanone-engineering.fr — Bureau d'études en
  planification. Une trentaine de pages sous WordPress/Elementor : 11 activités,
  9 fiches de formation, FAQ, carrière, formulaires avec validation sans rechargement,
  version anglaise.
- **ADEPA Santé** — adepasante.org — Association loi 1901 (France, Cameroun,
  Luxembourg). Parcours d'entrée par besoin, ressources, agenda, dons, blog,
  conformité RGPD.
- **Dayness Cosmetics** — dayness-cosmetics.fr — Boutique Shopify : deux gammes,
  routines groupées, module de diagnostic, programme d'affiliation, checkout
  multi-pays et boutique bilingue.

`WordPress · Elementor · Shopify · PHP · JavaScript · SEO technique`
Image : *Trois sites livrés — vue d'ensemble*

### CODE
Titre accent : `github.com/Djita-inesse`
« Dépôts épinglés, chacun avec un README décrivant le projet, la stack et la
procédure de lancement. »

Tableau deux colonnes, lignes séparées par des filets :

| Dépôt | Description |
|---|---|
| `portfolio` | Ce site — Next.js, TypeScript, rendu statique |
| `gbuy-platform` | Plateforme d'achat groupé — front et back |
| `2ln-diagnostics` | Formulaires multi-étapes et restitution de résultats |
| `[projet API]` | API REST, base de données, authentification, tests Vitest |

### STACK
Trois colonnes, chaque entrée précédée d'un badge carré à monogramme deux lettres.

**Front & mobile** : React.js · Next.js (App Router) · TypeScript · HTML5 · CSS3 ·
Tailwind CSS · Flutter · Responsive design

**Back-end & données** : Node.js · SQL · Firebase (Firestore, Auth) · API REST ·
PHP · WordPress · Shopify

**Qualité & outils** : Git & GitHub · Vitest · Playwright · Agile / Scrum ·
SEO technique · Google Play · App Store

### PARCOURS

**Expérience**

| Poste | Structure | Dates |
|---|---|---|
| Développeuse web — freelance | À mon compte — Douala, Cameroun | depuis mars 2025 |
| Développeuse web junior — stage professionnel (13 mois) | Franchise IT — Douala, Cameroun | janv. 2024 – févr. 2025 |
| Développeuse web | JSC-Market — Douala, Cameroun | juin 2022 – févr. 2023 |

**Formation**

| Diplôme | Établissement | Dates |
|---|---|---|
| Master 1 — Développement Full Stack | Ynov Campus — Nantes | depuis sept. 2026 |
| Master 1 — Systèmes d'information & Génie logiciel | Douala | 2025 – juin 2026 |
| Licence professionnelle — Génie logiciel | Institut Universitaire de la Côte — Douala | 2024 – 2025 |
| BTS — Développement d'applications web | Institut Universitaire de la Côte — Douala | sept. 2021 – mai 2023 |

**Langues et certifications**
Français — langue de travail, DALF C1 · Anglais — professionnel ·
Certification Coursera : UX, Figma et agilité

### AUSSI
Liste séparée par des filets :
- SFT Construction CM — site vitrine et portfolio en React, galerie filtrable de douze projets.
- PEMBO — refonte du site e-commerce d'un distributeur de fournitures (Douala).
- TALENTIIS — cahier des charges d'une plateforme LMS : cinq rôles, parcours de paiement, planning.
- Maquettage et prototypage sous Figma — conception des interfaces en amont du développement, sur mes projets clients.

### CONTACT
Titre : « Disponible pour un stage full stack à Nantes ou en Île-de-France. »
`inesdjita@gmail.com`
`[numéro à confirmer]`
Bouton plein accent : `Me contacter`

### Pied de page
`© 2026 Inesse Djita` — à droite : `GitHub` `LinkedIn` `CV`

## Informations manquantes

### Résolu

| Élément | Source |
|---|---|
| Portrait | `src/assets/profil.jpg`, recadré → `public/portrait.webp` |
| Visuel 01 — 2LN | capture de `2lnlearninginstitute.com/diagnostic` (familles de diagnostic et formules) |
| Visuel 02 — G-Buy | capture de `gbuy-cm.com` (accueil et catalogue produits) |
| Visuel 04 — Sites clients | triptyque composé des trois sites en ligne |

Toutes les captures sont prises sur les sites en production, converties en WebP
et dimensionnées pour l'encadré (1750 px de large).

Note : `src/assets/3.png` montre le 2LN **d'avant** la refonte. Ne pas l'utiliser
pour illustrer un projet décrit comme « refonte complète ».

### En attente

1. **Visuel 03 — fiches store** (Sendo, LuvNote, MadBeauty). Introuvable sans les
   identifiants des applications sur Google Play / App Store.
2. **Numéro de téléphone** — la maquette porte `[numéro à confirmer]`.
3. **URL LinkedIn** — le lien reste masqué tant qu'elle n'est pas fournie.
4. **Noms des dépôts GitHub.** Le compte `github.com/Djita-inesse` existe et
   compte 17 dépôts publics, mais **aucun des quatre dépôts nommés dans la
   maquette n'y figure** :

   | Maquette | État réel |
   |---|---|
   | `portfolio` | absent — le plus proche est `djita-inesse-portfolio` |
   | `gbuy-platform` | absent |
   | `2ln-diagnostics` | absent |
   | `[projet API]` | à nommer, et aucun dépôt d'API identifiable |

   La section « Code » promet « des dépôts épinglés, chacun avec un README » et
   renvoie vers le compte : en l'état, un recruteur qui clique n'y trouve rien.
   Soit les dépôts sont créés ou renommés, soit la section liste les dépôts qui
   existent réellement (`code_facile`, `gestion-reunion_web`,
   `notation_techniciens`, `PEMbo_WebSite`…).

## Écarts avec le site actuel

La refonte est un repositionnement, pas un habillage :

- Métier : « Développeuse WordPress & Graphiste » → « Développeuse full stack »
- Cible : clients à Douala → recruteurs de stage à Nantes / Île-de-France
- Ancienneté : « 3+ années d'expérience » → « Quatre ans de pratique »
- Les projets actuels (Belgium Wine Store, SmartBuild, DIVIZ, GECAF, FichTech,
  Code Facile, Gestion Réunion) ne figurent plus, sauf SFT rétrogradé dans « AUSSI »
- La galerie de 10 flyers et la section graphisme disparaissent entièrement
- Les compteurs (+20 projets, +25 clients) disparaissent
- Le formulaire EmailJS est remplacé par un simple bouton `Me contacter`

Conséquence : ~38 Mo d'images (flyers, projets abandonnés) deviennent inutiles.
