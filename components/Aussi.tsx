import Section from "./Section"
import { aussi } from "@/lib/contenu"

export default function Aussi() {
  return (
    <Section id="aussi" libelle="Aussi">
      <ul className="aussi">
        {aussi.map((ligne) => (
          <li key={ligne}>{ligne}</li>
        ))}
      </ul>
    </Section>
  )
}
