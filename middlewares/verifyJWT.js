const jwt = require('jsonwebtoken');
const Key = require('../configs/serverConfig');

// Middleware for verifing token
const verifyToken = (req,res,next)=>{
    // in postman headers where we put accesstokens
    let headers = req.headers['x-access-token'];
    if(!headers){
        res.status(400).send({
            message : "enter access token !"
        });
        return;
    }
    
    jwt.verify(headers,Key.SecrateKey,(err,decode)=>{
        if(err){
            res.status(404).send({
                message : "Invaild accessToken, !"
            });
            return;
        }
        req.userId = decode.id; // here i am storing decode token id in req.userId Object 
        next();
    });
}

module.exports = {
    verifyJWT : verifyToken
};