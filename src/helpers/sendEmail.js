const mailer = require("./mailer");
require("dotenv").config();

const { forgetPasswordEmail } = require("./emailTemplate");

const forgetPasswordSendEmail = async (
  receiver,
  subject,
  temporaryPassword
) => {
  const emailBody = forgetPasswordEmail(receiver, temporaryPassword);

  const config = {
    from: process.env.SMTP_USER,
    to: receiver,
    subject: subject,
    text: emailBody,
    // if you want to send body as html
    // html: '<p>Hello <em>world</em></p>',
  };

  //! updated to use async/await because the email send is asynchronous and takes a long time to send back the response
  try {
    const info = await mailer.sendMail(config);
    return info;
  } catch (err) {
    throw err;
  }
};

module.exports = {
  forgetPasswordSendEmail,
};