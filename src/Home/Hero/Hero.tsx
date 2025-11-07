import AOS from 'aos';
import 'aos/dist/aos.css'
AOS.init()
function Hero() {
    return (
        <div data-aos='zoom-out' className="lg:w-[80%]  relative 2xl:container mx-auto mb-20 mt-30">
            <img
                className="relative rounded-2xl"
                src="/slider-1.png" alt="" />
            <div className="absolute top-8 p-16 w-[40%] space-y-5">
                <h1 className="text-6xl font-bold text-gray-700">Fresh Vegetables Big discount</h1>
                <p className="text-xl font-semibold text-gray-500">Save up to 50% the daily off on your first order</p>
                <div>
                    <input
                        className="outline-none  bg-white py-4 px-6 rounded-full w-100"
                        type="email" placeholder="Your email address" />
                    <button className="text-lg font-semibold text-white bg-[#3BB77E] py-4 px-6 rounded-full absolute right-20">Subscribe</button>
                </div>
            </div>
        </div>
    )
}

export default Hero
