import React, { useState } from "react";

const AddProduct = () => {

    const {state, setState} = useState();

    const handleSubmit = (event) => {
        event.preventDefault();
        const form = event.target;

        const name = form.name.value;
        const category = form.category.value;
        const description = form.description.value;
        const condition = form.condition.value;
        const originalPrice = form.originalPrice.value;
        const resalePrice = form.resalePrice.value;
        const yearOfPurchase = form.yearOfPurchase.value;
        const mobile = form.mobile.value;
        const location = form.location.value;

        const addProduct = {
            name,
            category,
            description,
            condition,
            originalPrice,
            resalePrice,
            yearOfPurchase,
            mobile,
            location,

        }

        console.log(addProduct);

      };


  return (
    <React.Fragment>
      <h1 className="text-center text-4xl font-semibold mt-5 font-serif text-transparent bg-clip-text 
            bg-gradient-to-r from-sky-500 to-indigo-500">Please Add a Product to Explore</h1>
      <div className="divider"></div>
      <form
        className="max-w-xl m-auto py-10 my-12 px-12 border shadow-md"
        onSubmit={handleSubmit}
      > 

        <label className="text-gray-600 font-medium block mt-2 font-serif mb-3">Product Name</label>
        <input
          className="border-solid border-gray-300 border py-2 px-4 w-full rounded text-gray-700"
          name="name"
          type="text"
          placeholder="Product Name"
        />

        <label className="text-gray-600 font-medium block mt-2 font-serif mb-3">Product Category</label>
        <input
          className="border-solid border-gray-300 border py-2 px-4 w-full rounded text-gray-700"
          name="category"
          type="text"
          placeholder="Product Category"
        />

        <label className="text-gray-600 font-medium block mt-2 font-serif mb-3">Product Description</label>
        <input
          className="border-solid border-gray-300 border py-2 px-4 w-full rounded text-gray-700"
          name="description"
          type="text"
          placeholder="Product Description"
        />

        <label className="text-gray-600 font-medium block mt-2 font-serif mb-3">Condition</label>
        <select name="condition"
        className="select select-bordered border-solid border-gray-300 border py-2 px-4 w-full 
        rounded text-gray-700">
        <option value="Excellent">Excellent</option>
        <option value="Good">Good</option>
        <option value="Fair">Fair</option>
        </select>

        <label className="text-gray-600 font-medium block mt-2 font-serif mb-3">Original Price</label>
        <input
          className="border-solid border-gray-300 border py-2 px-4 w-full rounded text-gray-700"
          name="originalPrice"
          type="text"
          placeholder="Original Price"
        />

        <label className="text-gray-600 font-medium block mt-2 font-serif mb-3">Resale Price</label>
        <input
          className="border-solid border-gray-300 border py-2 px-4 w-full rounded text-gray-700"
          name="resalePrice"
          type="text"
          placeholder="Resale Price"
        />

        <label className="text-gray-600 font-medium block mt-2 font-serif mb-3">Year of Purchase</label>
        <input
          className="border-solid border-gray-300 border py-2 px-4 w-full rounded text-gray-700"
          name="yearOfPurchase"
          type="text"
          placeholder="Year of Purchase"
        />

        <label className="text-gray-600 font-medium block mt-2 font-serif mb-3">Mobile No.</label>
        <input
          className="border-solid border-gray-300 border py-2 px-4 w-full rounded text-gray-700"
          name="mobile"
          type="text"
          placeholder="Mobile No."
        />

        <label className="text-gray-600 font-medium block mt-2 font-serif mb-3">Location</label>
        <input
          className="border-solid border-gray-300 border py-2 px-4 w-full rounded text-gray-700"
          name="location"
          type="text"
          placeholder="Location"
        />

        <button
          className="mt-4 w-full bg-green-400 hover:bg-green-600 text-green-100 border py-3 px-6 
          font-semibold text-md rounded"
          type="submit"
        >
          Submit
        </button>
      </form>
    </React.Fragment>
  );
};

export default AddProduct;
