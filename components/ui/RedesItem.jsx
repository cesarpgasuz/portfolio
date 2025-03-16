import { IconArrow } from "@/helpers/icons"

const RedesItem = ({ red }) => {

  const { name, url } = red

  const UrlInterna = (texto, direccion) => <a href={direccion} className="bg-c-marino-claro lg:bg-transparent py-[18px] rounded-md border lg:border-0 border-c-marino-line flex justify-center items-center gap-2">{texto} <IconArrow fill='#F2FAFF' className='size-4' /></a>
  const UrlExterna = (texto, direccion) => <a href={direccion} target="_blank" rel="noopener noreferrer" className="bg-c-marino-claro lg:bg-transparent py-[18px] rounded-md border lg:border-0 border-c-marino-line flex justify-center items-center gap-2">{texto} <IconArrow fill='#F2FAFF' className='size-4' /></a>

  return (
    <>
      {url.charAt(0) === '#' ? UrlInterna(name, url) : UrlExterna(name, url)}
    </>

  )
}
export default RedesItem