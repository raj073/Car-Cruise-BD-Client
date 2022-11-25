import React from "react";
import banner from '../../../assets/banner.jpg';

const Banner = () => {
  return (
    <section>
      <div className="hero rounded-lg">
        <div className="hero-content flex-col lg:flex-row-reverse">
          <img
            src={banner}
            className="max-w-sm lg:w-1/2 rounded-lg shadow-2xl"
            alt=""
          />
          <div>
            <span className="text-5xl font-bold text-transparent bg-clip-text 
            bg-gradient-to-r from-sky-500 to-indigo-500">
            Best Car For Sale
            </span> <br />
            <div className="text-3xl py-4 text-transparent bg-clip-text bg-gradient-to-r from-cyan-500 to-blue-500">
            An Elegant Car that Suits Your Alluring Personality.
            </div>
            <div className="py-4 text-lg">
              Get Your Affordable and most Like Cars From Our Portal.
              You can also list your car on Car Cruise BD portal to sell at the best price. 
              Listing an old car on our portal is absolutely free. <br />
              <div className="font-bold text-xl mt-4">
              Only we can provide all the necessities and luxuries within our means.
              </div>
            </div>
            <button className="btn border-none bg-gradient-to-r from-sky-500 to-indigo-500 text-white rounded-none">
              Book Your Car
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Banner;
