(function() {
  'use strict';

  angular
    .module('app', [
      'ngRoute',
      'app.mainPanel'
    ])
    .config(configFunction);
  
  configFunction.$inject = ['$routeProvider'];

  function configFunction($routeProvider) {
    $routeProvider
      .otherwise({
        redirectTo: '/'
      });
  }
})();