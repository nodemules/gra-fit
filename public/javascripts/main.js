{
  /* global angular */
  var APP_NAME = 'graFitApp';
  var APP_DEPENDENCIES = ['ngMessages', 'ngResource', 'ui.router', 'ui.bootstrap', 'graFitControllers', 'graFitServices', 'graFitProviders', 'graFitDirectives'];

  angular
    .module(APP_NAME, APP_DEPENDENCIES)

  angular.module('graFitControllers', [])
  angular.module('graFitServices', [])
  angular.module('graFitProviders', [])
  angular.module('graFitDirectives', [])

}
