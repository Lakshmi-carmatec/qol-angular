import angular from 'angular';
import uiRouter from 'angular-ui-router';
import textformComponent from './textform.component';

let textformModule = angular.module('textform', [
  uiRouter
])

.component('textform', textformComponent)

.name;

export default textformModule;
