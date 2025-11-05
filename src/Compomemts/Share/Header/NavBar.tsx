
import NavLeft from './NavLeft'
import NavMenu from './NavMenu'

function NavBar() {
  return (
    <div className='sticky py-2 z-50 w-full bg-white border border-gray-200'>
      <div className='2xl:container mx-auto lg:w-[80%] w-full flex items-center justify-between'>
        <NavLeft />
        <NavMenu />
      </div>
    </div>
  )
}

export default NavBar
