import { NavLink } from "react-router";
import useLang from "../useLang";
import useCurrence from "../useCurrence";
type langProps ={
    name:string
}

function HeaderTop() {
    const {lang} = useLang()
    const {currency} = useCurrence()
   const  key = Object.keys(currency)
    
    const data = [
        {
            name: "About Us",
            nav: '/about'
        },
        {
            name: "My Account",
            nav: '/my-account'
        },
        {
            name: "Wishilist",
            nav: '/wishilist'
        },
        {
            name: "Order Tracking",
            nav: '/order-tracking'
        }

    ];

    return (
        <div className="hidden sm:block border-b border-gray-300">
            <div className="flex justify-between items-center py-1 2xl:container lg:w-[80%] mx-auto px-4">
                <div className="space-x-3">
                    {
                        data.map((item, idx) => (
                            <NavLink
                                className={`${idx === 0 ? 'border-none' : 'border-l'} pl-3 border-gray-300 text-gray-600 text-sm`}
                                key={idx} to={item.nav}>{item.name}</NavLink>
                        ))
                    }
                </div>
                <div>
                    <p className="text-sm text-gray-600">Supper Value Deals - Save more with coupons
                    </p>
                </div>
                <div className="text-sm flex items-center gap-5  text-gray-600">
                    <p className="border-r border-r-gray-300 pr-3">Need help! Call Us: <span className="text-green-500 font-semibold">+880 160839202</span></p>
                    <div className="border-r border-r-gray-300 pr-3">
                        <select 
                        className="outline-none "
                        name="" id="">
                            <option>English</option>
                            {
                                lang.map((item:langProps, idx:number)=>(
                                    <option key={idx} value={item.name}>{item.name}</option>
                                ))
                            }
                        </select>
                    </div>
                    <select
                    className="outline-none"
                     name="" id="">
                        <option value="">BDT</option>
                        {
                             key.map((item, key)=>(
                                <option key={key} value={item}>{item}</option>
                            ))
                        }
                    </select>
                </div>
            </div>
        </div>
    )
}

export default HeaderTop
{/* <p className="">English <i className="fas fa-angle-down"></i></p> */ }