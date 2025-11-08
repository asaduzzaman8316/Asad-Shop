
function MiniBox({title, para}:{title:string, para:string}) {
  return (
    <div className='text-white  font-bold text-center relative z-50'>
      <span className='lg:text-5xl text-lg'>{title}</span>
      <p className='text-lg lg:text-2xl'>{para}</p>
    </div>
  )
}

export default MiniBox
