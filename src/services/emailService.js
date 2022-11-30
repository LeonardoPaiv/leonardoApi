require('dotenv').config();

const nodeMailer = require('nodemailer')

let transporter = nodeMailer.createTransport({
  host: "smtp.gmail.com",
  port: 465,
  secure: true, // true for 465, false for other ports
  auth: {
    user: process.env.mailUser, // generated ethereal user
    pass: process.env.mailPass, // generated ethereal password
  },
});


const sendEmail = async (mail) => {

  if (!mail.name) value = false;
  else if (!mail.subject) value = false;
  else if (!mail.email) value = false;
  else if (!mail.text) value = false;
  else {

    let copy = await transporter.sendMail({
      from: '"No-reply"<leonardo.paiva.connect@gmail.com>', // sender address
      to: mail.email, // list of receivers
      subject: mail.subject, // Subject line
      html: `<h1>Thank you for contacting me!</h1><p>${mail.text}</p><br><b>this is a copy of your email!</b>`, // html body
    });

    let info = transporter.sendMail({
      from: '"No-reply"<leonardo.paiva.connect@gmail.com>', // sender address
      to: 'leopaiva45@gmail.com', // list of receivers
      subject: mail.subject, // Subject line
      html: `<b>${mail.name} / ${mail.email}</b><p>${mail.text}</p>`, // html body
    });

    value = true

    console.log(copy.messageId)
  }
  return value;
}

module.exports = sendEmail
