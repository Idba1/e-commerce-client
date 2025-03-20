import { createBrowserRouter } from "react-router-dom";
import Main from "../Layout/Main";
import ErrorPage from "../Pages/ErrorPage/ErrorPage";
import Registration from "../Pages/Authentication/Register";
import Login from "../Pages/Authentication/LogIn";
import Home from "../Customer/Components/Pages/Home/Home";
import Product from "../Customer/Components/Product/Product";
import ProductDetails from "../Customer/Components/ProductDetails/ProductDetails";
import Cart from "../Customer/Components/Cart/Cart";
import CheckOut from "../Customer/Components/CheckOut/CheckOut";
import Order from "../Customer/Components/Order/Order";

const Routes = createBrowserRouter([
    {
        path: '/',
        element: <Main></Main>,
        errorElement: <ErrorPage></ErrorPage>,
        children:
            [
                {
                    path: '/registration',
                    element: <Registration></Registration>,
                },
                {
                    path: '/login',
                    element: <Login></Login>,
                },
                {
                    path: '/',
                    element: <Home></Home>,
                },
                {
                    path: '/product',
                    element: <Product></Product>,
                },
                {
                    path: '/product-details',
                    element: <ProductDetails></ProductDetails>,
                },
                {
                    path: '/cart',
                    element: <Cart></Cart>,
                },
                {
                    path: '/order',
                    element: <Order></Order>,
                },
                {
                    path: '/check-out',
                    element: <CheckOut></CheckOut>,
                },
            ]
    }
]);


export default Routes;