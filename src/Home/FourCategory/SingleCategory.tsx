import RaringWithP from "../../Compomemts/Share/RaringWithP"
import AOS from 'aos';
import 'aos/dist/aos.css'
AOS.init()
type productType = {
    newLabel: string,
    image1: string,
    rating: number,
    currentPrice: number,
    previousPrice: number,
    shortMsg: string
}

function SingleCategory({ title, products }: { title: string | null, products: productType[] }) {


    const filterProducts = title !== '' && products.filter(item => item.newLabel === title)

    return (
        <div data-aos='zoom-in-down' className="relative">
            <h1 className="border-b peer pb-2 border-b-gray-200 text-2xl font-[quicksand] font-semibold text-gray-700">{title}</h1>
            <div className="peer-absolute top-0 h-0.5 bg-green-300 w-[25%]"></div>
            <div className="space-y-5 mt-10 ">
                {
                    filterProducts && filterProducts.splice(0, 3).map((item, idx) => (
                        <div key={idx} className="flex gap-2 items-center w-[95%] hover:-translate-y-1 duration-500 group">
                            <img
                                className="w-36 border border-gray-200 rounded-md"
                                src={item.image1} alt="" />

                            <div>
                                <h1 className=" font-[quicksand] font-bold text-gray-600 group-hover:text-green-600 duration-300"
                                >{item.shortMsg}</h1>
                                    <RaringWithP rating={item.rating} />
                                <p
                                    className="text-xl mt-3 font-[quicksand] font-semibold leading-4 text-green-600 tracking-tight"
                                >${item.currentPrice}
                                    <span
                                        className="text-sm  pl-3 line-through text-gray-400"
                                    >${item.previousPrice}</span></p>
                            </div>
                        </div>
                    ))
                }
            </div>
        </div>
    )
}

export default SingleCategory
