import angular from 'angular';
import uiRouter from 'angular-ui-router';
import ViewCartComponent from './viewcart.component';

let viewCartModule = angular.module('viewcart', [
        uiRouter
    ])

        .config(($stateProvider, $urlRouterProvider) => {
        'ngInject';

$urlRouterProvider.otherwise('/');

$stateProvider
    .state('viewcart', {
        url: '/',
        component: 'viewcart'
    });
})

.component('viewcart', ViewCartComponent)

    .name; // name(string) is the module name

export default viewCartModule;