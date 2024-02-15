//This is the original file for the server. It is not used in the final version of the project.
//The server is hosted on Vercel and the final code is in the file api/contact.js

require("dotenv").config();
const nodemailer = require("nodemailer");
const express = require('express');
const app = express();
app.use(express.json());
const cors = require('cors');
app.use(cors());

const transporter = nodemailer.createTransport({
  service: 'gmail',
  host: "smtp.gmail.com",
  port: 587,
  secure: false,
  auth: {
    user: process.env.USER,
    pass: process.env.APP_PASSWORD,
  },
});

app.post('/contact', async (req, res) => {
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
});

app.listen(3001, () => console.log('Server is running on port 3001'));

