import AOS from 'aos';
import 'aos/dist/aos.css'
import Loader from '../../Loader/Loader';
AOS.init()
function Hero() {
    return (
        <div data-aos='zoom-out' className="relative container mx-auto lg:mb-20 mt-8 ">
            <Loader />
            <div className="relative rounded-2xl overflow-hidden">
                <img
                    className="w-full h-auto block"
                    src="/slider-1.png" alt="" />

                <div className="absolute inset-0 flex items-start lg:items-center">
                    <div className="mt-1 sm:mt-8 lg:mt-0 ml-1 sm:ml-8 md:ml-12 lg:ml-16 bg-transparent p-4 sm:p-6 md:p-12 w-full sm:w-[70%] md:w-[60%] lg:w-[40%]">
                        <h1 className="text-base md:text-4xl lg:text-6xl font-bold text-gray-700">Fresh Vegetables Big discount</h1>
                        <p className="mt-3 text-base sm:text-lg md:text-xl font-semibold text-gray-500">Save up to 50% the daily off on your first order</p>

                        <div className="mt-4 flex flex-col sm:flex-row items-stretch sm:items-center gap-3">
                            <input
                                className="flex-1 outline-none bg-white py-3 px-4 rounded-full text-sm"
                                type="email" placeholder="Your email address" />
                            <button className="text-base font-semibold text-white bg-[#3BB77E] py-3 px-6 rounded-full whitespace-nowrap">Subscribe</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Hero
