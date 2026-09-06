import type { Metadata } from "next"
import { Inter, Source_Serif_4 } from "next/font/google"
import "./globals.css"

const inter = Inter({
  subsets: ["latin"],
  variable: "--police-sans",
  display: "swap",
})

const serif = Source_Serif_4({
  subsets: ["latin"],
  variable: "--police-serif",
  display: "swap",
  style: ["normal", "italic"],
})

export const metadata: Metadata = {
  title: "Inesse Carelle Djita Fokong — Développeuse full stack",
  description:
    "Interfaces React/Next.js sur API back-end, jusqu'à la mise en production sur " +
    "Google Play et l'App Store. Recherche un stage full stack à Nantes ou en Île-de-France.",
}

/**
 * Applique le thème avant le premier rendu, pour éviter le flash de couleur.
 * Le thème sombre est celui par défaut de la maquette ; on ne bascule en clair
 * que sur choix explicite ou préférence système.
 */
const scriptTheme = `
(function () {
  try {
    var t = localStorage.getItem("theme");
    if (!t) t = window.matchMedia("(prefers-color-scheme: light)").matches ? "clair" : "sombre";
    document.documentElement.setAttribute("data-theme", t);
  } catch (e) {
    document.documentElement.setAttribute("data-theme", "sombre");
  }
})();
`

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    // Les variables de police sont portées par <html> : globals.css les
    // consomme depuis :root, qui est cet élément.
    <html
      lang="fr"
      data-theme="sombre"
      className={`${inter.variable} ${serif.variable}`}
      suppressHydrationWarning
    >
      <head>
        <script dangerouslySetInnerHTML={{ __html: scriptTheme }} />
      </head>
      <body>{children}</body>
    </html>
  )
}
