const User = require("../models/users.model")

const createUser = (req, res) =>{
   
    // use model to create user
    User.createNewUser(req.body)
    // send response
        .then(results =>{
            if(results.affectedRows > 0){
                res.status(201).json({
                    userName: req.body.username,
                    userEmail: req.body.email,
                    userPicture: req.body.picture,
                    userID: results.insertId,
                    message: "User created successfully!"
                })
            } else {
                res.status(422).send("Unprocessable Entity - unable to process");
            }
        })
        .catch(error => {
            console.error(error);
            res.status(500).send("Error creating user")
        })



}


module.exports = {
    createUser,
}