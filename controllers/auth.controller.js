const User = require('../models/auth.model');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const key = require('../configs/serverConfig')
// Handler for users signup
exports.signup = async(req, res)=>{

    // whatever object required for signup any user
    let userObj = {
        userId : req.body.userId,
        username : req.body.username,
        email : req.body.email,
        password : bcrypt.hashSync(req.body.password,8)
    };
    // create mathod gives promis we wait till than promise full eighter failed so that use await keyword
    try{
        const users = await User.create(userObj);
        res.status(201).send({
            userId : users.userId,
            name : users.username,
            email : users.email
        });
    }catch(err){
        console.log("Error while signup",err.message);
        res.status(500).send({
            message : "Internal Error !"
        });
    }
}

// Handler for users signin

exports.signin = async(req, res)=>{
    const emails = req.body.email;
    try{

        const users = await User.findOne({email : emails});
        if(!users){
            res.status(400).send({
                message : "Failed ! email does not exist"
            });
            return;
        }
        // verifying password with current user
        let pass = bcrypt.compareSync(req.body.password,users.password);
        if(!pass){
            res.status(400).send({
                message : "password is not matched, please enter valid password !"
            });
            return;
        }
        // accessToken :      id(header) | key(secrate key) | time (200 sec)
        let token = jwt.sign({id : users.userId},key.SecrateKey,{expiresIn : 200});
        
        res.status(200).send({
            message : "Welcome "+users.username,
            userId : users.userId,
            AccessToken : token
        });

    }catch(err){
        console.log(err.message);
        res.status(500).send({
            message : "Internal error while signin !"
        });
    }
};