
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.tsx'
import { createBrowserRouter } from "react-router";
import { RouterProvider } from "react-router/dom";
import Home from './Home/Home.tsx';
import About from './Pages/About/About.tsx';
import Shoop from './Pages/Shop/Shoop.tsx';
import SingleProduct from './Compomemts/Share/SingleProduct/SingleProduct.tsx';
import AddtoCart from './Pages/Add To Cart/AddtoCart.tsx';
import No404Page from './Compomemts/Share/No404Page.tsx';
import WishlistContainer from './Pages/Wishlist/WishlistContainer.tsx';
import Vendor from './Pages/Vendor/Vendor.tsx';
import Blog from './Pages/Blog/Blog.tsx';
import SingleBlog from './Compomemts/Share/SingleBlog/SingleBlog.tsx';

const router = createBrowserRouter([
    {
        path: "/",
        element: <App />,
        children: [
            {
                path: '/',
                element: <Home />
            },
            {
                path: '/about',
                element: <About />
            },
            {
                path: '/shop',
                element: <Shoop />
            },
            {
                path: '/shop/:id',
                element: <SingleProduct />
            },
            {
                path: '/addtocart',
                element: <AddtoCart />
            },
            {
                path: '*',
                element: <No404Page />
            },
            {
                path: '/wishlist',
                element: <WishlistContainer />
            },
            {
                path: '/vendors',
                element: <Vendor />
            },
            {
                path: '/blog',
                element: <Blog />
            },
            {
                path: '/blog/:id',
                element: <SingleBlog />
            }

        ]
    },
]);

createRoot(document.getElementById('root')!).render(

    <RouterProvider router={router} />
)
