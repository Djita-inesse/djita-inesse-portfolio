import type { CSSProperties } from "react"

import Section from "./Section"
import { iconesConcepts, logosFichier } from "./IconesStack"
import { stack } from "@/lib/contenu"
import { logos } from "@/lib/logos"

/**
 * Chaque entrée porte sa marque, dans l'ordre : tracé officiel inliné, fichier
 * image, icône de concept dessinée, et à défaut la pastille à deux lettres.
 */
function Marque({ nom, code }: { nom: string; code: string }) {
  const logo = logos[nom]
  if (logo) {
    // Les deux teintes passent par des variables CSS : c'est la feuille de
    // style qui tranche selon le thème actif.
    const teintes = {
      "--marque": logo.marque,
      "--marque-sombre": logo.marqueSombre,
    } as CSSProperties

    return (
      <svg
        className="stack-logo"
        style={teintes}
        viewBox="0 0 24 24"
        fill="currentColor"
        aria-hidden="true"
      >
        <path d={logo.trace} />
      </svg>
    )
  }

  const fichier = logosFichier[nom]
  if (fichier) {
    return (
      <img
        className="stack-image"
        src={fichier.fichier}
        width={fichier.hauteur}
        height={fichier.hauteur}
        alt=""
        loading="lazy"
        decoding="async"
      />
    )
  }

  return iconesConcepts[nom] ?? (
    <span className="stack-code" aria-hidden="true">
      {code}
    </span>
  )
}

export default function Stack() {
  return (
    <Section id="stack" libelle="Stack">
      <div className="stack-grille">
        {stack.map((groupe) => (
          <div key={groupe.titre} className="stack-groupe">
            <h3>{groupe.titre}</h3>
            <ul>
              {groupe.entrees.map((entree) => (
                <li key={entree.nom}>
                  <Marque nom={entree.nom} code={entree.code} />
                  {entree.nom}
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </Section>
  )
}
