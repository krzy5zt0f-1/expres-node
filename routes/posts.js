const express = require('express');

const router = express.Router();
const Post = require('../models/Post');

router.get('/', async (req, res) => {
  try {
    const allPosts = await Post.find();
    res.json(allPosts);
  }catch(err){
    res.json({message: err})
  }
});
// route posts/specific
router.get('/specific', (req, res) => {
  res.send('Specific Post');
});

//router posts/:postId, finds specific post
router.get('/:postId', async (req, res) => {
  try {
     const foundPost = await Post.find({_id: req.params.postId });
     res.json(foundPost);
  } catch(err){
    res.json({ message: err });
  }
})
// posting a posts
router.post('/', async (req, res) => {
  const post = new Post({
    title: req.body.title,
    description: req.body.description
  });
  try {
    const savedPost = await post.save();
  res.json(savedPost);
}catch(err){
  res.json({message: err})
}
})

//deleting a post by id
router.delete('/:postId', async (req, res) => {
  try {
    const removedPost = await Post.remove({_id: req.params.postId});
    res.json(removedPost);
  } catch(err){
    res.json({ message: err });
  }
})

//updating a post
router.patch('/:postId', async (req, res) => {
  try {
  const updatedPost = await Post.updateOne({_id: req.params.postId}, {$set: {title: req.body.title}});
  res.json(updatedPost);
}catch(err){
  res.json({ message: err });
}
})

module.exports = router;
