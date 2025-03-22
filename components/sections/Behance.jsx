const Behance = () => {

  const parrafo = 'Aquí puedes ver una colección de todos los diseños web que he realizado y que poco a poco he llevado a código.'
  const url = 'https://www.behance.net/cesarpgasuz'
  return (
    <section className="contenedor py-[50px] lg:py-20">  
      <div className="grid gap-7 lg:grid-cols-2 lg:gap-[24px]">
        <div>
          <h2 className='text-c-white text-2xl mb-6 lg:text-[32px] lg:font-bold'>Diseños Web</h2>
          <p className="text-c-white/60 leading-8">{parrafo}</p>
        </div>
        <div className="lg:flex lg:justify-end lg:items-center">
          <a href={url} target="_blank" rel="noopener noreferrer" className="bg-c-blue w-full text-center block py-6 text-2xl font-bold rounded-lg lg:w-[300px] lg:text-[56px] xl:w-[430px]">Behance</a>
        </div>
      </div>

    </section>
  )
}
export default Behance