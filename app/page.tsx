import Nav from "@/components/Nav"
import Hero from "@/components/Hero"
import Projets from "@/components/Projets"
import Code from "@/components/Code"
import Stack from "@/components/Stack"
import Parcours from "@/components/Parcours"
import Aussi from "@/components/Aussi"
import Design from "@/components/Design"
import Contact from "@/components/Contact"
import Pied from "@/components/Pied"

export default function Accueil() {
  return (
    <>
      <Nav />
      <main>
        <Hero />
        <div className="page">
          <Projets />
          <Code />
          <Stack />
          <Parcours />
          <Aussi />
          <Design />
          <Contact />
        </div>
      </main>
      <Pied />
    </>
  )
}
