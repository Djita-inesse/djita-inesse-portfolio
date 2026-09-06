import Section from "./Section"
import Visuel from "./Visuel"
import { projets } from "@/lib/contenu"

export default function Projets() {
  return (
    <Section id="projets" libelle="Projets">
      {projets.map((projet) => (
        <article key={projet.numero} className="projet">
          <div className="projet-numero">{projet.numero}</div>

          <div className="projet-entete">
            <h3>{projet.titre}</h3>
            <span className="projet-periode">{projet.periode}</span>
          </div>

          <p className="projet-chapeau">{projet.chapeau}</p>

          <ul className="puces">
            {projet.puces.map((puce, i) => (
              <li key={i}>
                {puce.intitule && <span className="puce-intitule">{puce.intitule}</span>}
                {puce.texte}
              </li>
            ))}
          </ul>

          <p className="technos">{projet.technologies.join(" · ")}</p>

          <Visuel visuel={projet.visuel} className="projet-visuel" />
        </article>
      ))}
    </Section>
  )
}
