const User = require('../models/auth.model');

// Middleware function take three object req, res, if next middleware the pass to next
const validSignUp = async(req, res, next)=>{
    // check name field
    if(! req.body.username){
        res.status(400).send({
            message : "Enter username !"
        });
        return;
    }
    // check userId field
    if(!req.body.userId){
        res.status(400).send({
            message : "Enter userId !"
        });
        return;
    }
    // check duplicate userId
    if(req.body.userId){
        const userID = await User.findOne({userId : req.body.userId});
        if(userID){
            res.status(400).send({
                message : userID.userId +" userId already exist, please enter unique userID"
            });
            return;
        }
    }
    // check email field
    if(!req.body.email){
        res.status(400).send({
            message : "Enter email ! "
        });
        return;
    }
    // check duplicate email
    if(req.body.email){
        const emails = await User.findOne({email : req.body.email});
        if(emails){
            res.status(401).send({
                message : emails.email +" email already exist !"
            });
            return;
        }
    }
    // check password field
    if(!req.body.password){
        res.status(400).send({
            message : "Enter password"
        });
        return;
    }
    // pass to next middleware
    next();
}

module.exports = {
    validSignUp : validSignUp
};