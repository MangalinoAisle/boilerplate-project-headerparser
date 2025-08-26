// index.js
// where your node app starts

var express = require('express');
var app = express();
var cors = require('cors');

// enable CORS so your API is remotely testable by FCC
app.use(cors({ optionsSuccessStatus: 200 }));

// serve static files
app.use(express.static('public'));

// basic routing
app.get("/", function (req, res) {
  res.sendFile(__dirname + '/views/index.html');
});

// Request Header Parser endpoint
app.get("/api/whoami", (req, res) => {
  // get IP address (handle Render proxy)
  const ipaddress = req.headers['x-forwarded-for'] || req.connection.remoteAddress;

  // get language
  const language = req.headers['accept-language'];

  // get software / user-agent
  const software = req.headers['user-agent'];

  // respond with JSON
  res.json({
    ipaddress: ipaddress,
    language: language,
    software: software
  });
});

// listen for requests
var listener = app.listen(process.env.PORT || 3000, function () {
  console.log('Your app is listening on port ' + listener.address().port);
});
