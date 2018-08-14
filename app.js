var express = require('express');
var butter = require('buttercms')('1f289135f7c46e235ad2c9923f1b6426d7d5c9a3');
var engine = require('ejs-locals');

var app = express();

app.set('view engine', 'ejs');
app.use(express.static(__dirname + '/public'));

// Routes
app.get('/tutorial/git01/', function() {
  butter.page.retrieve("*", "Git01").then(function(resp) {
    var page = resp.data.data;

    res.render('Git01', {
        coursepage : page.fields
    })
    .catch(function (error) {
        console.log(error);
        done();
      });
  });
});

app.listen(process.env.PORT || 7000);