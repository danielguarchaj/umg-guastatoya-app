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
    
    noticiasController.$inject = ['NoticiasService'];

    function noticiasController(noticiasService) {
        var vm = this;
        vm.$onInit = onInit;

        function onInit() {
            vm.noticias = [];
            getNoticias();
        }

        function getNoticias() {
            noticiasService.getNoticias().then(function (response) {
                vm.noticias = response.data;
            }).catch(function (error) {
                console.log(error);
            });
        }
    }

})();