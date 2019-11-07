const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const usersRoutes = require('./routes/users');
const articleRoutes = require('./routes/articles');

app.use(bodyParser.json());
app.use(
    bodyParser.urlencoded({
        extended: true,
    })
);

app.use('/users', usersRoutes);
app.use('/articles', articleRoutes);

module.exports = app;