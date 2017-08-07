'use strict';

(function() {

  var HomeCtrl = function($scope, $timeout, HomeService, $rootScope) {

    var ctrl = this;

    ctrl.result = false;
    ctrl.fade = false;

    $rootScope.inactiveDropdownMobile = true;

    ctrl.works = [{
      id: '1',
      title: 'Conjunto Completo Terminex',
      address: 'Terminex',
      district: 'Vermelha',
      work: 'Produto',
      imgUrl: 'work-01.jpg'
    }, {
      id: '2',
      title: 'Fachadas e Muros de Vidro',
      address: 'Av. Pres. Kennedy',
      district: 'Aldebaran Ville',
      work: 'Obra',
      imgUrl: 'work-02.jpg'
    }, {
      id: '3',
      title: 'Box de Vidro',
      address: 'Av. Miguel Rosa',
      district: 'Vermelha',
      work: 'Produto',
      imgUrl: 'work-03.jpg'
    }];

    ctrl.notices = [{
      id: '1',
      title: 'COBERTURA DE VIDRO AJUDA NA AMPLIAÇÃO DE ÁREAS EXTERNAS',
      author: 'Rádames Santiago',
      date: '31/05/2017',
      text: 'As extensões cobertas por vidro trazem mais beleza e sofisticação aos projetos. Representam um importante segmento de atuação no mercado vidreiro, mas o vidraceiro precisa, antes de tudo, garantir a segurança do cliente com a aplicação do vidro certo.',
      imgUrl: 'http://vidroimpresso.com.br/imagens/noticias/setor-vidreiro/cobertura-de-vidro-ajuda-na-ampliacao-de-areas-externas--cobertura1.png'
    }, {
      id: '2',
      title: 'PRODUÇÃO DE VIDRO DUPLO REQUER INSUMOS DE QUALIDADE',
      author: 'Leandro Nunes',
      date: '31/05/2017',
      text: 'Quem procura conforto termo acústico, pode encontrar no vidro duplo aquilo que precisa para o seu ambiente. Os vidraceiros que trabalham com esse tipo de vidro precisam estar aptos para instalá-los de forma efetiva. Caso algo dê errado na instalação ou com a função do vidro, vale lembrar que o problema pode se encontrar no processo de fabricação do vidro duplo, uma vez que ele não é encontrado a pronta entrega e precisa ser fabricado para determinadas obras de acordo com a necessidade do cliente.',
      imgUrl: 'http://vidroimpresso.com.br/imagens/noticias/setor-vidreiro/producao-de-vidro-duplo-requer-insumos-de-qualidade[yu-confira-o-que-a-gusmao-oferece-vidro-%7C-duplo-%7C-gusmao-%7C-fabricacao.jpg'
    }];

    ctrl.promo = [{
      id: '1',
      title: 'Em Breve',
      date: '01/06/2017',
      text: 'Aguarde ...',
      imgUrl: 'images/em_breve.png'
    }, {
      id: '2',
      title: 'Promoção 2',
      date: '01/06/2017',
      text: 'Aguarde ...',
      imgUrl: 'images/em_breve.png'
    }];

    ctrl.sendMessage = function() {
      HomeService.postMessage(ctrl.name, ctrl.email, ctrl.phone, ctrl.msg).then(function(data) {
        ctrl.fade = true;
        $timeout(function() {
          ctrl.result = true;
          ctrl.fade = false;
          $timeout(function() {
            ctrl.fade = true;
            $timeout(function() {
              ctrl.result = false;
              ctrl.fade = false;
            }, 500);
          }, 500);
        }, 500);
      });
    };

    var init = function() {
      HomeService.getBlog().then(function(data) {
        console.log(data);
      });
    };

    init();

  };

  HomeCtrl.$inject = ['$scope', '$timeout', 'HomeService', '$rootScope'];

  angular
    .module('scaffold-angularjs-simple.home')
    .controller('HomeCtrl', HomeCtrl);
})();
