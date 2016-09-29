(function() {
  'use strict';

  angular
    .module('app.mainPanel')
    .config(configFunction);

  configFunction.$inject = ['$routeProvider'];

  function configFunction($routeProvider) {
    $routeProvider
      .when('/', {
        templateUrl: 'app/mainPanel/mainPanel.html',
        controller: 'MainPanelController',
        controllerAs: 'vm'
      });
  }
})();