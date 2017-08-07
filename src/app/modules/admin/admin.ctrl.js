'use strict';

(function() {

  var AdminCtrl = function($scope, $state, LoginService, AdminService) {

    var ctrl = this;

    ctrl.messagesVisible = true;
    ctrl.worksVisible = false;
    ctrl.blogVisible = false;
    ctrl.aboutVisible = false;
    ctrl.promoVisible = false;
    ctrl.picsVisible = false;

    ctrl.newWork = {};
    ctrl.newNotice = {};
    ctrl.newPromo = {};
    ctrl.newPic = {};

    ctrl.msg = null;

    ctrl.invisibilityAll = function(sectionVisible) {
      ctrl.messagesVisible = false;
      ctrl.worksVisible = false;
      ctrl.blogVisible = false;
      ctrl.aboutVisible = false;
      ctrl.promoVisible = false;
      ctrl.picsVisible = false;
      return true;
    };

    ctrl.logout = function() {
      LoginService.logout();
    };

    ctrl.saveNewWork = function() {
      ctrl.newWork.imgUrl = $('#file').val();
      AdminService.postWork(ctrl.newWork.imgUrl,
        ctrl.newWork.title, ctrl.newWork.work, ctrl.newWork.address,
        ctrl.newWork.district).then(function(data) {
        ctrl.msg = "Salvo com sucesso!";
        init();
      });
    };

    ctrl.saveNewNotice = function() {
      ctrl.newNotice.imgUrl = $('#file').val();
      AdminService.postNotice(ctrl.newNotice.imgUrl, ctrl.newNotice.title,
        ctrl.newNotice.author, ctrl.newNotice.text).then(function(data) {
        ctrl.msg = "Salvo com sucesso!";
        init();
      });
    };

    ctrl.saveNewPromo = function() {
      ctrl.newPromo.imgUrl = $('#file').val();
      AdminService.postPromo(ctrl.newPromo.imgUrl, ctrl.newPromo.title,
        ctrl.newPromo.data, ctrl.newPromo.text).then(function(data) {
        ctrl.msg = "Salvo com sucesso!";
        init();
      });
    };

    ctrl.saveNewPic = function() {
      ctrl.newPic.imgUrl = $('#file').val();
      AdminService.postPic(ctrl.newPic.imgUrl, ctrl.newPic.title,
        ctrl.newPic.category, ctrl.newPic.value).then(function(data) {
        ctrl.msg = "Salvo com sucesso!";
        init();
      });
    };

    ctrl.deleteMessage = function(id) {
      AdminService.deleteMessage(id).then(function(data) {
        ctrl.msg = "Deletado com sucesso!";
        init();
      });
    };

    ctrl.deleteWork = function(id) {
      AdminService.deleteWork(id).then(function(data) {
        ctrl.msg = "Deletado com sucesso!";
        init();
      });
    };

    ctrl.deleteNotice = function(id) {
      AdminService.deleteNotice(id).then(function(data) {
        ctrl.msg = "Deletado com sucesso!";
        init();
      });
    };

    ctrl.deletePromo = function(id) {
      AdminService.deletePromo(id).then(function(data) {
        ctrl.msg = "Deletado com sucesso!";
        init();
      });
    };

    ctrl.deletePic = function(id) {
      AdminService.deletePic(id).then(function(data) {
        ctrl.msg = "Deletado com sucesso!";
        init();
      });
    };

    var init = function() {
      AdminService.getMessages().then(function(data) {
        ctrl.messages = data;
      });
      AdminService.getWorks().then(function(data) {
        ctrl.works = data;
      });
      AdminService.getAbouts().then(function(data) {
        ctrl.abouts = data;
      });
      AdminService.getNotices().then(function(data) {
        ctrl.notices = data;
      });
      AdminService.getPromos().then(function(data) {
        ctrl.promos = data;
      });
      AdminService.getPics().then(function(data) {
        ctrl.pics = data;
      });
    };

    init();

  };

  AdminCtrl.$inject = ['$scope', '$state', 'LoginService', 'AdminService'];

  angular
    .module('scaffold-angularjs-simple.admin')
    .controller('AdminCtrl', AdminCtrl);
})();
