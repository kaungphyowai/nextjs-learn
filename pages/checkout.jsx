import React from 'react'
import {loadStripe} from '@stripe/stripe-js'

const stripePromise = loadStripe(process.env.NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY);


const checkout = () => {
    const handleClick = async(event) => {
        const {sessionId} = await fetch('/api/checkout/session', {
            method: 'POST',
            headers: {
                'content-type': 'application/json'    
            },
            body: JSON.stringify({quantity: 1})
        }).then(res => res.json())
        const stripe = await stripePromise;
        const {error} = stripe.redirectToCheckout({
            sessionId
        });
    }
    return (
        <div>
            <h1>checkout</h1>
            <button role="link" onClick={handleClick}>
                checkout
            </button>
        </div>
    )
}

export default checkout
