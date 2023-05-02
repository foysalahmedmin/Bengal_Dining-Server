const express = require('express');
const cors = require('cors');
const chefs_info = require('./Data/data.json')
const app = express();
const port = 55555

app.use(cors())

app.get('/', (req, res) => {
  res.send(chefs_info);
})



app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})