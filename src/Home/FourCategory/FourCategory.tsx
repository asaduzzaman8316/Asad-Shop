
import SingleCategory from "./SingleCategory"
import useData from "../../Compomemts/Share/useData"

function FourCategory() {
    const {products} = useData()
    return (
        <div className='2xl:container lg:w-[80%] mx-auto mt-30'>
            <div className='grid grid-cols-4 gap-5'>
                <SingleCategory title="Top Selling" products={products} />
                <SingleCategory title="Trending Products" products={products} />
                <SingleCategory title="Recently Added" products={products} />
                <SingleCategory title="Top Rated" products={products} />
            </div>
        </div>
    )
}

export default FourCategory
