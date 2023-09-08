const argon2 = require("argon2");
const User = require("../models/users.model");
const jwt = require("jsonwebtoken");

const hashingOptions = {
  type: argon2.argon2id,
  memoryCost: 2 ** 16,
  timeCost: 5,
  parallelism: 1,
};

const hashPassword = (req, res, next) => {
     if(req.body.newPassword !== null && req.body.newPassword !== undefined){
       req.body.password = req.body.newPassword
    }
  argon2
    .hash(req.body.password, hashingOptions)
    .then((hash_password) => {
      delete req.body.password;

        if(req.body.newPassword !== null){
           delete req.body.newPassword
        }
      req.body.hash_password = hash_password;

      next();
    })
    .catch((error) => {
      console.error(error);
      res.status(500).send("Error hashing the password");
    });
};

const verifyPassword = (req, res, next) => {
  //* get the user hashedPassword
  User.findUserToLogin(req.body.email)
    .then((user) => {
      // console.log(user);
      // console.log(req.body);

      if (user !== null && user.length > 0) {
        //* verify password
        argon2
          .verify(user[0].hash_password, req.body.password)
          .then((isVerified) => {
            if (isVerified) {
              delete user[0].hash_password;
              req.user = user[0];
              next();
            } else {
              res.status(401).send("Invalid password");
            }
          })
          .catch((error) => {
            console.error(error);
            res.status(500).send("Error verifying the password");
          });
      } else {
        res.status(404).send("User not found");
      }
    })
    .catch((error) => {
      console.error(error);
      res.status(500).send("Error retrieving user from db");
    });
};

const verifyEmailToCreateUser = (req, res, next) => {
  User.findUserByEmail(req.body.email)
    .then((user) => {
      if (user !== null && user.length > 0) {
        res.status(401).send("This email is already in use!");
      } else {
        next();
      }
    })
    .catch((error) => {
      console.error(error);
      res.status(500).send("Error retrieving data from db");
    });
};

const verifyEmail = (req, res, next) => {
  User.findUserByEmail(req.body.email)
    .then((user) => {
      if (user !== null && user.length > 0) {
        next();
      } else {
        res
          .status(401)
          .send("This email is not registered, please create an account!");
      }
    })
    .catch((error) => {
      console.error(error);
      res.status(500).send("Error retrieving data from db");
    });
};

//! verify token

const verifyToken = (req, res, next) => {
  const authorizationHeader = req.get("Authorization");

  if (!authorizationHeader) {
    return res.status(401).send("Authorization header is missing");
  }

  const [type, token] = authorizationHeader.split(" ");

  if (type !== "Bearer") {
    return res.status(401).send("Authorization header has the wrong token type");
  }

  jwt.verify(token, process.env.PRIVATE_KEY, (error, decoded) => {
    if (error) {
      console.error(error);

      if (error.name === 'TokenExpiredError') {
        return res.status(401).send("Token has expired");
      } else if (error.name === 'JsonWebTokenError') {
        return res.status(401).send("Invalid token");
      } else {
        return res.status(500).send("Error decoding authorization header");
      }
    }

    req.body.email = decoded.sub;
    next();
  });
};


module.exports = {
  hashPassword,
  verifyEmailToCreateUser,
  verifyPassword,
  verifyEmail,
  verifyToken,
};
