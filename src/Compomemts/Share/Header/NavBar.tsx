
import { useState } from 'react'
import NavLeft from './NavLeft'
import NavMenu from './NavMenu'

function NavBar() {
  const [mobileOpen, setMobileOpen] = useState(false)
  return (
    <div className='sticky top-0 py-2 z-50 w-full bg-white border-b border-gray-200'>
      <div className='container mx-auto  w-full flex items-center justify-between px-4'>
        <div className='flex items-center gap-4'>
          <NavLeft />
        </div>

        <div className='flex items-center gap-4'>
          <NavMenu/>

          <button
            className='lg:hidden p-2 rounded-md border border-gray-200'
            onClick={() => setMobileOpen(open => !open)}
            aria-label='Toggle menu'
          >
            <svg className='w-6 h-6' fill='none' stroke='currentColor' viewBox='0 0 24 24' xmlns='http://www.w3.org/2000/svg'>
              <path strokeLinecap='round' strokeLinejoin='round' strokeWidth={2} d={mobileOpen ? 'M6 18L18 6M6 6l12 12' : 'M4 6h16M4 12h16M4 18h16'} />
            </svg>
          </button>
        </div>
      </div>

      {mobileOpen && (
        <div className='lg:hidden border-t border-gray-100 bg-white'>
          <NavMenu setMobile={setMobileOpen} mobile />
        </div>
      )}
    </div>
  )
}

export default NavBar
