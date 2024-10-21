var express = require('express');
var app = express();

const PORT = 3000;

app.get('/', (req, res) => {
  res.send("Hey Naveen ! How's you doing ?");
});

app.listen(PORT,() => {
  console.log('listening on port: '+ PORT);
});