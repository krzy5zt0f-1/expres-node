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
module.exports = router;
