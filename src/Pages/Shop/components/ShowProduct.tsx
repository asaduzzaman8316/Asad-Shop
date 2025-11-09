
import { useNavigate } from 'react-router'
import RaringWithP from '../../../Compomemts/Share/RaringWithP'

function ShowProduct({id, src, title, currentPrice }: {id:number, src: string, title: string, currentPrice: number }) {
    const  navigate = useNavigate()
    return (
        <div
        onClick={()=> navigate(`/shop/${id}`)}
         className='flex items-center gap-2 border-b border-b-gray-200 py-2'>
            <img
            className='w-26 border border-gray-100 rounded-md'
             src={src} alt="" />
            <div className='w-[80%]'>
                <h1 className='font-[quicksand] font-semibold text-green-600 hover:text-yellow-500 duration-500'>{title}</h1>
                <p className='text-gray-400'>${currentPrice}</p>
                <RaringWithP /> 
            </div>
        </div>
    )
}

export default ShowProduct
