import Image from 'next/image'
import LogoUniversidad from '@/public/images/logo-universidad.webp'

const Education = () => {
    return (
        <section className="contenedor">
            <article>
                <h2>Educación</h2>
                <div>
                    <Image src={LogoUniversidad} width={200} height={200} alt="Logo Universidad" />
                    <div>
                        <h3>Licenciatura en Ingeniería en Sistemas Computacionales y Telemática</h3>
                        <p>Universidad Interactiva y a Distancia del Edo. de Guanajuato</p>
                        <span>Cédula: 09302338</span>
                    </div>
                </div>
            </article>
            <article>
                <h2>Experiencia</h2>
                <p>Freelancer</p>
            </article>

        </section>
    )
}
export default Education