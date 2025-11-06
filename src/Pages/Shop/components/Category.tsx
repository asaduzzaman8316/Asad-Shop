import { useNavigate } from "react-router"
import useData from "../../../Compomemts/Share/useData"

interface CategoryProps {
    setCid: React.Dispatch<React.SetStateAction<number>>
}
type data = {
    id: number,
    name: string,
    totalItems: number
}
const Category: React.FC<CategoryProps> = ({ setCid }) => {
    const [categories] = useData()
    const navigate = useNavigate()

    function handlerClick(e: number) {
        setCid(e)
        navigate('/shop')
    }
    return (
        <>
            <div className='border-gray-200 p-4 shadow-xl border rounded-md '>
                <h1 className='text-2xl peer relative font-[quicksand] font-bold text-gray-700 border-b border-b-gray-300 pb-4'>Category</h1>
                <div className='peer-absolute w-[25%] bottom-0.5  h-0.5 bg-green-500'></div>

                <div className='pt-5 space-y-4'>
                    {
                        categories && categories.slice(0, 6).map((item: data, idx) => (
                            <div
                                key={idx}
                                onClick={() => handlerClick(item.id)}
                                className='flex justify-between border hover:scale-105 duration-500 cursor-pointer border-gray-200 px-4 py-2 rounded-md '>
                                <div className="flex items-center text-start gap-5">
                                    <img
                                        width={25}
                                        src={`https://nest-frontend-v6.vercel.app/assets/imgs/theme/icons/category-${idx + 1}.svg`} alt="" />
                                    <h1 className='text-gray-600 text-sm'>{item.name}</h1>
                                </div>
                                <div className='text-sm text-gray-600 bg-green-200 size-7 rounded-full flex justify-center items-center'>{item.totalItems}</div>
                            </div>
                        ))
                    }
                </div>
            </div>
        </>
    )
}

export default Category



{/* <CategoryCards setCid={setCid} src='' />
                    <CategoryCards setCid={setCid} src='https://nest-frontend-v6.vercel.app/assets/imgs/theme/icons/category-2.svg' />
                    <CategoryCards setCid={setCid} src='https://nest-frontend-v6.vercel.app/assets/imgs/theme/icons/category-3.svg' />
                    <CategoryCards setCid={setCid} src='https://nest-frontend-v6.vercel.app/assets/imgs/theme/icons/category-4.svg' />
                    <CategoryCards setCid={setCid} src='https://nest-frontend-v6.vercel.app/assets/imgs/theme/icons/category-5.svg' /> */}