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
            vm.authenticationService = authenticationService;
            vm.noticiasService = noticiasService;
            initialLoad();
        }

        function initialLoad() {
            var promises = [noticiasService.getNoticias(null, 'Publicaciones Recientes'), noticiasService.getClasificaciones()];
            $q.all(promises)
        }

    }

})();