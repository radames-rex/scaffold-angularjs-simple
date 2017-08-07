'use strict';

(function() {

  var LoginCtrl = function($rootScope, $state, $cookies, LoginService) {

    var vm = this;

    vm.auth = auth;
    vm.forget = forget;

    function auth(credentials, callback) {
      LoginService.auth(credentials)
        .success(function(data) {
          $cookies.putObject('user', data);
          $cookies.putObject('accessToken', data.token);
          $rootScope.user = data;

          if(data.isActive && data.fullRegistration){
            $state.go('main.dashboard');
          }else if(!data.fullRegistration){
            $state.go('profile');
          }
        })
        .error(function(error, code) {
          callback(code);
        });
    }

    function forget(emailObj, successCallback, errorCallback) {
      LoginService.forget(emailObj)
        .success(function() {
          successCallback();
        })
        .error(function(error, code) {
          errorCallback(code);
        });
    }

  };

  LoginCtrl.$inject = ['$rootScope', '$state', '$cookies', 'LoginService'];

  angular
    .module('scaffold-angularjs-simple.login')
    .controller('LoginCtrl', LoginCtrl);
})();
