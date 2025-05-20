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
    subject: `Withdrawal Completed`,
    //   text:"just wanna know if this works",
    //     html: `
    // <link rel="preconnect" href="https://fonts.googleapis.com" />
    // <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
    // <link
    //   href="https://fonts.googleapis.com/css2?family=Nunito&family=Roboto&display=swap"
    //   rel="stylesheet"
    // />
    // <main
    //   style="
    //     font-family: 'Nunito', sans-serif;
    //     font-family: 'Roboto', sans-serif;
    //     background-image: url(https://edustair.com/assets/img/360_F_339709048_ZITR4wrVsOXCKdjHncdtabSNWpIhiaR7.jpg);
    //     width: 100%;
    //     background-size: cover;
    //   "
    // >
    //   <div class="maincontainer"  style="
    //     font-family: 'Nunito', sans-serif;
    //     font-family: 'Roboto', sans-serif;
    //     background-image: url(https://edustair.com/assets/img/360_F_339709048_ZITR4wrVsOXCKdjHncdtabSNWpIhiaR7.jpg);
    //     width: 100%;
    //     background-size: cover;
    //   ">
    //     <div class="head-txt">
    //       <h1 style="text-align: center; font-size: 16px; color: #825ee4">
    //         crescentpips.COM
    //       </h1>
    //       <h3 style="font-size: 15px">WITHDRAWAL WAS INNITIATED</h3>
    //     </div>

    //     <p class="sm-p">
    //       Dear ${userInfo.first_name} ${userInfo.last_name}, you have successfully
    //       initiated a withdrawal of crypto that amounts $${userInfo.amount} from
    //       your crescentpips account on <b>${datetime}</b>.your withdrawal is still pending as our system is still verifying your request to avoid loss of funds and your money would be sent immediately after verification
    //     </p>

    //     <p class="sm-p">
    //       incase you have any questions do not hesitate to contact us and we will
    //       reach out to you as soon as possible
    //     </p>
    //     <br />
    //    <h1
    //       style="
    //         font-size: 18px;
    //         text-align: center;
    //         background: #eee;
    //         color: #0c0e28;
    //       "
    //     >
    //       crescentpips.BIZ
    //     </h1>
    //     <p class="disclaimer" style="font-size: 12px; font-weight: bolder">
    //       Disclaimer: this message was automatically generated via crescentpips
    //       secured channel,please do not reply to this message all correspondence
    //       should be addressed to crescentpips.biz or your relationship officer
    //     </p>
    //   </div>
    // </main>

    //  `,

    html: `
   <!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0"/>
  <title>Withdrawal Completed</title>
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
      <h2 class="email-title">Withdrawal Completed</h2>
    </div>

    <div class="email-body">
      <p>Dear <strong>${userInfo.first_name} ${userInfo.last_name}</strong>,</p>

      <p>this is to inform you that your withdrawal of <strong>${userInfo.currency}${userInfo.amount}</strong> from your CrescentPips trading account has been successfully processed.</p>

      <p>The funds have been credited to the bank details you specified during the withdrawal process.</p>

    

      <p>If you need more details, please log in to your account to review your transaction history.</p>
    </div>

    <div class="email-footer">
      <p>This message was generated via CrescentPips’ secure system. If you did not initiate this request, no action is needed.</p>
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
