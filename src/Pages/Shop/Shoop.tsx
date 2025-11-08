
import { useState } from 'react'
import LastService from '../../Compomemts/Share/LastService'
import SubScribe from '../../Compomemts/Share/Subscribe'
import DealsOfDay from '../../Home/DealsOfDay/DealsOfDay'
import ProductCard from '../../Home/Popular Products/ProductCard'
import Card from './components/Card'
import Category from './components/Category'
import FillByPrice from './components/FillByPrice'
import NewProduct from './components/NewProduct'

function Shoop() {
    const [cid, setCid] = useState<number>(0)
    return (
        <div className='container mx-auto'>
            <div className='grid grid-cols-6 w-[80%] mx-auto '>
                <div className='lg:col-span-5 col-span-6  mr-4'>
                    <div>
                        <p className='text-gray-400 pt-8'>We found <span className='text-green-600'>20</span> items for you!</p>
                    </div>
                    <div className='grid lg:grid-cols-5 gap-5 px-2'>
                        <ProductCard id={cid} />
                    </div>
                    <div>
                        <DealsOfDay />
                    </div>
                </div>
                <div className='lg:col-span-1 col-span-6 mt-8  space-y-8'>
                    <Category setCid={setCid}/>
                    <FillByPrice />
                    <NewProduct />
                    <Card />
                </div>

            </div>
            <SubScribe src='https://nest-frontend-v6.vercel.app/assets/imgs/banner/banner-9.png' />
            <LastService />
        </div>
    )
}

export default Shoop
