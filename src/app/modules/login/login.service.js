'use strict';

(function() {

  var LoginService = function($http, ENV) {
    
    this.auth = function(body) {
      return $http({
        method: 'POST',
        url: ENV.API.URL + ENV.POST.LOGIN,
        headers: {
          'Content-Type': 'application/json'
        },
        data: body
      });
    }

    this.forget = function(body) {
      return $http({
        method: 'POST',
        url: ENV.API.URL + ENV.POST.FORGET,
        headers: {
          'Content-Type': 'application/json'
        },
        data: body
      });
    }
  };

  LoginService.$inject = ['$http', 'ENV'];

  angular
    .module('scaffold-angularjs-simple.login')
    .service('LoginService', LoginService);
})();
