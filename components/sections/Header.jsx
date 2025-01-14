import Image from 'next/image'
import LogoImage from '@/public/images/logo.png'


const Header = () => {
  return (
    <header className="contenedor">
        <Image src={LogoImage} width={200} height={200} alt="Logo" />
        <span>#Hola</span>
        <h1>Soy Cesar Pablo</h1>
        <p>Soy desarrollador frontend y realizo páginas web con Next.js, React y TailwindCSS. Me apasiona crear diseños modernos, optimizados y con una excelente experiencia de usuario.</p>
        <div>
            <a href='#'>Github</a>
            <a href='#'>Descargar CV</a>
            <a href='#'>Contacto</a>
        </div>
    </header>
  )
}
export default Header