'use strict';

(function() {

  var HomeService = function($q, $log, RequestService, REQUEST) {

    this.postMessage = function(name, email, phone, message) {
      var defer = $q.defer(),
        body = {
          "name": name,
          "email": email,
          "phone": phone,
          "message": message
        };
      RequestService.postFull(REQUEST.api.url + REQUEST.paths.messages, body).then(function(data) {
        var data = data.data
        defer.resolve(data);
      }, function(response) {
        $log.warn(response.status + " " + response.statusText);
        defer.reject(response);
      });
      return defer.promise;
    };

    this.getWorks = function() {
      var defer = $q.defer();
      RequestService.get(REQUEST.api.url + REQUEST.paths.works).then(function(data) {
        var data = data.data
        defer.resolve(data);
      }, function(response) {
        $log.warn(response.status + " " + response.statusText);
        defer.reject(response);
      });
      return defer.promise;
    };

    this.getBlog = function() {
      var defer = $q.defer();
      RequestService.get(REQUEST.api.url + REQUEST.paths.blog).then(function(data) {
        var data = data.data
        defer.resolve(data);
      }, function(response) {
        $log.warn(response.status + " " + response.statusText);
        defer.reject(response);
      });
      return defer.promise;
    };

    this.getPromo = function() {
      var defer = $q.defer();
      RequestService.get(REQUEST.api.url + REQUEST.paths.promo).then(function(data) {
        var data = data.data
        defer.resolve(data);
      }, function(response) {
        $log.warn(response.status + " " + response.statusText);
        defer.reject(response);
      });
      return defer.promise;
    };

  };

  HomeService.$inject = ['$q', '$log', 'RequestService', 'REQUEST'];

  angular
    .module('scaffold-angularjs-simple.home')
    .service('HomeService', HomeService);
})();
