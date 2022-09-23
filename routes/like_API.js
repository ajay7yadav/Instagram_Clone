const controller = require('../controllers/like.controller');
const {JWT} = require('../middlewares');

// 127.01.07:8081/"instagram/app/v1/posts/dolike" 

module.exports = (app)=>{
    // Create post
    app.post('/instagram/app/v1/posts/dolike/:id',[JWT.verifyJWT],controller.doLikeUnlike);

}