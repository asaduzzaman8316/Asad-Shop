
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
import { setWishlist } from "../../Cart/counterSlice";
import { useDispatch } from "react-redux";
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
    const { products, isLoading } = useData()
    const dispatch = useDispatch()



    function handlerWishlist(id: number) {
        dispatch(setWishlist(id))
    }

    if (isLoading) {
        return (
            <div className="flex justify-center items-center w-full h-screen">
                <Loader />
            </div>
        )
    }

    const filterProduct = props.id !== 0 ? products.filter((item: productss) => item.categoryId === props.id) : products;
    return (
        <>
            {
                filterProduct.map((item: productss) => (
                    (<div data-aos='fade-up' key={item.id} className="w-full max-w-sm mx-auto border relative border-gray-200 group font-[quicksand] rounded-xl hover:border-green-200 hover:shadow-lg duration-500 mt-14">
                        <div className="aspect-square p-4 relative overflow-hidden">
                            <img
                                className="w-full h-full object-contain transform group-hover:scale-105 opacity-100 group-hover:opacity-0 transition-all duration-500"
                                src={item.image1}
                                alt={item.name}
                            />

                            <Link to={`/shop/${item.id}`}>
                                <img
                                    className="w-full h-full object-contain opacity-0 group-hover:opacity-100 transition-all duration-500 absolute inset-0 p-4"
                                    src={item.image2}
                                    alt={`${item.name} - alternate view`}
                                />
                            </Link>
                        </div>

                        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-4/5 sm:w-3/5 opacity-0 group-hover:opacity-100 transition-all duration-300">
                            <div className="flex justify-between bg-white border border-green-200 rounded-lg divide-x divide-green-100 shadow-lg">
                                <button
                                    onClick={() => handlerWishlist(item.id)}
                                    className="flex-1 p-3 cursor-pointer text-green-500 hover:text-yellow-500 transition-colors duration-200">
                                    <FaRegHeart className="w-5 h-5 mx-auto" />
                                </button>
                                <button className="flex-1 p-3 text-green-500 hover:text-yellow-500 transition-colors duration-200">
                                    <TbArrowsCross className="w-5 h-5 mx-auto" />
                                </button>
                                <Link to={`/shop/${item.id}`}
                                    className="flex-1 p-3 cursor-pointer text-green-500 hover:text-yellow-500 transition-colors duration-200">
                                    <GrView className="w-5 h-5 mx-auto" />
                                </Link>
                            </div>
                        </div>

                        <div className="p-4">
                            <Link to={`/shop/${item.id}`}>
                                <h1 className="text-lg text-gray-700 font-bold line-clamp-1 hover:text-green-600 duration-300">
                                    {item.name}
                                </h1>
                            </Link>
                            <RaringWithP rating={item.rating} />
                            <p className="text-base text-gray-400">
                                By <span className="text-green-600 hover:text-yellow-400 duration-300">{item.brand}</span>
                            </p>
                            <PriceWithButton id={item.id} currentPrice={item.currentPrice} previousPrice={item.previousPrice} />
                        </div>

                        <div className={`${item.labelColor} text-white absolute top-0 left-0 rounded-tl-xl rounded-br-xl py-1 px-3`}>
                            <p className="text-sm">{item.label}</p>
                        </div>
                    </div>)
                ))
            }
        </>
    )
}

export default ProductCard
