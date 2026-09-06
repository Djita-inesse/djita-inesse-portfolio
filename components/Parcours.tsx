import Section from "./Section"
import { experience, formation, langues, type EntreeParcours } from "@/lib/contenu"

function Liste({ entrees }: { entrees: EntreeParcours[] }) {
  return (
    <div className="parcours-liste">
      {entrees.map((entree) => (
        <div key={entree.intitule} className="parcours-entree">
          <div>
            <div className="parcours-intitule">{entree.intitule}</div>
            <div className="parcours-structure">{entree.structure}</div>
          </div>
          <span className="parcours-dates">{entree.dates}</span>
        </div>
      ))}
    </div>
  )
}

export default function Parcours() {
  return (
    <Section id="parcours" libelle="Parcours">
      <h3 className="parcours-titre">Expérience</h3>
      <Liste entrees={experience} />

      <h3 className="parcours-titre">Formation</h3>
      <Liste entrees={formation} />

      <h3 className="parcours-titre">Langues et certifications</h3>
      <p className="parcours-langues">{langues}</p>
    </Section>
  )
}
