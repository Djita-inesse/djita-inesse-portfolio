import { motion } from "framer-motion"
import "../styles/about.css"

export default function About(){

return(

<section id="about" className="about">

<div className="floating-elements">
<div className="floating-circle circle-1"></div>
<div className="floating-circle circle-2"></div>
<div className="floating-circle circle-3"></div>
<div className="floating-square square-1"></div>
<div className="floating-square square-2"></div>
</div>

<div className="about-container">

<motion.div
initial={{opacity:0,y:50}}
whileInView={{opacity:1,y:0}}
transition={{duration:0.8}}
viewport={{once:true}}
>

<h2>À Propos</h2>

<img src="https://em-content.zobj.net/content/2020/06/22/ios-14-memoji-emojipedia.gif" alt="Memoji de Djita Inesse" className="memoji-gif" />

<p>Je suis Djita Inesse, développeuse WordPress et graphiste passionnée par la création de sites web
     modernes et d’expériences numériques uniques. Je conçois des maquettes créatives et développe des 
     sites fonctionnels, alliant design esthétique et performance technique.</p>

<p>J’accompagne les entreprises et les créateurs dans la conception 
    et le développement de leurs projets web, en utilisant WordPress, React et Firebase. 
    Mon objectif est de transformer des idées en expériences numériques engageantes, où chaque détail compte.</p>

<p>Je crois qu’un site web doit être beau, rapide et intuitif. Chaque projet commence par la création de 
    maquettes détaillées pour assurer que le design et la fonctionnalité se complètent parfaitement.</p>

    <p>Quand je ne code pas ou ne crée pas de maquettes, je m’inspire de l’art et du design graphique pour 
        nourrir ma créativité et rester à la pointe des tendances numériques.</p>
<div className="stats">

<div className="stat">
<h3>+20</h3>
<p>Projets réalisés</p>
</div>

<div className="stat">
<h3>+25</h3>
<p>Clients satisfaits</p>
</div>

<div className="stat">
<h3>3+</h3>
<p>Années d'expérience</p>
</div>

</div>

</motion.div>

</div>

</section>

)
}
