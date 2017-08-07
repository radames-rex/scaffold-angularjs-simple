'use strict';

(function () {

  /** @ngInject */
  var loginForm = function($timeout, Spin) {
    var directive = {
      restrict: 'A',
      link: link
    };
    return directive;

    function link(scope, element, attrs) {
      var vm = scope.vm;

      var $loginForm = $(element);

      function _validateLoginForm() {
        $loginForm.validate({
          errorClass: 'has-error',
          focusInvalid: false,
          rules: {
            username: {
              required: true
            },
            password: {
              required: true
            }
          },

          errorPlacement: function () {
          },

          invalidHandler: function () {
            $('.alert', $loginForm).hide();
            $('.alert-fields-required').show();
          },

          submitHandler: function (form) {
            var elemToSpin = $('.kog-login-form');
            Spin.start(elemToSpin, { relative: true });

            vm.auth({
              user: {
                email: vm.username,
                password: vm.password
              }
            }, function (httpCode) {
              Spin.stop(elemToSpin);

              $loginForm.validate().showErrors(
                { username: 'Username incorreto.',
                  password: 'Password incorreto.'
                })
              ;

              if (httpCode === 401) {
                $('.alert', $loginForm).hide();
                $('.alert-wrong-credentials').show();
              }
            });
          }
        });
      }

      function _onKeyPressLoginForm() {
        $('.login-form input').keypress(function (e) {
          if (e.which == 13) {
            if ($loginForm.validate().form()) {
              $('.button-enter').focus();
              $loginForm.submit();
            }

            return false;
          }
        });
      }

      (function _init() {
        _validateLoginForm();
        _onKeyPressLoginForm();
      })();
    }
  };

  loginForm.$inject = ['$timeout', 'Spin'];

  angular
    .module('scaffold-angularjs-simple.login')
    .directive('loginForm', loginForm);
})();
