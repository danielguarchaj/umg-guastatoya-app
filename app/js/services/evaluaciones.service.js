(function () {
    'use strict';
    angular.module('UniversidadApp')
        .service('EvaluacionesService', EvaluacionesService);
    
    EvaluacionesService.$inject = ['EvaluacionesRepository'];

    function EvaluacionesService(EvaluacionesRepository) {
        var service = this;

        service.guardarEvaluacion = guardarEvaluacion;
        service.getCursos = getCursos;
        return service;

        function guardarEvaluacion(evaluacionModel) {
            return EvaluacionesRepository.guardarEvaluacion(evaluacionModel).then(function(response) {
                return response;
            }).catch(function(error) {
                return error;
            });
        }

        function getCursos() {
            return EvaluacionesRepository.getCursos().then(function(response) {
                return response.data;
            }).catch(function(error) {
                return error;
            });
        }

    }

})();