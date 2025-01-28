import Image from 'next/image'
import LogoImage from '@/public/images/logo.png'
import { REDES } from '@/helpers/data'
import RedesItem from '../ui/RedesItem'
import { IconNextjs, IconReactjs, IconTailwindCSS} from '@/helpers/icons.js'

const Header = () => {
  const Etiqueta = ({children}) => <span className='inline-flex items-center justify-center gap-1 bg-c-marino-claro border border-c-marino-line rounded px-1 mx-1 text-base text-c-white'>{children}</span>
  return (
    <header className="contenedor pt-20 pb-[50px]">
      <Image src={LogoImage} width={200} height={200} alt="Logo" className='rotate-[9deg] size-[56px] border-2 border-c-white rounded-lg' />
      <span className='mt-6 text-xl text-c-cyan inline-block'>#Hola</span>
      <h1 className='text-4xl text-c-white font-bold italic mb-6'>Soy <span className='text-c-yellow'>Cesar Pablo</span></h1>
      <p className='text-c-white leading-8 text-c-white/60 mb-8'>Soy desarrollador frontend y realizo páginas web con <Etiqueta><IconNextjs/> Next.js</Etiqueta>, <Etiqueta><IconReactjs /> React</Etiqueta> y <Etiqueta><IconTailwindCSS/>Tailwind CSS</Etiqueta>. Me apasiona crear diseños modernos, optimizados y con una excelente experiencia de usuario.</p>
      <div className='flex flex-col gap-6'>
        {REDES.map(red => (
          <RedesItem  key={red.name} red ={red}/>
        ))}
      </div>
    </header>
  )
}
export default Header