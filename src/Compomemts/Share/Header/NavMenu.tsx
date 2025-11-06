

import { NavLink } from 'react-router'

function NavMenu() {
    const menus = [
        {
            name: 'Home',
            nvlink: '/'
        },
        {
            name: 'About',
            nvlink: "/about"
        },
        {
            name: "Shop",
            nvlink: '/shop'
        },
        {
            name: "Vendors",
            nvlink: "/vendors"
        },
        {
            name: 'Mega Menu',
            nvlink: "/megamenu"
        },
        {
            name: 'Blog',
            nvlink: '/blog'
        },
        {
            name: "Pages",
            nvlink: '/pages'
        },
        {
            name: "Contact",
            nvlink: '/contact'
        }

    ]
    return (
        <div className='flex  items-center justify-between gap-10'>
            <div className='flex items-center gap-2 font-[quicksand] font-semibold'>
                <i className='fab fa-firefox-browser text-[#3BB77E]'></i>
                <p>Deals</p>
            </div>
            <div className=' flex relative gap-10 pr-52  font-[quicksand] font-semibold'>
                {
                    menus.map((item, idx) => (
                        <div key={idx} className='hover:-translate-y-1 duration-500 ease-in-out hover:text-green-600'>
                            <NavLink
                                className={({ isActive }) => isActive ? 'text-green-600' : ''} to={item.nvlink}>{item.name}</NavLink>
                        </div>
                    ))
                }
            </div>
            <div>
                <div className='flex items-center gap-3'>
                    <i className='fas fa-headset text-4xl text-gray-600'></i>
                    <div >
                        <h1 className='text-xl font-semibold text-green-600 leading-4'>1900- 888</h1>
                        <p className='text-xs text-gray-400'>24/7 Support Center</p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default NavMenu
