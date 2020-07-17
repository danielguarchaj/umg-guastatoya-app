(function () {
    'use strict';
    angular.module('UniversidadApp')
        .service('AuthenticationService', AuthenticationService);
    
    AuthenticationService.$inject = ['$window', 'AuthenticationRepository'];

    function AuthenticationService($window, AuthenticationRepository) {
        var service = this;

        service.getSessiondata = getSessiondata;
        service.setSessionData = setSessionData;
        service.getToken = getToken;
        service.refreshSession = refreshSession;
        service.currentUser = {};

        return service;


        function setSessionData(data) {
            $window.localStorage.access = data.access;
            $window.localStorage.refresh = data.refresh;
            $window.localStorage.user_id = data.user_id;
        }

        function getSessiondata() {
            return {
                access: $window.localStorage.token,
                refresh: $window.localStorage.refresh,
                user_id: $window.localStorage.user_id
            }
        }

        function getToken(data) {
            return AuthenticationRepository.getToken(data).then(function (response) {
                setSessionData(response.data);
                return response;
            }).catch(function (error) {
                return error;
            })
        }

        function refreshSession() {
            var sessionData = getSessiondata();
            var refreshData = {
                refresh: sessionData.refresh
            };
            return AuthenticationRepository.refreshToken(refreshData).then(function(response) {
                return response;
            }).catch(function(error) {
                return error;
            });
        }



    }

})();