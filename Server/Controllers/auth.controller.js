const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken")
require("dotenv").config()

const users = []
const handleLogin = async (request, response) => {
    try {
        const { name, username, email, password } = request.body;
        if (!name || !username || !email || !password) {
            return response.status(400).send({
                message: "All fields are required."
            })
        }
        //  const user_matched = users.find(user =>user.username.toLowerCase() || user.email.toLowerCase() === email.toLowerCase());
        //  if(user_matched && user_matched.username == username){
        //     return response.status(400).send({
        //         message:"Username already exists."
        //     })
        //  }
        //  if(user_matched && user_matched.email == email){
        //     return response.status(400).send({
        //         message:"Email already exists."
        //     })
        //  }

         const hashedPassword = await bcrypt.hash(password,10);
         const userObj = {id:crypto.randomUUID(),name,username,email, password:hashedPassword};
         users.push(userObj);
         const token = jwt.sign({sub:userObj}, process.env.JWT_KEY,{
            expiresIn:"7d"
         })
         return response.status(201).send({
            message:"user registered successfully.",
            token
         })

        }catch(err){
            return response.status(500).send({
                message:err.message || "Some error occured while logging in. "
            })
        }
    }

    module.exports = {
        handleLogin
    }



