// Create web server with Node.js
// Run command: node comment.js
// View result: http://localhost:3000

var express = require('express');
var app = express();

app.get('/comment', function(req, res) {
    res.send('Hello World!');
});

app.listen(3000, function() {
    console.log('Example app listening on port 3000!');
});
