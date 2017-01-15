{
  /* global angular */
  angular
    .module('Application')
    .config(($stateProvider, $urlRouterProvider, $locationProvider) => {

      // $urlRouterProvider.otherwise('/');

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
        switch (error.code) {
          case 'NO_USER_FOUND':
            $state.go('login');
            break;
          case 'PERMISSIONS_INVALID':
            console.log(`Redirect to ${error.redirectTo} because ${error.code}`)
            $state.transitionTo(error.redirectTo, {
              reason: error.code
            });
            break;
          default:
            console.error('No error code found, redirecting home', error);
            $state.go('home');
            break;
        }
      })
    })
}
