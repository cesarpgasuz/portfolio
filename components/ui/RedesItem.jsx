const RedesItem = ({red}) => {

  const {name, url} = red

  return (
    <a href={url} target="_blank" className="text-center bg-c-marino-claro py-[18px] rounded-md">{name}</a>
  )
}
export default RedesItem