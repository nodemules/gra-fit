{
  /* global angular */
  angular
    .module('graFitControllers')
    .controller('loginCtrl', loginCtrl)

  loginCtrl.$inject = ['$scope', '$state', 'authService'];

  function loginCtrl($scope, $state, authService) {

    $scope.loginUser = function(user) {
      authService.api().login(user, function(user) {
        $state.transitionTo('home', user);
      })
    }
  }

}
