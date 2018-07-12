const express = require('express');
const bodyParser = require('body-parser');
const path = require('path');

const app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));
app.use(express.static(path.join(__dirname, '../public')));

let PORT = 3000; 

app.get('/*', (req, res) => {
  res.sendFile(path.join(__dirname, '../public/index.html'))
})

app.listen(PORT, (err) => {
  if (err) {
    console.log('Error connecting to server');
  } else {
    console.log(`Listening on PORT ${PORT}`);
  }
})
