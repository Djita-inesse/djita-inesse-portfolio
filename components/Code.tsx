import Section from "./Section"
import { code } from "@/lib/contenu"

export default function Code() {
  return (
    <Section id="code" libelle="Code">
      <a
        href={`https://${code.intitule}`}
        target="_blank"
        rel="noreferrer"
        className="code-intitule"
      >
        {code.intitule}
      </a>

      <p>{code.chapeau}</p>

      <div className="depots">
        {code.depots.map((depot) => (
          <div key={depot.nom} className="depot">
            <span className="depot-nom" data-attente={depot.enAttente ?? false}>
              {depot.nom}
            </span>
            <span className="depot-description">{depot.description}</span>
          </div>
        ))}
      </div>
    </Section>
  )
}
