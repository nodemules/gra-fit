{
  /* global angular */
  angular
    .module('Application')
    .config(($stateProvider) => {

      $stateProvider
        .state('login', {
          url: '/login',
          templateUrl: '/views/auth/login.html',
          controller: 'loginCtrl'
        })
        .state('register', {
          url: '/register',
          templateUrl: '/views/auth/register.html',
          controller: 'registerCtrl'
        })

    })
}
