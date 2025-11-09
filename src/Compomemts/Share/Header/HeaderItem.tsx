
import { FaRegHeart } from "react-icons/fa";
import { IoCartOutline } from "react-icons/io5";
import { FaRegUser } from "react-icons/fa6";
import Search from "./Search";
import { CiLocationOn } from "react-icons/ci";
import Sidelogo from "./Sidelogo";
import { useSelector } from "react-redux";
import type { RootState } from "../../../Redux/store";
import { useEffect, useState } from "react";
type categoriesType = {
    id: number,
    name: string
}

function HeaderItem() {
    const Cartcount = useSelector((state: RootState) => state.counter.value)
    const Wishlistcount = useSelector((state: RootState) => state.counter.wishlist)
    const [location, setLocation ] = useState([]) 
    useEffect(() => {
        async function getData() {
            const res = await fetch('/Location.json')
            const { locations } = await res.json()
            setLocation(locations)
        }
        getData()
    }, [])
    return (
        <div className="container mx-auto py-4 px-4 flex  sm:flex-row items-start sm:items-center justify-between gap-4">
            <div className="flex items-center w-full sm:w-auto justify-between">
                <div className="lg:w-20  w-16">
                    {/* <p className="text-4xl font-[quicksand] font-semibold">Asad<span className="text-xl text-green-700">uzzaman</span></p> */}
                    <img className="rounded-full" src="/logo.png" alt="" />
                </div>
                <div className="sm:hidden">
                </div>
            </div>
            <div className="hidden md:flex flex-1 px-4">
                <Search />
            </div>
            <div className="flex items-center gap-3 ml-auto">
                <div className="hidden md:flex items-center border px-3 py-2 rounded-lg border-gray-300 gap-2">
                    <CiLocationOn />
                    <div className="text-green-600 text-sm">
                        <select className="outline-none">
                            <option value="">Your Location</option>
                            {
                              location &&  location.map((item: categoriesType) => (
                                    <option value={item.name} key={item.id}>{item.name}</option>
                                ))
                            }
                        </select>
                    </div>
                </div>
                <div className="flex items-center gap-4">
                    <Sidelogo nav="/wishlist" Icon={FaRegHeart} name="Wishlist" count={Wishlistcount} />
                    <Sidelogo nav="/addtocart" Icon={IoCartOutline} name="Cart" count={Cartcount} />
                    <Sidelogo nav="/compare" Icon={FaRegUser} name="Account" />
                </div>
            </div>
        </div>
    )
}

export default HeaderItem
