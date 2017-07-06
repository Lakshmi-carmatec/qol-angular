import UploaderModule from './uploader';
import UploaderController from './uploader.controller';
import UploaderComponent from './uploader.component';
import UploaderTemplate from './uploader.html';

describe('Uploader', () => {
  let $rootScope, makeController;

  beforeEach(window.module(UploaderModule));
  beforeEach(inject((_$rootScope_) => {
    $rootScope = _$rootScope_;
    makeController = () => {
      return new UploaderController();
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
      expect(UploaderTemplate).to.match(/{{\s?\$ctrl\.name\s?}}/g);
    });
  });

  describe('Component', () => {
    // component/directive specs
    let component = UploaderComponent;

    it('includes the intended template', () => {
      expect(component.template).to.equal(UploaderTemplate);
    });

    it('invokes the right controller', () => {
      expect(component.controller).to.equal(UploaderController);
    });
  });
});
