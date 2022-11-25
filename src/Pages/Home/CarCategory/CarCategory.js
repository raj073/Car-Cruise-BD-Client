import React from "react";
import { Link } from "react-router-dom";

const CarCategory = ({category}) => {

const {_id, name, image, details} = category;

  return (

    <div className="card w-96 bg-base-100 shadow-xl 
    border-1 border-indigo-500 px-4 py-4 rounded-lg transform transition duration-500 hover:scale-110">
      <figure className="px-10 pt-10">
        <img src={image} alt="" className="w-48 h-32 rounded-xl"
        />
      </figure>
      <div className="card-body items-center text-center">
        <h2 className="card-title">{name}</h2>
        <p>{details}</p>
        <div className="card-actions">
          <Link to={`category/${_id}`}>
          <button className="btn border-none bg-gradient-to-r from-sky-500 to-indigo-500 text-white 
          rounded-none">View Product</button>
          </Link>
        </div>
      </div>
    </div>



  );
};

export default CarCategory;
