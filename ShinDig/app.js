const express = require('express');
const app = express();
const morgan = require('morgan');

//import performers routes
const performersRoutes = require('./api/routes/performers')

app.use(morgan('dev'));

//routes that handle requests
app.use('/performers', performersRoutes);

//handle errors in request path
app.use((req, res, next) => {
    const error = new Error('Route not found');
    error.status =404;
    next(error);
});

app.use((error, req, res, next) => {
    res.status(error.status || 500);
    res.json({
        error: {
            message: error.message,
        }
    })
});

module.exports = app;