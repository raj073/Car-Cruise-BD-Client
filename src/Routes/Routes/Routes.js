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
import MyBookings from "../../Pages/Dashboard/MyBookings/MyBookings";
import MyOrders from "../../Pages/Dashboard/MyOrders/MyOrders";
import MyProducts from "../../Pages/Dashboard/MyProducts/MyProducts";
import SellerRoute from "../SellerRoute/SellerRoute";
import AdminRoute from "../AdminRoute/AdminRoute";
import AllSeller from "../../Pages/Dashboard/AllSeller/AllSeller";
import AllBuyer from "../../Pages/Dashboard/AllBuyer/AllBuyer";
import ReportedItems from "../../Pages/Dashboard/ReportedItems/ReportedItems";
import BuyerRoute from "../BuyerRoute/BuyerRoute";
import Payment from "../../Pages/Dashboard/Payment/Payment";


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
            },
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
                
            }

        ]
    },
    {
        path: '/dashboard',
        element: <PrivateRoute><DashboardLayout></DashboardLayout></PrivateRoute>,
        errorElement: <DisplayError></DisplayError>,
        children: [
            // {
            //     path: '/dashboard',
            //     element: <MyBookings></MyBookings>
            // },
            {
                path:'/dashboard/allseller',
                element: <AdminRoute><AllSeller></AllSeller></AdminRoute>
            },
            {
                path:'/dashboard/allbuyer',
                element: <AdminRoute><AllBuyer></AllBuyer></AdminRoute>
            },
            {
                path:'/dashboard/reporteditems',
                element: <AdminRoute><ReportedItems></ReportedItems></AdminRoute>
            },
            {
                path: '/dashboard/addProduct',
                element: <SellerRoute><AddProduct></AddProduct></SellerRoute>
                
            },
            {
                path: '/dashboard/myproducts',
                element: <SellerRoute><MyProducts></MyProducts></SellerRoute>
                
            },
            {
                path: '/dashboard/myorders',
                element: <BuyerRoute><MyOrders></MyOrders></BuyerRoute>
                
            },
            {
                path:'/dashboard/payment/:id',
                element: <BuyerRoute><Payment></Payment></BuyerRoute>,
                loader: ({params}) => fetch(`http://localhost:5000/orders/${params.id}`)
            }
        ]
    }
])

export default router;