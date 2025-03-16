import Image from 'next/image'
import LogoUniversidad from '@/public/images/logo-universidad.webp'

const Education = () => {
    const Title = ({children}) =>  <h2 className='text-c-white text-2xl mb-7 lg:text-[32px] lg:font-bold'>{children}</h2>
    return (
        <section className="contenedor py-[50px] lg:py-20 lg:flex lg:gap-10 lg:justify-between">
            <article>
                <Title>Educación</Title>
                <div className='flex gap-4'>
                    <Image src={LogoUniversidad} width={200} height={200} alt="Logo Universidad" className='h-20 w-auto' />
                    <div>
                        <h3 className='text-c-white font-medium leading-7 mb-2'>Licenciatura en Ingeniería en Sistemas Computacionales y Telemática</h3>
                        <p className='text-c-white/60 leading-6 text-sm mb-2'>Universidad Interactiva y a Distancia del Edo. de Guanajuato</p>
                        <span className='text-c-yellow text-sm'>Cédula: 09302338</span>
                    </div>
                </div>
            </article>
            <article className='py-[50px]'>
                <Title>Experiencia</Title>
                <p className='text-c-white/60 text-lg border-l-4 border-l-c-cyan pl-3'>Freelancer</p>
            </article>
        </section>
    )
}
export default Education