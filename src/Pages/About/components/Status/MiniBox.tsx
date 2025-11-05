
function MiniBox({title, para}:{title:string, para:string}) {
  return (
    <div className='text-white  font-bold text-center relative z-50'>
      <span className='text-5xl'>{title}</span>
      <p className='text-2xl'>{para}</p>
    </div>
  )
}

export default MiniBox
