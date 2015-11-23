var express = require('express');
var session = require('express-session');
var bodyParser = require('body-parser');
var db = require('mssql');
var dbconfig = require('./service/dbconfig');
var userAuth = require('./service/userauth')(db, dbconfig);
var proj = require('./service/proj')(db, dbconfig);

var app = express();
var fs = require('fs');

app.use(bodyParser.urlencoded({
    extended: false
}));
app.use(bodyParser.json());
app.use(session({
    secret: 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=',
    resave: false,
    saveUninitialized: true,
    cookie: {
        secure: true
    }
}));

//app.use(express.static(__dirname + '/app'));
//var server = app.listen(8000);
//var port = process.env.PORT || 8000;
/*
app.post('/api/login', function(req, res) {
    var sess = req.session;
    req.session.user = req.body;
    console.log(req.session.user);
    res.send('Return: ' + sess.user.employeeno + ', ' + sess.user.password);
});

app.get('/api/login', function(req, res) {
    console.log('Return GET /api/login');
    res.send(req.query);
});
*/
app.listen(8000);

app.get('/api/login', userAuth.login);
app.get('/api/myproj', proj.myproj);


//heap memory gc log
fs.stat('log.txt', function(err, stat) {
    if (err == null) {
        fs.unlink('log.txt', function(err) {
            if (err) throw err;
        });
    }
});

var options = {
    encoding: 'utf8',
    flag: 'a'
};

var startGC = setInterval(function() {
    fs.writeFile('log.txt', JSON.stringify(process.memoryUsage()) + ',\r\n', options, function(err) {
        if (err) throw err;
    });
    if (process.memoryUsage().heapUsed > 25000000) {
        if (global.gc) {
            global.gc();
            console.log(process.memoryUsage());
        }
    }
}, 10000);
