var express = require('express')
var app = express()
var FB = require('fb')
 
app.get('/', function (req, res) {
  res.send('Hello World')
})

FB.api('100004705442299', { fields: ['id', 'name'] }, function (res) {
  if(!res || res.error) {
    console.log(!res ? 'error occurred' : res.error);
    return;
  }
  console.log(res.id);
  console.log(res.name);
}); 

app.listen(3000)
console.log("Running on localhost:3000")
