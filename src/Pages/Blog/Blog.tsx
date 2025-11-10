import { useNavigate } from "react-router"
import useBlog from "../../Compomemts/Share/useBlog"
import SubScribe from "../../Compomemts/Share/Subscribe"
import LastService from "../../Compomemts/Share/LastService"
import AOS from 'aos';
import 'aos/dist/aos.css'
import useData from "../../Compomemts/Share/useData";
import Loader from "../../Loader/Loader";
AOS.init()
type blogType = {
    description: string,
    imageUrl: string,
    productName: string,
    title: string,
    postId: number
}
function Blog() {
    const { blog } = useBlog()
    const navigate = useNavigate()
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
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8 pt-16 container mx-auto px-4">
                {
                    blog && blog.map((item: blogType, idx) => (
                        <div data-aos="zoom-in-right" key={idx} className="space-y-5 p-4 text-center border rounded-md border-gray-200">
                            <img
                                onClick={() => navigate(`/blog/${item.postId}`)}
                                src={item.imageUrl} alt="" />
                            <div>
                                <h1 className="text-2xl font-semibold text-gray-800 line-clamp-2">{item.title}</h1>
                                <p className="text-gray-400 mt-2 line-clamp-3">{item.description}</p>
                            </div>
                            <div>
                                <button
                                    onClick={() => navigate(`/shop/${item.postId}`)}
                                    className="bg-[#1a5c0b] text-white px-10 py-2 rounded-md text-lg font-[quicksand] font-semibold hover:-translate-y-1 duration-500">{item.productName}</button>
                            </div>
                        </div>
                    ))
                }
            </div>
            <SubScribe src="/banner-9.png" />
            <LastService />
        </div>
    )
}

export default Blog
