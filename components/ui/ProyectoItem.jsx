import Image from 'next/image'
import ImagenDefault from '@/public/images/default.png'
import { IconArrow } from '@/helpers/icons'
import { getIcon } from '@/helpers/icons'

const ProyectoItem = ({ proyecto }) => {

    const { nombre, descripcion, tecnologias, repositorio, url, img } = proyecto
    const ImagenSrc = img ? `/images/${img}` : ImagenDefault
    return (
        <article className='border border-c-marino-line rounded-2xl p-6 lg:flex lg:flex-col'>
            <div className='lg:flex gap-4 lg:items-start'>
                <Image src={ImagenSrc} width={67} height={67} alt="Logo" className='rounded-full mb-3 object-cover lg:size-12' />
                <h3 className='text-c-white font-medium mb-3'>{nombre}</h3>
            </div>

            <p className='text-c-white/60 leading-8 text-ms mb-9 lg:text-sm lg:leading-9'>{descripcion}</p>

            <div className='flex flex-col gap-9 lg:flex-row lg:justify-between lg:items-center lg:mt-auto'>
                <div className='flex gap-4'>
                    {tecnologias.map(tecnologia => {
                        const Icon = getIcon(tecnologia)
                        return Icon ? (<Icon width={20} height={20} key={tecnologia} />) : null; 
                    })}


                </div>
                <div className='flex justify-between lg:gap-8'>
                    {repositorio && <a href={repositorio} className='text-c-white/70 text-sm flex items-center gap-2' target='_blank' rel='noopener noreferrer'>Repositorio <IconArrow fill='#F2FAFF' className='size-4' /></a>}
                    {url && <a href={url} className='text-c-white/70 text-sm flex items-center gap-2' target='_blank' rel='noopener noreferrer'>Ver Web <IconArrow fill='#F2FAFF' className='size-4' /></a>}
                </div>
            </div>
        </article>
    )
}
export default ProyectoItem