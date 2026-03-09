import { motion } from "framer-motion"
import "../styles/skills.css"

export default function Skills(){

return(

<section id="skills" className="skills">

<div className="skills-container">

<motion.h2
initial={{opacity:0,y:30}}
whileInView={{opacity:1,y:0}}
transition={{duration:0.6}}
viewport={{once:true}}
>
Compétences
</motion.h2>

<div className="skills-grid">

<motion.div
className="skill-card"
initial={{opacity:0,scale:0.9}}
whileInView={{opacity:1,scale:1}}
transition={{duration:0.5}}
viewport={{once:true}}
>
<h3>Frontend</h3>
<ul>
<li>React.js</li>
<li>HTML5 & CSS3</li>
<li>Tailwind CSS</li>

</ul>
</motion.div>

<motion.div
className="skill-card"
initial={{opacity:0,scale:0.9}}
whileInView={{opacity:1,scale:1}}
viewport={{once:true}}
transition={{duration:0.5,delay:0.1}}
>
<h3>Backend & CMS</h3>
<ul>
<li>WordPress</li>
<li>Firebase / Firestore</li>
<li>Node.js</li>
</ul>
</motion.div>

<motion.div
className="skill-card"
initial={{opacity:0,scale:0.9}}
whileInView={{opacity:1,scale:1}}
transition={{duration:0.5,delay:0.2}}
viewport={{once:true}}
>
<h3>Design & Outils</h3>
<ul>
<li>Web Design (Maquettes)</li>
<li>Figma</li>
<li>Adobe Suite</li>
<li>Adobe Illustrator</li>
<li>Déploiement App Store</li>
<li>Déploiement Google Play</li>
<li>Suite Atlassian</li>
</ul>
</motion.div>

</div>

</div>

</section>

)
}
