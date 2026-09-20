import type { ReactElement } from "react"

/**
 * Compléments aux marques de lib/logos.ts, pour les entrées que simple-icons
 * ne couvre pas.
 *
 * 1. `logosFichier` — deux marques servies en image depuis public/logos :
 *    - Adobe Illustrator : icône Icons8 (licence gratuite, d'où le lien
 *      d'attribution vers icons8.com dans le pied de page). PNG et non SVG,
 *      le format vectoriel étant réservé aux formules payantes ; 512 px pour
 *      un affichage à 20 px, la définition reste large même en haute densité.
 *    - Playwright : logo officiel de playwright.dev (projet MIT), absent
 *      d'Icons8. Multicolore, donc servi tel quel plutôt qu'inliné.
 *
 * 2. `iconesConcepts` — quatre entrées qui ne sont pas des produits mais des
 *    savoir-faire : aucune marque n'existe, elles sont donc dessinées au trait,
 *    dans le style des icônes de thème de la nav (grille 24, trait 1.6,
 *    extrémités arrondies) et suivent la couleur du texte.
 */

export const logosFichier: Record<string, { fichier: string; hauteur: number }> = {
  "Adobe Illustrator": { fichier: "/logos/adobe-illustrator.png", hauteur: 512 },
  Playwright: { fichier: "/logos/playwright.svg", hauteur: 400 },
}

function Trait({ children }: { children: ReactElement | ReactElement[] }) {
  return (
    <svg
      className="stack-concept"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.6"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
    >
      {children}
    </svg>
  )
}

export const iconesConcepts: Record<string, ReactElement> = {
  // Un écran large et un téléphone : la même interface à deux tailles.
  "Responsive design": (
    <Trait>
      <rect x="1.6" y="4" width="13" height="9.5" rx="1.2" />
      <path d="M6.2 17.6h4.6M8.5 13.5v4.1" />
      <rect x="16.4" y="9.4" width="6" height="11.6" rx="1.2" />
    </Trait>
  ),
  // Le cylindre, représentation usuelle d'une base de données.
  SQL: (
    <Trait>
      <ellipse cx="12" cy="5.8" rx="7" ry="2.9" />
      <path d="M5 5.8v12.4c0 1.6 3.13 2.9 7 2.9s7-1.3 7-2.9V5.8" />
      <path d="M5 12c0 1.6 3.13 2.9 7 2.9s7-1.3 7-2.9" />
    </Trait>
  ),
  // La boucle d'itération, un sprint qui recommence.
  "Agile / Scrum": (
    <Trait>
      <path d="M20.2 12a8.2 8.2 0 1 1-2.4-5.8" />
      <path d="M20.6 3.2v5.2h-5.2" />
    </Trait>
  ),
  // La loupe et des barres qui montent : l'audit et le gain de position.
  "SEO technique": (
    <Trait>
      <circle cx="10.4" cy="10.4" r="6.9" />
      <path d="M15.4 15.4 20.8 20.8" />
      <path d="M8 12.4v-2.1M10.4 12.4V8.2M12.8 12.4V6.4" />
    </Trait>
  ),
}
