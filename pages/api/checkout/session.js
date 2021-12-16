import Stripe from 'stripe';
const stripe = new Stripe(process.env.STRIPE_SECRET_KEY, {
  apiVersion: '2020-08-27'
});

export default  async (req, res) => {
    const { quantity } = req.body;
    const session = await stripe.checkout.sessions.create({
        payment_method_types: ['card'],
        mode: 'payment',
        line_items: [{
            price: process.env.PRICE_ID,
            quantity
        }],
        cancel_url: `${req.headers.origin}/checkout`,
        success_url: `${req.headers.origin}/result?session_id={CHECKOUT_SESSION_ID}`
    })
  res.status(200).json({ sessionId: session.id });
};
