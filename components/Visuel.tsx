import type { Visuel as TypeVisuel } from "@/lib/contenu"

/**
 * Visuel de projet. Tant que l'image n'est pas fournie, on affiche l'encadré
 * légendé de la maquette plutôt qu'un trou — la légende décrit ce qu'on attend.
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

  return (
    <div className={className}>
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img src={visuel.src} alt={visuel.legende} />
    </div>
  )
}
