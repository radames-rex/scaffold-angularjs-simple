'use strict';

(function() {

  var UserService = function($http, ENV, $cookies) {

    this.getUser = function(userId) {
      var userFromCookie = $cookies.getObject('user'),
        accessToken = $cookies.getObject('accessToken');

      return $http({
        method: 'GET',
        url: ENV.API.URL + ENV.GET.USER + userId + '.json',
        headers: {
          'Content-Type': 'application/json',
          'access-token': accessToken
        }
      });
    }
  };

  UserService.$inject = ['$http', 'ENV', '$cookies'];

  angular
    .module('scaffold-angularjs-simple.login')
    .service('UserService', UserService);
})();
