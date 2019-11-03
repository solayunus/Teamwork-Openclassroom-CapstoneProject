//  calling required dependencies

const express = require('express');




const app = express();

app.use((req, res, next) => {
    res.json({
        message: 'you request was successful'
    })
});


//exporting express app to be used by server.js
module.exports = app;