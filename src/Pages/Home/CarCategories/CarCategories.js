import React, { useEffect, useState } from "react";
import Loading from "../../Shared/Loading/Loading";
import CarCategory from "../CarCategory/CarCategory";

const CarCategories = () => {
  const [carCategories, setCarCategories] = useState();
  const [loadingServices, setLoadingServices] = useState(true);

  useEffect(() => {
    fetch("http://localhost:5000/categories")
      .then((res) => res.json())
      .then((data) => {
        setCarCategories(data);
        setLoadingServices(false);
      });
  });

  return (
    <div>
      <div>{loadingServices && <Loading></Loading>}</div>

      <div className="text-center mb-5 mt-12">
        <h3 className="text-5xl font-semibold text-transparent bg-clip-text 
            bg-gradient-to-r from-sky-500 to-indigo-500 mb-2">
          Brand Wise Car
        </h3>
        <h2 className="text-3xl text-transparent bg-clip-text bg-gradient-to-r
         from-cyan-500 to-blue-500 py-5">Available Car Category</h2>
      </div>

      <div className="grid gap-6 grid-cols-1 md:grid-cols-2 lg:grid-cols-3 mt-10">
        {carCategories?.map((category) => (
          <CarCategory key={category._id} category={category}></CarCategory>
        ))}
      </div>
    </div>
  );
};

export default CarCategories;
