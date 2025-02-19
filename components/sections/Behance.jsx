const Behance = () => {

  const parrafo = 'Aquí puedes ver una colección de todos los diseños web que he realizado y que poco a poco he llevado a código.'
  const url = 'https://www.behance.net/cesarpgasuz'
  return (
    <section className="contenedor py-[50px]">  
      <div className="grid gap-7">
        <div>
          <h2 className='text-c-white text-2xl mb-6'>Diseños Web</h2>
          <p className="text-c-white/60 leading-8">{parrafo}</p>
        </div>
        <div>
          <a href={url} target="_blank" rel="noopener noreferrer" className="bg-c-blue w-full text-center block py-6 text-2xl font-bold rounded-lg">Behance</a>
        </div>
      </div>

    </section>
  )
}
export default Behance