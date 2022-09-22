const controller = require('../controllers/auth.controller');
const { validSignUp } = require('../middlewares');


// 127.01.07:8081/"instagram/app/v1/auth/signup" 

module.exports = (app)=>{
    // signUp 
    app.post('/instagram/app/v1/auth/signup',[validSignUp.validSignUp],controller.signup);
    // signIn
    app.post('/instagram/app/v1/auth/signin',[validSignUp.validSignIn],controller.signin);

};