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
          >
            Thème
          </button>
        </div>
      </div>
    </nav>
  )
}
