import { identite } from "@/lib/contenu"

export default function Hero() {
  return (
    <header id="hero" className="page hero">
      <div>
        <div className="hero-trait" />
        <h1>{identite.nom}</h1>
        <p className="hero-role">{identite.role}</p>

        <p className="hero-accroche">{identite.accroche}</p>
        <p className="hero-recherche">{identite.recherche}</p>

        <div className="hero-liens">
          <a href={identite.github} target="_blank" rel="noreferrer">
            GitHub
          </a>
          {/* Masqué tant que l'URL LinkedIn n'est pas fournie. */}
          {identite.linkedin && (
            <a href={identite.linkedin} target="_blank" rel="noreferrer">
              LinkedIn
            </a>
          )}
          <a href={identite.cv} target="_blank" rel="noreferrer">
            Télécharger le CV (PDF)
          </a>
        </div>
      </div>

      <div className="hero-portrait">
        {identite.portrait ? (
          // eslint-disable-next-line @next/next/no-img-element
          <img src={identite.portrait} alt={`Portrait de ${identite.nom}`} />
        ) : (
          <span
            style={{
              fontFamily: "var(--sans)",
              fontSize: 13,
              color: "var(--texte-doux)",
            }}
          >
            Portrait
          </span>
        )}
      </div>
    </header>
  )
}
