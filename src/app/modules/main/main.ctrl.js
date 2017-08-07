'use strict';

(function() {

  var MainCtrl = function($rootScope) {
    console.log("Plus Ultra!");

    $rootScope.inactiveDropdownMobile = true;

    this.toggleDropdown = function() {
      if ($rootScope.inactiveDropdownMobile) {
        $rootScope.inactiveDropdownMobile = false;
      } else {
        $rootScope.inactiveDropdownMobile = true;
      }
    };
  };

  MainCtrl.$inject = ['$rootScope'];

  angular
    .module('scaffold-angularjs-simple.main')
    .controller('MainCtrl', MainCtrl);
})();
