(function() {
  'use strict';

  angular
    .module('scaffold-angularjs-simple')
    .config(routerConfig);

  /** @ngInject */
  function routerConfig($stateProvider, $urlRouterProvider, PATH) {
    // Configuração dos estados e rotas da aplicação
    $stateProvider
      .state('login', {
        url: PATH.login,
        templateUrl: 'app/modules/login/login.html',
        controller: 'LoginCtrl',
        controllerAs: 'vm',
        permission: 'public'
      })      
      .state('main', {
        url: PATH.main,
        abstract: true,
        templateUrl: 'app/modules/main/main.html',
        controller: 'MainCtrl',
        controllerAs: 'vm',
        permission: 'private'
      })
      .state('main.home', {
        url: PATH.home,
        templateUrl: 'app/modules/home/home.html',
        controller: 'HomeCtrl',
        controllerAs: 'vm',
        permission: 'private'
      })
      .state('main.admin', {
        url: PATH.admin,
        templateUrl: 'app/modules/admin/admin.html',
        controller: 'AdminCtrl',
        controllerAs: 'vm',
        permission: 'private'
      });

    $urlRouterProvider.otherwise('/login');
  }

})();
