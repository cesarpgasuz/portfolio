import { PROYECTOS } from '@/helpers/data'
import ProyectoItem from '../ui/ProyectoItem'
import FechaActual from '../ui/FechaActual'


const Proyectos = () => {

    const fecha = new Date().toLocaleDateString('es-ES', { year: 'numeric', month: 'long', day: 'numeric' })

    return (
        <section className="contenedor py-[50px]">
            <h2 className='text-c-white text-2xl mb-6'>Proyectos</h2>
            <p className="text-c-white/60 leading-8 mb-9">Lista de todos los proyectos y productos que he realizado hasta el día de hoy <FechaActual/></p>

            <div className='grid gap-7'>
                {PROYECTOS.map(proyecto => (

                    <ProyectoItem key={proyecto.id} proyecto={proyecto} />

                ))}
                
                
            </div>
        </section>
    )
}
export default Proyectos