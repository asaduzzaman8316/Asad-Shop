import {  useState } from "react"
import ProductCard from "./ProductCard"
import useData from "../../Compomemts/Share/useData"

type categories = {
    id: number,
    name: string,
    image: string,
    color: string,
    totalItems: number
}
function PopularProductsHead() {
    // fetch data 
    const {categories} = useData()
    
    const [cid, setCid] = useState(0)

    const [btn, setBtn] = useState(0)
    function handleClick(id:number):void{
        setCid(id)
        setBtn(id)
    }
    function handleAll(){
        setCid(0)
        setBtn(0)
    }

    return (
        <div>
            <div className="flex justify-between items-center">
                <h1 className='font-[quicksand] font-bold text-3xl text-gray-700 '>Popular Products</h1>
                <div className="gap-6 overflow-hidden items-center   w-150     flex font-[quicksand] font-bold text-gray-600">
                    <button
                    className={`${btn === 0 && 'text-green-600'} cursor-pointer`}
                    onClick={handleAll}
                    >All</button>
                    {
                        categories.map((item: categories, idx) => (
                            <button 
                                onClick={()=>handleClick(idx+1)}
                                key={idx}
                                className={`whitespace-nowrap ${btn ===idx+1 && 'text-green-600'} cursor-pointer hover:text-green-600 hover:-translate-y-1 duration-300`}
                            >{item.name}</button>
                        ))
                    }
                </div>
            </div>
            <div className="grid grid-cols-5 gap-5">
                <ProductCard id={cid} />
            </div>
        </div>
    )
}

export default PopularProductsHead
