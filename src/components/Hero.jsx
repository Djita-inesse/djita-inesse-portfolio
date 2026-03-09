import { motion } from "framer-motion"
import "../styles/hero.css"

export default function Hero(){

return(

<section id="hero" className="hero">

<div className="hero-container">

<motion.div
initial={{opacity:0,x:-80}}
animate={{opacity:1,x:0}}
transition={{duration:1}}
className="hero-text"
>

<span className="badge">
Disponible pour des opportunités
</span>

<h1>

Salut, je suis <br/>

<span className="gradient-text">
Djita Inesse
</span>

</h1>

<h2>Développeuse WordPress & Graphiste</h2>

<p>

Passionnée par la création de sites web modernes et d’expériences numériques engageantes, je conçois à la fois des maquettes créatives et des sites WordPress fonctionnels. J’allie design et développement pour transformer des idées en expériences web interactives et esthétiques.

</p>

<div className="hero-buttons">

<button className="primary" onClick={() => document.getElementById('projects').scrollIntoView({behavior: 'smooth'})}>
Voir mon travail
</button>

<button className="secondary" onClick={() => document.getElementById('contact').scrollIntoView({behavior: 'smooth'})}>
Me contacter
</button>

</div>

</motion.div>

<motion.div
initial={{opacity:0,x:80}}
animate={{opacity:1,x:0}}
transition={{duration:1}}
className="hero-image"
>

<div className="circle">

<img src="src/assets/profil.jpg" alt="Djita Inesse "/>

</div>

</motion.div>

</div>

</section>

)
}