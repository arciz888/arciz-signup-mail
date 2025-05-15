
const express = require("express");
const cors = require("cors");
const nodemailer = require("nodemailer");

const app = express();
app.use(cors());
app.use(express.json());

const transporter = nodemailer.createTransport({
  service: "gmail",
  auth: {
    user: "arciznft@gmail.com",
    pass: "ogmh tftd tbop tjiu"
  }
});

app.post("/signup-email", (req, res) => {
  const {
    name, email, phone, referralCode, referral, signupDate,
    balance, referralCount, userId
  } = req.body;

  const mailOptions = {
    from: "Arciz Signup <arciznft@gmail.com>",
    to: "arciznft@gmail.com",
    subject: "New Arciz Signup",
    html: `
      <h2>New User Signup Details</h2>
      <p><b>Name:</b> ${name}</p>
      <p><b>Email:</b> ${email}</p>
      <p><b>Phone:</b> ${phone}</p>
      <p><b>Referral Code:</b> ${referralCode}</p>
      <p><b>Referred By:</b> ${referral}</p>
      <p><b>Signup Date:</b> ${signupDate}</p>
      <p><b>Balance:</b> $${balance}</p>
      <p><b>Referral Count:</b> ${referralCount}</p>
      <p><b>User ID:</b> ${userId}</p>
    `
  };

  transporter.sendMail(mailOptions, (err, info) => {
    if (err) {
      console.error("Email error:", err);
      return res.status(500).send("Failed to send email");
    }
    res.send("Signup email sent");
  });
});

app.listen(process.env.PORT || 3000, () => {
  console.log("Arciz signup mail server running");
});
