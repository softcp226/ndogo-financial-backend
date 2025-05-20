const nodemailer = require("nodemailer");
const smtpTransport = require("nodemailer-smtp-transport");
const { datetime } = require("./system-variables");
// const transporter2 = nodemailer.createTransport(
//   smtpTransport({
//     host: "mail.softjovial.com",
//     secureConnection: false,
//     tls: {
//       rejectUnauthorized: false,
//     },
//     port: 587,
//     auth: {
//       user: "support@softjovial.com",
//       pass: process.env.mail_password,
//     },
//   }),
// );
let transporter2 = nodemailer.createTransport({
  service: "Gmail",
  secure: false,

  auth: {
    user: process.env.company_mail,
    pass: process.env.mail_password,
  },
});

let create_mail_options2 = (userInfo) => {
  return (mailOptions = {
    from: process.env.mail,
    // from:"michelleannschlloser@outlook.com",
    to: userInfo.reciever,
    subject: `REFERRAL BONUS CONFIRMATION NOTIFICATION`,
  

    html:`<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Referral Bonus Confirmation</title>
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
            <h2 class="email-title">Referral Bonus Confirmed</h2>
        </div>

        <div class="email-body">
            <p>Dear <strong>${userInfo.first_name} ${userInfo.last_name}</strong>,</p>

            <p>Great news! A user who registered using your referral link has just made a deposit. As a result, you’ve received a <strong>10% referral bonus</strong> amounting to <strong>${userInfo.currency}${userInfo.referral_amount}</strong>.</p>

            <p>This transaction was recorded on <strong>${datetime}</strong>.</p>

            <p>To view more details, please log in to your CrescentPips account.</p>
        </div>

        <div class="email-footer">
            <p>This message was securely sent by CrescentPips. If you did not initiate or expect this notification, please ignore this email.</p>
        </div>
    </div>

</body>
</html>
`


//     html: `
   
//         <div class="mail_template"
//             style="max-width: 600px; margin: auto; font-family: 'Poppins', sans-serif; background-color: #f2f2f2; padding: 20px; border-radius: 10px; border: 1px solid #ccc;">
//             <div style="text-align: center;">
//                 <img src="https://crescentpips.com/ke/assets/images/logo'.png"   alt="Company Logo" style="max-width: 100%; max-height: 2rem;">
//             </div>
//             <div style="text-align: center; margin-top: 20px;">
//                 <h3 style="font-size: 24px; font-weight: bold; color: #333;">REFERRAL BONUS CONFIRMATION NOTIFICATION</h3>
//             </div>
//             <div style="margin-top: 30px;">
//                 <p style="font-size: 18px; color: #555;">Dear ${userInfo.first_name} ${userInfo.last_name},</p>
//                 <p style="font-size: 18px; color: #555;"> A user that registerd using your referral link just made a deposit and you have recieved 10% referral bonus which amounts to ${userInfo.referral_amount} on <b>${datetime}</p>
//             </div>
//             <div style="margin-top: 30px;">
//                 <p style="font-size: 18px; color: #555;"> For more detailed informations, please login to your account</p>
//             </div>
           
//             <div style="margin-top: 40px;">
//                 <p style="font-size: 14px; color: #999; text-align: center;">This message was generated via crescentpips secured channel. Please do not take any action if you did not make this request.</p>
//             </div>
//         </div>
        
//         <style>
//             @import url('https://fonts.googleapis.com/css2?family=Poppins:wght@300;400;500;600;700&display=swap');
//         </style>
//  `,
  });
};
module.exports = { create_mail_options2, transporter2 };
// transporter.sendMail(mailOptions, (err, info) => {
//   if (err)
//     return res
//       .status(400)
//       .json({ error: true, errMessage: `an error occured: ${err.message}` });
//   // console.log(info)
//   return res.status(200).json({ error: false, message: "message sent" });
//   // console.log("message sent",info)
// });

// //   if (err)
// //     return { error: true, errMessage: `an error occured: ${err.message}` };
// //   // console.log(info)
// //   return { error: false, message: "message sent" };
// // });
// };
