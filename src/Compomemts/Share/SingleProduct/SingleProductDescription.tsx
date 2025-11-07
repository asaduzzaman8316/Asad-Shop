import { useState } from "react";

import useProduct from "../useProduct";
import RaringWithP from "../RaringWithP";
import { IoLocationOutline } from "react-icons/io5";
import { FaHeadset } from "react-icons/fa";
import AOS from 'aos';
import 'aos/dist/aos.css'
AOS.init()

interface destype {
    paragraph1: string,
    paragraph2: string,
    bulletPoints: string[],
    extraParagraph: string
}
interface additional {
    standUp: string,
    folded: string,
    weight: string,
    color: string,
    size: string
}
interface packageAndDele {
    paragraph1: string,
    paragraph2: string
}
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
    description: destype,
    packagingAndDelivery: packageAndDele,
    suggestedUse: string,
    otherIngredients: string,
    additionalInfo: additional,
    vendor: vendordata
}
interface ProductHook {
    description: detesls[]
}

const formatKey = (key: string): string => {
    return key.replace(/([A-Z])/g, ' $1').replace(/^./, str => str.toUpperCase());
};


function SingleProductDescription({ id }: { id: string | undefined }) {
    const { description } = useProduct() as ProductHook;
    const [btn, setBtn] = useState(0);

    const filterData: detesls | undefined = id && description
        ? description.find((item: detesls) => item.id === id)
        : undefined;

    const additionalInfoArray: [string, string][] = filterData?.additionalInfo
        ? Object.entries(filterData.additionalInfo)
        : [];



    return (
        <div className="border rounded-xl border-gray-200 mt-6 mx-4 p-8 ">
            <div >
                <div className="flex gap-10 mb-8">
                    <div
                        onClick={() => setBtn(0)}
                        className={`border ${btn === 0 && 'text-green-600'} border-gray-200 hover:text-green-600 hover:-translate-y-1 duration-500 px-4 py-1.5 text-gray-500 font-bold rounded-full cursor-pointer`}>Description</div>
                    <div
                        onClick={() => setBtn(1)}
                        className={`border ${btn === 1 && 'text-green-600'} border-gray-200 hover:text-green-600 hover:-translate-y-1 duration-500 px-4 py-1.5 text-gray-500 font-bold rounded-full cursor-pointer`}>Additional info</div>
                    <div
                        onClick={() => setBtn(2)}
                        className={`border ${btn === 2 && 'text-green-600'} border-gray-200 hover:text-green-600 hover:-translate-y-1 duration-500 px-4 py-1.5 text-gray-500 font-bold rounded-full cursor-pointer`}>Vendor</div>
                </div>

                <div  className={`${btn === 0 ? 'block' : 'hidden'}`}>
                    <div className="space-y-7 border-b pb-8 border-gray-200 ">
                        <p className="text-gray-600">{filterData?.description.paragraph1}</p>
                        <ol className="list-disc text-gray-500 pl-4">
                            {
                                filterData?.description.bulletPoints.map((item, idx) => (
                                    <li key={idx}>{item}</li>
                                ))
                            }
                        </ol>
                    </div>

                    <div className="text-gray-600 space-y-3 pt-5">
                        <p>{filterData?.description.paragraph2}</p>
                        <p>{filterData?.description.extraParagraph}</p>
                    </div>
                    <div>
                        <h1 className="text-2xl text-gray-700 py-9 border-b border-gray-200 font-bold">Packaging And Delivery</h1>
                        <p className="text-gray-600 pb-2 ">{filterData?.packagingAndDelivery.paragraph1}</p>
                        <p className="text-gray-600 ">{filterData?.packagingAndDelivery.paragraph2}</p>
                    </div>

                    <div className="py-4">
                        <h1 className="text-xl text-gray-700 py-4 font-bold">Suggeseted Use</h1>
                        <p className="text-gray-600 px-2">{filterData?.suggestedUse}</p>
                    </div>

                    <div>
                        <h1 className="text-xl text-gray-700 py-4 font-bold">Other Ingredients</h1>
                        <p className="text-gray-600 px-2">{filterData?.otherIngredients}</p>
                    </div>
                </div>


                <div className={`${btn === 1 ? 'block' : 'hidden'}`}>
                    <h3 className="text-2xl text-gray-700 py-4 font-bold"> Additional Product Specifications</h3>
                    <table className="w-full max-w-80">
                        <thead>
                            <tr className="bg-gray-100">
                                <th className=" text-start p-2 border border-gray-200">Attribute</th>
                                <th className="border border-gray-200 p-2 text-start text-green-600">Value</th>
                            </tr>
                        </thead>
                        <tbody>
                            {additionalInfoArray.map(([key, value], idx) => (
                                <tr key={idx}>
                                    <td className="font-semibold p-2 border-gray-200 border ">
                                        {formatKey(key)}
                                    </td>
                                    <td className="border text-green-600 border-gray-200 p-2">
                                        {value}
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>

                <div className={`${btn === 2 ? 'block' : 'hidden'}`}>
                    <h3 className="text-2xl text-gray-700 py-4 font-bold"> Vendor Information</h3>
                    {filterData?.vendor ? (
                        <div className="space-y-3 text-gray-600">
                            <div className="flex gap-3 items-center">
                                <img
                                    className="w-12 rounded-full"
                                    src={filterData.vendor.image} alt="" />
                                <div>
                                    <p className="text-green-600 font-semibold">{filterData.vendor.name}</p>
                                    <RaringWithP  rating={filterData.vendor.rating}/>
                                </div>
                            </div>
                            <div className="flex gap-3 items-center">
                                <span className="text-green-600"><IoLocationOutline /></span>
                                <p className="text-sm"><b>Address:</b>{filterData.vendor.address}</p>
                            </div>
                            <div className="flex gap-3 items-center">
                                <span className="text-green-600"><FaHeadset /></span>
                                <p className="text-sm"><b>Address:</b>{filterData.vendor.contact}</p>
                            </div>
                            <p className="py-6">{filterData.vendor.message}</p>
                        </div>
                    ) : (
                        <p className="text-gray-500">Vendor information is not available.</p>
                    )}
                </div>

            </div>
        </div>
    )
}

export default SingleProductDescription