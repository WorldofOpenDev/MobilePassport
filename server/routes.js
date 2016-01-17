var users  = require('./controllers/users');
var express = require('express');

module.exports = function(app, passport) {

    // Login [x]
    app.post('/login', users.login);

    // Search For User by ID [x]
    app.get('/user/search/:id', users.read);

    // Search For User by Username [x]
    app.get('/user/search/:username', users.readByUsername);

    // My Profile 
    app.get('/user/profile', isLoggedIn, users.me); 

    // Register [x]
    app.put('/signup', users.create); 

    // Update As Currently Logged In User [x]
    app.post('/user/update', isLoggedIn, users.update);

    // Delete Currently Logged in User [x]
    app.delete('/user/delete', isLoggedIn, users.delete);

    // Log Out [x]
    app.post('/logout', function(req, res) {
        req.logout();
        res.end('Logged out')
    });

};

function isLoggedIn(req, res, next) {
    if (req.isAuthenticated())
        return next();
    res.end('Not logged in');
}