import { useParams, useNavigate } from "react-router"
import useBlog from "../useBlog"
import SubScribe from "../Subscribe"
import LastService from "../LastService"
import AOS from 'aos';
import 'aos/dist/aos.css'
AOS.init()

interface BlogType {
    description: string
    imageUrl: string
    productName: string
    title: string
    postId: number
}

function SingleBlog() {
    const { id } = useParams()
    const navigate = useNavigate()
    const { blog } = useBlog() as { blog: BlogType[] }




    const blogPost = blog.find((item: BlogType) => String(item.postId) === String(id))

    if (!blogPost) {
        return (
            <div className="min-h-[400px] flex flex-col items-center justify-center space-y-4">
                <h1 className="text-2xl text-gray-600">Blog post not found</h1>
                <button
                    onClick={() => navigate('/blog')}
                    className="bg-green-600 text-white px-6 py-2 rounded-md hover:bg-green-700 transition-colors"
                >
                    Back to Blog
                </button>
            </div>
        )
    }

    return (
        <div className="container mx-auto px-4 py-16 ">
            <div data-aos='zoom-in-left' className="space-y-8 max-w-4xl mx-auto">
                <h1 className="text-4xl font-bold text-gray-800 font-[quicksand]">
                    {blogPost.title}
                </h1>

                <div className="relative aspect-video w-full overflow-hidden rounded-lg">
                    <img
                        src={blogPost.imageUrl}
                        alt={blogPost.title}
                        className="w-full h-full object-cover"
                    />
                </div>

                <div className="flex items-center justify-between py-4 border-y border-gray-200">
                    <p className="text-gray-600">Related product:</p>
                    <button
                        onClick={() => navigate('/shop/' + blogPost.postId)}
                        className="bg-green-600 text-white px-6 py-2 rounded-md hover:bg-green-700 transition-colors"
                    >
                        {blogPost.productName}
                    </button>
                </div>

                <div className="prose max-w-none">
                    <p className="text-gray-600 leading-relaxed text-lg">
                        {blogPost.description}
                    </p>
                </div>

                <div className="pt-8">
                    <button
                        onClick={() => navigate('/blog')}
                        className="text-green-600 hover:text-green-700 flex items-center gap-2"
                    >
                        <span>←</span> Back to all posts
                    </button>
                </div>
            </div>
            <SubScribe src="/banner-9.png" />
            <LastService />
        </div>
    )
}

export default SingleBlog
