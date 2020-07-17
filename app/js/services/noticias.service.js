(function () {
    'use strict';
    angular.module('UniversidadApp')
        .service('NoticiasService', NoticiasService);
    
    NoticiasService.$inject = ['NoticiasRepository'];

    function NoticiasService(noticiasRepository) {
        var service = this;

        service.getNoticias = getNoticias;
        service.getClasificaciones = getClasificaciones;

        return service;

        function getNoticias() {
            return noticiasRepository.getNoticias().then(function (response) {
                return response.data;
            }).catch(function (error) {
                return error;
            })
        }

        function getClasificaciones() {
            return noticiasRepository.getClasificaciones().then(function (response) {
                return response.data;
            }).catch(function (error) {
                return error;
            })
        }

    }

})();