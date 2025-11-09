
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
            }

        ]
    },
]);

createRoot(document.getElementById('root')!).render(

    <RouterProvider router={router} />
)
