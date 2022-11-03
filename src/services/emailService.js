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


const sendEmail = (mail) => {

    let value = true;
    if (!mail.name) value = false;
    if (!mail.subject) value = false;
    if (!mail.email) value = false;
    if (!mail.text) value = false;

    if(value) {
        transporter.sendMail({
            from: '"No-reply"<leonardo.paiva.connect@gmail.com>', // sender address
            to: `leopaiva45@gmail.com, ${mail.email}`, // list of receivers
            subject: mail.subject, // Subject line
            html: `<p>${mail.text}</p><br><b>Thank yout to enter in contact with me!</b>`, // html body
        })
    }
    return value;
}

module.exports = sendEmail

// transporter.sendMail({
//     from: '"Fred Foo 👻"<foo@example.com>', // sender address
//     to: "pedro.melo@memora.com.br,", // list of receivers
//     subject: "Hello ✔", // Subject line
//     text: "Hello world?", // plain text body
//     html: "<b>Hello world?</b>", // html body
//   });