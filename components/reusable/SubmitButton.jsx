'use client'
export default function SubmitButton({ label }) {
  return (
    <button type="submit" className="bg-blue-600 text-white p-3 rounded-md hover:bg-blue-700 transition">
      {label}
    </button>
  )
}
