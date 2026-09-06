# Portfolio — Inesse Djita

Site personnel : présentation, projets, stack et parcours.
Page unique, deux thèmes (sombre par défaut, clair), rendu statique.

## Stack

Next.js 15 (App Router) · React 19 · TypeScript · CSS natif (variables custom)

Pas de framework CSS : la maquette est typographique et tient dans un seul
fichier de jetons, [`app/globals.css`](app/globals.css).

## Lancer

```bash
npm install
npm run dev        # http://localhost:3000
```

## Autres commandes

```bash
npm run build      # build + export statique dans out/
npm run typecheck  # tsc --noEmit
```

`next.config.ts` fixe `output: "export"` : `npm run build` produit un dossier
`out/` déployable tel quel sur n'importe quel hébergeur statique.

## Modifier le contenu

Tout le texte du site vit dans [`lib/contenu.ts`](lib/contenu.ts). Les composants
ne font que le mettre en forme — pour changer un projet, une date ou un intitulé,
c'est le seul fichier à toucher.

Les valeurs à `null` sont les éléments encore attendus (portrait, captures de
projet, téléphone, LinkedIn). Chaque composant sait les masquer ou afficher
l'encadré légendé prévu par la maquette. Voir [`REFONTE.md`](REFONTE.md) pour la
liste complète et la spécification d'origine.

## Structure

```
app/        layout, page, jetons de design
components/ un composant par section
lib/        contenu éditorial
public/     CV et fichiers servis tels quels
src/assets/ visuels de l'ancien site, conservés hors build
```
