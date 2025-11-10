
import SubScribe from '../../Compomemts/Share/Subscribe'
import LastService from '../../Compomemts/Share/LastService'
import useProduct from '../../Compomemts/Share/useProduct';
import RaringWithP from '../../Compomemts/Share/RaringWithP';
import { IoLocationOutline } from 'react-icons/io5';
import { FaHeadset } from 'react-icons/fa';
import AOS from 'aos';
import 'aos/dist/aos.css'
import Loader from '../../Loader/Loader';
import useData from '../../Compomemts/Share/useData';
AOS.init()
interface vendordata {
    name: string,
    image: string,
    address: string,
    contact: string,
    rating: number,
    message: string
}
interface detesls {
    id: string,
    vendor: vendordata
}
interface ProductHook {
    description: detesls[]
}
function Vendor() {
    const { description } = useProduct() as ProductHook
    const {isLoading} = useData()

    if (isLoading) {
        return (
            <div className="flex justify-center items-center w-full h-screen">
                <Loader />
            </div>
        )
    }
    return (
        <div>
            <div className='container mx-auto px-4 lg:px-0 py-16'>
                <div className='grid lg:grid-cols-5 gap-5 items-center justify-between'>
                    {
                        description && description.map(item => (
                            <div data-aos='fade-up' key={item.id} className="space-y-3 border border-gray-200 rounded-md p-2 h-60 text-gray-600">
                                <div className="flex gap-3 items-center">
                                    <img
                                        className="w-12 rounded-full"
                                        src={item.vendor.image} alt="" />
                                    <div>
                                        <p className="text-green-600 font-semibold">{item.vendor.name}</p>
                                        <RaringWithP rating={item.vendor.rating} />
                                    </div>
                                </div>
                                <div className="flex gap-3 items-center">
                                    <span className="text-green-600"><IoLocationOutline /></span>
                                    <p className="text-sm"><b>Address:</b>{item.vendor.address}</p>
                                </div>
                                <div className="flex gap-3 items-center">
                                    <span className="text-green-600"><FaHeadset /></span>
                                    <p className="text-sm"><b>Address:</b>{item.vendor.contact}</p>
                                </div>
                                <p className="py-6">{item.vendor.message}</p>
                            </div>
                        ))
                    }
                </div>
            </div>
            <SubScribe src='/banner-9.png' />
            <LastService />
        </div>
    )
}

export default Vendor
