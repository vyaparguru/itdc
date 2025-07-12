'use client'
import { Suspense } from 'react'
import { useSearchParams } from 'next/navigation'
import LoaderOverlay from '@/components/LoaderOverlay'

function PaymentConfirmationInner() {
  const params = useSearchParams()
  const uniqueId = params.get('uid')

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100">
      <div className="bg-white p-8 rounded shadow text-center">
        <h1 className="text-3xl font-bold text-[#800000] mb-4">Thank you for your payment!</h1>
        <p className="mb-2 text-gray-900">Your payment was successful.</p>
        <p className="font-semibold text-gray-900">Your Unique ID: <span className="text-blue-700">{uniqueId}</span></p>
      </div>
    </div>
  )
}

export default function PaymentConfirmation() {
  return (
    <Suspense fallback={<LoaderOverlay />}>
  <PaymentConfirmationInner />
</Suspense>

  )
}