(function() {
  'use strict';

  angular
    .module('scaffold-angularjs-simple')
    .constant('ENV', {
      API: {
        URI: 'http://localhost:3000/',
        URL: 'http://localhost:3000/api'
      },
      POST: {
        LOGIN: '/auth',
        FORGET: '/forget'
      },
      PUT: {
        USER: '/users/',
      },
      GET: {
        USER: '/users/',
      }
    })
    .constant('PATH', {
      login: '/login',
      main: '',
      home: '/home',
      admin: '/admin',
    });
})();
