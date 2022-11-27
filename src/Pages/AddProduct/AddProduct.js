import { useQuery } from "@tanstack/react-query";
import React, { useContext, useState } from "react";
import { useForm } from "react-hook-form";
import toast from "react-hot-toast";
import { useNavigate } from "react-router-dom";
import { AuthContext } from "../../Contexts/AuthProvider";
import Loading from "../Shared/Loading/Loading";



const AddProduct = () => {

  const { register, handleSubmit, formState: { errors } } = useForm(
    {
      defaultValues: {
          category: '',
          condition: ''
      }
  }
  );
  
  const {user, loading} = useContext(AuthContext);

  const navigate = useNavigate();

  const imageHostKey = process.env.REACT_APP_imgbb;

  const { data: categories, isLoading } = useQuery({
    queryKey: ['categories'],
    queryFn: async () => {
        const res = await fetch('http://localhost:5000/addProductCategories');
        const data = await res.json();
        return data;
    }
})
const categoryObject = {};

const getCategoryObject = () => {
  categories?.forEach(category => {
      categoryObject[category.name] = category._id;
  })
}

getCategoryObject();

    const handleAddProduct = (data) => {
      const image = data.image[0];
      const formData = new FormData();
      formData.append('image', image);
      const url = `https://api.imgbb.com/1/upload?key=${imageHostKey}`;
      fetch(url, {
          method: 'POST',
          body: formData
      })
      .then(res => res.json())
      .then(imgData =>{
          console.log(imgData);
          if(imgData.success){
            const product = {
              categoryId: categoryObject[data.category],
              productName: data.name,
              categoryName: data.category, 
              condition: data.condition,
              description: data.description,
              originalPrice: data.originalPrice,
              resalePrice: data.resalePrice,
              yearsOfUse: data.yearOfPurchase,
              mobile: data.mobile,
              location: data.location,
              sellerName: user?.displayName,
              email: user.email,
              image: imgData.data.url,
              salesStatus:'available',
              postingTime: new Date()
          }
      console.log(product);

              // Save doctor information to the database
              fetch('http://localhost:5000/addProducts',{
                  method: 'POST',
                  headers:{
                      'content-type': 'application/json',
                  },
                  body:JSON.stringify(product)
              })
              .then(res => res.json())
              .then(result => {
                toast.success(`${data.name} is Added Successfully`, {
                  position: "top-right"
                });
                navigate('/dashboard/myproducts');
              })
          }
          
      })
      
  }

      if(isLoading || loading){
        return <Loading></Loading>
    }


  return (
    <React.Fragment>
      <h1 className="text-center text-4xl font-semibold mt-5 font-serif text-transparent bg-clip-text 
            bg-gradient-to-r from-sky-500 to-indigo-500">Please Add a Product to Explore</h1>
      <div className="divider"></div>
      <form
        className="max-w-xl m-auto py-10 my-12 px-12 border shadow-md"
        onSubmit={handleSubmit(handleAddProduct)}
      > 
      <h1 className="text-center text-4xl font-semibold font-serif text-transparent bg-clip-text 
            bg-gradient-to-r from-sky-500 to-indigo-500">Add a Product</h1>
        <div className="form-control">
        <label className="text-gray-600 font-medium block mt-2 font-serif mb-3">Product Name</label>
        <input
          className="border-solid border-gray-300 border py-2 px-4 w-full rounded text-gray-700"
          type="text" {...register("name", {
            required: "Product Name is Required"
        })}
          placeholder="Product Name"
          autoFocus
        />
        {errors.name && <p className='text-red-500'>{errors.name.message}</p>}
        </div>

        <div className="form-control">
        <label className="text-gray-600 font-medium block mt-2 font-serif mb-3">Product Category</label>
        <select {...register('category', {
            required: "Category is Required"
        })}
        className="select select-bordered border-solid border-gray-300 border py-2 px-4 w-full 
        rounded text-gray-700">
           <option disabled value="">Select Category</option>
           {
            Object.keys(categoryObject)?.map((category, index) => <option
            key={index}
            value={category}>
            {category}</option>)
           }
        </select>
        {errors.category && <p className='text-red-500'>{errors.category.message}</p>}
        </div>

        <div className="form-control">
        <label className="text-gray-600 font-medium block mt-2 font-serif mb-3">Product Description</label>
        <input
          className="border-solid border-gray-300 border py-2 px-4 w-full rounded text-gray-700"
          type="text" {...register("description", {
            required: "Product Description is Required"
        })}
          placeholder="Product Description"
        />
        {errors.description && <p className='text-red-500'>{errors.description.message}</p>}
        </div>

        <div className="form-control">
        <label className="text-gray-600 font-medium block mt-2 font-serif mb-3">Condition</label>
        <select
        {...register('condition', {
          required: "Condition is Required"
      })}
        className="select select-bordered border-solid border-gray-300 border py-2 px-4 w-full 
        rounded text-gray-700">
        <option disabled value="">Select Condition</option>
        <option value="Excellent">Excellent</option>
        <option value="Good">Good</option>
        <option value="Fair">Fair</option>
        </select>
        {errors.condition && <p className='text-red-500'>{errors.condition.message}</p>}
        </div>

        <div className="form-control">
        <label className="text-gray-600 font-medium block mt-2 font-serif mb-3">Original Price</label>
        <input
          className="border-solid border-gray-300 border py-2 px-4 w-full rounded text-gray-700"
          type="text" {...register("originalPrice", {
            required: "Original Price is Required"
        })}
          placeholder="Original Price"
        />
        {errors.originalPrice && <p className='text-red-500'>{errors.originalPrice.message}</p>}
        </div>

        <div className="form-control">
        <label className="text-gray-600 font-medium block mt-2 font-serif mb-3">Resale Price</label>
        <input
          className="border-solid border-gray-300 border py-2 px-4 w-full rounded text-gray-700"
          type="text" {...register("resalePrice", {
            required: "Resale Price is Required"
        })}
          placeholder="Resale Price"
        />
        {errors.resalePrice && <p className='text-red-500'>{errors.resalePrice.message}</p>}
        </div>

        <div className="form-control">
        <label className="text-gray-600 font-medium block mt-2 font-serif mb-3">Year of Purchase</label>
        <input
          className="border-solid border-gray-300 border py-2 px-4 w-full rounded text-gray-700"
          type="text" {...register("yearOfPurchase", {
            required: "Year of Purchase is Required"
        })}
          placeholder="Year of Purchase"
        />
        {errors.yearsOfPurchase && <p className='text-red-500'>{errors.yearsOfPurchase.message}</p>}
        </div>

        <div className="form-control">
        <label className="text-gray-600 font-medium block mt-2 font-serif mb-3">Mobile No.</label>
        <input
          className="border-solid border-gray-300 border py-2 px-4 w-full rounded text-gray-700"
          type="text" {...register("mobile", {
            required: "Mobile No. is Required"
        })}
          placeholder="Mobile No."
        />
        {errors.mobile && <p className='text-red-500'>{errors.mobile.message}</p>}
        </div>

        <div className="form-control">
        <label className="text-gray-600 font-medium block mt-2 font-serif mb-3">Location</label>
        <input
          className="border-solid border-gray-300 border py-2 px-4 w-full rounded text-gray-700"
          type="text" {...register("location", {
            required: "Location is Required"
        })}
          placeholder="Location"
        />
        {errors.location && <p className='text-red-500'>{errors.location.message}</p>}
        </div>

        <div className="form-control">
        <label className="text-gray-600 font-medium block mt-2 font-serif mb-3"> 
             <span className="label-text">Photo</span>
        </label>
        <input 
        type="file" {...register("image", {
          required: "Image is Required"
      })}
        className="border-solid border-gray-300 border py-2 px-4 w-full rounded text-gray-700"/>
        {errors.photo && <p className='text-red-500'>{errors.photo.message}</p>}
        </div>

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
