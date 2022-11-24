import React, { useContext } from "react";
import toast from "react-hot-toast";
import { FaUser } from "react-icons/fa";
import { Link, useNavigate } from "react-router-dom";
import logo from "../../../assets/logo.png";
import { AuthContext } from "../../../Contexts/AuthProvider";

const Navbar = () => {
  const { user, logOut } = useContext(AuthContext);
  const navigate = useNavigate();

  const handleLogOut = () => {
    logOut()
      .then(() => {
        toast.success("User Logged Out Successfully");
        navigate('/login');
      })
      .catch((error) => {
        console.log(error.message);

      });
  };


  const menuItems = (
    <React.Fragment>
      <li className="font-semibold ml-3 text-transparent bg-clip-text bg-gradient-to-r from-cyan-500 to-blue-500">
        <Link to="/">Home</Link>
      </li>
      <li className="font-semibold ml-3 text-transparent bg-clip-text bg-gradient-to-r from-cyan-500 to-blue-500">
        <Link to="/blog">Blog</Link>
      </li>

      {user?.email ? (
        <>
          <li className="font-semibold ml-3 text-transparent bg-clip-text bg-gradient-to-r from-cyan-500 to-blue-500">
          <button onClick={handleLogOut}>Sign Out</button>
          </li>
          <li className="font-semibold">
            <button
              className="btn bg-white border-0 hover:bg-white text-gray-500"
              title={user?.displayName}
            >
              {" "}
              <div className="avatar">
                <div className="w-8 rounded-full ring ring-primary ring-offset-base-100 ring-offset-2">
                  {user?.photoURL ? (
                    <img src={user?.photoURL} alt="" />
                  ) : (
                    <FaUser className="mx-1 mt-2"></FaUser>
                  )}
                </div>
              </div>
            </button>
          </li>
        </>
      ) : (
        <li className="font-semibold ml-3 text-transparent bg-clip-text bg-gradient-to-r from-cyan-500 to-blue-500">
          <Link to="/login">Login</Link>
        </li>
      )}
    </React.Fragment>
  );

  return (
    <div className="navbar bg-base-100 shadow-xl rounded-md mb-7">
      <div className="navbar-start">
        <div className="dropdown">
          <label tabIndex={0} className="btn btn-ghost lg:hidden">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h8m-8 6h16"
              />
            </svg>
          </label>
          <ul
            tabIndex={0}
            className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52"
          >
            {menuItems}
          </ul>
        </div>
        {/* <div className="flex"> */}
        <img className="w-24 h-16" src={logo} alt="" />
        <Link className="btn btn-ghost normal-case text-xl font-semibold text-transparent bg-clip-text bg-gradient-to-r from-cyan-500 to-blue-500">
          Car Cruise BD
        </Link>
        {/* </div> */}
      </div>
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal p-0">{menuItems}</ul>
      </div>
      <div className="navbar-end">
        <button className="btn border-none bg-gradient-to-r from-sky-500 to-indigo-500">
          {" "}
          Advertise{" "}
        </button>
      </div>
    </div>
  );
};

export default Navbar;
