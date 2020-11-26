const express = require('express');
// importing body-parser json package to send posts
const bodyParser = require('body-parser');

const app = express();

const mongoose = require('mongoose');

const cors = require('cors');
//making sure to not hard code DB_CONNECTION
require('dotenv/config');

//Middlewares
app.use(bodyParser.json());
app.use(cors());
//app.use('/posts', () => {
  //console.log('This is a middleware running');
//})

// Import routes
const postsRoutes = require('./routes/posts');

//calling posts form postRequests using middleware
//Middlewares
app.use('/posts', postsRoutes);


// With the above stuff, you can now create routes below !
app.get('/', (req, res) => {
  res.send('We are on home');
})


// Connect to DB
mongoose.connect(process.env.DB_CONNECTION, { useUnifiedTopology: true, useNewUrlParser: true },
() => console.log('connected to DB!'));
// How do we start listening a server

app.listen(3000);
