(function () {
    'use strict';

    angular.module('UniversidadApp')
        .factory('NoticiasRepository', NoticiasRepository);

    NoticiasRepository.$inject = ['$http', '$q', 'apiUrl', 'AuthenticationService'];

    function NoticiasRepository($http, $q, apiUrl, authenticationService) {
        var repository = {
            getNoticias: getNoticias,
            getClasificaciones: getClasificaciones
        };

        return repository;

        function getNoticias(clasificacionId) {
            return $http({
                method: 'GET',
                url: clasificacionId ? apiUrl + 'publicaciones?' + 'clasificacion_id=' + clasificacionId : apiUrl + 'publicaciones/',
                headers: {
                    Authorization: 'Bearer ' + authenticationService.sessionData.access
                }
            }).then(function (response) {
                return response;
            }).catch(error);
        }

        function getClasificaciones() {
            return $http({
                method: 'GET',
                url: apiUrl + 'clasificaciones/',
                headers: {
                    Authorization: 'Bearer ' + authenticationService.sessionData.access
                }
            }).then(function (response) {
                return response;
            }).catch(error);
        }

        function error(response) {
            authenticationService.verifyErrorType(response.data)
            return $q.reject(response);
        }

    }

})();