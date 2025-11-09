

import { NavLink } from 'react-router'

function NavMenu({ mobile, setMobile }: { mobile?: boolean, setMobile?: React.Dispatch<React.SetStateAction<boolean>> }) {
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


    if (mobile) {
        return (
            <div className='flex flex-col px-4 py-2'>
                {menus.map((item, idx) => (
                    <NavLink
                        onClick={() => setMobile && setMobile(open => !open)}
                        key={idx} to={item.nvlink} className='py-2 border-b border-gray-100'>
                        {item.name}
                    </NavLink>
                ))}
            </div>
        )
    }

    return (
        <div className='hidden lg:flex items-center justify-between gap-6 font-[quicksand] font-semibold'>
            <div className='flex items-center gap-6 pr-4'>
                {
                    menus.map((item, idx) => (
                        <div key={idx} className='hover:-translate-y-1 duration-500 ease-in-out hover:text-green-600'>
                            <NavLink
                                className={({ isActive }) => isActive ? 'text-green-600' : ''} to={item.nvlink}>{item.name}</NavLink>
                        </div>
                    ))
                }
            </div>
            <div className='hidden lg:flex items-center gap-3'>
                <i className='fas fa-headset text-3xl text-gray-600'></i>
                <div>
                    <h1 className='text-lg font-semibold text-green-600 leading-4'>1900- 888</h1>
                    <p className='text-xs text-gray-400'>24/7 Support Center</p>
                </div>
            </div>
        </div>
    )
}

export default NavMenu
