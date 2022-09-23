
const Post = require('../models/post.model');
const Like = require('../models/like.model');

// Handler for like and unlike a post 
exports.doLikeUnlike = async(req, res)=>{
    const likeObj = {
        postId : req.params.id,
        userId : req.userId
    };

    try {
        
        const post = await Post.findById(likeObj.postId);

        if(!post){
            return res.status(400).send({message : "Invalid Input"});
        }

        // user already like this post and hit same button then unlike will done
        if(post.likes.length > 0){
            let n = post.likes.length;
            for(let i=n-1; i>=0; i--){
                
                if(post.likes[i] == likeObj.userId){
                    post.likes.splice(i, 1);
                    await post.save();
                }
            }
            return res.status(200).send({message : "unliked"});
        }

        const like = await Like.create(likeObj);
        post.likes.push(like.userId);
        await post.save();

        res.status(201).send({message : "liked"});

    } catch (err) {
        console.log(err);
        res.status(500).send({message : "Internal Error !"});
    }
}
