(function () {
    'use strict';

    function novaController($scope, $http, $rootScope) {

        var urlServico = $rootScope.urlServico;

        $scope.pessoa = {};

        $scope.salvar = function () {

            $scope.pessoa.Id = 0;

            $http.post(urlServico, $scope.pessoa)
            .success(function (result, status, headers, config) {
                alert("Sucesso ao salvar a pessoa");
            });
        }
    }

    novaController.$inject = ['$scope', '$http', '$rootScope'];
    app.controller('novaController', novaController);
})();