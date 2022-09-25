const Comment = require('../models/comment.model');
const Post = require('../models/post.model');

// Handler for create comments
exports.createComment = ()=>{
    const cmmtObj = {
        comment : req.body.comment,
        postId : req.body.postId,
        userId : req.userId
    }

}
// Handler for get comments
exports.getComments = ()=>{
    
}
// Handler for update comments
exports.updateComment = ()=>{
    
}
/**
 
    Handler for delete comments
    Delete who comment
    Delete owner of the post

**/
exports.deleteComment = ()=>{
    
}