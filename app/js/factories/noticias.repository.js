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

        var sessionData = authenticationService.getSessionData();

        var headers = {
            Authorization: 'Bearer ' + sessionData.access
        }

        return repository;

        function getNoticias() {
            return $http({
                method: 'GET',
                url: apiUrl + 'publicaciones/',
                headers: headers
            }).then(function (response) {
                return response;
            }).catch(error);
        }

        function getClasificaciones() {
            return $http({
                method: 'GET',
                url: apiUrl + 'clasificaciones/',
                headers: headers
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