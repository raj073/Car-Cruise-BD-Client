import React, { useContext } from "react";
import { Link, Outlet } from "react-router-dom";
import { AuthContext } from "../Contexts/AuthProvider";
import useAdmin from "../Hooks/useAdmin";
import useBuyer from "../Hooks/useBuyer";
import useSeller from "../Hooks/useSeller";
import Loading from "../Pages/Shared/Loading/Loading";
import Navbar from "../Pages/Shared/Navbar/Navbar";
import Footer from "../Pages/Shared/Footer/Footer";

const DashboardLayout = () => {

    const { user, loading } = useContext(AuthContext);
    const [isAdmin, isAdminLoading] = useAdmin(user?.email);
    const [isSeller, isSellerLoading] = useSeller(user?.email);
    const [isBuyer, isBuyerLoading] = useBuyer(user?.email);

  

  return (
    <div>
      <Navbar></Navbar>

      {
        (loading || isAdminLoading || isSellerLoading || isBuyerLoading) &&
        <Loading></Loading>
      }
      
      <div className="drawer drawer-mobile mb-10">
        <input id="dashboard-drawer" type="checkbox" className="drawer-toggle" />
        
        <div className="drawer-content ml-5">
        <Outlet></Outlet>
        </div>

        <div className="drawer-side shadow-lg">
          <label htmlFor="dashboard-drawer" className="drawer-overlay"></label>
          <ul className="menu p-3 w-80 text-base-content items-center">
  
            {
                isAdmin && (
                    <>
                    <li className="font-semibold text-transparent bg-clip-text 
                    bg-gradient-to-r from-cyan-500 to-blue-500 font-mono">
                    <Link to="/dashboard/allseller">All Sellers</Link>
                    </li>
                    <li className="font-semibold text-transparent bg-clip-text 
                    bg-gradient-to-r from-cyan-500 to-blue-500 font-mono">
                    <Link to="/dashboard/allbuyer">All Buyers</Link>
                    </li>
                    <li className="font-semibold text-transparent bg-clip-text 
                    bg-gradient-to-r from-cyan-500 to-blue-500 font-mono">
                    <Link to="/dashboard/reporteditems">Reported Items</Link>
                    </li>
                    </>
                )
            }

            {
                isSeller && (
                    <>
                    <li className="font-semibold text-transparent bg-clip-text 
                    bg-gradient-to-r from-cyan-500 to-blue-500 font-mono">
                    <Link to="/dashboard/addProduct">
                        Add A Product
                    </Link>
                    </li>
                    <li className="font-semibold text-transparent bg-clip-text 
                    bg-gradient-to-r from-cyan-500 to-blue-500 font-mono">
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
                    <li className="font-semibold text-transparent 
                    bg-clip-text bg-gradient-to-r from-cyan-500 to-blue-500 font-mono">
                    <Link to="/dashboard/myorders">
                        My Orders
                    </Link>
                    </li>
                    
                    </>
                )
            }

          </ul>
        </div>
      </div>

      <Footer></Footer>
      
    </div>
  );
};

export default DashboardLayout;
