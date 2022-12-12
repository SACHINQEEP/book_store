const Stripe = require('stripe')("sk_test_51L70knSB1fV5vqhai2hPlhoNRTUfyKdITUilrnhz87zfrbMrElm4ZWf0uO6AaN4IoXwkycLW2a2pO8y8ajiUBcQy00SBlH7Zu0")




module.exports = {
    createStripeUser: async (body) => {
        try {
            const customer = await Stripe.customers.create({
                email: body.email_id,
                name: body.first_name
            });

            return customer;
        } catch (error) {
            throw new Error(error)
        }
    },

    createStripeAccount: async (email_id) => {
        try {
            const customerAccount = await Stripe.accounts.create({
                type: 'express',
                email: email_id,
                country: 'GB',
                capabilities: {
                    card_payments: {
                        requested: true,
                    },
                    transfers: {
                        requested: true,
                    },
                }
            });

            return customerAccount;
        } catch (error) {
            throw new Error(error.message)
        }
    }
}