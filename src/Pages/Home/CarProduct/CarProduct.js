import { format } from "date-fns";
import React, { useContext } from "react";
import toast from "react-hot-toast";
import { AuthContext } from "../../../Contexts/AuthProvider";
import useBuyer from "../../../Hooks/useBuyer";

const CarProduct = ({ carProduct, setProduct }) => {

  console.log(carProduct);
  const {
    productName,
    location,
    resalePrice,
    originalPrice,
    yearsOfUse,
    postingTime,
    sellerName,
    image,
    _id,
    paid
  } = carProduct;

  const { user, loading } = useContext(AuthContext);
  const [isBuyer, isBuyerLoading] = useBuyer(user?.email);

  const postingDate = format(Date.parse(postingTime), "PP");
  
  const handleWishlist = () =>{
    fetch(`http://localhost:5000/wishlists?id=${_id}&email=${user.email}`, {
      method: 'PUT'
  })
  .then(res => res.json())
  .then(data => {
      if(data.modifiedCount > 0){
        toast.success(`${productName} is Added as Wishlist`);
      }
  })
  }


  return (

    <div>
      
      {
        !paid &&
        <div className="card lg:card-side bg-base-100 shadow-xl">
      <figure>
        <img className="w-96 h-96" src={image} alt="Album" />
      </figure>
      <div className="card-body w-96">
        {isBuyer && (
          <div className="card-actions justify-end">
            <label onClick={ handleWishlist}  className="btn glass btn-sm text-blue-500">
              Add to Wishlist
            </label>
          </div>
        )}

        <h2
          className="card-title text-2xl font-serif font-semibold text-transparent bg-clip-text 
            bg-gradient-to-r from-sky-500 to-indigo-500 mb-2"
        >
          {productName}
        </h2>
        <p className="font-serif">Location: {location}</p>
        <p className="font-serif">Original Price: {originalPrice}</p>
        <p className="font-serif">Resale Price: {resalePrice}</p>
        <p className="font-serif">Years of Use: {yearsOfUse}</p>
        <p className="font-serif">Posted Time: {postingDate}</p>
        <p className="font-serif">Paid: {paid}</p>
        <hr />
        <p className="italic font-serif">Seller Name: {sellerName}</p>

        <div className="card-actions justify-end">
          <label
            htmlFor="book-now-modal"
            onClick={() => setProduct(carProduct)}
            className="btn border-none bg-gradient-to-r from-sky-500 to-indigo-500 text-white 
          rounded-none"
          >
            Book Now
          </label>
        </div>
      </div>
    </div>}

    </div>

    // <>
    // {!wishlistEmail (
    //   <div>
    //     <h1>{productName}</h1>
    //   </div>
    // )}
    // </>
  );
};

export default CarProduct;
