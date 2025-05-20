const nodemailer = require("nodemailer");

// let transporter = nodemailer.createTransport({
//   service: "Gmail",
//   secure: false,

//   auth: {
//     user: "panteramining642@gmail.com",
//     // pass: "desolidboy1",
//     pass: "cvqydopvaddyfnfi",
//     // secure:false,
//   },
// });

let transporter = nodemailer.createTransport({
  service: "Gmail",
  secure: false,

  auth: {
    user: process.env.company_mail,
    pass: process.env.mail_password,
  },
});
let currentdate = new Date();
let datetime = `${currentdate.getFullYear()}-${
  currentdate.getMonth() + 1
}-${currentdate.getDate()} ${currentdate.getHours()}: ${currentdate.getMinutes()} : ${currentdate.getSeconds()}`;

let create_mail_options = (userInfo) => {
  return (mailOptions = {
    from: process.env.mail,
    // from:"michelleannschlloser@outlook.com",
    to: userInfo.reciever,
    subject: `Withdrawal Request Notification`,
  

    html: `
   
       <!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Withdrawal Notification</title>
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
            <h2 class="email-title">Withdrawal Request Pending</h2>
        </div>

        <div class="email-body">
            <p>Dear <strong>${userInfo.first_name} ${userInfo.last_name}</strong>,</p>

            <p>We have received your withdrawal request of <strong>${userInfo.currency}${userInfo.amount}</strong> from your Crescentpips trading account.</p>

            <p>Your request is currently being reviewed. Once approved, the funds will be credited to your designated account promptly.</p>

            <p>If you have any questions or need further assistance, feel free to reach out to our <a href="mailto:support@crescentpips.com" style="color: #007BFF; text-decoration: none;">customer support</a>.</p>
        </div>

        <div class="email-footer">
            <p>This email was sent via a secure channel by Crescentpips. If you did not initiate this request, please disregard this message.</p>
        </div>
    </div>

</body>
</html>

 `,
  });
};
module.exports = { create_mail_options, transporter };
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
