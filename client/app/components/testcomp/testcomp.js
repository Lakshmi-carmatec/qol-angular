import angular from 'angular';
import uiRouter from 'angular-ui-router';
import testcompComponent from './testcomp.component';

let testcompModule = angular.module('testcomp', [
  uiRouter
])

.component('testcomp', testcompComponent)

.name;

export default testcompModule;
