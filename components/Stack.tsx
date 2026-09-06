import Section from "./Section"
import { stack } from "@/lib/contenu"

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
                  <span className="stack-code" aria-hidden="true">
                    {entree.code}
                  </span>
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
