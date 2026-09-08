import type { Visuel as TypeVisuel } from "@/lib/contenu"

/**
 * Visuel de projet. Tant que l'image n'est pas fournie, on affiche l'encadré
 * légendé de la maquette plutôt qu'un trou — la légende décrit ce qu'on attend.
 *
 * Quand le visuel porte des liens, l'image devient cliquable : une zone par
 * lien, découpée en colonnes égales de gauche à droite. Le domaine apparaît au
 * survol et à la tabulation, et le clic ouvre le site.
 */
export default function Visuel({
  visuel,
  className,
}: {
  visuel: TypeVisuel
  className?: string
}) {
  if (!visuel.src) {
    return (
      <div className={`attente ${className ?? ""}`}>
        <span>{visuel.legende}</span>
      </div>
    )
  }

  const liens = visuel.liens ?? []

  return (
    <div className={`visuel ${className ?? ""}`}>
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img src={visuel.src} alt={visuel.legende} />

      {liens.length > 0 && (
        <div className="visuel-zones" style={{ "--zones": liens.length } as React.CSSProperties}>
          {liens.map((lien) => (
            <a
              key={lien.href}
              href={lien.href}
              target="_blank"
              rel="noreferrer"
              className="visuel-zone"
              aria-label={`Ouvrir ${lien.libelle} dans un nouvel onglet`}
            >
              <span className="visuel-lien">
                {lien.libelle}
                <span aria-hidden="true"> ↗</span>
              </span>
            </a>
          ))}
        </div>
      )}
    </div>
  )
}
