const middlewares = {
    validSignUp : require('./auth.validation'),
    JWT : require('./verifyJWT')
};


module.exports = middlewares;