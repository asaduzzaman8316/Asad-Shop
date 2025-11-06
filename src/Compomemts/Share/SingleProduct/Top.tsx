import { CiHeart } from "react-icons/ci";
import RaringWithP from "../RaringWithP";
import useProduct from "../useProduct"
import { TbArrowsCross } from "react-icons/tb";
import { IoCartOutline } from "react-icons/io5";
import SingleProductDescription from "./SingleProductDescription";
interface detesls {
    id: string,
    currentPrice: number,
    image1: string,
    name: string,
    stockStatus: string,
    discountPercent: number,
    previousPrice: number,
    shortMsg: string,
    sku: string,
    mfgDate: string,
    type: string,
    tags: string[],
    life: string,
    stockSold: number,
}
interface ProductHook {
    description: detesls[]
}
function Top({ id }: { id: string | undefined }) {
    const { description } = useProduct() as ProductHook;
    const filterData: detesls | undefined = id && description
        ? description.find((item: detesls) => item.id === id)
        : undefined;

    return (
        <div>
            {
                filterData ? (
                    <>
                        <div className=" flex w-full gap-8 p-4 font-[quicksand] font-semibold">
                            <div className="w-[50%] border border-gray-200 rounded-xl">
                                <img src={filterData.image1} alt="" />
                            </div>
                            <div className="w-[50%] ">
                                <div className="">
                                    <p className="bg-red-100 text-red-500 text-sm  rounded-md font-bold w-18 py-1 text-center mb-4">{filterData.stockStatus}</p>
                                    <h1 className="text-4xl font-bold text-gray-800 mb-4">{filterData.name}</h1>
                                    <RaringWithP />
                                    <div className=" py-5 flex items-center gap-3">
                                        <p className="text-5xl font-bold text-green-600">${filterData.currentPrice}</p>
                                        <div>
                                            <p className="text-xs   text-yellow-500">{filterData.discountPercent}% off</p>
                                            <p className="text-3xl leading-5 text-gray-400 line-through">${filterData.previousPrice}</p>
                                        </div>
                                    </div>
                                    <p className="text-gray-400 text-sm font-normal">{filterData.shortMsg}</p>
                                    <div className=" flex gap-2 items-center my-4
                                ">
                                        <p className="text-gray-400 text-sm">Size/Weight:</p>
                                        <div className="flex gap-3">
                                            <p className="hover:bg-[#3BB77E] duration-500 hover:text-white px-3 py-1 rounded-sm text-gray-600 ">50g</p>
                                            <p className="hover:bg-[#3BB77E] duration-500 hover:text-white px-3 py-1 rounded-sm text-gray-600">100g</p>
                                        </div>
                                    </div>
                                    <div className=" pb-16 flex items-center gap-4">
                                        <div>
                                            <input
                                                className="border outline-none rounded-md text-green-500 w-24 px-2 py-3 "
                                                type="number" />
                                        </div>
                                        <div className="border flex items-center gap-2 px-4 py-3 rounded-md bg-[#3BB77E] text-white text-lg cursor-pointer hover:bg-[#2cab67]">
                                            <IoCartOutline />
                                            <button>Add to Cart</button>
                                        </div>
                                        <div className="border border-gray-200 size-12 flex justify-center items-center text-gray-400 hover:bg-[#3BB77E] hover:text-white hover:-translate-y-1 duration-500 rounded-md text-2xl"><CiHeart /></div>
                                        <div className="border border-gray-200 size-12 flex justify-center items-center text-gray-400 hover:bg-[#3BB77E] hover:text-white hover:-translate-y-1 duration-500 rounded-md text-2xl"><TbArrowsCross /></div>
                                    </div>

                                    <div className=" space-y-5">
                                        <div className="  flex items-center gap-5 text-xs tracking-tight">
                                            <div className="flex-1 text-gray-500 "><p>Type: <span className="text-green-600">{filterData.type}</span></p></div>
                                            <div className="flex-1 text-gray-500 "><p>SKU: <span className="text-green-600">{filterData.sku}</span></p></div>
                                        </div>
                                        <div className="  flex items-center gap-5 text-xs tracking-tight">
                                            <div className="flex-1 text-gray-500 "><p>MFG: <span className="text-green-600">{filterData.mfgDate}</span></p></div>
                                            <div className="flex-1 text-gray-500 "><p>Tags:
                                                {
                                                    filterData.tags.slice(0, 3).map((item, idx) => (
                                                        <span className="text-green-600 px-1" key={idx}>{item}</span>
                                                    ))
                                                }
                                            </p></div>
                                        </div>
                                        <div className="  flex items-center gap-5 text-xs tracking-tight">
                                            <div className="flex-1 text-gray-500 "><p>LIFE: <span className="text-green-600">{filterData.life}</span></p></div>
                                            <div className="flex-1 text-gray-500 "><p>Stock: <span className="text-green-600">{filterData.stockSold} Items in Stock</span></p></div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <SingleProductDescription  id={id}/>
                    </>
                ) : (
                    <p>hello</p>
                )
            }
        </div>
    )
}

export default Top
