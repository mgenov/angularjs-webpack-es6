'use strict';
import dashboardController from './dashboard.controller'
import angular from 'angular'

angular.module('dashboard')
  .controller('dashboardController', dashboardController)
  .controller('testController', function TestController($scope) {
    $scope.name = "John";
  });
