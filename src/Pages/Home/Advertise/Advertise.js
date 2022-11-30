import React from "react";

const Advertise = ({ advertise }) => {
  const { productName, categoryName, resalePrice, description, image, salesStatus, paid } = advertise;

  return (
    <div>

      {
      !paid &&
        <div className="card w-96 bg-base-100 shadow-xl rounded-none">
      <figure>
        <img src={image} alt="Shoes" />
      </figure>
      <div className="card-body">
        <h2 className="card-title">
          {productName}
          <div className="badge badge-secondary py-4 rounded-tl">Advertised</div>
        </h2>
        <p>{description}</p>
        <div className="card-actions justify-end">
          <div className="badge badge-outline badge-secondary">{categoryName}</div>
          <div className="badge badge-outline badge-warning">{salesStatus}</div>
        </div>
      </div>
    </div>}

    </div>
  );
};

export default Advertise;
