import { nanoid } from 'nanoid'
import { NextResponse } from 'next/server'
import nodemailer from 'nodemailer'
import { PDFDocument, rgb } from 'pdf-lib'

export async function POST(req) {
  try {
    const form = await req.formData()
    console.log('Form Data Received')

    const name = form.get('name')
    const fathersName = form.get('fathersName')
    const dob = form.get('dob')
    const mobile = form.get('mobile')
    const email = form.get('email')
    const qualification = form.get('qualification')
    const address = form.get('address')
    const state = form.get('state')
    const city = form.get('city')
    const pincode = form.get('pincode')
    const district = form.get('district')
    const aadharNumber = form.get('aadharNumber')
    const licenseNumber = form.get('licenseNumber')
    const licenseCategory = form.get('licenseCategory')
    const licenseIssueDate = form.get('licenseIssueDate')
    const licenseExpiryDate = form.get('licenseExpiryDate')
    const issuingAuthority = form.get('issuingAuthority')
    const date = form.get('date')
    const place = form.get('place')

    const passportPhoto = form.get('passportPhoto')
    const aadharFront = form.get('aadharFront')
    const aadharBack = form.get('aadharBack')
    const licenseFront = form.get('licenseFront')
    const licenseBack = form.get('licenseBack')

    console.log('Extracted Form Data:', {
      name,
      fathersName,
      dob,
      mobile,
      email,
      qualification,
      address,
      state,
      city,
      pincode,
      district,
      aadharNumber,
      licenseNumber,
      licenseCategory,
      licenseIssueDate,
      licenseExpiryDate,
      issuingAuthority,
      date,
      place,
    })

    const uniqueId = `${new Date().getFullYear()}-${nanoid(6)}`
    console.log('Generated Unique ID:', uniqueId)

    const pdfBytes = await createPdf({
      uniqueId,
      name,
      fathersName,
      dob,
      mobile,
      email,
      qualification,
      address,
      state,
      city,
      pincode,
      district,
      aadharNumber,
      licenseNumber,
      licenseCategory,
      licenseIssueDate,
      licenseExpiryDate,
      issuingAuthority,
      date,
      place,
      passportPhoto,
      aadharFront,
      aadharBack,
      licenseFront,
      licenseBack,
    })

    console.log('PDF Generated Successfully')

    const transporter = nodemailer.createTransport({
      service: 'gmail',
      auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASS,
      },
    })

    const mailOptions = {
      from: process.env.EMAIL_USER,
      to: process.env.PAGE_OWNER_EMAIL,
      subject: 'New Registration Form Submission',
      text: `A new form has been submitted by ${name}. Unique ID: ${uniqueId}`,
      attachments: [
        {
          filename: 'registration.pdf',
          content: pdfBytes,
          contentType: 'application/pdf',
        },
      ],
    }

    await transporter.sendMail(mailOptions)
    console.log('Email Sent Successfully')
    return NextResponse.json({ success: true,uniqueId })
  } catch (e) {
    console.error('Error in POST Handler:', e)
    return NextResponse.json({ success: false }, { status: 500 })
  }
}

async function createPdf(data) {
  const pdfDoc = await PDFDocument.create()
  const page = pdfDoc.addPage([600, 1100]) // Increased height to accommodate unique ID and images
  const { width, height } = page.getSize()
  const fontSize = 12

  // Add the unique ID at the top of the PDF
  page.drawText(`Unique ID: ${data.uniqueId}`, {
    x: 50,
    y: height - 30,
    size: 14,
    color: rgb(0, 0, 1), // Blue color for the unique ID
  })

  page.drawText(`Registration Form`, {
    x: 50,
    y: height - 60,
    size: 18,
    color: rgb(0, 0, 0),
  })

  let yPosition = height - 100
  const lineSpacing = 20

  const fields = [
    `Name: ${data.name}`,
    `Father's Name: ${data.fathersName}`,
    `Date of Birth: ${data.dob}`,
    `Mobile No.: ${data.mobile}`,
    `Email: ${data.email}`,
    `Qualification: ${data.qualification}`,
    `Address: ${data.address}`,
    `State: ${data.state}`,
    `City: ${data.city}`,
    `Pincode: ${data.pincode}`,
    `District: ${data.district}`,
    `Aadhar Card Number: ${data.aadharNumber}`,
    `Driving License Number: ${data.licenseNumber}`,
    `License Category: ${data.licenseCategory}`,
    `License Issue Date: ${data.licenseIssueDate}`,
    `License Expiry Date: ${data.licenseExpiryDate}`,
    `Issuing Authority: ${data.issuingAuthority}`,
    `Date: ${data.date}`,
    `Place: ${data.place}`,
  ]

  fields.forEach((field) => {
    page.drawText(field, { x: 50, y: yPosition, size: fontSize })
    yPosition -= lineSpacing
  })

  const embedImage = async (imageFile, x, y, width, height) => {
    if (imageFile) {
      try {
        const imageBytes = await imageFile.arrayBuffer()
        const image = await pdfDoc.embedJpg(imageBytes)
        page.drawImage(image, { x, y, width, height })
      } catch (err) {
        console.error('Failed to embed image:', err)
      }
    }
  }

  yPosition -= 40;

  await embedImage(data.passportPhoto, 50, yPosition - 100, 100, 100);
  page.drawText('Passport Photo', { x: 50, y: yPosition - 110, size: 10 });

  await embedImage(data.aadharFront, 200, yPosition - 100, 150, 100);
  page.drawText('Aadhar Front', { x: 200, y: yPosition - 110, size: 10 });

  await embedImage(data.aadharBack, 380, yPosition - 100, 150, 100); // shifted right
  page.drawText('Aadhar Back', { x: 380, y: yPosition - 110, size: 10 });

  yPosition -= 150;

  await embedImage(data.licenseFront, 50, yPosition - 100, 150, 100);
  page.drawText('License Front', { x: 50, y: yPosition - 110, size: 10 });

  await embedImage(data.licenseBack, 230, yPosition - 100, 150, 100); // shifted right
  page.drawText('License Back', { x: 230, y: yPosition - 110, size: 10 });


  return await pdfDoc.save()
}