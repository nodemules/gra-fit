{
  /* global angular */
  angular
    .module('Application')
    .config(($stateProvider) => {

      $stateProvider
        .state('login', {
          url: '/login',
          templateUrl: '/views/auth/login.html',
          controller: 'loginCtrl',
          resolve: {
            auth: ['authProvider', function(authProvider) {
              return authProvider.isLoggedIn('home', true);
            }]
          }
        })
        .state('register', {
          url: '/register',
          templateUrl: '/views/auth/register.html',
          controller: 'registerCtrl',
          resolve: {
            auth: ['authProvider', function(authProvider) {
              return authProvider.isLoggedIn('home', true);
            }]
          }
        })

    })
}
