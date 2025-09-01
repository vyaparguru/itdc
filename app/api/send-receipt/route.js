import { nanoid } from 'nanoid';
import { NextResponse } from 'next/server';
import nodemailer from 'nodemailer';
import { PDFDocument, rgb } from 'pdf-lib';

export async function POST(req) {
  try {
    const body = await req.json();

    const uniqueId = body.uniqueId || `${new Date().getFullYear()}-${nanoid(6)}`;

    const data = {
      uniqueId,
      name: body.name || '',
      fathersName: body.fathersName || '',
      dob: body.dob || '',
      mobile: body.mobile || '',
      email: body.email || '',
      qualification: body.qualification || '',
      address: body.address || '',
      state: body.state || '',
      city: body.city || '',
      pincode: body.pincode || '',
      district: body.district || '',
      aadharNumber: body.aadharNumber || '',
      licenseNumber: body.licenseNumber || '',
      licenseCategory: body.licenseCategory || '',
      licenseIssueDate: body.licenseIssueDate || '',
      licenseExpiryDate: body.licenseExpiryDate || '',
      issuingAuthority: body.issuingAuthority || '',
      date: body.date || '',
      place: body.place || '',
      passportPhoto: body.passportPhoto || '',
      aadharFront: body.aadharFront || '',
      aadharBack: body.aadharBack || '',
      licenseFront: body.licenseFront || '',
      licenseBack: body.licenseBack || '',
    };

    console.log('Data in send-receipt:', data);

    const maxBinarySize = 1_000_000; 
['passportPhoto', 'aadharFront', 'aadharBack', 'licenseFront', 'licenseBack'].forEach(field => {
  if (data[field]) {
    const binarySize = Math.floor((data[field].length * 3) / 4);
    if (binarySize > maxBinarySize) {
      throw new Error(`${field} is too large`);
    }
  }
});


    const html = `
      <!DOCTYPE html>
      <html>
        <head>
          <meta charset="UTF-8" />
          <title>Receipt – Jalandhar Institute of Drivers Training</title>
          <style>
            body { font-family: Arial, sans-serif; background-color: #f8f9fa; margin: 0; padding: 0; }
            .container { max-width: 600px; margin: auto; background: #fff; padding: 20px; border: 1px solid #dee2e6; }
            .header { text-align: center; padding-bottom: 10px; }
            .header h2 { margin: 0; color: #343a40; }
            .content { padding: 10px 0; }
            .content p { margin: 5px 0; color: #212529; }
            .note { margin-top: 20px; font-size: 14px; color: #6c757d; border-top: 1px dashed #ccc; padding-top: 10px; }
            .footer { margin-top: 30px; font-size: 13px; color: #6c757d; text-align: center; }
            .btn-call { background-color: #800000; color: #FFF; padding: 8px 16px; text-decoration: none; display: inline-block; margin-top: 15px; border-radius: 4px; }
          </style>
        </head>
        <body>
          <div class="container">
            <div class="header">
              <img src="https://itdcpunjab.com/logo.png" alt="Logo" width="120" />
              <h2>Jalandhar Institute of Drivers Training</h2>
              <p>Dharam Complex, G.T. Road, Kartarpur, Jalandhar, 144801</p>
              <p>📞 ‪+91 90560-66473‬ | ✉ info@itdcpunjab.com | 🌐 itdcpunjab.com</p>
            </div>
            <hr />
            <div class="content">
              <p><strong>Receipt No.:</strong> R-${data.uniqueId}</p>
              <p><strong>Date:</strong> ${data.date || new Date().toLocaleDateString()}</p>
              <p><strong>Your registration is done ✅</strong></p>
              <p>
                Please call <strong>9056066473</strong>, <strong>9056066373</strong> for
                slot booking / appointment.
              </p>
              <br />
              <p><strong>Received from:</strong> ${data.name}</p>
              <p>
                <strong>Amount:</strong> ₹ 885/- (Rupees Eight hundred & eighty five only)
              </p>
              <p><strong>Payment Mode:</strong> Online</p>
              <p><strong>Towards:</strong> Refresher Course</p>
              <br />
              <p><strong>Seal:</strong><br />Jalandhar Institute of Drivers Training</p>
              <div class="note">
                📝 <strong>Note:</strong> Please retain this receipt for future reference.
              </div>
              <div style="text-align: center;">
                <a href="tel:9056066473" class="btn-call">
  <svg xmlns="http://www.w3.org/2000/svg" 
       width="16" height="16" 
       fill="green" 
       viewBox="0 0 24 24" 
       style="vertical-align: middle; margin-right: 4px;">
    <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.91 19.91 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6A19.91 19.91 0 0 1 2.1 4.18 2 2 0 0 1 4 2h3a2 2 0 0 1 2 1.72c.2 1.38.71 2.71 1.5 3.88a2 2 0 0 1-.45 2.57l-1.27 1a16 16 0 0 0 6 6l1-1.27a2 2 0 0 1 2.57-.45c1.17.79 2.5 1.3 3.88 1.5A2 2 0 0 1 22 16.92z"/>
  </svg>
  <span style="color: white;">Call for Slot Booking</span>
</a>

              </div>
            </div>
            <div class="footer">
              © 2025 Jalandhar Institute of Drivers Training. All rights reserved.
            </div>
          </div>
        </body>
      </html>
      `;

    const pdfBytes = await createPdf(data);

    const transporter = nodemailer.createTransport({
      service: 'gmail',
      auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASS,
      },
    });

    const mailOptions = {
      from: process.env.EMAIL_USER,
      to: `${data.email}, ${process.env.OWNER_EMAIL}`,
      subject: `Registration Confirmed – Receipt for Refresher Course | ${data.uniqueId}, ${data.name}`,
      html,
      attachments: [
        {
          filename: 'registration.pdf',
          content: Buffer.from(pdfBytes),
          contentType: 'application/pdf',
        },
      ],
    };

    await transporter.sendMail(mailOptions);

    return NextResponse.json({ success: true });
  } catch (err) {
    console.error(err);
    return NextResponse.json({ success: false, error: 'Internal Server Error' }, { status: 500 });
  }
}

