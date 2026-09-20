"use client"

import { useEffect, useState } from "react"
import { identite, navigation } from "@/lib/contenu"

type Theme = "sombre" | "clair"

export default function Nav() {
  const [ouvert, setOuvert] = useState(false)
  const [theme, setTheme] = useState<Theme>("sombre")

  // Le thème réel est posé par le script inline du layout, avant le premier
  // rendu. On se contente ici de le relire pour libeller le bouton.
  useEffect(() => {
    const actuel = document.documentElement.getAttribute("data-theme")
    if (actuel === "clair" || actuel === "sombre") setTheme(actuel)
  }, [])

  function basculer() {
    const suivant: Theme = theme === "sombre" ? "clair" : "sombre"
    setTheme(suivant)
    document.documentElement.setAttribute("data-theme", suivant)
    try {
      localStorage.setItem("theme", suivant)
    } catch {
      // Navigation privée ou stockage bloqué : le thème vaut pour la session.
    }
  }

  return (
    <nav className="nav">
      <div className="page nav-inner">
        <a href="#hero" className="nav-marque">
          {identite.nom}
        </a>

        <div style={{ display: "flex", alignItems: "center", gap: 16 }}>
          <ul className="nav-liens" data-ouvert={ouvert}>
            {navigation.map((lien) => (
              <li key={lien.href}>
                <a href={lien.href} onClick={() => setOuvert(false)}>
                  {lien.libelle}
                </a>
              </li>
            ))}
          </ul>

          <button
            type="button"
            className="nav-burger"
            aria-expanded={ouvert}
            aria-label={ouvert ? "Fermer le menu" : "Ouvrir le menu"}
            onClick={() => setOuvert((o) => !o)}
          >
            {ouvert ? "Fermer" : "Menu"}
          </button>

          <button
            type="button"
            className="nav-theme"
            onClick={basculer}
            aria-label={`Passer au thème ${theme === "sombre" ? "clair" : "sombre"}`}
            title={`Passer au thème ${theme === "sombre" ? "clair" : "sombre"}`}
          >
            {theme === "sombre" ? <IconeSoleil /> : <IconeLune />}
          </button>
        </div>
      </div>
    </nav>
  )
}

// Le thème sombre affiche le soleil (la bascule mène au clair), et inversement.
function IconeSoleil() {
  return (
    <svg
      viewBox="0 0 24 24"
      width="18"
      height="18"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.6"
      strokeLinecap="round"
      aria-hidden="true"
    >
      <circle cx="12" cy="12" r="4.2" />
      <path d="M12 2.4v2.4M12 19.2v2.4M4.2 4.2l1.7 1.7M18.1 18.1l1.7 1.7M2.4 12h2.4M19.2 12h2.4M4.2 19.8l1.7-1.7M18.1 5.9l1.7-1.7" />
    </svg>
  )
}

function IconeLune() {
  return (
    <svg
      viewBox="0 0 24 24"
      width="18"
      height="18"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.6"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
    >
      <path d="M20.6 14.2A8.6 8.6 0 0 1 9.8 3.4 8.6 8.6 0 1 0 20.6 14.2z" />
    </svg>
  )
}
