import { useState } from "react"
import { motion } from "framer-motion"
import { FiMenu, FiX } from "react-icons/fi"
import logo from "../assets/logo.png"
import "../styles/navbar.css"

export default function Navbar(){

const [menuOpen,setMenuOpen] = useState(false)

return(

<nav className="navbar">

<div className="nav-container">

<div className="logo">
<img src={logo} alt="Djita Inesse Logo" />
</div>

<div className="nav-right">

<ul className={`nav-links ${menuOpen ? "active":""}}`}>

<li><a href="#hero">Accueil</a></li>
<li><a href="#projects">Projets</a></li>
<li><a href="#skills">Compétences</a></li>
<li><a href="#contact">Contact</a></li>

</ul>
<button className="contact-btn" onClick={() => document.getElementById('contact').scrollIntoView({behavior: 'smooth'})}>
Me contacter
</button>
<div className="menu-icon" onClick={()=>setMenuOpen(!menuOpen)}>
{menuOpen ? <FiX/> : <FiMenu/>}
</div>

</div>

</div>

</nav>

)
}