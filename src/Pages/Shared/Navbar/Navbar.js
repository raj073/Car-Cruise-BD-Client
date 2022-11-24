import React from "react";
import { Link } from "react-router-dom";
import logo from '../../../assets/logo.png';

const Navbar = () => {


    const menuItems = (
        <React.Fragment>
          <li className="font-semibold ml-3 text-transparent bg-clip-text bg-gradient-to-r from-cyan-500 to-blue-500">
            <Link to="/">Home</Link>
          </li>
          <li className="font-semibold ml-3 text-transparent bg-clip-text bg-gradient-to-r from-cyan-500 to-blue-500">
            <Link to="/blog">Blog</Link>
          </li>
          <li className="font-semibold ml-3 text-transparent bg-clip-text bg-gradient-to-r from-cyan-500 to-blue-500">
            <Link to="/login">Login</Link>
          </li>
    
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
          <ul tabIndex={0}
            className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52">
            {menuItems}
          </ul>
        </div>
        {/* <div className="flex"> */}
            <img className='w-24 h-16' src={logo} alt="" />
            <Link className="btn btn-ghost normal-case text-xl font-semibold text-transparent bg-clip-text bg-gradient-to-r from-cyan-500 to-blue-500">Car Cruise BD</Link>
        {/* </div> */}
        
      </div>
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal p-0">
        {menuItems}
        </ul>
      </div>
      <div className="navbar-end">
        <button className="btn border-none bg-gradient-to-r from-sky-500 to-indigo-500"> Advertise </button>
      </div>
    </div>
  );
};

export default Navbar;
