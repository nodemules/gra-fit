{
  /* global angular */
  angular
    .module('graFitServices')
    .factory('usersService', usersService);

  usersService.$inject = ['$resource'];

  function usersService($resource) {

    var basePath = '/api/users'

    var service = {
      api
    }

    return service;

    /////////////////////

    function api(id) {
      return $resource(basePath + '/:action', {
        id
      }, {
        'whoami': {
          method: 'GET',
          params: {
            action: 'whoami'
          }
        }
      });
    }

  }

}
