{
  /* global angular */
  var APP_NAME = 'Application';
  var APP_DEPENDENCIES = ['ngMessages', 'ngResource', 'ui.router', 'ui.bootstrap', 'appControllers', 'appServices', 'appProviders', 'appDirectives'];

  angular
    .module(APP_NAME, APP_DEPENDENCIES)

  angular.module('appControllers', [])
  angular.module('appServices', [])
  angular.module('appProviders', [])
  angular.module('appDirectives', [])

}
