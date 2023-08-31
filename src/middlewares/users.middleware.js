const argon2 = require("argon2")
const User = require("../models/users.model")


const hashingOptions = {
    type: argon2.argon2id,
    memoryCost: 2** 16,
    timeCost: 5,
    parallellism: 1,
}

const hashPassword = (req, res, next) =>{
    argon2.hash(req.body.password,hashingOptions)
    .then(hashedPassword =>{
        // console.log(hashedPassword);
        // console.log(req.body)
        delete req.body.password
        req.body.hash_password = hashedPassword

        // console.log(req.body);
        next()
    })
    .catch(error =>{
        console.error(error);
        res.status(500),send("Error hashing the password")
    })

}

const verifyEmailExists = (req, res, next) =>{
    User.findUserByEmail(req.body.email)
        .then(user =>{
            if(user !== null && user.length > 0){
                res.status(401).send("This email is already in use!")
            } else {
                next()
            }
        })
}

module.exports = {
    hashPassword,
    verifyEmailExists,
}