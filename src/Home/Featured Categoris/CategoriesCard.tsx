
import useData from "../../Compomemts/Share/useData"
import AOS from 'aos';
import 'aos/dist/aos.css'
AOS.init()
type categories = {
    id: number,
    name: string,
    image: string,
    color: string,
    totalItems: number
}
function CategoriesCard() {

    const [categories] = useData()



    return (
        <div className="grid grid-cols-10 gap-3 mt-10 h-48  overflow-hidden">
            {
                categories.map((item: categories, idx) => (
                    <div data-aos='fade-up' data-aos-delay={`${100*item.id}`} key={idx} className="flex flex-wrap  gap-5  items-center justify-center  ">

                        <div className={`p-4 text-center ${item.color} font-[quicksand] rounded-lg group border border-white hover:border-green-200 duration-500 transition-all hover:shadow-md  hover:rounded-lg`} >
                            <img
                                className="hover:scale-105 duration-500 ease-in-out"
                                src={item.image} alt="" />
                            <div>
                                <h1 className=' text-gray-800 font-semibold line-clamp-1 group-hover:text-green-600 duration-300'>{item.name}</h1>
                                <p className='text-sm text-gray-600 '>{item.totalItems} Items</p>
                            </div>
                        </div>
                    </div>
                ))
            }
        </div>
    )
}

export default CategoriesCard
