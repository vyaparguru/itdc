import Razorpay from 'razorpay'

export async function POST(req) {
  const { amount, receipt } = await req.json();

  const razorpay = new Razorpay({
    key_id: process.env.RAZORPAY_KEY_ID,
    key_secret: process.env.RAZORPAY_KEY_SECRET,
  });

  try {
    const order = await razorpay.orders.create({
      amount,
      currency: 'INR',
      receipt,
      payment_capture: 1,
    });
    return new Response(JSON.stringify({ orderId: order.id }), {
      status: 200,
      headers: { 'Content-Type': 'application/json' },
    });
  } catch (err) {
    console.error('Razorpay order error:', err);
    return new Response(JSON.stringify({ error: 'Failed to create order' }), {
      status: 500,
      headers: { 'Content-Type': 'application/json' },
    });
  }
}