(function () {
    'use strict';

    angular.module('UniversidadApp')
        .controller('noticiaFormController', noticiaFormController)
        .component('noticiaForm', {
            templateUrl: [function () {
                return 'js/components/noticiaForm/noticiaForm.html';
            }],
            controller: 'noticiaFormController',
            controllerAs: 'vm', //View Model
            bindings: {}
        });
    
    noticiaFormController.$inject = ['AuthenticationService'];

    function noticiaFormController(authenticationService) {
        var vm = this;
        vm.$onInit = onInit;
        function onInit() {
            vm.authenticationService = authenticationService;
        }
    }

})();