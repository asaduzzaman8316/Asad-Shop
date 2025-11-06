
import ShowProduct from "./ShowProduct"
import AOS from 'aos';
import 'aos/dist/aos.css'
import useData from "../../../Compomemts/Share/useData";
AOS.init()
type productss = {
    name: string,
    image1: string,
    currentPrice: number,
    label: string,
}
function NewProduct() {
    const [,products] = useData()

    const filterProduct = products.filter((item: productss) => item.label === 'new')

    return (
        <div data-aos='fade-left' className='border-gray-200 p-4 shadow-xl border rounded-md '>
            <h1 className='text-2xl peer relative font-[quicksand] font-bold text-gray-700 border-b border-b-gray-300 pb-4'>New Products</h1>
            <div className='peer-absolute w-[25%] bottom-0.5  h-0.5 bg-green-500'></div>

            {
                filterProduct.splice(0, 3).map((item:productss, idx) =>(
                    <ShowProduct key={idx} src={item.image1} title={item.name} currentPrice={item.currentPrice} />
                ))
            }
        </div>
    )
}

export default NewProduct
