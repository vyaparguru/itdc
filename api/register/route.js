import nodemailer from 'nodemailer'
import { NextResponse } from 'next/server'

export async function POST(req) {
  const data = await req.formData()
  const transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
      user: process.env.EMAIL_USER,
      pass: process.env.EMAIL_PASS,
    }
  })

  const userEmail = data.get('email')

  const mailOptions = {
    from: process.env.EMAIL_USER,
    to: `${userEmail}, ${process.env.EMAIL_OWNER}`,
    subject: 'HMV Driver Registration',
    text: `You have a new registration.\n\nDetails:\nName: ${data.get('name')}\nMobile: ${data.get('mobile')}\nEmail: ${data.get('email')}\nQualification: ${data.get('qualification')}\nAddress: ${data.get('address')}\nState: ${data.get('state')}\nCity: ${data.get('city')}\nPincode: ${data.get('pincode')}\nDistrict: ${data.get('district')}\nAadhar: ${data.get('aadhar')}\nDriving License: ${data.get('dlNumber')}`,
  }

  await transporter.sendMail(mailOptions)
  return NextResponse.json({ success: true })
}
