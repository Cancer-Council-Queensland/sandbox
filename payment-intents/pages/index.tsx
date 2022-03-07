import Head from 'next/head'
import React, { useState, useEffect } from 'react'
import { Elements } from '@stripe/react-stripe-js'
import { loadStripe } from '@stripe/stripe-js'
import CheckoutForm from '../components/form'

const stripe = loadStripe(process.env.NEXT_PUBLIC_STRIPE_KEY!)

export default function Home() {
	const [clientSecret, setClientSecret] = useState('')
	const [paymentIntent, setPaymentIntent] = useState('')

	useEffect(() => {
		// Create PaymentIntent as soon as the page loads using our local API
		fetch('api/intent', {
			method: 'POST',
			headers: { 'Content-Type': 'application/json' },
			body: JSON.stringify({
				amount: 30000,
				payment_intent_id: '',
			}),
		})
			.then((res) => res.json())
			.then((data) => {
				setClientSecret(data.client_secret), setPaymentIntent(data.id)
			})
	}, [])

	return (
		<div className="mx-auto max-w-screen-lg">
			<Head>
				<title>Stripe Elements</title>
			</Head>
			<h1 className="bold mb-4 mt-4 text-center text-2xl">
				Accept payments with credit card
			</h1>

			{clientSecret && (
				<Elements
					options={{
						clientSecret,
						appearance: {
							theme: 'stripe',
						},
					}}
					stripe={stripe}
				>
					<CheckoutForm paymentIntent={paymentIntent} />
				</Elements>
			)}
		</div>
	)
}
