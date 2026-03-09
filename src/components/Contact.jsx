import { motion } from "framer-motion"
import { useState } from "react"
import emailjs from '@emailjs/browser'
import { FaLinkedin, FaGithub, FaWhatsapp, FaEnvelope, FaPhone, FaMapMarkerAlt } from 'react-icons/fa'
import "../styles/contact.css"

export default function Contact(){

const [formData,setFormData] = useState({
name:"",
email:"",
message:""
})

const [isLoading, setIsLoading] = useState(false)

const handleChange = (e) => {
const {name,value} = e.target
setFormData(prev=>({...prev,[name]:value}))
}

const handleSubmit = async (e) => {
e.preventDefault()
setIsLoading(true)

try {
await emailjs.sendForm(
'service_your_service_id', // Remplacer par votre service ID EmailJS (obtenu sur https://www.emailjs.com/)
'template_your_template_id', // Remplacer par votre template ID EmailJS
e.target,
'user_your_user_id' // Remplacer par votre user ID EmailJS
)

alert('Message envoyé avec succès ! Merci de m\'avoir contacté.')
setFormData({name:"",email:"",message:""})
} catch (error) {
console.error('Erreur lors de l\'envoi:', error)
// Solution temporaire : ouvrir le client email
const subject = encodeURIComponent(`Message de ${formData.name} - Portfolio`)
const body = encodeURIComponent(`Nom: ${formData.name}\nEmail: ${formData.email}\n\nMessage:\n${formData.message}`)
window.open(`mailto:inesdjita@gmail.com?subject=${subject}&body=${body}`)
alert('Ouverture de votre client email avec le message pré-rempli.')
} finally {
setIsLoading(false)
}
}

return(

<section id="contact" className="contact">

<div className="contact-container">

<motion.div
initial={{opacity:0,y:50}}
whileInView={{opacity:1,y:0}}
transition={{duration:0.8}}
viewport={{once:true}}
>

<div className="contact-header">
<h2>Me Contacter</h2>
<p>Vous avez un projet en tête ? N'hésitez pas à me contacter. Je serais ravi de discuter de votre prochain projet.</p>
</div>

<div className="contact-main">

<div className="contact-left">

<motion.div 
className="contact-info-section"
initial={{opacity:0,x:-50}}
whileInView={{opacity:1,x:0}}
transition={{duration:0.8,delay:0.2}}
viewport={{once:true}}
>

<h3>Informations de Contact</h3>

<div className="info-grid">

<div className="info-item">
<div className="info-icon"><FaEnvelope /></div>
<div className="info-content">
<h4>Email</h4>
<p>inesdjita@gmail.com</p>
</div>
</div>

<div className="info-item">
<div className="info-icon"><FaPhone /></div>
<div className="info-content">
<h4>Téléphone</h4>
<p>+237 693 967 973</p>
</div>
</div>

<div className="info-item">
<div className="info-icon"><FaMapMarkerAlt /></div>
<div className="info-content">
<h4>Localisation</h4>
<p>Douala, Cameroun</p>
</div>
</div>

</div>

</motion.div>

<motion.div 
className="social-section"
initial={{opacity:0,y:30}}
whileInView={{opacity:1,y:0}}
transition={{duration:0.8,delay:0.4}}
viewport={{once:true}}
>

<h3>Suivez-moi</h3>

<div className="social-links">
<a href="#" target="_blank" title="LinkedIn" className="social-link linkedin">
<FaLinkedin />
<span>LinkedIn</span>
</a>
<a href="#" target="_blank" title="GitHub" className="social-link github">
<FaGithub />
<span>GitHub</span>
</a>
<a href={`https://wa.me/237693967973?text=Bonjour Djita, j'aimerais discuter d'un projet avec vous.`} target="_blank" title="WhatsApp" className="social-link whatsapp">
<FaWhatsapp />
<span>WhatsApp</span>
</a>
</div>

</motion.div>

</div>

<div className="contact-right">

<motion.form 
className="contact-form" 
onSubmit={handleSubmit}
initial={{opacity:0,x:50}}
whileInView={{opacity:1,x:0}}
transition={{duration:0.8,delay:0.6}}
viewport={{once:true}}
>

<h3>Envoyez-moi un message</h3>

<div className="form-group">
<input
type="text"
name="name"
placeholder="Votre nom complet"
value={formData.name}
onChange={handleChange}
required
/>
</div>

<div className="form-group">
<input
type="email"
name="email"
placeholder="Votre adresse email"
value={formData.email}
onChange={handleChange}
required
/>
</div>

<div className="form-group">
<textarea
name="message"
placeholder="Décrivez votre projet ou votre message..."
rows="6"
value={formData.message}
onChange={handleChange}
required
></textarea>
</div>

<button type="submit" className="submit-btn" disabled={isLoading}>
{isLoading ? 'Envoi en cours...' : 'Envoyer le message'}
</button>

</motion.form>

</div>

</div>

</motion.div>

</div>

</section>

)
}
