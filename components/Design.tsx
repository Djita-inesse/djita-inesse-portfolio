import Section from "./Section"
import { design, maquettes } from "@/lib/contenu"

/**
 * Grille de vignettes des maquettes Figma. Chaque carte porte son aperçu, le
 * nom du projet, ce qu'il couvre et un bouton « Consulter ».
 */
export default function Design() {
  return (
    <Section id="design" libelle="Graphic designer">
      <p className="design-chapeau">{design.chapeau}</p>

      <ul className="maquettes">
        {maquettes.map((maquette) => (
          <li key={maquette.nom} className="maquette">
            <div className="maquette-apercu">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img src={maquette.apercu} alt={`Planche de maquettes ${maquette.nom}`} />
            </div>

            <h3 className="maquette-nom">{maquette.nom}</h3>
            <p className="maquette-description">{maquette.description}</p>

            <a
              href={maquette.lien}
              target="_blank"
              rel="noreferrer"
              className="maquette-bouton"
              aria-label={`Consulter les maquettes ${maquette.nom}`}
            >
              {design.bouton}
              <span aria-hidden="true"> ↗</span>
            </a>
          </li>
        ))}
      </ul>
    </Section>
  )
}