async function createPdf(data) {
  const pdfDoc = await PDFDocument.create();
  const page = pdfDoc.addPage([600, 1100]);
  const { height } = page.getSize();
  const fontSize = 12;

  page.drawText(`Unique ID: ${data.uniqueId}`, {
    x: 50,
    y: height - 30,
    size: 14,
    color: rgb(0, 0, 1),
  });

  page.drawText(`Registration Form`, {
    x: 50,
    y: height - 60,
    size: 18,
    color: rgb(0, 0, 0),
  });

  let yPosition = height - 100;
  const lineSpacing = 20;

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
  ];

  fields.forEach((field) => {
    page.drawText(field, { x: 50, y: yPosition, size: fontSize });
    yPosition -= lineSpacing;
  });

  const embedBase64Image = async (base64, x, y, width, height) => {
    if (base64) {
      try {
        const bytes = Uint8Array.from(atob(base64), c => c.charCodeAt(0));
        const image = await pdfDoc.embedJpg(bytes);
        page.drawImage(image, { x, y, width, height });
      } catch (err) {
        console.error('Failed to embed image', err);
      }
    }
  };

  yPosition -= 40;

  await embedBase64Image(data.passportPhoto, 50, yPosition - 100, 100, 100);
  page.drawText('Passport Photo', { x: 50, y: yPosition - 110, size: 10 });

  await embedBase64Image(data.aadharFront, 200, yPosition - 100, 150, 100);
  page.drawText('Aadhar Front', { x: 200, y: yPosition - 110, size: 10 });

  await embedBase64Image(data.aadharBack, 380, yPosition - 100, 150, 100);
  page.drawText('Aadhar Back', { x: 380, y: yPosition - 110, size: 10 });

  yPosition -= 150;

  await embedBase64Image(data.licenseFront, 50, yPosition - 100, 150, 100);
  page.drawText('License Front', { x: 50, y: yPosition - 110, size: 10 });

  await embedBase64Image(data.licenseBack, 230, yPosition - 100, 150, 100);
  page.drawText('License Back', { x: 230, y: yPosition - 110, size: 10 });

  return await pdfDoc.save();
}
