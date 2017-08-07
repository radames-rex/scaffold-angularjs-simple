'use strict';

angular
  .module('scaffold-angularjs-simple', [
    'ui.router',
    'pascalprecht.translate'
  ])
  .constant('PATH', {
    reflecta: '',
    login: '/entrar',
    signin: '/inscrever',
    home: '/inicio',
    about: '/institucional',
    projects: '/projetos',
    pictures: '/imagens',
    blog: '/noticias',
    contact: '/contato',
    admin: '/admin'
  })
  .constant('REQUEST', {
    api: {
      url: 'https://radames.herokuapp.com/api'
    },
    paths: {
      works: '/works',
      work: '/work',
      blogs: '/blogs',
      blog: '/blog',
      promos: '/promos',
      promo: '/promo',
      abouts: '/abouts',
      about: '/about',
      pics: '/pics',
      pic: '/pic',
      messages: '/contacts',
      message: '/contact',
      login: '/sign_in'
    }
  })
  .config(function($stateProvider, $urlRouterProvider, $translateProvider, PATH) {

    // Configuração do provider de universalização e da linguagem padrão.
    $translateProvider.useStaticFilesLoader({
      prefix: 'translate/messages-',
      suffix: '.json'
    });
    $translateProvider.preferredLanguage('pt-BR');
    $translateProvider.preferredLanguage(navigator.language);

    // Configuração dos estados e rotas da aplicação
    $stateProvider.state('reflecta', {
      abstract: true,
      url: PATH.reflecta,
      templateUrl: 'components/main/main.html'
    }).state('reflecta.home', {
      url: PATH.home,
      templateUrl: 'components/home/home.html',
      controller: 'HomeCtrl as ctrl'
    }).state('reflecta.login', {
      url: PATH.login,
      templateUrl: 'components/login/login.html',
      controller: 'LoginCtrl as ctrl'
    }).state('reflecta.about', {
      url: PATH.about,
      templateUrl: 'components/about/about.html',
      controller: 'AboutCtrl as ctrl'
    }).state('reflecta.projects', {
      url: PATH.projects,
      templateUrl: 'components/projects/projects.html',
      controller: 'ProjectsCtrl as ctrl'
    }).state('reflecta.pictures', {
      url: PATH.pictures,
      templateUrl: 'components/pictures/pictures.html',
      controller: 'PicturesCtrl as ctrl'
    }).state('reflecta.blog', {
      url: PATH.blog,
      templateUrl: 'components/blog/blog.html',
      controller: 'BlogCtrl as ctrl'
    }).state('reflecta.contact', {
      url: PATH.contact,
      templateUrl: 'components/contact/contact.html',
      controller: 'ContactCtrl as ctrl'
    }).state('reflecta.admin', {
      url: PATH.admin,
      templateUrl: 'components/admin/admin.html',
      controller: 'AdminCtrl as ctrl',
      resolve: {
        messages: ['LoginService', '$rootScope', '$log', function(LoginService, $rootScope, $log) {
          $rootScope.avatarUrl = 'images/avatar.png';
          $rootScope.usuario = sessionStorage.getItem('name');
          var email = sessionStorage.getItem('email'),
            password = sessionStorage.getItem('password');
          LoginService.login(email, password).then(function(data) {
            sessionStorage.setItem('accessToken', data.access_token);
            sessionStorage.setItem('email', email);
            sessionStorage.setItem('password', password);
            sessionStorage.setItem('name', data.user.name);
            return data;
          }, function(response) {
            $log.warn(response.status);
            if (response.status == 401) {
              LoginService.logout();
            }
          });
        }]
      }
    });

    // Redirecionamento para evitar 404
    $urlRouterProvider.otherwise(function() {
      return '/inicio';
    });
  })
  .run(function($rootScope) {
    $rootScope.isAdmin = function() {
      var accessToken = sessionStorage.getItem('accessToken');
      return accessToken != null;
    };
  });
