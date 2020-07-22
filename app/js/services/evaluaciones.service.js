(function () {
    'use strict';
    angular.module('UniversidadApp')
        .service('EvaluacionesService', EvaluacionesService);
    
    EvaluacionesService.$inject = ['EvaluacionesRepository'];

    function EvaluacionesService(EvaluacionesRepository) {
        var service = this;

        service.guardarEvaluacion = guardarEvaluacion;
        service.getCursos = getCursos;
        service.getEvaluaciones = getEvaluaciones;
        service.getEvaluacion = getEvaluacion;
        service.editarEvaluacion = editarEvaluacion;
        return service;

        function guardarEvaluacion(evaluacionModel) {
            return EvaluacionesRepository.guardarEvaluacion(evaluacionModel).then(function(response) {
                return response;
            }).catch(function(error) {
                return error;
            });
        }

        function editarEvaluacion(evaluacionModel) {
            return EvaluacionesRepository.editarEvaluacion(evaluacionModel).then(function(response) {
                return response;
            }).catch(function(error) {
                return error;
            });
        }

        function getEvaluaciones() {
            return EvaluacionesRepository.getEvaluaciones().then(function(response) {
                return response.data;
            }).catch(function(error) {
                return error;
            });
        }

        function getEvaluacion(evaluacionId) {
            return EvaluacionesRepository.getEvaluacion(evaluacionId).then(function(response) {
                return response.data;
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