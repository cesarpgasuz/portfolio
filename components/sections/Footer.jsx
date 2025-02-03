const Footer = () => {
  return (
    <section className="contenedor py-[50px]" id="contacto">  
        <h2 className='text-c-white text-2xl mb-6'>Contacto</h2>
        <a href="mailto:cesarpgasuz@gmail.com" 
        target="_blank"
        className="text-c-white/70 mb-10 inline-block"
        >cesarpgasuz@gmail.com</a>

        <p className="text-c-white/70 text-sm mb-3">Copyright ©{ new Date().getFullYear()}- cesarpgasuz.dev</p>
        <p className="text-c-white/70 text-xs mb-3">Hecho en Doctor Mora, Guanajuato</p>
    </section>

  )
}
export default Footer