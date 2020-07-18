(function () {
    'use strict';

    angular.module('UniversidadApp')
        .config(config)
        .run(transitions);

    transitions.$inject = ['$transitions', '$state', '$window', 'ValidationsService', 'AuthenticationService'];

    function transitions($transitions, $state, $window, validationsService, authenticationService) {
        var targetState = {
            to: function (state) {
                    return state.name === 'noticias'
            }
        }
        $transitions.onBefore(targetState, function (transition) {
            // If the user is logged in
            if (authenticationService.validSession()) {
                return authenticationService.refreshSession();
            } else {
                authenticationService.logout();
            }
        });

    }
    config.$inject = ['$stateProvider'];
    
    function config($stateProvider) {
        var states = [];

        states.push({
            name: 'noticias',
            url: '/',
            component: 'noticias'
        });

        states.push({
            name: 'noticias.crear',
            url: 'crear',
            component: 'noticiaForm'
        });

        states.push({
            name: 'login',
            url: '/login',
            component: 'login'
        });

        states.push({
            name: 'evaluaciones',
            url: '/evaluaciones',
            component: 'evaluaciones'
        });

        angular.forEach(states, function(state) {
            $stateProvider.state(state);
        });

    }

})();