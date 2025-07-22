import Link from "next/link"
import styles from '@/styles/Header.module.css'
import { PROYECTOS } from '@/helpers/data'
import { getIcon } from '@/helpers/icons'


const ProyectosPage = () => {
  return (
    <>
      <header className="contenedor pt-20 pb-[50px] lg:py-20 lg:flex lg:justify-between">
        <div className='lg:w-auto lg:order-2 lg:flex lg:items-center lg:justify-center lg:flex-shrink-0 relative'>
        </div>
        <div className='lg:w-[600px] lg:order-1 lg:flex-shrink-0 relative z-20'>
          <span className='mt-6 text-xl text-c-cyan inline-block'>🌐</span>
          <h1 className='text-4xl text-c-white font-bold italic mb-6 lg:text-[42px]'>Proyectos</h1>
          <p className='leading-8 text-c-white/60 mb-8'>Proyectos y páginas web que he realizado durante mi carrera como Desarrollador Front End.</p>
        </div>
      </header>
      <section className="contenedor">
        <div className="grid gap-8">
          {PROYECTOS.map(proyecto => (
          <div key={proyecto.id} className="mb-10"> 
           <h2 className="text-lg text-c-white mb-4">{proyecto.nombre}</h2>
            <p className="text-sm leading-6 font-light text-c-white/60 mb-4">{proyecto.descripcion}</p>
            <div className="flex flex-wrap gap-3 mb-4">
              {proyecto.tecnologias.map((tecnologia, index) => {
                
                  const Icon = getIcon(tecnologia)

                  return (
                    <span key={index} className="text-c-white bg-c-marino-line px-3 py-1 rounded-full text-sm"><Icon width={30} height={30} />{tecnologia}</span>
                  )
                
              }
                
              )}
            </div>
            <Link href={proyecto.url} target="_blank" className="text-c-cyan hover:underline">Ver Proyecto</Link>
           </div>
        ))}
        </div>
        
           
      </section>

    </>

  )
}

export default ProyectosPage