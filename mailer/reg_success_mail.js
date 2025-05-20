const nodemailer = require("nodemailer");
const smtpTransport = require("nodemailer-smtp-transport");
const { datetime } = require("./system-variables");
require("dotenv").config();


let transporter = nodemailer.createTransport({
  service: "Gmail",
  secure: false,
 host: 'smtp.gmail.com',
  port: 465,
  secure: true,

  auth: {
    user: process.env.company_mail,
    pass: process.env.mail_password,
  },
 
});

console.log(process.env.mail_password);
let create_mail_options = (userInfo) => {
  return (mailOptions = {
    from: process.env.mail,
    // from:"michelleannschlloser@outlook.com",
    to: userInfo.reciever,
    subject: `Account Registration Notification`,
    

//     html: `
   
//         <div class="mail_template"
//             style="max-width: 600px; margin: auto; font-family: 'Poppins', sans-serif; background-color: #f2f2f2; padding: 20px; border-radius: 10px; border: 1px solid #ccc;">
//             <div style="text-align: center;">
//                 <img src="https://crescentpips.com/ke/assets/images/logo'.png"   alt="Company Logo" style="max-width: 100%; max-height: 2rem;">
//             </div>
//             <div style="text-align: center; margin-top: 20px;">
//                 <h3 style="font-size: 24px; font-weight: bold; color: #333;">New Account Registration</h3>
//             </div>
//             <div style="margin-top: 30px;">
//                 <p style="font-size: 18px; color: #555;">Dear ${userInfo.first_name} ${userInfo.last_name},</p>
//                 <p style="font-size: 18px; color: #555;">Thank you for registering an account with us. We are committed to
//                     providing you with the best trading service that are possible.</p>
//             </div>

//              <p style="font-size: 18px; color: #555;">You are ready to make deposit and  start creating trade and making profit</p>


//             <div style="margin-top: 40px;">
//                 <p style="font-size: 14px; color: #999; text-align: center;">This message was generated via softjovial secured
//                     channel. Please do not take any action if you did not make this request.</p>
//             </div>
//         </div>
        
//         <style>
//             @import url('https://fonts.googleapis.com/css2?family=Poppins:wght@300;400;500;600;700&display=swap');
//         </style>
//  `,

html:`<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Account Registration</title>
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
            margin: 0;
        }
        .email-body {
            font-size: 16px;
            color: #555;
            line-height: 1.6;
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
            <h2 class="email-title">Welcome to Crescentpips</h2>
        </div>

        <div class="email-body">
            <p>Dear <strong>${userInfo.first_name} ${userInfo.last_name}</strong>,</p>

            <p>Thank you for registering an account with us. We’re excited to have you on board and look forward to supporting your trading journey.</p>

            <p>You’re now ready to make a deposit, place trades, and start working toward your financial goals. Our platform is built to give you the tools and insights. use the create trade button to give an instruction and we will execute the trade for you</p>

            <p>If you need any help getting started, our support team is here for you at any time.</p>
        </div>

        <div class="email-footer">
            <p>This message was sent securely by Crescentpips. If you did not request this registration, please disregard this message.</p>
        </div>
    </div>

</body>
</html>
`
  });
};
module.exports = { create_mail_options, transporter };

