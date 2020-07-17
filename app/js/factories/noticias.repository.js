(function () {
    'use strict';

    angular.module('UniversidadApp')
        .factory('NoticiasRepository', NoticiasRepository);

    NoticiasRepository.$inject = ['$http', '$q', 'apiUrl'];

    function NoticiasRepository($http, $q, apiUrl) {
        var repository = {
            getNoticias: getNoticias
        };

        return repository;

        function getNoticias() {
            return $http({
                method: 'GET',
                url: apiUrl + 'publicaciones/'
            }).then(function (response) {
                return response;
            }).catch(error);
        }

        function error(response) {
            return $q.reject(response);
        }

    }

})();