import Section from "./Section"
import { contact, identite } from "@/lib/contenu"

export default function Contact() {
  return (
    <Section id="contact" libelle="Contact">
      <h3 className="contact-titre">{contact.titre}</h3>

      <p className="contact-ligne">
        <a href={`mailto:${identite.email}`}>{identite.email}</a>
      </p>

      {/* La maquette laisse le numéro en attente ; on garde la ligne visible
          pour qu'elle ne soit pas oubliée, mais signalée comme telle. */}
      <p className="contact-ligne contact-attente">
        {identite.telephone ?? "[numéro à confirmer]"}
      </p>

      <a className="contact-bouton" href={`mailto:${identite.email}`}>
        {contact.bouton}
      </a>
    </Section>
  )
}
