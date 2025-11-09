import  { useEffect, useState } from 'react'

function useLang() {
    const [lang, setLang] = useState([])
    useEffect(()=>{
        async function getData() {
            const res = await fetch('/lang.json')
            const data = await res.json()
            setLang(data)
        }
        getData()
    },[])
  return {lang}
}

export default useLang
