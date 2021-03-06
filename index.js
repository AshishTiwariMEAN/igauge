var cool = require('cool-ascii-faces');
var express = require('express');
var app = express();
console.log('99999999999999999999999');
app.set('port', (process.env.PORT || 5000));

app.use(express.static(__dirname + '/public'));

// views is directory for all template files
app.set('views', __dirname + '/views');
app.set('view engine', 'ejs');

app.get('/', function(request, response) {
  response.render('pages/index')
});

app.get('/cool', function(request, response) {
  response.send(cool());
});

app.get('/times', function(request, response) {
    var result = ''
    var times = process.env.TIMES || 5
    for (i=0; i < times; i++)
      result += i + ' ';
  response.send(result);
});

app.get('/gittest', function(request, response) {
    var result = 'git repo of ashish T testing';
    response.send(result);
});

app.listen(app.get('port'), function() {
  console.log('ashish Node app is running on port', app.get('port'));
});
