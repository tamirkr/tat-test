/**
 * Created by Tamir on 09/01/2017.
 */
var express = require('express'),
    path = require('path'),
    rootPath = path.normalize(__dirname + '/../'),
    bodyParser = require('body-parser'),
    books = require('./controllers/books.controller')

var app = express();

app.use(function (req, res, next) {
    res.header('Access-Control-Allow-Origin', '*');
    res.header('Access-Control-Allow-Methods', 'GET,PUT,POST,DELETE');
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");

    next();
});

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: false}));
app.use(express.static(path.join(rootPath + '/app')));
app.use('/node_modules', express.static(rootPath + '/node_modules'));

app.get('/books', books.getBooks);
app.get('*', function (req, res) {
    res.sendFile(path.join(rootPath + '/app/index.html'));
});

app.listen(3000, function () {
    console.log('Listening on port 3000');
});