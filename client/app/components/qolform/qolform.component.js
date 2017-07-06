import template from './qolform.html';
import controller from './qolform.controller';
import modalController from './modal.controller';
import './qolform.scss';

let qolformComponent = {
  bindings: {},
  template,
  controller,
  controllerAs:'modal',
  modalController
};

export default qolformComponent;
