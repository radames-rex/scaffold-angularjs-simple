(function() {
  'use strict';

  angular
    .module('scaffold-angularjs-simple')
    .config(config);

  /** @ngInject */
  function config($logProvider, $locationProvider, $translateProvider) {
    // Enable log
    $logProvider.debugEnabled(true);

    $locationProvider.hashPrefix('');

    // Configuração do provider de universalização e da linguagem padrão.
    $translateProvider.useStaticFilesLoader({
      prefix: 'app/translate/messages-',
      suffix: '.json'
    });
    $translateProvider.preferredLanguage('pt-BR');
    // $translateProvider.preferredLanguage(navigator.language);
  }

})();
