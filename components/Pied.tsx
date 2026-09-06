import { annee, identite } from "@/lib/contenu"

export default function Pied() {
  return (
    <footer className="page pied">
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
    </footer>
  )
}
