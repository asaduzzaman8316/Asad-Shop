import AOS from 'aos';
import 'aos/dist/aos.css'
AOS.init()
function SubScribe({ src }: { src: string }) {
    return (
        <div data-aos='fade-up-left' className='w-[80%]  mx-auto my-16 '>

            <div className='relative'>
                <img
                    className="rounded-2xl"
                    src="/banner-10.png" alt="" />

                <div className='absolute bottom-8 right-8 '>
                    <img width={500} src={src} alt="" />
                </div>
            </div>
            <div className='absolute top-0 left-0 p-24'>
                <h1 className='text-5xl text-gray-700 font-semibold pb-5'>Stay home & get your daily<br />
                    needs from our shop</h1>
                <p className='text-gray-600'>Start You&&apos;r Daily Shopping with <span className='text-green-600'>Nest Mart</span></p>

                <div className='pt-8'>
                    <input
                        className='outline-none px-8 py-5 w-90 bg-white rounded-full focus:ring-2 focus:ring-green-600 text-black '
                        type="email" name='email' placeholder='Your email address' />
                    <button
                        className='p-5 px-10 bg-[#3BB77E] text-white rounded-full font-semibold -translate-x-14'>
                        Subscribe
                    </button>

                </div>
            </div>
        </div>
    )
}

export default SubScribe
