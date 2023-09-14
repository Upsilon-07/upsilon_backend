const Password = require("../models/password.model");
const randomString = require("randomstring");
const argon2 = require("argon2");
const {forgetPasswordSendEmail} = require("../helpers/sendEmail")

const changePassword = (req, res) => {
  Password.change(req.body.hash_password, req.body.email)
    .then((results) => {
      if (results.affectedRows > 0) {
        res.status(200).send("Your password has been changed");
      } else {
        res.status(404).send("Please enter your new password");
      }
    })
    .catch((err) => {
      console.error(err);
      res.status(500).send("can't change the password");
    });
};

const forgetPassword = (req, res) => {
  //* email came from frontend
  const { email } = req.body;

  //* generate new random password
  const temporaryPassword = randomString.generate();
  console.log(temporaryPassword);
  //* hash the temporary password
  const hashingOptions = {
    type: argon2.argon2id,
    memoryCost: 2 ** 16,
    timeCost: 5,
    parallelism: 1,
  };
  argon2
    .hash(temporaryPassword, hashingOptions)
    .then((hashedPassword) => {
      //* change on DB
      Password.change(hashedPassword, email)
        .then(async(results) => {

          if (results.affectedRows > 0) {

          //* send temporary password by email
          let subject = "Temporary Password"

          forgetPasswordSendEmail(email, subject, temporaryPassword)
            .then((info) => {
              if(info.accepted !== null && info.accepted.length > 0){
                res.status(200).send("An email has been sent with the new password")
              } else {
                res.status(401).send("Error sending email, plz check your settings")
              }
            })
            .catch((err) => {
              console.error(err);
              res.status(500).send("can't send email");
            });
          

          } else {
            res.status(404).send("Please enter your new password");
          }
        })
        .catch((err) => {
          console.error(err);
          res.status(500).send("can't change the password");
        });

    })
    .catch((error) => {
      console.error(error);
      res.status(500).send("Error hashing the password");
    });
};

module.exports = {
  changePassword,
  forgetPassword,
};