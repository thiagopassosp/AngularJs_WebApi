(function () {
    'use strict';

    function editarController($scope, $routeParams, $http, $rootScope) {

        var urlServico = $rootScope.urlServico;

        $scope.pessoa = {};

        var id = $routeParams.id;

        $http.get(urlServico + "/" + id)
                 .success(function (result, status, headers, config) {
                     $scope.pessoa = result;
                 });

        $scope.salvar = function () {

            $http.put(urlServico, $scope.pessoa)
              .success(function (result, status, headers, config) {
                  alert("Sucesso ao salvar a pessoa");
              });
        };
    }

    editarController.$inject = ['$scope', '$routeParams',
     '$http', '$rootScope'];
    app.controller('editarController', editarController);
})();