import React from "react";
import quote from "../../../assets/Testimonial/quote.svg";
import { FaStar } from "react-icons/fa";

const Testimonial = ({ rating }) => {
  const { name, img, review, designation } = rating;

  return (
    <div className="card bg-base-100 shadow-xl transform transition duration-500 hover:scale-110">
      <figure className="px-10 pt-10">
        <img className="w-24 h-16" src={quote} alt="Shoes" />
      </figure>
      <div className="px-5 py-3 text-center">
        <p>{review}</p>
        <div className="flex items-center justify-center mt-5">
        <FaStar className="text-yellow-500 mr-2"></FaStar>
        <FaStar className="text-yellow-500 mr-2"></FaStar>
        <FaStar className="text-yellow-500 mr-2"></FaStar>
        <FaStar className="text-yellow-500 mr-2"></FaStar>
        <FaStar className="text-yellow-500 mr-2"></FaStar>
        </div>
      </div>
      <div className="card-body items-center text-center">
        <div className="avatar mr-6">
          <div className="w-16 rounded-full ring ring-primary ring-offset-base-100 ring-offset-2">
            <img src={img} alt="" />
          </div>
        </div>
        <h2 className="card-title">{name}</h2>
        <p>{designation}</p>
      </div>
    </div>
  );
};

export default Testimonial;
