import { Elements } from '@stripe/react-stripe-js';
import { loadStripe } from '@stripe/stripe-js';
import React from 'react';
import { useLoaderData } from 'react-router-dom';
import WishlistCheckoutForm from './WishlistCheckoutForm';

const stripePromise = loadStripe(process.env.REACT_APP_STRIPE_PK);

const WishlistPayment = () => {

    const wishlist = useLoaderData();

    const {productName, resalePrice, image} = wishlist;

    return (

        <div className='p-5'>

            <h3 className="text-3xl font-semibold my-5 font-mono text-transparent bg-clip-text 
            bg-gradient-to-r from-sky-500 to-indigo-500 underline-offset-4">Processing Payment for {productName}</h3>

            <div className="avatar m-5 place-items-center">
            <div className="w-36 rounded-full ring ring-primary ring-offset-base-100 ring-offset-2">
                <img src={image} alt="" />
            </div>
            <h3 className="text-center text-2xl font-semibold font-mono text-transparent bg-clip-text 
            bg-gradient-to-r from-sky-500 to-indigo-500 underline-offset-4 m-8">{productName}</h3> <br />
            <h3 className="text-center text-xl font-semibold font-mono text-orange-500 m-8">Price: ${resalePrice}</h3> 
            </div>


            <div className='w-96 my-12 px-5 input-bordered'>
                <Elements stripe={stripePromise}>
                    <WishlistCheckoutForm
                    booking={wishlist}
                    />
                </Elements>
            </div>
            
        </div>
    );
};

export default WishlistPayment;