import { useEffect, useState } from 'react'

interface BlogType {
    description: string
    imageUrl: string
    productName: string
    title: string
    postId: number
}

function useBlog() {
    const [blog, setBlog] = useState<BlogType[]>([])
    useEffect(()=>{
        async function getData() {
            const res = await fetch('/blog.json')
            const data = await res.json()
            setBlog(data)
        }
        
        getData()
    }, [])
  return  {blog}
}

export default useBlog
