import { createBrowserRouter } from "react-router-dom";
import Main from "../../Layout/Main";
import Home from "../../Pages/Home/Home";
import Blog from '../../Pages/Blog/Blog';
import SignUp from "../../Pages/SignUp/SignUp";
import Login from "../../Pages/Login/Login";
import DisplayError from "../../Pages/Shared/DisplayError/DisplayError";
import CarProducts from "../../Pages/Home/CarProducts/CarProducts";
import PrivateRoute from "../PrivateRoute/PrivateRoute";
import AddProduct from "../../Pages/AddProduct/AddProduct";
import DashboardLayout from "../../Layout/DashboardLayout";


const router = createBrowserRouter([
    {
        path:'/',
        element: <Main></Main>,
        errorElement: <DisplayError></DisplayError>,
        children: [
            {
                path: '/',
                element: <Home></Home>
            },
            {
                path: '/blog',
                element: <Blog></Blog>
            }
            ,
            {
                path: '/login',
                element: <Login></Login>
            },
            {
                path: '/signup',
                element: <SignUp></SignUp>
            },
            {
                path: '/category/:id',
                element: <PrivateRoute><CarProducts></CarProducts></PrivateRoute> ,
                loader:({params}) => fetch(`http://localhost:5000/category/${params.id}`)
                
            },
            {
                path: '/addProduct',
                element: <AddProduct></AddProduct>
                
            }
        ]
    },
    {
        path: '/dashboard',
        element: <PrivateRoute><DashboardLayout></DashboardLayout></PrivateRoute>,
        errorElement: <DisplayError></DisplayError>,
        children: [
            {
                path: '/dashboard'
            }
        ]
    }
])

export default router;