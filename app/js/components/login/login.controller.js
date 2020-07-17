(function () {
    'use strict';

    angular.module('UniversidadApp')
        .controller('loginController', loginController)
        .component('login', {
            templateUrl: [function () {
                return 'js/components/login/login.html';
            }],
            controller: 'loginController',
            controllerAs: 'vm', //View Model
            bindings: {}
        });
    
    loginController.$inject = ['AuthenticationService'];

    function loginController(authenticationService) {
        var vm = this;
        vm.$onInit = onInit;

        function onInit() {
            vm.noticias = [];
            vm.login = login;
            vm.credenciales = {
                username: '',
                password: ''
            }
        }

        function login() {
            if (vm.loginForm.$invalid) {
                return;
            }
            authenticationService.getToken(vm.credenciales).then(function (response) {
                console.log(response);
            }).catch(function (error) {
                console.log(error);
            });
        }
    }

})();