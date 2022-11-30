import React,{ useEffect, useState, useContext } from 'react';
import { CardElement, useElements, useStripe } from "@stripe/react-stripe-js";
import { AuthContext } from "../../../Contexts/AuthProvider";
import toast from "react-hot-toast";


const WishlistCheckoutForm = ({booking}) => { 
    
    const [cardError, setCardError] = useState('');
    const [success, setSuccess] = useState('');
    const [processing, setProcessing] = useState(false);
    const [transactionId, setTransactionId] = useState('');
    const [clientSecret, setClientSecret] = useState("");

    const {user} = useContext(AuthContext);

    const stripe = useStripe();
    const elements = useElements();

    const { resalePrice, wishlistEmail, _id, productName } = booking;
    console.log(booking);

    useEffect(() => {
        // Create PaymentIntent as soon as the page loads
        fetch("https://car-cruise-bd.vercel.app/wishlist-create-payment-intent", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({ resalePrice }),
        })
            .then((res) => res.json())
            .then((data) => setClientSecret(data.clientSecret));
    }, [resalePrice]);

    const handleSubmit = async (event) => {
        event.preventDefault();

        if (!stripe || !elements) {
            return;
        }

        const card = elements.getElement(CardElement);
        if (card === null) {
            return;
        }

        const { error, paymentMethod } = await stripe.createPaymentMethod({
            type: 'card',
            card
        });

        if (error) {
            console.log(error);
            setCardError(error.message);
        }
        else {
            setCardError('');
        }
        setSuccess('');
        setProcessing(true);
        const { paymentIntent, error: confirmError } = await stripe.confirmCardPayment(
            clientSecret,
            {
                payment_method: {
                    card: card,
                    billing_details: {
                        name: user?.displayName,
                        email: user?.email
                    },
                },
            },
        );

        if (confirmError) {
            setCardError(confirmError.message);
            return;
        }
        if (paymentIntent.status === "succeeded") {
            console.log('card info', card);
            
            // store payment info in the database
            const payment = {
                resalePrice,
                transactionId: paymentIntent.id,
                wishlistEmail,
                bookingId: _id
            }
            console.log(payment);
            fetch('https://car-cruise-bd.vercel.app/wishlist-payments', {
                method: 'POST',
                headers: {
                    'content-type': 'application/json',
                },
                body: JSON.stringify(payment)
            })
                .then(res => res.json())
                .then(data => {
                    console.log(data);
                    if (data.insertedId) {
                        setSuccess('Congrats! Your Payment has been Completed');
                        setTransactionId(paymentIntent.id);
                        toast.success(`Congrats! Your Payment has been Completed`, {
                          position: "top-right"
                        });
                    }
                })
        }
        setProcessing(false);
    }


    return (

        <>
            <form onSubmit={handleSubmit}>
                <CardElement
                    options={{
                        style: {
                            base: {
                                fontSize: '16px',
                                color: '#424770',
                                '::placeholder': {
                                    color: '#aab7c4',
                                    
                                },
                            },
                            invalid: {
                                color: '#9e2146',
                            },
                        },
                    }}
                />
                <button
                    className='btn mt-4 btn-success rounded-none'
                    type="submit"
                    disabled={!stripe || !clientSecret || processing}>
                    Pay
                </button>
            </form>
            <p className="text-red-500">{cardError}</p>
            {
                success && <div>
                    <p className='text-green-500'>{success}</p>
                    <p>Your transactionId: <span className='font-bold'>{transactionId}</span></p>
                </div>
            }
        </>


    );
};

export default WishlistCheckoutForm;