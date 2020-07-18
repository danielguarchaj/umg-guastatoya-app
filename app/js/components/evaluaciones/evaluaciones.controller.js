(function () {
    'use strict';

    angular.module('UniversidadApp')
        .controller('evaluacionesController', evaluacionesController)
        .component('evaluaciones', {
            templateUrl: [function () {
                return 'js/components/evaluaciones/evaluaciones.html';
            }],
            controller: 'evaluacionesController',
            controllerAs: 'vm', //View Model
            bindings: {}
        });
    
    evaluacionesController.$inject = ['AuthenticationService'];

    function evaluacionesController(authenticationService) {
        var vm = this;
        vm.$onInit = onInit;
        function onInit() {
            vm.authenticationService = authenticationService;
        }
    }

})();