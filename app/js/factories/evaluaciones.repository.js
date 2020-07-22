(function () {
    'use strict';

    angular.module('UniversidadApp')
        .factory('EvaluacionesRepository', EvaluacionesRepository);

    EvaluacionesRepository.$inject = ['$http', '$q', 'apiUrl', 'AuthenticationService'];

    function EvaluacionesRepository($http, $q, apiUrl, authenticationService) {
        var repository = {
            guardarEvaluacion: guardarEvaluacion,
            getCursos: getCursos
        };

        return repository;

        function guardarEvaluacion(data) {
            return $http({
                method: 'POST',
                url: apiUrl + 'evaluaciones/create/',
                data: data,
                headers: authenticationService.getHeaders()
            }).then(function (response) {
                return response;
            }).catch(error);
        }

        function getCursos() {
            return $http({
                method: 'GET',
                url: apiUrl + 'evaluaciones/cursos/',
                headers: authenticationService.getHeaders()
            }).then(function (response) {
                return response;
            }).catch(error);
        }

        function error(response) {
            return $q.reject(response);
        }

    }

})();