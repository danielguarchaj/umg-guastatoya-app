(function () {
    'use strict';

    angular.module('UniversidadApp')
        .config(config)
        .run(transitions);

    transitions.$inject = ['$transitions', '$state', '$window', 'ValidationsService', 'AuthenticationService'];

    function transitions($transitions, $state, $window, validationsService, authenticationService) {
        var targetState = {
            to: function (state) {
                    return state.name === 'noticia' 
                        || state.name === 'evaluaciones'
                        || state.name === 'evaluacion';
            }
        }

        $transitions.onStart(targetState, function(transition) {
            // If the user is logged in
            if (authenticationService.validSession()) {
                return authenticationService.refreshSession();
            } else {
                authenticationService.logout();
                return;
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
            name: 'noticia',
            url: '/noticia/:id',
            component: 'noticiaForm',
            params: {
                id: {type: 'int', value: null}
            },
            resolve: {
                noticia: function ($stateParams, NoticiasService) {
                    if ($stateParams.id) {
                        return NoticiasService.getNoticia($stateParams.id);
                    }
                }
            }
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

        states.push({
            name: 'evaluacion',
            url: '/evaluacion',
            component: 'evaluacionForm'
        });

        angular.forEach(states, function(state) {
            $stateProvider.state(state);
        });

    }

})();