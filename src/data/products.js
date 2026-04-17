const products = [
  {
    id: 1,
    name: 'Starter',
    description: 'Perfect for individuals and small projects',
    price: 49,
    oldPrice: 99,
    period: 'mo',
    features: ['Basic Features', 'Email Support', '1 Project', 'Community Access'],
    popular: false,
  },
  {
    id: 2,
    name: 'Pro',
    description: 'Best for professionals and growing teams',
    price: 99,
    oldPrice: 199,
    period: 'mo',
    features: ['All Starter Features', 'Priority Support', 'Unlimited Projects', 'Advanced Analytics', 'API Access'],
    popular: true,
  },
  {
    id: 3,
    name: 'Enterprise',
    description: 'For large organizations with custom needs',
    price: 299,
    oldPrice: 499,
    period: 'mo',
    features: ['All Pro Features', 'Dedicated Support', 'Custom SLA', 'On-Premise Option', '24/7 Phone Support'],
    popular: false,
  },
]

export default products
