var express = require('express');
var butter = require('buttercms')('1f289135f7c46e235ad2c9923f1b6426d7d5c9a3');

var app = express();

app.set('view engine', 'ejs');
app.use(express.static(__dirname + '/public'));

// Routes

app.get('/', function(request, response) {
  
  butter.page.retrieve("*", "coursepage").then(function(res) {
    try{
    var page = res.data.data;
  }catch(e) {
    console.log(e + "ignoring");
  }
  
    console.log(res);
    response.render('coursepage', {
        coursepage : page.fields,
    })
  });
});



app.listen(process.env.port || 7000)

// process.on('unhandledRejection', (reason, promise) => {
//   console.log('Unhandled Rejection at:', reason.stack || reason)
//   Promise.reject(new Error('This is fine'))
//   // Recommended: send the information to sentry.io
//   // or whatever crash reporting service you use
// })

