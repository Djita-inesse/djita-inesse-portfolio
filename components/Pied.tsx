import { annee, identite } from "@/lib/contenu"

export default function Pied() {
  return (
    <footer className="page pied">
      <div className="pied-ligne">
        <span>
          © {annee} {identite.nom}
        </span>
        <div className="pied-liens">
          <a href={identite.github} target="_blank" rel="noreferrer">
            GitHub
          </a>
          {identite.linkedin && (
            <a href={identite.linkedin} target="_blank" rel="noreferrer">
              LinkedIn
            </a>
          )}
          <a href={identite.cv} target="_blank" rel="noreferrer">
            CV
          </a>
        </div>
      </div>

      {/* Mention exigée par la licence gratuite d'Icons8, dont provient
          l'icône Illustrator de la section Stack. */}
      <p className="pied-credit">
        Icône Adobe Illustrator par{" "}
        <a href="https://icons8.com" target="_blank" rel="noreferrer">
          Icons8
        </a>
        .
      </p>
    </footer>
  )
}
