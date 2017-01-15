{
  function main() {
    var express = require('express'),
      api = express.Router(),
      auth = require('./controllers/auth')(),
      user = require('./controllers/user')();

    api.use((req, res, next) => {
      console.log('An API request has been made');
      next();
    })

    api.use('/auth', auth);
    api.use('/users', user);

    return api;
  }

  module.exports = main;
}
