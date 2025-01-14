import Image from 'next/image'
import Imagen from '@/public/images/logo.png'

const Proyectos = () => {

    const fecha = new Date().toLocaleDateString('es-ES', { year: 'numeric', month: 'long', day: 'numeric' })

    return (
        <section className="contenedor">
            <h2>Proyectos</h2>
            <p className="text-white">Lista de todos los proyectos y productos que he realizado hasta el día de hoy <span>{fecha}</span></p>
        
        
            <div>
                <article>
                    <div>
                        <Image src={Imagen} width={67} height={67} alt="Logo" className='rounded-full' />
                        <h3>Directorio Virtual Doctor Mora</h3>
                    </div>
                    <div>
                        <p>Directorio web para encontrar productos y servicios en el municipio de Doctor Mora, promoviendo y respaldando al comercio local y emprendedores</p>
                    </div>
                    <div>
                        <div><Image src={Imagen} width={20} height={20} alt='logo' /></div>
                        <div><a href='#'>Repositorio</a>
                        <a href='#'>Ver Web</a></div>
                    </div>
                </article>
                <article>
                    <div>
                        <Image src={Imagen} width={67} height={67} alt="Logo" className='rounded-full' />
                        <h3>Invitaciones Web</h3>
                    </div>
                    <div>
                        <p>Invitaciones web para eventos sociales con una variedad de diseños y temáticas personalizadas</p>
                    </div>
                    <div>
                        <div><Image src={Imagen} width={20} height={20} alt='logo' /></div>
                        <div><a href='#'>Repositorio</a>
                        <a href='#'>Ver Web</a></div>
                    </div>
                </article>
                <article>
                    <div>
                        <Image src={Imagen} width={67} height={67} alt="Logo" className='rounded-full' />
                        <h3>Doctor Mora Travel</h3>
                    </div>
                    <div>
                        <p>Página turística para explorar Doctor Mora, Guanajuato, con información detallada sobre lugares turísticos.</p>
                    </div>
                    <div>
                        <div><Image src={Imagen} width={20} height={20} alt='logo' /></div>
                        <div><a href='#'>Repositorio</a>
                        <a href='#'>Ver Web</a></div>
                    </div>
                </article>
            </div>
        </section>
    )
}
export default Proyectos