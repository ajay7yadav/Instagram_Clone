const controller = require('../controllers/post.controller');
const {JWT} = require('../middlewares');

// 127.01.07:8081/"instagram/app/v1/users/post" 
module.exports = (app)=>{
    // Create post
    app.post('/instagram/app/v1/users/post',[JWT.verifyJWT],controller.createPost);
    // Get posts by login user
    app.get('/instagram/app/v1/users/post',[JWT.verifyJWT],controller.getPostByUser);
    // Get all recently added post
    app.get('/instagram/app/v1/posts/new',[JWT.verifyJWT],controller.getRecentlyAdded);
}