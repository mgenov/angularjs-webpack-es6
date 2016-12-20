import angular from 'angular';

angular.module('dashboard', []);

require('./directives/yep-nope.directive');
require('./services/github-status.service');
require('./controllers')
