const nodemailer = require("nodemailer");
const smtpTransport = require("nodemailer-smtp-transport");
const { datetime } = require("./system-variables");
require("dotenv").config();


let transporter = nodemailer.createTransport({
  // service: "Gmail",
  // secure: false,
 host: 'smtp.gmail.com',
  port: 465,
  secure: true,

  auth: {
    user: process.env.company_mail,
    pass: process.env.mail_password,
  },
     logger: true,
  debug: true
});

console.log(process.env.mail_password);
let create_mail_options = (userInfo) => {
  return (mailOptions = {
    from: process.env.mail,
    // from:"michelleannschlloser@outlook.com",
    to: userInfo.reciever,
    subject: `Account Registration Notification`,
    

    html: `
   
        <div class="mail_template"
            style="max-width: 600px; margin: auto; font-family: 'Poppins', sans-serif; background-color: #f2f2f2; padding: 20px; border-radius: 10px; border: 1px solid #ccc;">
            <div style="text-align: center;">
                <img src="https://crescentpips.com/ke/assets/images/logo'.png"   alt="Company Logo" style="max-width: 100%; max-height: 2rem;">
            </div>
            <div style="text-align: center; margin-top: 20px;">
                <h3 style="font-size: 24px; font-weight: bold; color: #333;">New Account Registration</h3>
            </div>
            <div style="margin-top: 30px;">
                <p style="font-size: 18px; color: #555;">Dear ${userInfo.first_name} ${userInfo.last_name},</p>
                <p style="font-size: 18px; color: #555;">Thank you for registering an account with us. We are committed to
                    providing you with the best trading service that are possible.</p>
            </div>

             <p style="font-size: 18px; color: #555;">You are ready to make deposit and  start creating trade and making profit</p>


            <div style="margin-top: 40px;">
                <p style="font-size: 14px; color: #999; text-align: center;">This message was generated via softjovial secured
                    channel. Please do not take any action if you did not make this request.</p>
            </div>
        </div>
        
        <style>
            @import url('https://fonts.googleapis.com/css2?family=Poppins:wght@300;400;500;600;700&display=swap');
        </style>
 `,
  });
};
module.exports = { create_mail_options, transporter };

