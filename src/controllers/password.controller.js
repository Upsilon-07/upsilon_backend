const Password = require("../models/password.model");
const randomString = require("randomstring");
const argon2 = require("argon2");
const { forgotPasswordSendEmail } = require("../helpers/sendEmail");

const changePassword = async (req, res) => {
  try {
    const { hash_password, email } = req.body;
    const results = await Password.change(hash_password, email);
    if (results.affectedRows > 0) {
      res.status(200).send("Your password has been changed");
    } else {
      res.status(404).send("Please enter your new password");
    }
  } catch (err) {
    console.error(err);
    res.status(500).send("Can't change the password");
  }
};

const generateTemporaryPassword = async () => {
  const temporaryPassword = randomString.generate();
  // console.log(temporaryPassword);
  //* hash the temporary password
  const hashingOptions = {
    type: argon2.argon2id,
    memoryCost: 2 ** 16,
    timeCost: 5,
    parallelism: 1,
  };
  const hash_password = await argon2.hash(temporaryPassword, hashingOptions);
  return { temporaryPassword, hash_password };
};

const forgotPassword = async (req, res) => {
  try {
    const { email } = req.body;
    const { temporaryPassword, hash_password } = await generateTemporaryPassword();
    const results = await Password.change(hash_password, email);
    if (results.affectedRows > 0) {
      const subject = "Temporary Password";
      const info = await forgotPasswordSendEmail(email, subject, temporaryPassword);

      if (info.accepted !== null && info.accepted.length > 0) {
        res.status(200).send("An email has been sent with the new password");
      } else {
        res.status(401).send("Error sending email, please check your settings");
      }
    } else {
      res.status(404).send("Please enter your new password");
    }
  } catch (err) {
    console.error(err);
    res.status(500).send("An error occurred");
  }
};

module.exports = {
  changePassword,
  forgotPassword,
};
