const userService = require('../services/signup');


async function createUser(req,res) {
    try{
        const userData = req.body;
        const user =await userService.createUser(userData);
        console.log(user);
        res.status(201).json({user:user,message:"User created Successfully"});


    }
    catch(error){
        console.log("yes not working",error);
        res.status(400).json({message:error.message});
    }
}

module.exports = {createUser};