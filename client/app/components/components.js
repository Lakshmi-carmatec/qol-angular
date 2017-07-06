import angular from 'angular';
import Home from './home/home';
import About from './about/about';
import Uploader from './uploader/uploader';
import Qolform from './qolform/qolform';
import Textform from './textform/textform';
import Testcomp from './testcomp/testcomp';
import Footer from '../common/footer/footer';

let componentModule = angular.module('app.components', [
  Home,
  About,
  Qolform,
  Uploader,
  Textform,
  Testcomp,
  Footer
])

.name;

export default componentModule;
