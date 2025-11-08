import Heading from "../../../../Compomemts/Share/Heading"
import AOS from 'aos';
import 'aos/dist/aos.css'
AOS.init()

function Right() {
  return (
    <div data-aos='fade-left' className='lg:w-[50%] w-full mt-10 lg:mt-0 space-y-10'>
      <h1 className='about-hero__title text-4xl text-gray-400 font-semibold'>Our Perfomance</h1>
      <Heading size='text-6xl' title='Your Partner for e-commerce grocery solution' />
      <p className='text-gray-600'>Ed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto
      </p>
      <p className='text-gray-600'>Pitatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia</p>
    </div>
  )
}

export default Right
