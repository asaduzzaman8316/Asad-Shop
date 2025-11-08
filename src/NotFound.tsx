import { Link } from "react-router"

function NotFound() {
    return (
        <div>
            <main className="grid min-h-full place-items-center px-6 py-24 sm:py-32 lg:px-8">
                <div className="text-center">
                    <p className="text-3xl font-semibold text-indigo-400">404</p>
                    <h1 className="mt-4 text-5xl font-semibold tracking-tight text-balance text-gray-800 sm:text-7xl">
                        We are Working 
                    </h1>
                    <p className="mt-6 text-lg font-medium text-pretty text-gray-400 sm:text-xl/8">
                        Sorry, we are working to fix it, Please Stay With Us.
                    </p>
                    <div className="mt-10 flex items-center justify-center gap-x-6">
                        <Link
                            to="/"
                            className="rounded-md bg-indigo-500 px-3.5 py-2.5 text-sm font-semibold text-white shadow-xs hover:bg-indigo-400 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-500"
                        >
                            Go back home
                        </Link>
                        <a href="#" className="text-sm font-semibold text-gray-800">
                            Contact support <span aria-hidden="true">&rarr;</span>
                        </a>
                    </div>
                </div>
            </main>
        </div>
    )
}

export default NotFound
