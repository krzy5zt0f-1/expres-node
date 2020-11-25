const express = require('express');

const app = express();

//Middlewares
//app.use('/posts', () => {
  //console.log('This is a middleware running');
//})

// With the above stuff, you can now create routes below !
app.get('/', (req, res) => {
  res.send('We are on home');
})

app.get('/posts', (req, res) => {
  res.send('We are on posts');
})
// How do we start listening a server

app.listen(1111);
