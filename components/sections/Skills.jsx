import { SKILLS } from '@/helpers/data'
import { getIcon } from '@/helpers/icons'

const Skills = () => {
  return (
    <section className="contenedor py-[50px] lg:py-20">
      <h2 className='text-c-white text-2xl mb-6 lg:text-[32px] lg:font-bold'>Tecnologias</h2>
      <p className="text-c-white/60 leading-8 mb-9">Estas son las herramientas y tecnologías que utilizo en mi dia a dia.</p>
      <div className='flex flex-wrap gap-3 lg:gap-4'>

        {SKILLS.map(({ name, icon }) => {

          const Icon = getIcon(icon)

          return (

            <div
              key={name}
              className='flex justify-center items-center gap-2 px-3 py-2 lg:px-7 lg:py-3 bg-c-marino-claro w-fit rounded'
            >
              <Icon width={30} height={30} key={icon} /> <span className='text-c-white text-sm'>{name}</span>
            </div>
          )

        })}


      </div>
    </section>
  )
}
export default Skills