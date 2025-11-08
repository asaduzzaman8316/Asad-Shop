import { Link } from "react-router"

import AOS from 'aos';
import 'aos/dist/aos.css'
AOS.init()

function SixCard() {
    const cardtile = ["Best Prices & Offers", 'Wide Assortment', 'Free Delivery', 'Easy Returns', '100% Satisfaction', 'Great Daily Deal']

    return (
        <div className='grid lg:grid-cols-3   gap-8 py-16'>
            {cardtile.map((item: string, idx: number) => (
                <div
                data-aos='zoom-in-up'
                 key={idx} className='flex gap-10 flex-col items-center p-8 border rounded-md border-gray-300 hover:shadow-lg'>
                    <div>
                        <img
                            width={80}
                            height={100}
                            src={`/icon-${idx+1}.svg`}
                            alt='icon01'
                        />
                    </div>
                    <div className='flex flex-col items-center gap-8'>
                        <h1 className='about-hero__title text-2xl font-semibold'>{item}</h1>
                        <p className='text-gray-500 text-center'>There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form</p>
                        <Link
                            className='text-lg hover:underline text-green-500 hover:text-yellow-500 duration-500 transition-all'
                            to={'#'}>
                            Read more
                        </Link>
                    </div>
                </div>
            ))}

        </div>
    )
}

export default SixCard
