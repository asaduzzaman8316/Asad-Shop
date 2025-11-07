import { useEffect, useState } from 'react'

function useData() {
    const [categories, setCategories] = useState([])
    const [products, setProduct] = useState([])
    const [isLoading, setIsLoading] = useState(true)

    useEffect(() => {
        async function getData() {
            setIsLoading(true)
            try {
                const [categoriesRes, productsRes] = await Promise.all([
                    fetch('/categories.json'),
                    fetch('/Product.json')
                ])
                
                const [categoriesData, productsData] = await Promise.all([
                    categoriesRes.json(),
                    productsRes.json()
                ])

                setCategories(categoriesData.categories)
                setProduct(productsData.products)
            } catch (error) {
                console.error('Error fetching data:', error)
            } finally {
                setIsLoading(false)
            }
        }
        getData()
    }, [])

    return {categories, products, isLoading}
}

export default useData
