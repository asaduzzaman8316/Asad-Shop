import AOS from 'aos';
import 'aos/dist/aos.css'
AOS.init()
function SubScribe({ src }: { src: string }) {
    return (
        <div data-aos='fade-up-left' className='lg:w-[80%] container relative mx-auto my-16 '>

            <div className='relative'>
                <img
                    className="rounded-2xl w-full h-36 lg:h-100"
                    src="/banner-10.png" alt="" />

                <div className='absolute w-32 lg:w-100  bottom-0 right-2 lg:right-8 '>
                    <img width={500} src={src} alt="" />
                </div>
            </div>
            <div className='absolute top-0 left-0 p-4 lg:p-24'>
                <h1 className='lg:text-5xl text-gray-700 font-semibold pb-5'>Stay home & get your daily
                    <br />
                    needs from our shop</h1>
                <p className='text-gray-600 lg:text-base text-xs'>Start You&&apos;r Daily Shopping with <span className='text-green-600'>Nest Mart</span></p>

                <div className='lg:pt-8 flex items-center mt-2  '>
                    <input
                        className='outline-none lg:px-8 lg:py-5 w-40 px-1 lg:w-90 bg-white rounded-full focus:ring-2 focus:ring-green-600 text-black '
                        type="email" name='email' placeholder='Your email address' />
                    <button
                        className='lg:p-5 text-xs px-2 py-1 -translate-x-5  lg:text-base lg:px-10 bg-[#3BB77E] text-white rounded-full font-semibold lg:-translate-x-14'>
                        Subscribe
                    </button>

                </div>
            </div>
        </div>
    )
}

export default SubScribe
