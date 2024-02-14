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





//////////////////////////////////////////////////////////////////////

// const email = process.env.EMAIL;
// const password = process.env.PASSWORD;
// const express = require("express");
// const router = express.Router();
// const cors = require("cors");
// const nodemailer = require("nodemailer");

// // server used to send send emails
// const app = express();
// app.use(cors());
// app.use(express.json());
// app.use("/", router);
// app.listen(5000, () => console.log("Server Running"));

// router.post("/contact", (req, res) => {
//   const name = req.body.firstName + req.body.lastName;
//   const email = req.body.email;
//   const message = req.body.message;
//   const phone = req.body.phone;
//   const mail = {
//     from: name,
//     to: email,
//     subject: "Contact Form Submission through Portfolio",
//     html: `<p>Name: ${name}</p>
//            <p>Email: ${email}</p>
//            <p>Phone: ${phone}</p>
//            <p>Message: ${message}</p>`,
//   };
//   contactEmail.sendMail(mail, (error) => {
//     if (error) {
//       res.json(error);
//     } else {
//       res.json({ code: 200, status: "Message Sent" });
//     }
//   });
// });

// app.use((err, req, res, next) => {
//   res.status(500).json({ error: err.toString() });
// });

// app.listen(3000, () => console.log("Server Running"));

// const contactEmail = nodemailer.createTransport({
//   service: 'gmail',
//   auth: {
//     user: email,
//     pass: password
//   },
// });

// contactEmail.verify((error) => {
//   if (error) {
//     console.log(error);
//   }
// });
