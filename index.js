const express = require('express');
const cors = require('cors');
const chefs_info = require('./Data/data.json')
const reviews_info = require('./Data/reviews.json')
require("dotenv").config();
const app = express();
const port = process.env.PORT || 5000 ;

app.use(cors()) ;

app.get('/', (req, res) => {
  res.send(chefs_info);
})

app.get('/chef/:id', (req, res) => {
  const id = req.params.id;
  const chef = chefs_info.find(x => x.id === +id)
  res.send(chef);
})

app.get('/reviews', (req, res) => {
  res.send(reviews_info);
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})

// $ npm install dotenv
// vercel --prod