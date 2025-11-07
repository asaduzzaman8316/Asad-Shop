
import { FaRegHeart } from 'react-icons/fa'
import { GrView } from 'react-icons/gr'
import { IoCartOutline } from 'react-icons/io5'
import { TbArrowsCross } from 'react-icons/tb'
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import AOS from 'aos';
import 'aos/dist/aos.css'
import useData from '../../Compomemts/Share/useData'
import { useDispatch } from 'react-redux';
import { increment } from '../../Cart/counterSlice';
import { toast } from 'react-toastify';
import { useNavigate } from 'react-router';
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
    labelColor: string,
    quantity: number,
    sold: number
}
function Silder(props: { label: string }) {

    const {products}= useData()

    const dispatch = useDispatch()

    const navegite = useNavigate()


    const settings = {
        dots: true,
        infinite: true,
        slidesToShow: 4,
        slidesToScroll: 1,
        autoplay: true,
        speed: 1500,
        autoplaySpeed: 2000,
        cssEase: "linear",
        arrows: true
    };


    const filterProduct = props.label !== 'All' ? products.filter((item:productss) => item.label === props.label) : products;
    return (
        <div className=' slider-container   gap-5  items-center justify-center'>
            <Slider {...settings} className=''>
                {
                    filterProduct.map((item:productss) => (
                        <div
                            onClick={() => navegite(`/shop/${item.id}`)}
                            data-aos='fade-left' key={item.id} className='px-2'>
                            < div className=" cursor-pointer border relative  border-gray-200 group font-[quicksand] rounded-xl hover:border-green-200 hover:shadow-md duration-500  ">
                                <div className="p-4 relative">
                                    <img
                                        className="group-hover:scale-105 opacity-100 group-hover:opacity-0   duration-1000 "
                                        src={item.image1} alt="" />

                                    <img
                                        className=" opacity-0  group-hover:opacity-100  duration-1000 absolute top-0 right-0 "
                                        src={item.image2} alt="" />

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
                                    <h1 className=" leading-5 text-gray-700 font-bold line-clamp-1 w-56 hover:text-green-600 duration-300">{item.name}</h1>
                                    <div className="text-yellow-500 text-xs my-2 flex items-center">
                                        {/* rating */}
                                        <i className="fas fa-star"></i>
                                        <i className="fas fa-star"></i>
                                        <i className="fas fa-star"></i>
                                        <i className="fas fa-star"></i>
                                        <i className="fas fa-star"></i>
                                    </div>

                                    <div className=" mt-5">
                                        <p className="text-green-600 text-xl  font-[quicksand] font-bold">${item.currentPrice} <span className="line-through text-sm text-gray-400">${item.previousPrice}</span></p>
                                    </div>
                                    <div className='mt-5 relative'>
                                        <div className='w-full h-1.5 rounded-lg bg-gray-200'></div>
                                        <div className={`bg-green-600 w-25 h-1.5 rounded-lg absolute top-0`}></div>
                                    </div>
                                    <p className='text-sm mt-3 '>Sold: {item.sold}/{item.quantity}</p>
                                    <div
                                        onClick={(e) => (
                                            e.stopPropagation(),
                                            dispatch(increment(item.id),
                                                toast("Add To Cart Successful", { position: 'top-right' })
                                            ))}
                                        className='bg-[#3BB77E] cursor-pointer active:scale-110 flex items-center justify-center text-white py-2 rounded-md gap-2 hover:bg-yellow-500 duration-500 font-semibold mt-3'>
                                        <IoCartOutline />
                                        <button className='cursor-pointer'> Add To Cart</button>
                                    </div>
                                </div>
                                <div className={`${item.labelColor} text-white w-12 px-2 flex justify-center items-center absolute top-0 rounded-tl-xl rounded-br-xl`}>
                                    <p>{item.label}</p>
                                </div>
                            </div>
                        </div>
                    ))
                }
            </Slider>
        </div>
    )
}

export default Silder
