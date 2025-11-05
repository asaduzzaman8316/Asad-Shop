import compare from "../../../assects/compare.svg";
import heart from "../../../assects/Heart-33.svg";
import cart from "../../../assects/Cart-14.svg";
import user from "../../../assects/User-13.svg";
import Search from "./Search";
import { CiLocationOn } from "react-icons/ci";
import Sidelogo from "./Sidelogo";


function HeaderItem() {
    return (
        <div className="2xl:container lg:w[80%] mx-auto py-8 flex justify-between items-center">
            <div className="w-50">
                <img src="/logo.svg" alt="" />
            </div>
            <div className="w-150">
                <Search />
            </div>
            <div className="border flex items-center px-4 py-2 rounded-lg border-gray-300 gap-1">
                <CiLocationOn />
                <p className="text-green-600 text-sm">Your Location <i className="fas fa-angle-down text-gray-600 text-xs"></i></p>
            </div>
            <div className="flex items-center gap-5">
                <Sidelogo src={compare} name="Compare" count="3" />
                <Sidelogo src={heart} name="Wishlist" count="6" />
                <Sidelogo src={cart} name="Cart" count="2" />
                <Sidelogo src={user} name="Compare"/>
            </div>
        </div>
    )
}

export default HeaderItem
