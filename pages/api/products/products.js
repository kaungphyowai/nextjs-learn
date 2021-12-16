import Stripe from 'stripe';
const stripe = new Stripe(process.env.STRIPE_SECRET_KEY, {
  apiVersion: '2020-08-27'
});

export default async (req, res) => {
    const products =  await stripe.products.list({
        limit: 3,
    })
    res.status(200).json({products: products.data})
}