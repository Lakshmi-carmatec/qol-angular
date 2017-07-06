import angular from 'angular';
import uiRouter from 'angular-ui-router';
import qolformComponent from './qolform.component';
import modalModule from './modal';

let qolformModule = angular.module('qolform', [
  uiRouter,
  modalModule
])
	.config(($stateProvider, $urlRouterProvider) => {
		"ngInject";

		$urlRouterProvider.otherwise('/');

		$stateProvider
		.state('qolform',{
			url:'/',
			component:'qolformComponent'
		});
	})


.component('qolform', qolformComponent)

.name;

export default qolformModule;
