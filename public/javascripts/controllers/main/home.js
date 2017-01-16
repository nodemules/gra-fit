{
  /* global angular */
  angular
    .module('graFitControllers')
    .controller('homeCtrl', homeCtrl)

  homeCtrl.$inject = ['$scope', 'usersService', 'authService'];

  function homeCtrl($scope, usersService, authService) {
    $scope.status = {}

    $scope.logoutUser = function() {
      authService.api().logout(() => {
        $scope.status.isLoggedIn = false;
      });
    }

    function whoAmI() {
      $scope.user = usersService.api().whoami(function() {
        $scope.status.isLoggedIn = true;
      });
    }

    function initialize() {
      whoAmI();
    }

    initialize();

  }

}
