
import Category from "../../../Pages/Shop/components/Category"
import FillByPrice from "../../../Pages/Shop/components/FillByPrice"
import NewProduct from "../../../Pages/Shop/components/NewProduct"
import Card from "../../../Pages/Shop/components/Card"
import Top from "./Top"
import { useParams } from "react-router"
import SubScribe from "../Subscribe"
import LastService from "../LastService"


function SingleProduct() {
    const { id } = useParams()
    return (
        <>
            <div className="mx-auto lg:w-[70%] py-16">
                <div className="grid grid-cols-7 ">
                    <div className="lg:col-span-5 col-span-7">
                        <Top id={id} />

                    </div>
                    <div className='lg:col-span-2 col-span-7 w-[80%]  mx-auto mt-8  space-y-8'>

                        <Category  />
                        <FillByPrice />
                        <NewProduct />
                        <Card />
                    </div>
                </div>
            </div>
            <SubScribe src="/banner-9.png" />
            <LastService />
        </>
    )
}

export default SingleProduct
