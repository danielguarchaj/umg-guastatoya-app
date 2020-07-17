(function () {
    'use strict';
    angular.module('UniversidadApp')
        .service('NoticiasService', NoticiasService);
    
    NoticiasService.$inject = ['NoticiasRepository'];

    function NoticiasService(noticiasRepository) {
        var service = this;

        service.getNoticias = getNoticias;

        return service;

        function getNoticias() {
            return noticiasRepository.getNoticias().then(function (response) {
                return response;
            }).catch(function (error) {
                return error;
            })
        }

    }

})();