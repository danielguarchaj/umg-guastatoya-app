(function () {
    'use strict';

    angular.module('UniversidadApp')
        .controller('evaluacionFormController', evaluacionFormController)
        .component('evaluacionForm', {
            templateUrl: [function () {
                return 'js/components/evaluacionForm/evaluacionForm.html';
            }],
            controller: 'evaluacionFormController',
            controllerAs: 'vm', //View Model
            bindings: {}
        });
    
    evaluacionFormController.$inject = ['AuthenticationService', 'EvaluacionesService'];

    function evaluacionFormController(authenticationService, EvaluacionesService) {
        var vm = this;
        vm.$onInit = onInit;
        function onInit() {
            vm.authenticationService = authenticationService;
            vm.evaluacionModel = {
                catedratico: authenticationService.currentUser.id,
                preguntas: [
                    {
                        titulo: '',
                        respuestas: [{
                            titulo: '',
                            correcto: false
                        }]
                    }
                ],
                titulo: '',
                curso: 1
            }

            vm.agregarPregunta = agregarPregunta;
            vm.agregarRespuesta = agregarRespuesta;
            vm.guardarEvaluacion = guardarEvaluacion;
        }

        function agregarPregunta() {
            vm.evaluacionModel.preguntas.push({
                titulo: '',
                respuestas: [{
                    titulo: '',
                    correcto: false
                }]
            })
        }

        function agregarRespuesta(preguntaIndex) {
            vm.evaluacionModel.preguntas[preguntaIndex].respuestas.push({
                titulo: '',
                correcto: false
            })
        }

        function guardarEvaluacion () {
            EvaluacionesService.guardarEvaluacion(vm.evaluacionModel).then(function(response) {
                console.log(response);
            }).catch(function(error) {
                console.log(error);
            })
        }
    }

})();