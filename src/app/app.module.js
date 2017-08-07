(function() {
  'use strict';

  angular
    .module('scaffold-angularjs-simple', [
      'ngCookies',
      'ngAria',
      'ui.router',
      'pascalprecht.translate',
      'naif.base64',

      'scaffold-angularjs-simple.components',
      
      'scaffold-angularjs-simple.login',
      'scaffold-angularjs-simple.main',
      'scaffold-angularjs-simple.home',
      'scaffold-angularjs-simple.admin'
    ]);
})();
