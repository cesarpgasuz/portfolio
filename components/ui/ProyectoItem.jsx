import Image from 'next/image'
import ImagenDefault from '@/public/images/default.png'
import { getIcon } from '@/helpers/icons'

const ProyectoItem = ({ proyecto }) => {

    const { nombre, descripcion, tecnologias, repositorio, url, img } = proyecto
    const ImagenSrc = img ? `/images/${img}` : ImagenDefault
    return (
        <article className='border border-c-marino-line rounded-2xl p-6'>
            <div>
                <Image src={ImagenSrc} width={67} height={67} alt="Logo" className='rounded-full mb-3 object-cover' />
                <h3 className='text-c-white font-medium mb-3'>{nombre}</h3>
            </div>

            <p className='text-c-white/60 leading-8 text-ms mb-9'>{descripcion}</p>

            <div className='flex flex-col gap-9'>
                <div className='flex gap-4'>
                    {tecnologias.map(tecnologia => {
                        const Icon = getIcon(tecnologia)
                        return Icon ? (<Icon width={20} height={20} key={tecnologia} />) : null; 
                    })}


                    {/* <Image src={Imagen} width={20} height={20} alt='logo' />
                                <Image src={Imagen} width={20} height={20} alt='logo' />
                                <Image src={Imagen} width={20} height={20} alt='logo' /> */}

                </div>
                <div className='flex justify-between'>
                    {repositorio && <a href={repositorio} className='text-c-white/70 text-sm' target='_blank' rel='noopener noreferrer'>Repositorio</a>}
                    {url && <a href={url} className='text-c-white/70 text-sm' target='_blank' rel='noopener noreferrer'>Ver Web</a>}
                </div>
            </div>
        </article>
    )
}
export default ProyectoItem