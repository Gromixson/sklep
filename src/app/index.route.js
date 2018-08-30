(function() {
  'use strict';

  angular
    .module('frontFastcrm')
    .config(routerConfig);

  /** @ngInject */
  function routerConfig($stateProvider, $urlRouterProvider) {
    $stateProvider
      .state('home', {
        url: '/',
        templateUrl: 'app/main/main.html',
        controller: 'MainController',
        controllerAs: 'main'
      })
      .state('simple', {
        url: '/shop',
        templateUrl: 'app/main/simple.html',
        controller: 'MainController',
        controllerAs: 'main'
      })
      .state('aboutMe', {
        url: '/o-mnie',
        templateUrl: 'app/main/aboutMe.html',
        controller: 'MainController',
        controllerAs: 'main'
      })
      .state('aboutProject', {
        url: '/o-projekcie',
        templateUrl: 'app/main/aboutProject.html',
        controller: 'MainController',
        controllerAs: 'main'
      })
      .state('extended', {
        url: '',
        templateUrl: 'app/main/shop.html',
        controller: 'MainController',
        controllerAs: 'main'
      })
      .state('extended.thanks', {
        url: '/dziekujemy',
        templateUrl: 'app/main/thanks.html',
        controller: 'MainController',
        controllerAs: 'main'
      })
      .state('extended.items', {
        url: '/sklepik',
        templateUrl: 'app/main/items.html',
        controller: 'MainController',
        controllerAs: 'main'
      })
      .state('extended.cart', {
        url: '/koszyk',
        templateUrl: 'app/main/cart.html',
        controller: 'MainController',
        controllerAs: 'main'
      });

    $urlRouterProvider.otherwise('/');
  }

})();
