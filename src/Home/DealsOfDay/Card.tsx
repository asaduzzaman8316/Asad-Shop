import PriceWithButton from "../../Compomemts/Share/PriceWithButton"
import RaringWithP from "../../Compomemts/Share/RaringWithP"
import AOS from 'aos';
import 'aos/dist/aos.css'
AOS.init()
interface data {
    title: string,
    rating: number,
    brand: string,
    currentPrice: number,
    preprice: number,
    src: string
}
function Card({ props }: { props: data }) {
    return (
        <div>
            <div data-aos='flip-right'  className="relative">
                <img
                    className="rounded-md"
                    src={props.src} alt="" />
                <div className="absolute flex flex-col items-center w-[90%] mx-auto -bottom-20 right-5">
                    <div className="flex  gap-3 ">
                        <div className="bg-white  size-14 rounded-md  text-center ">
                            <h1 className="text-lg text-green-600">00</h1>
                            <p className="text-gray-500">Days</p>
                        </div>
                        <div className="bg-white size-14 rounded-md text-center ">
                            <h1 className="text-lg text-green-600">00</h1>
                            <p className="text-gray-500">Hours</p>
                        </div>
                        <div className="bg-white size-14 rounded-md text-center ">
                            <h1 className="text-lg text-green-600">00</h1>
                            <p className="text-gray-500">Mins</p>
                        </div>
                        <div className="bg-white size-14 rounded-md text-center ">
                            <h1 className="text-lg text-green-600">00</h1>
                            <p className="text-gray-500">Sec</p>
                        </div>
                    </div>
                    <div className="bg-white shadow-md mt-5 p-5 rounded-lg">
                        <div className="space-y-2">
                            <h1 className="text-lg text-gray-800 font-[quicksand] font-semibold leading-5">{props.title}</h1>
                            <RaringWithP rating={props.rating} />
                            <p className="text-sm text-gray-400">By <span className="text-green-600">{props.brand}</span></p>
                        </div>
                        <PriceWithButton id={0} currentPrice={props.currentPrice} previousPrice={props.preprice} />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Card
