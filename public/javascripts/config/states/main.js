{
  /* global angular */
  angular
    .module('Application')
    .config(($stateProvider, $urlRouterProvider, $locationProvider) => {

      $urlRouterProvider.otherwise('/');

      $stateProvider
        .state('home', {
          url: '/',
          templateUrl: '/views/main/home.html',
          controller: 'homeCtrl'
        })

      $locationProvider.html5Mode({
        enabled: true,
        requireBase: true
      });

    })
    .run(($rootScope, $state) => {
      $rootScope.$on('$stateChangeError', (evt, to, toParams, from, fromParams, error) => {
        console.log(error);
        if (error.code === 'NO_USER_FOUND') {
          $state.go('login')
        } else if (error.redirectTo) {
          console.log(`Redirect to ${error.redirectTo} because ${error.code}`)
          $state.transitionTo(error.redirectTo, {
            reason: error.code
          });
        }
      })
    })
}
