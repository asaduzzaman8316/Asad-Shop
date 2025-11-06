import { useEffect, useState } from 'react'

function useProduct() {
    const [description, setDescription] = useState([])
    useEffect(() => {
        async function getData() {
            const res = await fetch('/ProductDescription.json')
            const { products_description } = await res.json()
            setDescription(products_description)
        }
        getData();
    }, [])

    return  {description }
}

export default useProduct
