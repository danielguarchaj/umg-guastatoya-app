(function () {
    'use strict';
    angular.module('UniversidadApp')
        .service('EvaluacionesService', EvaluacionesService);
    
    EvaluacionesService.$inject = ['EvaluacionesRepository'];

    function EvaluacionesService(EvaluacionesRepository) {
        var service = this;

        service.guardarEvaluacion = guardarEvaluacion;
        return service;

        function guardarEvaluacion(evaluacionModel) {
            EvaluacionesRepository.guardarEvaluacion(evaluacionModel).then(function(response) {
                return response;
            }).catch(function(error) {
                return error;
            });
        }

    }

})();