import QolformModule from './qolform';
import QolformController from './qolform.controller';
import QolformComponent from './qolform.component';
import QolformTemplate from './qolform.html';

describe('Qolform', () => {
  let $rootScope, makeController;

  beforeEach(window.module(QolformModule));
  beforeEach(inject((_$rootScope_) => {
    $rootScope = _$rootScope_;
    makeController = () => {
      return new QolformController();
    };
  }));

  describe('Module', () => {
    // top-level specs: i.e., routes, injection, naming
  });

  describe('Controller', () => {
    // controller specs
    it('has a name property [REMOVE]', () => { // erase if removing this.name from the controller
      let controller = makeController();
      expect(controller).to.have.property('name');
    });
  });

  describe('Template', () => {
    // template specs
    // tip: use regex to ensure correct bindings are used e.g., {{  }}
    it('has name in template [REMOVE]', () => {
      expect(QolformTemplate).to.match(/{{\s?\$ctrl\.name\s?}}/g);
    });
  });

  describe('Component', () => {
    // component/directive specs
    let component = QolformComponent;

    it('includes the intended template', () => {
      expect(component.template).to.equal(QolformTemplate);
    });

    it('invokes the right controller', () => {
      expect(component.controller).to.equal(QolformController);
    });
  });
});
