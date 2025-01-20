import { IconArrow } from "@/helpers/icons"

const RedesItem = ({red}) => {

  const {name, url} = red

  return (
    <a href={url} target="_blank" className="bg-c-marino-claro py-[18px] rounded-md border border-c-marino-line flex justify-center items-center gap-2">{name} <IconArrow  fill='#F2FAFF' className='size-4'/></a>
  )
}
export default RedesItem