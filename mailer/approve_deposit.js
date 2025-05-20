const nodemailer = require("nodemailer");
const smtpTransport = require("nodemailer-smtp-transport");
const { datetime } = require("./system-variables");

let transporter = nodemailer.createTransport({
  service: "Gmail",
  secure: false,

  auth: {
    user: process.env.company_mail,
    pass: process.env.mail_password,
  },
});

// let currentdate = new Date();
// let datetime = `${currentdate.getFullYear()}-${
//   currentdate.getMonth() + 1
// }-${currentdate.getDate()} ${currentdate.getHours()}: ${currentdate.getMinutes()} : ${currentdate.getSeconds()}`;

let create_mail_options = (userInfo) => {
  return (mailOptions = {
    from: process.env.mail,
    // from:"michelleannschlloser@outlook.com",
    to: userInfo.reciever,
    subject: `Deposit Confirmation Notification`,

    html: `
   <!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0"/>
  <title>Deposit Confirmation</title>
  <style>
    @import url('https://fonts.googleapis.com/css2?family=Poppins:wght@400;600&display=swap');
    body {
      margin: 0;
      padding: 0;
      background-color: #f6f9fc;
      font-family: 'Poppins', sans-serif;
    }
    .email-wrapper {
      max-width: 600px;
      margin: 40px auto;
      background-color: #ffffff;
      border-radius: 10px;
      padding: 30px;
      box-shadow: 0 0 8px rgba(0, 0, 0, 0.05);
      border: 1px solid #e0e0e0;
    }
    .email-header {
      text-align: center;
      margin-bottom: 30px;
    }
    .email-header img {
      height: 40px;
    }
    .email-title {
      font-size: 22px;
      font-weight: 600;
      color: #2c3e50;
      margin: 20px 0 10px;
    }
    .email-body {
      font-size: 16px;
      color: #555;
      line-height: 1.6;
    }
    .cta-button {
      display: inline-block;
      margin-top: 20px;
      padding: 12px 20px;
      background-color: #0c0e28;
      color: #ffffff;
      border-radius: 5px;
      text-decoration: none;
      font-weight: 500;
    }
    .email-footer {
      text-align: center;
      font-size: 13px;
      color: #999;
      margin-top: 40px;
    }
  </style>
</head>
<body>

  <div class="email-wrapper">
    <div class="email-header">
                <img src="https://crescentpips.com/ke/assets/images/logo'.png"   alt="Company Logo" style="max-width: 100%; max-height: 2rem;">
      <h2 class="email-title">Deposit Confirmation</h2>
    </div>

    <div class="email-body">
      <p>Dear <strong>${userInfo.first_name} ${userInfo.last_name}</strong>,</p>

      <p>We’re pleased to inform you that your deposit of <strong>${userInfo.currency}${userInfo.deposit_amount}</strong> has been successfully processed and approved on <strong>${datetime}</strong>.</p>

      <p>The funds have been credited to your CrescentPips trading account and are now available for use.</p>

     

      <p>If you need further details, please log in to your account.</p>
    </div>

    <div class="email-footer">
      <p>This message was sent via CrescentPips' secure system. If you did not initiate this action, no further steps are required.</p>
    </div>
  </div>

</body>
</html>

 `,
  });
};
module.exports = { create_mail_options, transporter };
