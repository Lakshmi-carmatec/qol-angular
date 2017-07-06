import angular from 'angular';
import uiRouter from 'angular-ui-router';
import uploaderComponent from './uploader.component';

let uploaderModule = angular.module('uploader', [
  uiRouter
])

.component('uploader', uploaderComponent)

.name;

export default uploaderModule;
