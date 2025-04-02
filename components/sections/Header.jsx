import Image from 'next/image'
import LogoImage from '@/public/images/logo.png'
import { REDES } from '@/helpers/data'
import RedesItem from '../ui/RedesItem'
import { IconNextjs, IconReactjs, IconTailwindCSS } from '@/helpers/icons.js'
import styles from '@/styles/Header.module.css'

const Header = () => {
  const Etiqueta = ({ children }) => <span className='inline-flex items-center justify-center gap-1 bg-c-marino-claro border border-c-marino-line rounded px-1 mx-1 text-base text-c-white'>{children}</span>
  return (
    <header className="contenedor pt-20 pb-[50px] lg:py-20 lg:flex lg:justify-between">
      <div className='lg:w-auto lg:order-2 lg:flex lg:items-center lg:justify-center lg:flex-shrink-0 relative'>
        <Image src={LogoImage} width={1000} height={1000} alt="Logo" className='rotate-[9deg] size-[56px] lg:size-[180px] xl:size-[256px] border-2 lg:border-4 border-c-white rounded-lg relative z-10' />
        <div className={`${styles.circle} bg-c-marino-line absolute blur-[45px]`}></div>
      </div>
      <div className='lg:w-[600px] lg:order-1 lg:flex-shrink-0 relative z-20'>
        <span className='mt-6 text-xl text-c-cyan inline-block'>🤗 Hola</span>
        <h1 className='text-4xl text-c-white font-bold italic mb-6 lg:text-[42px]'>Soy <span className='text-c-yellow'>Cesar Pablo</span></h1>
        <p className='leading-8 text-c-white/60 mb-8'>Soy desarrollador frontend y realizo páginas web con <Etiqueta><IconNextjs /> Next.js</Etiqueta>, <Etiqueta><IconReactjs /> React</Etiqueta> y <Etiqueta><IconTailwindCSS />Tailwind CSS</Etiqueta>. Me apasiona crear diseños modernos, optimizados y con una excelente experiencia de usuario.</p>
        <div className='flex flex-col gap-6 lg:flex-row lg:gap-9'>
          {REDES.map(red => (
            <RedesItem key={red.name} red={red} />
          ))}
        </div>
      </div>

    </header>
  )
}
export default Header