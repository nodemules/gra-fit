{
  function exports() {

    var express = require('express'),
      api = express.Router(),
      passport = require('passport');

    var authService = require('../services/auth')(),
      roleService = require('../services/role')(),
      Permissions = require('../../enum/permissions'),
      Users = require('../../models/user');

    api.get('/', authService.auth, (req, res) => {
      res.send({
        message: `User [${res.req.user.username}] is authenticated`
      })
    })

    api.post('/register',
      function(req, res) {
        console.log(`Creating user with username ${req.body.username}`);
        Users
          .create(req.body, function(err, user) {
            if (err)
              console.error(err.stack);
            res.send(user);
          });
      });

    api.get('/logout', (req, res) => {
      let sessionUser = req.user;
      console.log(`Logging out [${sessionUser.username}]`)
      req.logout();
      res.send({
        message: `User [${sessionUser.username}] has been logged out`
      });
    })

    api.post('/permission', (req, res, next) => authService.checkPermissions(req, res, next, authService.getPermissions(req.body.permissions)), (req, res) => {
      res.send({
        message: 'Permission validated'
      })
    })

    api.get('/permission/add/all/:roleId',
      (req, res, next) => authService.checkPermissions(req, res, next, [Permissions.ADD_ALL_PERMISSIONS]),
      roleService.addAllPermissionsToRole, (req, res) => {
        res.send({
          message: `All permissions added to Role [${res.locals.role.name}]`
        })
      })

    api.get('/permission/add/:roleId/:permissionId',
      (req, res, next) => authService.checkPermissions(req, res, next, [Permissions.ADD_PERMISSION]),
      roleService.addPermissionToRole, (req, res) => {
        let permissionId = parseInt(req.params.permissionId);
        res.send({
          message: `Permission [${Permissions.get(permissionId).key}] inserted into Role [${res.locals.role.name}]`
        })
      })

    api.post('/login', passport.authenticate('local'), authService.setPermissions, (req, res) => {
      res.send({
        message: `User [${res.req.user.username}] has been logged in`
      })
    })

    return api;
  }

  module.exports = exports;
}
