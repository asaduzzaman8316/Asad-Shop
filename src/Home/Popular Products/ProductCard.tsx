
import { FaRegHeart } from "react-icons/fa";
import { GrView } from "react-icons/gr";
import { TbArrowsCross } from "react-icons/tb";
import RaringWithP from "../../Compomemts/Share/RaringWithP";
import PriceWithButton from "../../Compomemts/Share/PriceWithButton";
import AOS from 'aos';
import 'aos/dist/aos.css'
import useData from "../../Compomemts/Share/useData";
import { Link } from "react-router";
import Loader from "../../Loader/Loader";
AOS.init()
type productss = {
    name: string,
    id: number,
    brand: string,
    image1: string,
    image2: string,
    rating: number,
    currentPrice: number,
    previousPrice: number,
    categoryId: number,
    label: string,
    labelColor: string
}
function ProductCard(props: { id?: number }) {
    const {products, isLoading} = useData()

    if (isLoading) {
        return (
            <div className="flex justify-center items-center w-full h-screen">
                <Loader/>
            </div>
        )
    }

    const filterProduct = props.id !== 0 ? products.filter((item: productss) => item.categoryId === props.id) : products ;
    return (
        <>
            {
                filterProduct.map((item: productss) => (
                    (< div data-aos='fade-up'  key={item.id} className="border relative border-gray-200 group font-[quicksand] rounded-xl hover:border-green-200 hover:shadow-md duration-500 mt-14 ">
                        <div className="p-4 relative">
                            <img
                                className="group-hover:scale-105 opacity-100 group-hover:opacity-0  duration-1000 "
                                src={item.image1} alt="" />

                            <Link to={`/shop/${item.id}`}>
                                <img
                                    className=" opacity-0  group-hover:opacity-100  duration-1000 absolute top-0 right-0 "
                                    src={item.image2} alt="" />
                            </Link>

                        </div>
                        <div
                            className={`border flex w-[50%] bg-white border-green-200 justify-between px-2 py-1 rounded-lg absolute text-green-500  mx-auto divide-x  top-[30%] left-[25%] duration-500 transition-all opacity-0 group-hover:opacity-100`}>
                            <div className="flex-1 flex justify-center items-center py-2">
                                <FaRegHeart />
                            </div>
                            <div className="flex-1 flex justify-center items-center py-2">
                                <TbArrowsCross />
                            </div>
                            <div className="flex-1 flex justify-center items-center py-2">
                                <GrView />
                            </div>
                        </div>
                        <div className="px-4 pb-5">
                            <Link to={`/shop/${item.id}`}>
                                <h1 className=" leading-5 text-gray-700 font-bold line-clamp-1 w-56 hover:text-green-600 duration-300">{item.name}</h1>
                            </Link>
                            <RaringWithP rating={item.rating} />
                            <p className="text-gray-400 text-base">By <span className="text-green-600 hover:text-yellow-400 duration-300">{item.brand}</span></p>
                            <PriceWithButton id={item.id} currentPrice={item.currentPrice} previousPrice={item.previousPrice} />
                        </div>
                        <div className={`${item.labelColor} text-white w-12 px-2 flex justify-center items-center absolute top-0 rounded-tl-xl rounded-br-xl`}>
                            <p>{item.label}</p>
                        </div>
                    </div>)
                ))
            }
        </>
    )
}

export default ProductCard
