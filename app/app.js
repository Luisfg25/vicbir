'use strict';

// Declare app level module which depends on views, and components
angular.module('myApp', [
  'ngRoute',
  'myApp.view1',
  'myApp.view2',
  'myApp.view3',
  'myApp.view4',
  'myApp.view5',
  'myApp.version'
]).config(function ($routeProvider) {
    $routeProvider.
    when('/', {
        templateUrl: 'view1/view1.html',
        controller: 'View1Ctrl',
        controllerAs: 'main'
      }).
      when('/discografia', {
        templateUrl: 'view2/view2.html',
        controller: 'View2Ctrl',
        controllerAs: 'about'
      }).
      when('/fotos', {
        templateUrl: 'view3/view3.html',
        controller: 'View3Ctrl',
        controllerAs: 'fotos'
      })      .
      when('/videos', {
        templateUrl: 'view4/view4.html',
        controller: 'View4Ctrl',
        controllerAs: 'contact'
      })
      .
      when('/contacto', {
        templateUrl: 'view5/view5.html',
        controller: 'View5Ctrl',
        controllerAs: 'contact'
      })
      .otherwise({
        redirectTo: '/'
      });
  });