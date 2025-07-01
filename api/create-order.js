import Razorpay from 'razorpay'

export default async function handler(req, res) {
  if (req.method !== 'POST') return res.status(405).end()
  const { amount, receipt } = req.body

  const razorpay = new Razorpay({
    key_id: process.env.RAZORPAY_KEY_ID,
    key_secret: process.env.RAZORPAY_KEY_SECRET,
  })

  try {
    const order = await razorpay.orders.create({
      amount, 
      currency: 'INR',
      receipt,
      payment_capture: 1,
    })
    res.status(200).json({ orderId: order.id })
  } catch (err) {
    res.status(500).json({ error: 'Failed to create order' })
  }
}