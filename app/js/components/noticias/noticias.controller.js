(function () {
    'use strict';

    angular.module('UniversidadApp')
        .controller('noticiasController', noticiasController)
        .component('noticias', {
            templateUrl: [function () {
                return 'js/components/noticias/noticias.html';
            }],
            controller: 'noticiasController',
            controllerAs: 'vm', //View Model
            bindings: {}
        });
    
    noticiasController.$inject = ['NoticiasService', 'AuthenticationService', '$q'];

    function noticiasController(noticiasService, authenticationService, $q) {
        var vm = this;
        vm.$onInit = onInit;

        function onInit() {
            vm.noticias = [];
            vm.clasificaciones = [];
            vm.authenticationService = authenticationService;
            initialLoad();
        }

        function initialLoad() {
            var promises = [noticiasService.getNoticias(), noticiasService.getClasificaciones()];
            $q.all(promises).then(function (responses) {
                vm.noticias = responses[0];
                vm.clasificaciones = responses[1];
            })
        }
    }

})();