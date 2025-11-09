import { useEffect, useState } from 'react'

function useCurrence() {
    const [currency, setCurrency ] = useState('')
    useEffect(() => {
        async function getData() {
            const res = await fetch("currencies.json")
            const data = await res.json()
            setCurrency(data)
        }
        getData()
    }, [])
    return {currency}
}

export default useCurrence
