'use strict';

(function() {

  var AdminService = function($q, $log, RequestService, REQUEST) {

    this.getMessages = function() {
      var defer = $q.defer(),
        auth = "none";
      auth = sessionStorage.getItem('accessToken');
      RequestService.getSecurity(REQUEST.api.url + REQUEST.paths.messages, auth).then(function(data) {
        var data = data.data
        defer.resolve(data);
      }, function(response) {
        $log.warn(response.status + " " + response.statusText);
        defer.reject(response);
      });
      return defer.promise;
    };

    this.getWorks = function() {
      var defer = $q.defer(),
        auth = "none";
      auth = sessionStorage.getItem('accessToken');
      RequestService.getSecurity(REQUEST.api.url + REQUEST.paths.works, auth).then(function(data) {
        var data = data.data
        defer.resolve(data);
      }, function(response) {
        $log.warn(response.status + " " + response.statusText);
        defer.reject(response);
      });
      return defer.promise;
    };

    this.getNotices = function() {
      var defer = $q.defer(),
        auth = "none";
      auth = sessionStorage.getItem('accessToken');
      RequestService.getSecurity(REQUEST.api.url + REQUEST.paths.blogs, auth).then(function(data) {
        var data = data.data
        defer.resolve(data);
      }, function(response) {
        $log.warn(response.status + " " + response.statusText);
        defer.reject(response);
      });
      return defer.promise;
    };

    this.getPromos = function() {
      var defer = $q.defer(),
        auth = "none";
      auth = sessionStorage.getItem('accessToken');
      RequestService.getSecurity(REQUEST.api.url + REQUEST.paths.promos, auth).then(function(data) {
        var data = data.data
        defer.resolve(data);
      }, function(response) {
        $log.warn(response.status + " " + response.statusText);
        defer.reject(response);
      });
      return defer.promise;
    };

    this.getAbouts = function() {
      var defer = $q.defer(),
        auth = "none";
      auth = sessionStorage.getItem('accessToken');
      RequestService.getSecurity(REQUEST.api.url + REQUEST.paths.abouts, auth).then(function(data) {
        var data = data.data
        defer.resolve(data);
      }, function(response) {
        $log.warn(response.status + " " + response.statusText);
        defer.reject(response);
      });
      return defer.promise;
    };

    this.getPics = function() {
      var defer = $q.defer(),
        auth = "none";
      auth = sessionStorage.getItem('accessToken');
      RequestService.getSecurity(REQUEST.api.url + REQUEST.paths.pics, auth).then(function(data) {
        var data = data.data
        defer.resolve(data);
      }, function(response) {
        $log.warn(response.status + " " + response.statusText);
        defer.reject(response);
      });
      return defer.promise;
    };

    this.postWork = function(img, title, work, address, district) {
      var defer = $q.defer(),
        body = {
          "title": title,
          "address": address,
          "district": district,
          "name": work,
          "image": img
        },
        auth = "none";
      auth = sessionStorage.getItem('accessToken');
      RequestService.postFullSecurity(REQUEST.api.url + REQUEST.paths.works, body, auth).then(function(data) {
        var data = data.data
        defer.resolve(data);
      }, function(response) {
        $log.warn(response.status + " " + response.statusText);
        defer.reject(response);
      });
      return defer.promise;
    };

    this.postNotice = function(img, title, author, text) {
      var defer = $q.defer(),
        body = {
          "image": img,
          "title": title,
          "author": author,
          "text": text
        },
        auth = "none";
      auth = sessionStorage.getItem('accessToken');
      RequestService.postFullSecurity(REQUEST.api.url + REQUEST.paths.blogs, body, auth).then(function(data) {
        var data = data.data
        defer.resolve(data);
      }, function(response) {
        $log.warn(response.status + " " + response.statusText);
        defer.reject(response);
      });
      return defer.promise;
    };

    this.postPromo = function(img, title, date, text) {
      var defer = $q.defer(),
        body = {
          "image": img,
          "title": title,
          "date": date,
          "text": text
        },
        auth = "none";
      auth = sessionStorage.getItem('accessToken');
      RequestService.postFullSecurity(REQUEST.api.url + REQUEST.paths.promos, body, auth).then(function(data) {
        var data = data.data
        defer.resolve(data);
      }, function(response) {
        $log.warn(response.status + " " + response.statusText);
        defer.reject(response);
      });
      return defer.promise;
    };

    this.postPic = function(img, title, category, value) {
      var defer = $q.defer(),
        body = {
          "image": img,
          "title": title,
          "category": category,
          "value": value
        },
        auth = "none";
      auth = sessionStorage.getItem('accessToken');
      RequestService.postFullSecurity(REQUEST.api.url + REQUEST.paths.pics, body, auth).then(function(data) {
        var data = data.data
        defer.resolve(data);
      }, function(response) {
        $log.warn(response.status + " " + response.statusText);
        defer.reject(response);
      });
      return defer.promise;
    };

    this.deleteMessage = function(id) {
      var defer = $q.defer(),
        auth = "none";
      auth = sessionStorage.getItem('accessToken');
      RequestService.deleteSecurity(REQUEST.api.url + REQUEST.paths.messages + "/" + id, auth).then(function(data) {
        var data = data.data
        defer.resolve(data);
      }, function(response) {
        $log.warn(response.status + " " + response.statusText);
        defer.reject(response);
      });
      return defer.promise;
    };

    this.deleteWork = function(id) {
      var defer = $q.defer(),
        auth = "none";
      auth = sessionStorage.getItem('accessToken');
      RequestService.deleteSecurity(REQUEST.api.url + REQUEST.paths.works + "/" + id, auth).then(function(data) {
        var data = data.data
        defer.resolve(data);
      }, function(response) {
        $log.warn(response.status + " " + response.statusText);
        defer.reject(response);
      });
      return defer.promise;
    };

    this.deleteNotice = function(id) {
      var defer = $q.defer(),
        auth = "none";
      auth = sessionStorage.getItem('accessToken');
      RequestService.deleteSecurity(REQUEST.api.url + REQUEST.paths.blogs + "/" + id, auth).then(function(data) {
        var data = data.data
        defer.resolve(data);
      }, function(response) {
        $log.warn(response.status + " " + response.statusText);
        defer.reject(response);
      });
      return defer.promise;
    };

    this.deletePromo = function(id) {
      var defer = $q.defer(),
        auth = "none";
      auth = sessionStorage.getItem('accessToken');
      RequestService.deleteSecurity(REQUEST.api.url + REQUEST.paths.promos + "/" + id, auth).then(function(data) {
        var data = data.data
        defer.resolve(data);
      }, function(response) {
        $log.warn(response.status + " " + response.statusText);
        defer.reject(response);
      });
      return defer.promise;
    };

    this.deletePic = function(id) {
      var defer = $q.defer(),
        auth = "none";
      auth = sessionStorage.getItem('accessToken');
      RequestService.deleteSecurity(REQUEST.api.url + REQUEST.paths.pics + "/" + id, auth).then(function(data) {
        var data = data.data
        defer.resolve(data);
      }, function(response) {
        $log.warn(response.status + " " + response.statusText);
        defer.reject(response);
      });
      return defer.promise;
    };

  };

  AdminService.$inject = ['$q', '$log', 'RequestService', 'REQUEST'];

  angular
    .module('scaffold-angularjs-simple.admin')
    .service('AdminService', AdminService);
})();
