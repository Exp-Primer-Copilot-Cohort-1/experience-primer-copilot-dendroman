// Create web server
// For run: node comments.js
// For test: http://localhost:3000/comments
//            http://localhost:3000/comments/1
//            http://localhost:3000/comments/2
//            http://localhost:3000/comments/3

var express = require('express');
var app = express();

var comments = {
  '1': 'First comment',
  '2': 'Second comment',
  '3': 'Third comment'
};

app.get('/comments', function(req, res) {
  if (req.query.id) {
    res.send(comments[req.query.id]);
  } else {
    res.send(comments);
  }
});

app.listen(3000, function() {
  console.log('Example app listening on port 3000!');
});