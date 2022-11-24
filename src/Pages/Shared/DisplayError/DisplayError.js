import React, { useContext } from 'react';
import toast from 'react-hot-toast';
import { Link, useNavigate, useRouteError } from 'react-router-dom';
import { AuthContext } from '../../../Contexts/AuthProvider';
import errorLogo from '../../../assets/404.jpg';

const DisplayError = () => {

    const {logOut} = useContext(AuthContext);
    const error = useRouteError();
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


    return (

        <div className='grid place-items-center shadow-xl p-20 rounded-lg'>
            <p className='text-orange-500 mt-3 text-5xl font-bold'>Something Went Wrong</p> <br />
            <img className='w-96' src={errorLogo} alt="" />
            <p className='text-red-400 mt-16 text-5xl font-bold'>{error.statusText || error.message}</p> 
            <h4 className="text-3xl font-semibold mt-10"> Please &nbsp;
            <button className="btn btn-info rounded-none text-white font-bold" onClick={handleLogOut}>Sign out</button> and &nbsp;
             <Link to='/login'>
                <button className="btn btn-active btn-secondary text-white rounded-none font-bold">Log Back In</button>
            </Link> </h4>
        </div>


    );
};

export default DisplayError;