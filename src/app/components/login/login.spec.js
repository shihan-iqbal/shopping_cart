// login.spec.js
import LoginModule from './login.module';

describe('Login', () => {
    let $rootScope, $state, $location, $componentController, $compile;

    beforeEach(window.module(LoginModule));

    beforeEach(inject(($injector) => {
        $rootScope = $injector.get('$rootScope');
        $componentController = $injector.get('$componentController');
        $state = $injector.get('$state');
        $location = $injector.get('$location');
        $compile = $injector.get('$compile');
    }));

    describe('Module', () => {
        // routes, injection, naming
        it('login component should be activated when navigates to /login', () => {
            $location.url('/login');
            $rootScope.$digest();
            expect($state.current.component).to.eq('login');
        });
    });

    describe('Controller', () => {
        // controller specs
        let controller;
        beforeEach(() => {
            controller = $componentController('login', {
                $scope: $rootScope.$new()
            });
        });

        it('has a name property', () => {
            expect(controller).to.have.property('name');
        });
    });

    describe('View', () => {
        // view layer specs.
        let scope, template;

        beforeEach(() => {
            scope = $rootScope.$new();
            template = $compile('<login></login>')(scope);
            scope.$apply();
        });

        it('has name in template', () => {
            expect(template.find('h1').html()).to.eq('Found in login.html'); // <h1>Found in {{ $ctrl.name }}.html</h1>
        });

    });

});