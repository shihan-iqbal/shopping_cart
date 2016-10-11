import angular from 'angular';
import uiRouter from 'angular-ui-router';
import AddProductComponent from './addproduct.component';

let addProductModule = angular.module('addproduct', [
        uiRouter
    ])

        .config(($stateProvider, $urlRouterProvider) => {
        'ngInject';

$urlRouterProvider.otherwise('/');

$stateProvider
    .state('addproduct', {
        url: '/',
        component: 'addproduct'
    });
})

.component('addproduct', AddProductComponent)

    .name; // name(string) is the module name

export default addProductModule;