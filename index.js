var 
  express = require('express'),
  app = express(),
  port = process.env.PORT || '8089';


app.use(express.static(__dirname + '/dist'));

app.listen(port);

console.log('Running server at port: ' + port);
