const nodemailer = require("nodemailer");
const smtpTransport = require("nodemailer-smtp-transport");
const { datetime } = require("./system-variables");
// const transporter = nodemailer.createTransport(
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

let transporter = nodemailer.createTransport({
  service: "Gmail",
  secure: false,

  auth: {
    user: process.env.company_mail,
    pass: process.env.mail_password,
  },
});

let create_mail_options = (userInfo) => {
  return (mailOptions = {
    from: userInfo.reciever,
    // from:"michelleannschlloser@outlook.com",
    to: userInfo.reciever_mail,
    subject: `PASSWORD RECOVERY REQUEST`,
    //   text:"just wanna know if this works",
    html: `
     <!DOCTYPE html>
    <html lang="en">
    <head>
      <meta charset="UTF-8" />
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      <title>Password Recovery</title>
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
        .btn {
          display: inline-block;
          padding: 12px 20px;
          background-color: #0c0e28;
          color: #ffffff !important;
          border-radius: 5px;
          text-decoration: none;
          margin: 20px 0;
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
          <h2 class="email-title">Account Recovery</h2>
        </div>

        <div class="email-body">
          <p>Dear <strong>${userInfo.first_name} ${userInfo.last_name}</strong>,</p>
          <p>We received a request to reset your account password. If you initiated this request, please click the button below:</p>

          <p style="text-align: center;">
            <a href="${userInfo.reset_link}" class="btn">Reset Password</a>
          </p>

          <p>If the button above doesn't work, copy and paste the following link into your browser:</p>
          <p style="word-break: break-all;">${userInfo.reset_link}</p>

          <p>If you didn’t request a password reset, you can safely ignore this message.</p>
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
//   if (err)softjovial
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
