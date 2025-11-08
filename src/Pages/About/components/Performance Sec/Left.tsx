
import AOS from 'aos';
import 'aos/dist/aos.css'
AOS.init()
function Left() {
    return (
        <div data-aos='fade-right' className='lg:w-[50%] lg:mr-8'>

            <img
                width={800}
                height={190}
                src={'/about-5.png'}
                alt=''
            />

        </div>
    )
}

export default Left
