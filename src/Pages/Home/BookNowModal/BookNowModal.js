import React, { useContext } from "react";
import toast from "react-hot-toast";
import { AuthContext } from "../../../Contexts/AuthProvider";


const BookNowModal = ({product, setProduct}) => {

    const {user} = useContext(AuthContext);

    const {productName, resalePrice} = product;

    const handleBookNow = (event) =>{

      event.preventDefault();
      const form = event.target;
  
      const name = form.name.value;
      const email = form.email.value;
      const productName = form.productName.value;
      const price = form.price.value;
      const phone = form.phone.value;
      const location = form.location.value;

      const bookings = {
        name, email, productName, price, phone, location 
      }

      fetch('http://localhost:5000/bookings', {
        method: 'POST',
        headers:{
          'content-type' : 'application/json'
        },
        body: JSON.stringify(bookings)
      })
      .then(res => res.json())
      .then(data => {
        console.log(data);
        if(data.acknowledged){
          setProduct(null);
          toast.success(`${productName} Booking is Confirmed`);
        }
        
        else{
          toast.error(data.message);
        }  
        
      })


    }

  return (
    <>
      <input type="checkbox" id="book-now-modal" className="modal-toggle" />
      <div className="modal">
        <div className="modal-box relative">
          <label
            htmlFor="book-now-modal"
            className="btn btn-sm btn-circle absolute right-2 top-2"
          >
            ✕
          </label>
          <h3 className="text-2xl font-serif font-semibold text-transparent bg-clip-text 
            bg-gradient-to-r from-sky-500 to-indigo-500">Book: {productName}</h3>

          <form onSubmit={handleBookNow} className="grid grid-cols-1 gap-3 mt-10">

            <input type="text" name="name" disabled defaultValue={user?.displayName} 
            className="input w-full input-bordered input-info rounded-md"/>

            <input name="email" type="email" disabled defaultValue={user?.email}
              className="input w-full input-bordered input-info rounded-md"/>

            <input name="productName" type="text" disabled defaultValue={productName}
              className="input w-full input-bordered input-info rounded-md"/>

            <input name="price" type="text" disabled defaultValue={resalePrice}
              className="input w-full input-bordered input-info rounded-md"/>

            <input name="phone" type="text" placeholder="Phone Number"
              className="input w-full input-bordered input-info rounded-md"/>
              
            <input name="location" type="text" placeholder="Meeting Location"
              className="input w-full input-bordered input-info rounded-md"/>

            <input
              className="btn btn-accent w-full text-white font-semibold text-base"
              type="submit" value="Submit"/>
          </form>
        </div>
      </div>
    </>
  );
};

export default BookNowModal;
