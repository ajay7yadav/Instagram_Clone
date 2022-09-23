exports.postModifier = (post)=>{
    let newPost = [];

    post.forEach((idx)=>{
        newPost.push({
            postBy : idx.postBy,
            post_url : idx.post_url,
            likes : idx.likes.length,
            time : idx.createAt,
            id : idx._id
        });
    });
    
    return newPost;
};