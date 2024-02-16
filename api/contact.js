// /api/contact.js
require("dotenv").config();
const nodemailer = require("nodemailer");

const transporter = nodemailer.createTransport({
  service: 'gmail',
  host: "smtp.gmail.com",
  port: 465,
  secure: true,
  auth: {
    user: process.env.USER,
    pass: process.env.APP_PASSWORD,
  },
});

module.exports = async (req, res) => {
  if (req.method === 'POST') {
    const formDetails = req.body;

    const mailOptions = {
      from: {
        name: formDetails.firstName,
        address: formDetails.email
      },
      to: process.env.USER,
      subject: "Portfolio Form",
      text: `Name: ${formDetails.firstName}\nEmail: ${formDetails.email}\nPhone: ${formDetails.phone}\nMessage: ${formDetails.message}`,
    };

    try {
      await transporter.sendMail(mailOptions);
      console.log('Email has been sent');
      res.status(200).json({ code: 200, message: 'Email sent successfully' });
    } catch (error) {
      console.error(error);
      res.status(500).json({ code: 500, message: 'Error in sending email' });
    }
  } else {
    res.status(405).json({ code: 405, message: 'Method Not Allowed' });
  }
};