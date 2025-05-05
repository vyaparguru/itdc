import nodemailer from 'nodemailer';

export default async function handler(req, res) {
  if (req.method === 'POST') {
    const { data } = req.body;

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
      subject: 'New Registration Received',
      html: `
        <h2>New Registration Details:</h2>
        <pre>${JSON.stringify(data, null, 2)}</pre>
      `,
    };

    try {
      await transporter.sendMail(mailOptions);
      res.status(200).json({ success: true });
    } catch (error) {
      res.status(500).json({ error: 'Email sending failed' });
    }
  } else {
    res.status(405).json({ error: 'Method not allowed' });
  }
}
