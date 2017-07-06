import angular from 'angular';
import uiRouter from 'angular-ui-router';
import ModalInstanceCtrl from './modal.controller';

let modalModule =angular.module('ui.bootstrap.demo',[])

.controller('ModalInstanceCtrl', ModalInstanceCtrl)
.name;

export default modalModule;