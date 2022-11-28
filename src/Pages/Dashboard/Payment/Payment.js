import React from 'react';
import { useLoaderData } from 'react-router-dom';
import { Elements } from '@stripe/react-stripe-js';
import { loadStripe } from '@stripe/stripe-js';
import CheckoutForm from './CheckoutForm';


const stripePromise = loadStripe(process.env.REACT_APP_STRIPE_PK);

const Payment = () => {

    const orders = useLoaderData();

    const {productName, price} = orders;

    console.log(orders);

    return (

        <div className='p-5'>

            <h3 className="text-3xl">Payment for {productName}</h3>
            <p className="text-xl">Please pay <strong>${price}</strong> for your Order</p>

            <div className='w-96 my-12 px-5 input-bordered'>
                <Elements stripe={stripePromise}>
                    <CheckoutForm
                        booking={orders}
                    />
                </Elements>
            </div>
            
        </div>

    );
};

export default Payment;