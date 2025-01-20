import Image from 'next/image'
import Imagen from '@/public/images/logo.png'

const ProyectoItem = () => {
  return (
    <article className='border border-c-marino-line rounded-2xl p-6'>
                        <div>
                            <Image src={Imagen} width={67} height={67} alt="Logo" className='rounded-full mb-3' />
                            <h3 className='text-c-white font-medium mb-3'>Directorio Virtual Doctor Mora</h3>
                        </div>
    
                        <p className='text-c-white/60 leading-8 text-ms mb-9'>Directorio web para encontrar productos y servicios en el municipio de Doctor Mora, promoviendo y respaldando al comercio local y emprendedores</p>
    
                        <div className='flex flex-col gap-9'>
                            <div className='flex gap-4'>
                                <Image src={Imagen} width={20} height={20} alt='logo' />
                                <Image src={Imagen} width={20} height={20} alt='logo' />
                                <Image src={Imagen} width={20} height={20} alt='logo' />
    
                            </div>
                            <div className='flex justify-between'>
                                <a href='#' className='text-c-white/70 text-sm'>Repositorio</a>
                                <a href='#' className='text-c-white/70 text-sm'>Ver Web</a>
                            </div>
                        </div>
                    </article>
  )
}
export default ProyectoItem