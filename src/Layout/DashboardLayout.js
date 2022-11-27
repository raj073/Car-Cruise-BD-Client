import React, { useContext } from "react";
import { Link, Outlet } from "react-router-dom";
import { AuthContext } from "../Contexts/AuthProvider";
import useAdmin from "../Hooks/useAdmin";
import useBuyer from "../Hooks/useBuyer";
import useSeller from "../Hooks/useSeller";
import Loading from "../Pages/Shared/Loading/Loading";
import Navbar from "../Pages/Shared/Navbar/Navbar";

const DashboardLayout = () => {

    const { user, loading } = useContext(AuthContext);
    const [isAdmin] = useAdmin(user?.email);
    const [isSeller] = useSeller(user?.email);
    const [isBuyer] = useBuyer(user?.email);

    if(loading){
        <Loading></Loading>
    }

  return (
    <div>
      <Navbar></Navbar>
      

      <div className="drawer drawer-mobile">
        <input id="dashboard-drawer" type="checkbox" className="drawer-toggle" />
        
        <div className="drawer-content ml-5">
        <Outlet></Outlet>
        </div>

        <div className="drawer-side shadow-lg">
          <label htmlFor="dashboard-drawer" className="drawer-overlay"></label>
          <ul className="menu p-3 w-80 bg-base-100 text-base-content items-center">
  
            {
                isAdmin && (
                    <>
                    <li>
                    <Link to="/dashboard/allusers">All users</Link>
                    </li>
                    </>
                )
            }

            {
                isSeller && (
                    <>
                    <li className="font-semibold ml-3 text-transparent bg-clip-text 
                    bg-gradient-to-r from-cyan-500 to-blue-500">
                    <Link to="/dashboard/addProduct">
                        Add A Product
                    </Link>
                    </li>
                    <li className="font-semibold ml-3 text-transparent bg-clip-text 
                    bg-gradient-to-r from-cyan-500 to-blue-500">
                    <Link to="/dashboard/myproducts">
                        My Products
                    </Link>
                    </li>
                    </>
                )
            }

            {
                isBuyer && (
                    <>
                    <Link to="/dashboard/myorders" className="font-semibold ml-3 text-transparent bg-clip-text 
                    bg-gradient-to-r from-cyan-500 to-blue-500">
                        My Orders
                    </Link>
                    </>
                )
            }

          </ul>
        </div>
      </div>
    </div>
  );
};

export default DashboardLayout;
