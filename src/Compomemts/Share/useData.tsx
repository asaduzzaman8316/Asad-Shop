import { useEffect, useState } from 'react'

function useData() {
    const [categories, setCategories] = useState([])
    useEffect(() => {
        async function getData() {
            const res = await fetch('/categories.json')
            const { categories } = await res.json()
            setCategories(categories)
        }
        getData()
    }, [])

    const [products, setProduct] = useState([])
    useEffect(() => {
        async function getData() {
            const res = await fetch('/Product.json')
            const { products } = await res.json()
            setProduct(products)
        }
        getData();
    }, [])


    return [categories, products]
}

export default useData
