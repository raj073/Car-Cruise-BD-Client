import React, { useState } from "react";
import { useLoaderData } from "react-router-dom";
import BookNowModal from "../BookNowModal/BookNowModal";
import CarProduct from "../CarProduct/CarProduct";

const CarProducts = () => {

  const [product, setProduct] = useState(null);

  const carProducts = useLoaderData();

  return (
    <div>
      <div>
        <h3
          className="text-4xl mt-10 font-semibold font-mono text-center text-transparent 
            bg-clip-text bg-gradient-to-r from-cyan-500 to-blue-500"
        >
          Product Category: {carProducts[0].categoryName}
        </h3>
        <div className="divider"></div>
      </div>

      <div
        className="grid gap-10 grid-cols-1 align-middle content-center 
      place-content-center justify-items-center my-16 lg:mx-32"
      >
        {carProducts?.map((carProduct) => (
          <CarProduct key={carProduct._id} 
          carProduct={carProduct}
          setProduct={setProduct}
          ></CarProduct>
        ))}
      </div>
      { product &&
        <BookNowModal
      product={product}
      setProduct={setProduct}
      ></BookNowModal>
      }
    </div>
  );
};

export default CarProducts;
