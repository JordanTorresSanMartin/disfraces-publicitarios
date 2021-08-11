const express = require('express');
const app = express();
const hbs = require('hbs');
const { json } = require('express');
require('./hbs/helpers');

//Connection host
const port = process.env.PORT || 3000;

app.use(express.static(__dirname + '/public'));

//hbs Enigine
hbs.registerPartials(__dirname + '/views/partials');
app.set('view engine', 'hbs');

//Routes
app.use(express.urlencoded({ extended: false }));
app.use(json());
app.use(require('./routes/index'));

app.get('/index', function(req, res) {
    res.render('index');
});
app.get('/contact', function(req, res) {
    res.render('contact');
});
app.get('/single', function(req, res) {
    res.render('single');
});
app.get('/archive', function(req, res) {
    res.render('archive');
});

app.listen(port, () => {
    console.log('Listen port 3000');
})