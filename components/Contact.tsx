import Section from "./Section"
import { contact, identite } from "@/lib/contenu"

export default function Contact() {
  return (
    <Section id="contact" libelle="Contact">
      <h3 className="contact-titre">{contact.titre}</h3>

      <p className="contact-ligne">
        <a href={`mailto:${identite.email}`}>{identite.email}</a>
      </p>

      {identite.telephone ? (
        <p className="contact-ligne">
          <a href={`tel:${identite.telephone.replace(/\s/g, "")}`}>{identite.telephone}</a>
        </p>
      ) : (
        // Signalé tant que le numéro n'est pas confirmé, pour ne pas l'oublier.
        <p className="contact-ligne contact-attente">[numéro à confirmer]</p>
      )}

      <a className="contact-bouton" href={`mailto:${identite.email}`}>
        {contact.bouton}
      </a>
    </Section>
  )
}
