import Link from 'next/link'
import { PROYECTOS } from '@/helpers/data'
import ProyectoItem from '../ui/ProyectoItem'
import FechaActual from '../ui/FechaActual'
import styles from '@/styles/Proyectos.module.css'

const Proyectos = () => {

    return (
        <section className="contenedor py-[50px] lg:py-20 relative">
            <div className={`${styles.circle} bg-c-marino-line absolute blur-[45px]`}></div>
            <h2 className='text-c-white text-2xl mb-6 lg:text-[32px] lg:font-bold relative z-10'>Proyectos</h2>
            <p className="text-c-white/60 leading-8 mb-9 relative z-10">Lista de todos los proyectos y productos que he realizado hasta el día de hoy <FechaActual/></p>

            <div className={`grid gap-7 lg:gap-5 relative z-20 ${styles.proyectos}`}>
                {PROYECTOS.slice(0, 3).map(proyecto => (
                    <ProyectoItem key={proyecto.id} proyecto={proyecto} />
                ))}
                
            </div>

            <Link href='/proyectos' className='text-c-white mx-auto mt-14 w-fit block pb-2 border-b-2 border-b-transparent hover:border-b-c-white'>Mira todos los proyectos aquí</Link>
        </section>
    )
}
export default Proyectos