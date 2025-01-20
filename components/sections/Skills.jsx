import Image from 'next/image'
import Icon from '@/public/images/logo.png'
import { SKILLS } from '@/helpers/data'

const Skills = () => {
  return (
    <section className="contenedor py-[50px]">
        <h2 className='text-c-white text-2xl mb-6'>Tecnologias</h2>
        <p className="text-c-white/60 leading-8 mb-9">Estas son las herramientas y tecnologías que utilizo en mi dia a dia.</p>
        <div className='flex flex-wrap gap-3'>

            {SKILLS.map((skill, index) => (

                <div 
                key={index}
                className='flex justify-center items-center gap-2 px-3 py-2 bg-c-marino-claro w-fit rounded' 
                ><Image src={Icon} width={30} height={30} alt='icono' /><span className='text-c-white text-sm'>{skill}</span></div>
            ))}

            
        </div>
    </section>
  )
}
export default Skills