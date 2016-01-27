
'use strict';

var app = angular.module('app');

app.controller("CrudController", ['$scope', '$http', '$rootScope', function ($scope, $http, $rootScope) {
    var urlServico = $rootScope.urlServico;

    $scope.pessoas = {};
    $scope.pessoa = {};

    //$scope.load = function () {
        $http.get(urlServico)
               .success(function (result, status, headers, config) {
                   $scope.pessoas = result;
               });
    //};


    $scope.deletar = function (idPessoa) {
        $http.delete(urlServico + "/" + idPessoa)
            .success(function (result) {
                alert(result);
            });
    };

    $scope.Editar = function (idPessoa) {        
        $http.get(urlServico + "/" + idPessoa)
                 .success(function (result, status, headers, config) {
                     $scope.pessoa = result;
                                     
                 });

        console.log("$scope.pessoa", $scope.pessoa);

        //$http.put(urlServico, $scope.pessoa)
        //  .success(function (result, status, headers, config) {
        //      alert("Sucesso ao salvar a pessoa " + $scope.pessoa);
        //  });
    };
}]);


