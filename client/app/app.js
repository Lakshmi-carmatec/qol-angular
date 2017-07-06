import angular from 'angular';
import uiRouter from 'angular-ui-router';
import Common from './common/common';
import Components from './components/components';
import AppComponent from './app.component';
import 'angular-ui-bootstrap';
import 'angular-ui-router-uib-modal';
import 'angular-animate';
import 'angular-signature';
import 'normalize.css';



angular.module('app', [
    uiRouter,
    Common,
    Components,
    'ui.bootstrap',
    'ui.router.modal',
    'ngAnimate',
    'signature'
  ])
  .config(($locationProvider) => {
    "ngInject";
    // @see: https://github.com/angular-ui/ui-router/wiki/Frequently-Asked-Questions
    // #how-to-configure-your-server-to-work-with-html5mode
    $locationProvider.html5Mode(true).hashPrefix('!');
  })

  .component('app', AppComponent);