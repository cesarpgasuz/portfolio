import Image from 'next/image'
import Icon from '@/public/images/logo.png'
import { SKILLS } from '@/helpers/data'

const Skills = () => {
  return (
    <section className="contenedor">
        <h2>Tecnologias</h2>
        <p>Estas son las herramientas y tecnologías que utilizo en mi dia a dia.</p>
        <div>

            {SKILLS.map((skill, index) => (

                <div key={index}><Image src={Icon} width={30} height={30} alt='icono' /><span>{skill}</span></div>
            ))}

            
        </div>
    </section>
  )
}
export default Skills