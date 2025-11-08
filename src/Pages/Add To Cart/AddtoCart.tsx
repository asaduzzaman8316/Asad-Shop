import useData from '../../Compomemts/Share/useData'
import type { RootState } from '../../Redux/store'
import { useDispatch, useSelector } from 'react-redux'
import { RiDeleteBin6Line } from "react-icons/ri";
import RaringWithP from '../../Compomemts/Share/RaringWithP';
import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router';
import { IoExitOutline } from 'react-icons/io5';
import { confirmAlert } from 'react-confirm-alert';
import "react-confirm-alert/src/react-confirm-alert.css";
import { productIdEmpty, singleProductDelete } from '../../Cart/counterSlice';
import { FaArrowLeft } from 'react-icons/fa';

type ProductData = {
    id: number,
    name: string,
    image1: string,
    currentPrice: number,
    rating: number
}

type CartItem = ProductData & { quantity: number }

function AddtoCart() {
    const [animatin, setAnimation] = useState(false)
    const [btnText, setBtnText] = useState("Proced To CheckOut")
    const count = useSelector((state: RootState) => state.counter.value)
    const totalProductWithId = useSelector((state: RootState) => state.counter.productId) as number[]
    const { products } = useData() as { products: ProductData[] }
    const [cartItems, setCartItems] = useState<CartItem[]>([])
    const [subTotal, setSubtotal] = useState(0)
    const navigate = useNavigate()
    const dispatch = useDispatch()

    useEffect(() => {
        const newCartData: CartItem[] = products
            .filter((p: ProductData) => totalProductWithId.includes(p.id))
            .map((p: ProductData) => ({
                ...p,
                quantity: totalProductWithId.filter(id => id === p.id).length
            }))
        setCartItems(newCartData)
    }, [products, totalProductWithId])

    useEffect(() => {
        const total = cartItems.reduce((acc, it) => acc + (Number(it.currentPrice) * Number(it.quantity || 0)), 0)
        setSubtotal(Number(total.toFixed(2)))
    }, [cartItems])

    function handleQuantityChange(id: number, updatedQuantity: number) {
        const qty = Number(updatedQuantity) || 1
        setCartItems(prev =>
            prev.map(item =>
                item.id === id ? { ...item, quantity: Math.max(1, qty) } : item
            )
        )
    }
    function deleteAll() {
        confirmAlert({
            title: "Confirm to Delete All",
            message: "Are you sure to do this.",
            buttons: [
                {
                    label: "Yes",
                    onClick: () => dispatch(productIdEmpty())
                },
                {
                    label: "No"
                }
            ]
        });
    }

    function deleteOne(id: number) {
        confirmAlert({
            title: "Confirm to Delete This One",
            message: "Are you sure to do this.",
            buttons: [
                {
                    label: "Yes",
                    onClick: () => dispatch(singleProductDelete(id))
                },
                {
                    label: "No"
                }
            ]
        });
    }

    return (
        <div className='container mx-auto py-16 px-4 font-[quicksand] grid grid-cols-1 lg:grid-cols-3 gap-6'>
            <div className='lg:col-span-2'>
                <h1 className='text-5xl text-gray-700 font-bold'>Your Cart</h1>
                <div className='flex justify-between items-center'>
                    <p className='py-5 text-xs lg:text-base font-semibold text-gray-500 tracking-tight'>
                        There are <span className='text-green-600 text-base'>{count}</span> products in your cart
                    </p>
                    <button
                        onClick={deleteAll}
                        className='flex cursor-pointer hover:text-red-400 items-center gap-2 font-bold text-gray-400'>
                        <RiDeleteBin6Line />
                        Clear Cart
                    </button>
                </div>

                <div className='border border-gray-200 rounded-md mt-5'>
                    <div className='flex justify-between items-center lg:text-base text-xs font-bold text-gray-700 lg:p-4 bg-gray-100 p-1'
                    >
                        <div className='flex items-center  gap-1 lg:gap-4'>
                            <input type="checkbox" />
                            <p>Product</p>
                        </div>
                        <div className='flex items-center lg:gap-24 gap-4'>
                            <div className='flex items-center whitespace-nowrap gap-1 lg:gap-4'>
                                <p>Unit Price</p>
                                <p>Quantity</p>
                            </div>
                            <div className='flex items-center gap-1 lg:gap-4'>
                                <p>Subtotal</p>
                                <p>Remove</p>
                            </div>
                        </div>
                    </div>

                    {cartItems.map((item) => (
                        <div key={item.id} className='border-b border-gray-200 flex  items-start lg:items-center pr-0 lg:pr-8 py-4'>
                            <div className='w-full flex items-center lg:px-4 gap-4'>
                                <input type="checkbox" className='mt-2 lg:mt-0' />

                                <div className='lg:flex items-center gap-3'>
                                    <img
                                        className='w-20 h-20 sm:w-24 sm:h-24 border border-gray-200 rounded-2xl'
                                        src={item.image1}
                                        alt={item.name}
                                    />
                                    <div>
                                        <h1
                                            onClick={() => navigate(`/shop/${item.id}`)}
                                            className='font-semibold text-xs pt-2 lg:pt-0 lg:text-base hover:text-yellow-500 text-gray-700'>{item.name}</h1>
                                            <RaringWithP rating={item.rating} />
                                    </div>
                                </div>
                            </div>
                            <div className='w-full lg:w-auto mt-4 lg:mt-0 flex items-start justify-between gap-4'>
                                <div className='flex items-center gap-4 lg:gap-8 '>
                                    <div className='lg:text-xl text-base sm:text-2xl font-bold text-gray-500'>
                                        ${item.currentPrice.toFixed(2)}
                                    </div>
                                    <div className='lg:pr-24'>
                                        <input
                                            onChange={(e) =>
                                                handleQuantityChange(item.id, Number(e.target.value))
                                            }
                                            value={item.quantity}
                                            className='border w-10 lg:w-16 text-center border-green-600 outline-none font-semibold text-black px-2 py-2 rounded-md '
                                            type="number"
                                            min={1}
                                        />
                                    </div>
                                </div>
                                <div className='flex items-center gap-4 '>
                                    <div className='text-xl sm:text-2xl font-bold text-center text-green-500'>
                                        ${(item.currentPrice * item.quantity).toFixed(2)}
                                    </div>
                                    <div
                                        onClick={() => deleteOne(item.id)}
                                        className='cursor-pointer text-gray-600 hover:text-red-500 p-2'
                                    >
                                        <RiDeleteBin6Line />
                                    </div>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
                <div className={`flex   mt-8 font-semibold text-sm   text-white  sm:w-auto `}>

                    <button
                        onClick={() => navigate('/shop')}
                        className={`ml-2 bg-[#3BB77E] w-full py-3 hover:bg-yellow-500 duration-500 rounded-md cursor-pointer  flex  items-center justify-center gap-2 
                            
                            `}
                    >
                        <FaArrowLeft />
                        Continue Shopping
                    </button>
                </div>
            </div>

            <div className={`${count !== 0 ? 'block' : 'hidden'}`}>
                <div className='border space-y-5 border-gray-200 rounded-md mt-8 lg:mt-32 lg:col-span-1 p-4'>
                    <div className='border border-gray-200 rounded-md '>
                        <div className='flex  p-2 justify-between items-center'>
                            <p className='text-lg font-semibold text-gray-400'>Subtotal</p>
                            <p className='text-xl text-green-600 font-bold'>${subTotal.toFixed(2)}</p>
                        </div>
                    </div>

                    <div className='border border-gray-200 rounded-md '>
                        <div className='flex  p-2 justify-between items-center'>
                            <p className='text-lg font-semibold text-gray-400'>Shipping</p>
                            <p className='text-xl  font-bold'>Free</p>
                        </div>
                    </div>

                    <div className='border border-gray-200 rounded-md '>
                        <div className='flex  p-2 justify-between items-center'>
                            <p className='text-lg font-semibold text-gray-400'>Estimate for</p>
                            <p className='text-xl  font-bold'>7 days</p>
                        </div>
                    </div>

                    <div className='border border-gray-200 rounded-md '>
                        <div className='flex  p-2 justify-between items-center'>
                            <p className='text-lg font-semibold text-gray-400'>Total</p>
                            <p className='text-xl text-green-600 font-bold'>${subTotal.toFixed(2)}</p>
                        </div>
                    </div>
                    <div className='bg-[#3BB77E] h-10  py-2 flex items-center justify-center text-white  font-semibold rounded-md gap-2 hover:bg-yellow-500 duration-500'>
                        <button
                            onClick={() => (
                                setBtnText(''),
                                setAnimation(true),
                                setTimeout(() => {
                                    setBtnText("Proced to CheckOut")
                                    setAnimation(false)
                                }, 1000)
                            )}
                            className='peer'>{btnText} </button>
                        <div className={`-translate-x-[310px] ${animatin && 'translate-x-0'} duration-500 `}>
                            <IoExitOutline />
                        </div>
                    </div>
                </div>
            </div>
        </div >
    )
}

export default AddtoCart
