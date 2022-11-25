import React from "react";
import { FaLocationArrow } from "react-icons/fa";

const CarProduct = ({ carProduct }) => {
  const {
    categoryName,
    productName,
    location,
    resalePrice,
    originalPrice,
    yearsOfUse,
    postingTime,
    sellerName,
    image,
  } = carProduct;

  return (

<div className="card lg:card-side bg-base-100 shadow-xl">
  <figure>
    <img className="w-96 h-96" src={image} alt="Album"/>
  </figure>
  <div className="card-body w-96">
    <h2 className="card-title text-2xl font-serif font-semibold text-transparent bg-clip-text 
            bg-gradient-to-r from-sky-500 to-indigo-500 mb-2">{productName}</h2>
    <p className="font-serif">
        Location: {location}
    </p>
    <p className="font-serif">
        Original Price: {originalPrice} 
    </p>
    <p className="font-serif">
        Resale Price: {resalePrice} 
    </p>
    <p className="font-serif">
        Years of Use: {yearsOfUse}
    </p>
    <p className="font-serif">
        Posted Time: {postingTime}
    </p>
    <hr />
    <p className="italic font-serif">Seller Name: {sellerName}</p>
    <div className="card-actions justify-end">
    <button className="btn border-none bg-gradient-to-r from-sky-500 to-indigo-500 text-white 
          rounded-none">Book Now</button>
    </div>
  </div>
</div>

  );
};

export default CarProduct;
