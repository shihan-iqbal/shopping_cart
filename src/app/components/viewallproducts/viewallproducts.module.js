import angular from 'angular';
import uiRouter from 'angular-ui-router';
import ViewAllProductsComponent from './viewallproducts.component';

let ViewAllProductsModule = angular.module('viewallproducts', [
        uiRouter
    ])

        .config(($stateProvider, $urlRouterProvider) => {
        'ngInject';

$urlRouterProvider.otherwise('/');

$stateProvider
    .state('viewallproducts', {
        url: '/',
        component: 'viewallproducts'
    });
})

.component('viewallproducts', ViewAllProductsComponent)

    .name; // name(string) is the module name

export default ViewAllProductsModule;