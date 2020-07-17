(function () {
    'use strict';

    angular.module('UniversidadApp')
        .config(config)
        .run(transitions);

    transitions.$inject = ['$transitions', '$state', '$window', 'ValidationsService', 'AuthenticationService'];

    function transitions($transitions, $state, $window, validationsService, authenticationService) {
        $transitions.onBefore({ to: "*" }, function (transition) {
            var stateService = transition.router.stateService;
            var params = transition.params();
            // If the user is logged in
            if ($window.localStorage.token && $wwindow.localStorage.refresh) {
                return authenticationService.getCurrentUser($wwindow.localStorage.refresh).then(function () {
                    
                });

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
            name: 'login',
            url: '/login',
            component: 'login'
        });

        angular.forEach(states, function(state) {
            $stateProvider.state(state);
        });

    }

})();