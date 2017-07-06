import TextformModule from './textform';
import TextformController from './textform.controller';
import TextformComponent from './textform.component';
import TextformTemplate from './textform.html';

describe('Textform', () => {
  let $rootScope, makeController;

  beforeEach(window.module(TextformModule));
  beforeEach(inject((_$rootScope_) => {
    $rootScope = _$rootScope_;
    makeController = () => {
      return new TextformController();
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
      expect(TextformTemplate).to.match(/{{\s?\$ctrl\.name\s?}}/g);
    });
  });

  describe('Component', () => {
    // component/directive specs
    let component = TextformComponent;

    it('includes the intended template', () => {
      expect(component.template).to.equal(TextformTemplate);
    });

    it('invokes the right controller', () => {
      expect(component.controller).to.equal(TextformController);
    });
  });
});
