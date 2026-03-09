import { motion } from "framer-motion"
import { useState } from "react"
import "../styles/projects.css"
import project1 from "../assets/project.jpg"
import project2 from "../assets/3.png"
import project3 from "../assets/2.png"
import project4 from "../assets/smartbuild.png"
import project5 from "../assets/diveez.png"
import project6 from "../assets/gecaf.png"
import project7 from "../assets/fich.webp"
import project8 from "../assets/6.png"
import project9 from "../assets/5.png"
import flyer1 from "../assets/flyer1.jpg"
import flyer2 from "../assets/flyer2.jpg"
import flyer3 from "../assets/flyer3.jpg"
import flyer4 from "../assets/flyer4.jpg"
import flyer5 from "../assets/flyer5.jpg"
import flyer6 from "../assets/flyer6.jpg"
import flyer7 from "../assets/flyer7.jpg"
import flyer8 from "../assets/flyer8.jpg"
import flyer9 from "../assets/flyer9.jpg"
import flyer10 from "../assets/flyer10.jpg"

const flyers = [flyer1, flyer2, flyer3, flyer4, flyer5, flyer6, flyer7, flyer8, flyer9, flyer10]

export default function Projects(){

const [selectedFlyer, setSelectedFlyer] = useState(null)

const openModal = (flyerSrc) => {
setSelectedFlyer(flyerSrc)
}

const closeModal = () => {
setSelectedFlyer(null)
}

const projects = [
{
id:1,
title:"SFT Constructions – Site vitrine développé",
description:"Développement d’un site web moderne pour SFT Constructions, une entreprise spécialisée en construction métallique, génie civil et négoce de matériaux, mettant en valeur leurs services, réalisations et expertise. Ce site responsive et professionnel permet de présenter clairement l’offre de l’entreprise et d’améliorer sa visibilité digitale.",
technologies:["WordPress","SEO"],
link:"https://sftconstructionsarl.com/",
image:project1,
category:"wordpress"
},
{
id:2,
title:"2LN Learning Institute – Site web institutionnel",
description:"Conception et développement du site web 2LN Learning Institute, une plateforme dédiée à l’éducation et à la formation. Ce site moderne, responsive et intuitif met en avant les programmes, les valeurs et les services de l’institut, tout en offrant une navigation claire et engageante pour les visiteurs.",
technologies:["WordPress","WooCommerce","SEO"],
link:"https://2lnlearninginstitute.com/",
image:project2,
category:"wordpress"
},
{
id:3,
title:"Belgium Wine Store – Boutique en ligne e‑commerce",
description:"Création d’un site e‑commerce pour Belgium Wine Store, une plateforme de vente en ligne de vins raffinés provenant de vignobles européens. Le site met en valeur une sélection soignée de vins et champagnes, avec une navigation claire et une expérience d’achat fluide sur tous les appareils",
technologies:["WordPress","WooCommerce","SEO"],
link:"https://www.belgiumwinestore.eu/",
image:project3,
category:"wordpress"
},
{
id:4,
title:"SmartBuild – Maquette web pour la supply chain du BTP",
description:"Maquette web pour SmartBuild, une plateforme connectant fournisseurs, acheteurs et transporteurs. Design moderne et intuitif, facilitant le suivi des transactions, la réduction des coûts et la fiabilisation des livraisons.",
technologies:["Figma","UI Design"],
link:"https://www.figma.com/design/jC6echsHspdD0bszyUnbuA/Untitled?node-id=0-1&p=f&m=draw",
image:project4,
category:"design"
},
{
id:5,
title:"DIVIZ – Maquette UX/UI d’une plateforme collaborative",
description:"Conception de la maquette pour DIVIZ, une plateforme digitale permettant à plusieurs utilisateurs de se regrouper pour partager le coût d’une formation en ligne. La maquette met en avant une interface intuitive et moderne, facilitant la création de groupes, la gestion des quotas, le paiement collectif et le suivi des économies réalisées.",
technologies:["Figma","UI Design"],
link:"https://www.figma.com/design/8pous9ZnUbd4cXd5sujyCW/diveez?node-id=0-1&p=f&t=S9sulUNOA400pORL-0",
image:project5,
category:"design"
},
{
id:6,
title:"GECAF – Maquette web ",
description:"Conception d’une maquette web moderne et épurée pour GECAF, avec un design responsive et une expérience utilisateur intuitive. La maquette reflète un style institutionnel tout en facilitant la navigation et la compréhension des fonctionnalités clés de la plateforme.",
technologies:["Figma","UI Design"],
link:"https://www.figma.com/design/JzePxN8ECkdPf52zxhpqTp/GECAF_maquette?node-id=0-1&p=f&m=draw",
image:project6,
category:"design"
},
{
id:7,
title:"FichTech – Application mobile Android",
description:"Développement de FichTech, une application mobile Android permettant de trouver, évaluer et engager des techniciens qualifiés en quelques clics. L’app propose une interface intuitive pour rechercher des professionnels, consulter leurs avis et entrer en contact directement pour des services techniques.",
technologies:["Flutter","Firebase"],
link:"https://play.google.com/store/apps/details?id=com.fichtech.notation_techniciens",
image:project7,
category:"webmobile"
},
{
id:8,
title:"Code Facile – Web App éducative",
description:"Développement de Code Facile, une application web responsive réalisée avec React et Firebase, dédiée à l’apprentissage interactif du code de la route. C’était l’une de mes premières applications React/Firebase, proposant des cours, des quiz et un suivi de progression dans une interface claire et intuitive.",
technologies:["React","Firebase","Tailwind"],
link:"https://code-facile.web.app",
image:project8,
category:"webmobile"
},{
id:9,
title:"Gestion Réunion – Web App React & Firebase",
description:"Développement de Gestion Réunion, une landing page pour une application de gestion de réunions, réalisée avec React et Firebase. Interface moderne et intuitive, mettant en avant les fonctionnalités principales de l’outil et facilitant l’accès aux utilisateurs intéressés par une solution de planification collaborative.",
technologies:["React","Firebase","Tailwind"],
link:"https://gestion-reunion-ac3f5.web.app/",
image:project9,
category:"webmobile"
}
]

return(

<section id="projects" className="projects">

<div className="projects-container">

<motion.h2
initial={{opacity:0,y:30}}
whileInView={{opacity:1,y:0}}
transition={{duration:0.6}}
viewport={{once:true}}
>
Mes Projets
</motion.h2>

{/* Ligne 1: Conception WordPress */}
<div className="projects-row">
<h3 className="row-title">Conception WordPress</h3>
<div className="projects-grid-row">
{projects.filter(p => p.category === 'wordpress').map((project,index)=>(
<motion.div
key={project.id}
className="project-card"
initial={{opacity:0,y:30}}
whileInView={{opacity:1,y:0}}
transition={{duration:0.6,delay:index*0.1}}
viewport={{once:true}}
>
<div className="project-image">
<img src={project.image} alt={project.title} />
</div>
<div className="project-content">
<div className="project-header">
<h3>{project.title}</h3>
</div>
<p>{project.description}</p>
<div className="tech-stack">
{project.technologies.map((tech)=>(
<span key={tech} className="tech-tag">{tech}</span>
))}
</div>
<a href={project.link} className="project-link">Voir le projet →</a>
</div>
</motion.div>
))}
</div>
</div>

{/* Lignes 2-3: Design graphique/UI design */}
<div className="projects-row">
<h3 className="row-title">Design Graphique & UI/UX</h3>
<div className="projects-grid-row">
{projects.filter(p => p.category === 'design').map((project,index)=>(
<motion.div
key={project.id}
className="project-card"
initial={{opacity:0,y:30}}
whileInView={{opacity:1,y:0}}
transition={{duration:0.6,delay:index*0.1}}
viewport={{once:true}}
>
<div className="project-image">
<img src={project.image} alt={project.title} />
</div>
<div className="project-content">
<div className="project-header">
<h3>{project.title}</h3>
</div>
<p>{project.description}</p>
<div className="tech-stack">
{project.technologies.map((tech)=>(
<span key={tech} className="tech-tag">{tech}</span>
))}
</div>
<a href={project.link} className="project-link">Voir le projet →</a>
</div>
</motion.div>
))}
</div>
</div>

{/* Ligne 4: Projets web et mobile */}
<div className="projects-row">
<h3 className="row-title">Projets Web & Mobile</h3>
<div className="projects-grid-row">
{projects.filter(p => p.category === 'webmobile').map((project,index)=>(
<motion.div
key={project.id}
className="project-card"
initial={{opacity:0,y:30}}
whileInView={{opacity:1,y:0}}
transition={{duration:0.6,delay:index*0.1}}
viewport={{once:true}}
>
<div className="project-image">
<img src={project.image} alt={project.title} />
</div>
<div className="project-content">
<div className="project-header">
<h3>{project.title}</h3>
</div>
<p>{project.description}</p>
<div className="tech-stack">
{project.technologies.map((tech)=>(
<span key={tech} className="tech-tag">{tech}</span>
))}
</div>
<a href={project.link} className="project-link">Voir le projet →</a>
</div>
</motion.div>
))}
</div>
</div>

{/* Galerie de Flyers */}
<div className="projects-row">
<h3 className="row-title">Galerie de Flyers</h3>
<div className="flyers-gallery">
<div className="flyers-row">
{Array.from({length: 5}, (_, i) => (
<motion.div
key={i+1}
className="flyer-item"
initial={{opacity:0,scale:0.8}}
whileInView={{opacity:1,scale:1}}
viewport={{once:true}}
animate={{
y: [0, -10, 0],
rotate: [0, 1, -1, 0]
}}
transition={{
duration: 4,
repeat: Infinity,
delay: i * 0.2,
ease: "easeInOut"
}}
whileHover={{scale:1.05}}
onClick={() => openModal(flyers[i])}
>
<img src={flyers[i]} alt={`Flyer ${i+1}`} />
</motion.div>
))}
</div>
<div className="flyers-row">
{Array.from({length: 5}, (_, i) => (
<motion.div
key={i+6}
className="flyer-item"
initial={{opacity:0,scale:0.8}}
whileInView={{opacity:1,scale:1}}
viewport={{once:true}}
animate={{
y: [0, -10, 0],
rotate: [0, -1, 1, 0]
}}
transition={{
duration: 4,
repeat: Infinity,
delay: (i + 5) * 0.2,
ease: "easeInOut"
}}
whileHover={{scale:1.05}}
onClick={() => openModal(flyers[i+5])}
>
<img src={flyers[i+5]} alt={`Flyer ${i+6}`} />
</motion.div>
))}
</div>
</div>
</div>

{/* Modal pour afficher l'image en grand */}
{selectedFlyer && (
<motion.div
className="modal-overlay"
initial={{opacity:0}}
animate={{opacity:1}}
exit={{opacity:0}}
onClick={closeModal}
>
<motion.div
className="modal-content"
initial={{scale:0.8,opacity:0}}
animate={{scale:1,opacity:1}}
exit={{scale:0.8,opacity:0}}
onClick={(e) => e.stopPropagation()}
>
<img src={selectedFlyer} alt="Flyer agrandi" />
<button className="modal-close" onClick={closeModal}>×</button>
</motion.div>
</motion.div>
)}

</div>

</section>

)
}
