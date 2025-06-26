'use client'
import { useState } from 'react'

export default function PayLaterButton() {
  const [show, setShow] = useState(false)
  const [uniqueId, setUniqueId] = useState('')

  const handlePayment = () => {
    if (!uniqueId) return
    const options = {
      key: process.env.RAZORPAY_KEY_ID || 'rzp_live_CG5HThTQPJqpX4',
      amount: 88500,
      currency: 'INR',
      name: 'Jal Driving Centre',
      description: `Registration Payment (ID: ${uniqueId})`,
      handler: function (response) {
        window.location.href = `/payment-confirmation?uid=${uniqueId}`
      },
      notes: { uniqueId },
      theme: { color: '#800000' },
    }
    const rzp = new window.Razorpay(options)
    rzp.open()
  }

  const loadRazorpayScript = () => {
    if (window.Razorpay) return Promise.resolve()
    return new Promise((resolve) => {
      const script = document.createElement('script')
      script.src = 'https://checkout.razorpay.com/v1/checkout.js'
      script.onload = resolve
      document.body.appendChild(script)
    })
  }

  return (
    <>
      <button
        className="fixed bottom-6 right-6 bg-[#800000] text-white px-4 py-2 rounded shadow-lg z-50"
        onClick={() => setShow(true)}
      >
        Pay Now (with Unique ID)
      </button>
      {show && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-40">
          <div className="bg-white rounded-lg shadow-lg p-8 max-w-md w-full text-center">
            <h2 className="text-xl font-bold mb-4 text-[#800000]">Pay Registration Fee</h2>
            <input
              type="text"
              placeholder="Enter your Unique ID"
              className="border border-gray-600 p-2 w-full mb-4"
              value={uniqueId}
              onChange={e => setUniqueId(e.target.value)}
            />
            <button
              className="bg-[#800000] text-white px-4 py-2 rounded w-full"
              onClick={async () => {
                await loadRazorpayScript()
                handlePayment()
              }}
              disabled={!uniqueId}
            >
              Pay ₹885
            </button>
            <button
              className="mt-2 text-gray-600 underline"
              onClick={() => setShow(false)}
            >
              Close
            </button>
          </div>
        </div>
      )}
    </>
  )
}