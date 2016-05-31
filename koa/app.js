var koa = require('koa');
var app = koa();
var request = require('request');
var Promise = require('bluebird');
var co = Promise.coroutine;

// logger

app.use(function *(next) {
  var start = new Date;
  yield next;
  var ms = new Date - start;
  console.log('%s %s - Response: %sms', this.method, this.url, ms);
});

function getValues(cb) {
request('http://unsplash-api:5000/api/values', function (error, response, body) {
  if (!error && response.statusCode == 200) {
    var r = JSON.stringify(body);
    cb(null, body);
  }
})
}

app.use(function *() {
    this.type ="application/json";
    this.body = yield getValues;
});

app.listen(3000);
