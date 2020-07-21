(function () {
    'use strict';

    angular.module('UniversidadApp')
        .controller('noticiaFormController', noticiaFormController)
        .component('noticiaForm', {
            templateUrl: [function () {
                return 'js/components/noticiaForm/noticiaForm.html';
            }],
            controller: 'noticiaFormController',
            controllerAs: 'vm', //View Model
            bindings: {
                noticia: '<'
            }
        });
    
    noticiaFormController.$inject = ['AuthenticationService', 'NoticiasService', '$q', '$scope', 'apiUrl', '$window', '$stateParams'];

    function noticiaFormController(authenticationService, noticiasService, $q, $scope, apiUrl, $window, $stateParams) {
        var vm = this;
        vm.$onInit = onInit;
        function onInit() {
            vm.authenticationService = authenticationService;
            vm.noticiasService = noticiasService;
            vm.guardarNoticia = guardarNoticia;
            initialLoad();
        }

        function setInitialModel () {
            vm.noticiaModel = {
                titulo: '',
                contenido: '',
                clasificacion: null,
                imagen: null,
                autor: authenticationService.currentUser.id
            }
            if (vm.noticia) {
                vm.noticiaModel.titulo = vm.noticia.titulo;
                vm.noticiaModel.contenido = vm.noticia.contenido;
                vm.noticiaModel.clasificacion = vm.noticia.clasificacion;
            }
        }

        function initialLoad() {
            setInitialModel()
            var promises = [noticiasService.getClasificaciones()];
            $q.all(promises)
        }

        function guardarNoticia() {
            if (vm.noticiaForm.$invalid) {
                return;
            }
            vm.noticiaModel.imagen = $scope.file;
            var formData = noticiasService.getFormData(vm.noticiaModel);
            jQuery.ajax({
                url: apiUrl + 'publicaciones/',
                data: formData,
                processData: false,
                contentType: false,
                type: 'POST',
                headers: {
                    Authorization: 'Bearer ' + authenticationService.sessionData.access
                },
                success: function(response){
                    if (response.id) {
                        alert('Publicacion creada con exito');
                        $window.location.reload();
                    }
                },
                error: function(error) {
                    alert('Error al crear la publicacion, intente de nuevo.');
                }
            });
        }
    }

})();