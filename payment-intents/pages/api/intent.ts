import { NextApiRequest, NextApiResponse } from 'next'
import Stripe from 'stripe'

const stripe = new Stripe(process.env.STRIPE_KEY!, {
	apiVersion: '2020-08-27',
})

const handler = async (req: NextApiRequest, res: NextApiResponse) => {
	const { amount, payment_intent_id } = req.body
	if (payment_intent_id) {
		try {
			// If a payment_intent_id is passed, retrieve the paymentIntent
			const current_intent = await stripe.paymentIntents.retrieve(
				payment_intent_id
			)
			// If a paymentIntent is retrieved update its amount
			if (current_intent) {
				const updated_intent = await stripe.paymentIntents.update(
					payment_intent_id,
					{
						amount: amount,
					}
				)
				res.status(200).json(updated_intent)
				return
			}
		} catch (error: any) {
			//Catch any error and return a status 500
			if (error.code !== 'resource_missing') {
				const errorMessage =
					error instanceof Error ? error.message : 'Internal server error'
				res.status(500).json({ statusCode: 500, message: errorMessage })
				return
			}
		}
	}
	try {
		// Create PaymentIntent
		const payment_intent = await stripe.paymentIntents.create({
			amount: amount,
			currency: 'aud',
			description: 'Payment description',
			automatic_payment_methods: {
				enabled: true,
			},
		})
		//Return the payment_intent object
		res.status(200).json(payment_intent)
	} catch (error) {
		const errorMessage =
			error instanceof Error ? error.message : 'Internal server error'
		res.status(500).json({ statusCode: 500, message: errorMessage })
	}
}
export default handler
