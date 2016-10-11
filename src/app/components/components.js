import angular from 'angular';
import Login from './login/login.module';
import Home from './viewallproducts/viewallproducts.module';

let componentModule = angular.module('components', [
  
  Login, Home
  
])

.name;

export default componentModule;