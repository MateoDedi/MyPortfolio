import { formInitialDetails } from './src/components/Contact.js';
require("dotenv").config();
const nodemailer = require("nodemailer");


//Able to send an email
const transporter = nodemailer.createTransport({
  service: 'gmail',
  host: "smtp.gmail.com",
  port: 587,
  secure: false, // true for 465, false for other ports
  auth: {
    // gmail user authentication
    user: process.env.USER,
    pass: process.env.APP_PASSWORD,
  },
});

  // const userName = 'elon';
  // const userEmail = 'elonadedi@hotmail.com';
  // const userMessage = 'trarara';

// the content of the emails sent
const mailOptions = {
  from: {
    name: formInitialDetails.firstName, //who will email me
    address: formInitialDetails.email //their email
  },
  to: process.env.USER, // list of receivers
  subject: "Portfolio Form", // Subject line
  text: `Name: ${formInitialDetails.firstName}\nEmail: ${formInitialDetails.email}\nEmail: ${formInitialDetails.phone}\nMessage: ${formInitialDetails.message}`, // plain text body
};

const sendMail = async (transporter, mailOptions) => {
  try {
    await transporter.sendMail(mailOptions)
    console.log('Email has been sent')
    console.log("Message sent: %s", sendMail.messageId);
  } catch (error) {
    console.error(error);
  }
}

sendMail(transporter, mailOptions);





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
