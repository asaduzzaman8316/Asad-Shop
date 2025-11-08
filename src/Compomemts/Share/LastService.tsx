import AOS from 'aos';
import 'aos/dist/aos.css'
AOS.init()
const cardData = [
    {
        title: "Best prices & offers",
        bio: "Orders $50 or more"
    },
    {
        title: "Free delivery",
        bio: "24/7 amazing services"
    },
    {
        title: "Great daily deal",
        bio: "When you sign up"
    },
    {
        title: "Wide assortment",
        bio: "Mega Discounts"
    },
    {
        title: "Easy returns",
        bio: "Within 30 days"
    }
]
function LastService() {
    return (
        <div className=' mx-auto flex flex-col lg:flex-row gap-5 justify-between font-[quicksand] font-semibold container'>
            {
                cardData.map((item, idx) => (
                    <div 
                    data-aos='flip-down'
                    key={idx}
                        className='bg-gray-100 rounded-md flex items-center gap-5 p-5'
                    >
                        <img
                            className='w-14 hover:-translate-y-2 duration-500'
                            width={70}
                            height={20}
                            src={`https://nest-frontend-v6.vercel.app/assets/imgs/theme/icons/icon-${idx + 1}.svg`}
                            alt='icon'
                        />
                        <div className='space-y-3'>
                            <h1 className='text-lg '>{item.title}</h1>
                            <p className='text-gray-500'>{item.bio}</p>
                        </div>
                    </div>
                ))
            }
        </div>
    )
}

export default LastService
