import { useState } from "react"
import Category from "../../../Pages/Shop/components/Category"
import FillByPrice from "../../../Pages/Shop/components/FillByPrice"
import NewProduct from "../../../Pages/Shop/components/NewProduct"
import Card from "../../../Pages/Shop/components/Card"
import Top from "./Top"
import { useParams } from "react-router"


function SingleProduct() {
    const {id} = useParams()
    const [, setCId] = useState<number>(0)
    return (
        <div className="mx-auto lg:w-[70%] py-16">
            <div className="grid grid-cols-7 ">
                <div className="col-span-5">
                    <Top id={id} />
                </div>
                <div className='col-span-2 mt-8  space-y-8'>

                    <Category setCid={setCId} />
                    <FillByPrice />
                    <NewProduct />
                    <Card />
                </div>
            </div>
        </div>
    )
}

export default SingleProduct
