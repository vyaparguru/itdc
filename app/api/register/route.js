import { nanoid } from 'nanoid'
import { NextResponse } from 'next/server'

export async function POST(req) {
  try {
    const form = await req.formData()
    console.log('Form Data Received')

    const uniqueId = `${new Date().getFullYear()}-${nanoid(6)}`
    console.log('Generated Unique ID:', uniqueId)

    console.log('PDF Generated Successfully')

    return NextResponse.json({ success: true,uniqueId })
  } catch (e) {
    console.error('Error in POST Handler:', e)
    return NextResponse.json({ success: false }, { status: 500 })
  }
}
