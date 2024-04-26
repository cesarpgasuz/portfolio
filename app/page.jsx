import Image from 'next/image'
import ImageMona from '@/public/images/monachina.jpg'

export default function Home() {
  return (

    <div className="contenedor">
      <Image src={ImageMona} width={449} height={412} alt='imagen anime' className='w-[229px] h-[212px]' />
      <h1 className='mt-10 font-bold text-3xl mb-6'>cesarpgasuz.dev</h1>
      <p>Todavía no termino mi página pero aquí puedes encontrar mis redes</p>
      <ul className='leading-10'>
        <li><a href='https://www.instagram.com/cesarpgasuz_' target="_blank" rel="noopener noreferrer" className='underline'>Instagram</a></li>
        <li><a href='https://github.com/cesarpgasuz' target="_blank" rel="noopener noreferrer" className='underline'>Github</a></li>
        <li><a href='https://www.behance.net/cesarpgasuz' target="_blank" rel="noopener noreferrer" className='underline'>Behance</a></li>
      </ul>
    </div>
    
  )
}
