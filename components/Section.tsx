/**
 * Gabarit de section : libellé en petites capitales à gauche, contenu à droite.
 * C'est la structure qui porte toute la page dans la maquette.
 */
export default function Section({
  id,
  libelle,
  children,
}: {
  id: string
  libelle: string
  children: React.ReactNode
}) {
  return (
    <section id={id} className="section" aria-labelledby={`${id}-libelle`}>
      <h2 id={`${id}-libelle`} className="section-libelle">
        {libelle}
      </h2>
      <div className="section-corps">{children}</div>
    </section>
  )
}
